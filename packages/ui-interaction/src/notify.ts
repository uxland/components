declare type Localizer = (key: string, ...args: any[]) => string;
import "./components/notify-component";
import { invariant } from "@uxland/uxl-utilities";
export interface NotifyOptions<T = any> {
  message?: string;
  messageArgs?: Record<string, unknown>;
  htmlTag?: string;
  htmlUrl?: string;
  containerId?: string;
  delay?: number;
  showCloseButton?: boolean;
  type?: NotifyType;
  position?: NotifyPosition;
  styles?: NotifyStyles;
  classifiers?: NofifyClassifiers;
  model?: T;
}

export interface NotifyStyles {
  backgroundColor?: string;
  textColor?: string;
  iconColor?: string;
}
export type NotifyPosition = "bottom" | "center" | "top";
export type NotifyType = "danger" | "warning" | "info" | "success";
export type NofifyClassifiers = "fit-bottom";

export const notify = async (
  options: NotifyOptions,
  localizer?: Localizer
): Promise<any> => {
  invariant(
    options.message || options.htmlTag,
    "message or htmlTag options properties are required"
  );
  //@ts-ignore
  return new Promise<any>(async (resolve) => {
    const componentName = "notify-component";

    if (localizer && options.message)
      options = {
        ...options,
        message: localizer(options.message, { ...options.messageArgs }),
      };

    if (options.htmlTag && options.htmlUrl) await import(options.htmlUrl);

    const component: any = document.body.appendChild(
      document.createElement(componentName)
    );

    if (options.containerId) component.id = options.containerId;

    component.options = options;
    const result = component._updatePromise;

    result.then(() => {
      if (options.htmlTag) {
        const customComponent = component.shadowRoot.querySelector(
          `#__custom-element__`
        );
        customComponent.model = options.model;
      }
      component.addEventListener("closed", closeComponent);
      component.options && component.show();
    });

    function closeComponent(e) {
      component.remove();
      resolve(e.detail);
    }
  });
};