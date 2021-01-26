import {
  css,
  customElement,
  html,
  LitElement,
  property,
  unsafeCSS,
} from "lit-element";
import { style as styles } from "./styles-css";
import { template } from "./template";
import { TemplateResult } from "lit-html";
import { CoreConfig } from "@uxland/ui-core";

export interface IconConfig extends CoreConfig {
  icon?: TemplateResult;
  name?: string;
}

/**
 * Icon component
 * @element uxl-icon
 *
 *
 * @cssprop --icon-width - Icon Width
 * @cssprop --icon-height - Icon Height
 * @cssprop --icon-color - Icon Color
 */
@customElement("uxl-icon")
export class UxlIcon extends LitElement {
  /**
   * Properties
   */

  @property()
  public svg: TemplateResult;

  @property()
  public icon: string;

  render() {
    return html`${template(this)}`;
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }
}
