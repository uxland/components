import {
  customElement,
  LitElement,
  property,
  CSSResult,
  css,
  unsafeCSS,
  TemplateResult,
  html,
} from "lit-element";
import styles from "./styles.scss";

@customElement("uxl-dummy")
export class UxlDummy extends LitElement {
  @property()
  reactive = false;

  render(): TemplateResult {
    return html`reactive: ${this.reactive}`;
  }

  static get styles(): CSSResult {
    return css`
      ${unsafeCSS(styles)}
    `;
  }
}
