import { dedupingMixin, MixinFunction } from '@uxland/uxl-utilities';
import { Constructor, LitElement } from 'lit-element';
import { property } from 'lit-element/lib/decorators';

export interface NotifyMixinBase<T = any> extends LitElement {
  model: T;
  close(): void;
}

export interface INotifyMixin<T = any, Model = any> extends NotifyMixinBase<Model> {
  new (): INotifyMixin<T, Model> & T;
}

export interface NotifyMixinConstructor<T = any> extends LitElement {
  new (...args: any[]): NotifyMixinBase<T> & LitElement;
}

export type NotifyMixinFunction<T = any> = MixinFunction<NotifyMixinConstructor<T>>;

export const NotifyMixin = dedupingMixin(<T = any>(superClass: Constructor<LitElement>) => {
  class NotifyMixinClass extends superClass implements NotifyMixinBase<T> {
    @property()
    model: T;
    close() {
      this.dispatchEvent(new CustomEvent('closed'));
    }
  }
  return <any>NotifyMixinClass;
});
