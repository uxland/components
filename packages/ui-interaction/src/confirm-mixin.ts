import { dedupingMixin, MixinFunction } from '@uxland/uxl-utilities';
import { Constructor, LitElement } from 'lit-element';
import { property } from 'lit-element/lib/decorators';

export interface ConfirmMixinBase<T = any> extends LitElement {
  model: T;
  close(result: boolean): void;
  canAccept(): Promise<boolean>;
  accept(): Promise<void>;
}

export interface IConfirmMixin<T = any, Model = any> extends ConfirmMixinBase<Model> {
  new (): IConfirmMixin<T, Model> & T;
}

export interface ConfirmMixinConstructor<T = any> extends LitElement {
  new (...args: any[]): ConfirmMixinBase<T> & LitElement;
}

export type ConfirmMixinFunction<T = any> = MixinFunction<ConfirmMixinConstructor<T>>;

export const ConfirmMixin = dedupingMixin(<T = any>(superClass: Constructor<LitElement>) => {
  class ConfirmMixinClass extends superClass implements ConfirmMixinBase<T> {
    @property()
    model: T;
    close(result: boolean) {
      this.dispatchEvent(new CustomEvent('closed', { detail: result }));
    }
    canAccept(): Promise<boolean> {
      return Promise.resolve(true);
    }
    accept(): Promise<void> {
      return Promise.resolve();
    }
  }
  return <any>ConfirmMixinClass;
});
