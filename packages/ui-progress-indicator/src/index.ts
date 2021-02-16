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

export type ProgressType = "circular" | "linear" | "bouncing";

/**
 * Progress indicator component
 * @element uxl-progress-indicator
 *
 * @prop type - Progress indicator type
 * @prop text - a helper text to show under circular type progress
 *
 * @cssprop --progress-color - Color for spinner and bouncing. Default #009688
 * @cssprop --spinner-stroke - Spinner stroke width. Default 3px
 * @cssprop --spinner-width - Spinner width. Default 30px
 * @cssprop --spinner-height - Spinner height. Default 30px
 * @cssprop --spinner-background-color - Spinner container background color. Default transparent
 * @cssprop --title-color - Spinner title color. Default rgba(0, 0, 0, 0.87)
 * @cssprop --title-font-size - Spinner title font-size. Default 1rem
 * @cssprop --title-font-weight - Spinner title weigth. Default light
 * @cssprop --bouncing-ball-width - Width of bouncing ball. Default 10px
 * @cssprop --bouncing-ball-height - Height of bouncing ball. Default 10px
 * @cssprop --linear-width - Width of linear progress. Default 100%
 * @cssprop --linear-color - RGB color of linear progress. Don't pass tgb function, only 3 args. Default 0, 150, 136
 */
@customElement("uxl-progress-indicator")
export class UxlProgressIndicator extends LitElement {
  /**
   * Properties
   */

  @property()
  public type: ProgressType;

  @property()
  public text: string;

  render() {
    return html`${template(this)}`;
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }
}
