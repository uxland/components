import {
  css,
  html,
  LitElement,
  unsafeCSS,
  customElement,
  query,
  property,
} from "lit-element";
import { ConfirmOptions, ConfirmStyles } from "../confirm";
import "@polymer/paper-dialog/paper-dialog";
import "@material/mwc-button/mwc-button";
import "@material/mwc-icon-button/mwc-icon-button";
import styles from "./confirm-component-styles.scss";
import { IConfirmMixin } from "../confirm-mixin";
import { nothing } from "lit-html";
import { interactionIcons } from "../icons";

const renderCloseButton = (props: ConfirmComponent) =>
  props.options.showCloseButton
    ? html`
        <mwc-icon-button @click="${props._close}" id="close-btn"
          >${interactionIcons.close}</mwc-icon-button
        >
      `
    : nothing;

const renderActions = (props: ConfirmComponent) =>
  !props.options.withoutActions
    ? html`
        <div id="actions" part="actions">
          <mwc-button @click="${props._cancel}" id="cancel-btn"
            >${props.options.cancelLabel}</mwc-button
          >
          <mwc-button @click="${props._accept}" id="accept-btn" autofocus
            >${props.options.acceptLabel}</mwc-button
          >
        </div>
      `
    : nothing;

const renderMessage = (options: ConfirmOptions) =>
  html` <div id="message">${options.message || ""}</div> `;

const renderCustomContent = (
  options: ConfirmOptions,
  props: ConfirmComponent
) => {
  if (options.htmlTag) {
    const component = document.createElement(options.htmlTag);
    component.setAttribute("id", "__custom-element__");
    component.addEventListener(
      "closed",
      props.componentCloseRequest.bind(props)
    );
    return html` ${component} `;
  }
  return nothing;
};

const renderContent = (options: ConfirmOptions, props: ConfirmComponent) =>
  options.message
    ? renderMessage(options)
    : renderCustomContent(options, props);

const renderDialog = (props: ConfirmComponent) => html`
  <paper-dialog
    id="dialog"
    type="${props.options.type}"
    ?fullScreen="${props.options.fullScreen}"
    ?modal="${props.options.modal}"
    part="dialog"
  >
    <div @click="${props._dismiss}" id="header" part="header">
      <h2 part="title">${props.options.title || ""}</h2>
      ${renderCloseButton(props)}
    </div>
    <div id="content" part="content">
      <paper-dialog-scrollable class="${props.options.classifiers}">
        ${renderContent(props.options, props)}
      </paper-dialog-scrollable>
      ${renderActions(props)}
    </div>
  </paper-dialog>
`;

const getOptionsStyles = (options: ConfirmOptions) =>
  options && options.styles ? options.styles : {};

@customElement("confirm-component")
export class ConfirmComponent extends LitElement {
  render() {
    return html` ${renderDialog(this)} `;
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  updated(changedProperties) {
    const styles: ConfirmStyles = getOptionsStyles(
      this.options ? this.options : undefined
    );
    styles.textColor &&
      this.dialog &&
      this.dialog.style.setProperty("--paper-dialog-color", styles.textColor);
    styles.backgroundColor &&
      this.dialog &&
      this.dialog.style.setProperty(
        "--paper-dialog-background-color",
        styles.backgroundColor
      );
    styles.closeIconColor &&
      this.closeButton &&
      this.closeButton.style.setProperty("color", styles.closeIconColor);
    styles.acceptColor &&
      this.acceptButton &&
      this.acceptButton.style.setProperty(
        "--mdc-theme-primary",
        styles.acceptColor
      );
    styles.headerBackgroundColor &&
      this.header &&
      this.header.style.setProperty(
        "background-color",
        styles.headerBackgroundColor
      );
    styles.actionsBackgroundColor &&
      this.actionsContainer &&
      this.actionsContainer.style.setProperty(
        "background-color",
        styles.actionsBackgroundColor
      );
    styles.width &&
      this.dialog &&
      this.dialog.style.setProperty("width", styles.width);
    styles.height &&
      this.dialog &&
      this.dialog.style.setProperty("height", styles.height);
    styles.height &&
      this.content &&
      this.content.style.setProperty("height", "calc(100% - 64px)");
  }

  @property({ reflect: true, attribute: true, type: Object })
  options: ConfirmOptions;

  @query("#dialog")
  dialog: any;

  _cancel(e) {
    this.close(false);
  }

  _close(e) {
    this.close(false);
  }

  _accept(e) {
    this.close(true);
  }

  _dismiss(e) {
    this.options.headerDismiss && this.close(false);
  }

  componentCloseRequest(e: CustomEvent) {
    this.close(e.detail);
  }

  async close(result: boolean) {
    if (result) {
      const component = this.getCustomComponent();
      if (component && component.canAccept) {
        const canAccept = await component.canAccept();
        if (!canAccept) return;
        if (component.accept) await component.accept();
      }
    }
    this.dialog.close();
    this.dispatchEvent(new CustomEvent("closed", { detail: result }));
  }

  getCustomComponent(): IConfirmMixin {
    return this.shadowRoot.querySelector(
      "#__custom-element__"
    ) as IConfirmMixin;
  }

  @query("#close-btn")
  closeButton: HTMLElement;

  @query("#accept-btn")
  acceptButton: HTMLElement;

  @query("#actions")
  actionsContainer: HTMLElement;

  @query("#header")
  header: HTMLElement;

  @query("#content")
  content: HTMLElement;

  show() {
    this.dialog.open();
  }
}
