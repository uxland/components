import {
  css,
  html,
  LitElement,
  unsafeCSS,
  customElement,
  query,
  property,
} from "lit-element";
import "@material/mwc-icon-button/mwc-icon-button";
import "@polymer/paper-toast/paper-toast.js";
// import styles from "./notify-component-styles.scss";
import { style as styles } from "./notify-component-styles-css";
import { interactionIcons } from "../icons";
import { NotifyOptions } from "../notify";

const renderCloseButton = (props: NotifyComponent) =>
  props.options.showCloseButton
    ? html`
        <mwc-icon-button
          @click="${props.closeToast}"
          id="action-btn"
          class="close-btn ${props.options.classifiers}"
        >
          ${interactionIcons.close}
        </mwc-icon-button>
      `
    : html``;

const renderCustomContent = (props: NotifyComponent) => {
  if (props.options.htmlTag) {
    const component = document.createElement(props.options.htmlTag);
    component.setAttribute("id", "__custom-element__");
    component.addEventListener("close", props.close);
    return html` ${component} `;
  }
};

const renderContent = (props: NotifyComponent) =>
  props.options.message ? renderCloseButton(props) : renderCustomContent(props);

const renderToast = (props: NotifyComponent) => html`
  <paper-toast
    id="toast"
    part="toast"
    class="${props.options.classifiers}"
    position="${props.options.position}"
    .duration="${props.options.delay}"
    type="${props.options.type}"
    @iron-overlay-closed="${props.toastClosed}"
    .text="${props.options.message || ""}"
  >
    ${renderContent(props)}
  </paper-toast>
`;

const getOptionsStyles = (options: NotifyOptions) =>
  options && options.styles ? options.styles : {};

@customElement("notify-component")
export class NotifyComponent extends LitElement {
  render() {
    return html` ${renderToast(this)} `;
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }

  updated(changedProps) {
    const styles = getOptionsStyles(
      changedProps ? changedProps.options : undefined
    );
    styles.iconColor &&
      this.closeButton &&
      this.closeButton.style.setProperty(
        "--iron-icon-fill-color",
        styles.iconColor
      );
    styles.textColor &&
      this.toast &&
      this.toast.style.setProperty("--paper-toast-color", styles.textColor);
    styles.backgroundColor &&
      this.toast &&
      this.toast.style.setProperty(
        "--paper-toast-background-color",
        styles.backgroundColor
      );
  }

  @property({ reflect: true, attribute: true, type: Object })
  options: NotifyOptions;

  toastClosed(e) {
    this.dispatchEvent(new CustomEvent("closed"));
  }

  closeToast(e) {
    this.toast.close();
  }

  @query("#toast")
  toast: any;

  @query("#action-btn")
  closeButton: HTMLElement;

  show() {
    this.toast.show();
  }

  close() {
    this.toast.close();
  }
}
