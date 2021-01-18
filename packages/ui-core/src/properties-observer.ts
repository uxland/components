import { Constructor, LitElement, notEqual, PropertyValues } from "lit-element";
import { pipe, defaultTo } from "ramda";

const getPropertyComponentComparer = (name: PropertyKey, component: any) =>
  component.constructor._classProperties
    ? component.constructor._classProperties.get(name).hasChanged
    : undefined;
const comparer = pipe(getPropertyComponentComparer, defaultTo(notEqual));

export const propertiesObserver = <T extends Constructor<LitElement>>(
  superClass: T
): T & Constructor<LitElement> => {
  class PropertiesObserverMixin extends superClass {
    updated(changedProperties: PropertyValues) {
      super.updated(changedProperties);
      changedProperties.forEach((oldValue, propName) => {
        if (comparer(propName, this)(this[propName], oldValue)) {
          if (this[`${String(propName)}Changed`])
            this[`${String(propName)}Changed`](this[propName], oldValue);
        }
      });
    }
    requestUpdate(name: any, oldValue: unknown) {
      const result = super.requestUpdate
        ? super.requestUpdate(name, oldValue)
        : Promise.resolve(null);
      if (comparer(name, this)(this[name], oldValue)) {
        if (this[`${String(name)}Changed`])
          this[`${String(name)}Changed`](this[name], oldValue);
      }

      return result;
    }
  }
  return PropertiesObserverMixin;
};
