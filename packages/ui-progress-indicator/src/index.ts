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
import { CoreConfig } from "@uxland/ui-core";

export interface ProgressIndicatorConfig extends CoreConfig {
  type: ProgressType;
}

export type ProgressType = "circular" | "linear";

/**
 * Progress indicator component
 * @element uxl-progress-indicator
 *
 * @prop svg - Svg to render
 * @prop icon - icon name to use default icons
 *
 * @cssprop --icon-size - Icon height and width
 * @cssprop --icon-color - Icon Color
 */
@customElement("uxl-progress-indicator")
export class UxlProgressIndicator extends LitElement {
  /**
   * Properties
   */

  @property()
  public type: ProgressType;

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
