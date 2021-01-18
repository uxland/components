import './components/confirm-component';
import { invariant } from '@uxland/uxl-utilities';
declare type Localizer = (key: string, ...args: any[]) => string;

export interface ConfirmOptions<T = any> {
  title?: string;
  titleArgs?: Object;
  message?: string;
  messageArgs?: Object;
  showCloseButton?: boolean;
  type?: ConfirmType;
  fullScreen?: boolean;
  styles?: ConfirmStyles;
  acceptLabel?: string;
  cancelLabel?: string;
  modal?: boolean;
  headerDismiss?: boolean;
  withoutActions?: boolean;
  htmlTag?: string;
  htmlUrl?: string;
  containerId?: string;
  classifiers?: string;
  model?: T;
}

export type ConfirmType = 'danger' | 'warning' | 'info' | 'success';
export interface ConfirmStyles {
  backgroundColor?: string;
  textColor?: string;
  closeIconColor?: string;
  acceptColor?: string;
  actionsBackgroundColor?: string;
  headerBackgroundColor?: string;
  width?: string;
  height?: string;
}

export const doConfirm = async (options: ConfirmOptions, localizer?: Localizer): Promise<any> => {
  invariant(options.message || options.htmlTag, 'message or htmlTag options properties are required');
  return new Promise<any>(async resolve => {
    const componentName = 'confirm-component';

    if (localizer && options.title) options = { ...options, title: localizer(options.title, { ...options.titleArgs }) };

    if (localizer && options.message) options = { ...options, message: localizer(options.message, { ...options.messageArgs }) };

    if (options.htmlTag && options.htmlUrl) await import(options.htmlUrl);

    const component: any = document.body.appendChild(document.createElement(componentName));

    if (options.containerId) component.id = options.containerId;

    component.options = options;
    let result = component._updatePromise;

    result.then(() => {
      if (options.htmlTag) {
        let customComponent = component.shadowRoot.querySelector(`#__custom-element__`);
        customComponent.model = options.model;
      }
      component.addEventListener('closed', closeComponent);
      component.options && component.show();
    });

    function closeComponent(e) {
      component.remove();
      resolve(e.detail);
    }
  });
};
