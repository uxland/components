import { CoreConfig } from "@uxland/ui-core";
import "@uxland/ui-icon";
import "elix/define/Button";
import { CSSResult, customElement, LitElement, property } from "lit-element";
import { html, TemplateResult } from "lit-html";
import { styles } from "./styles";

export interface ButtonConfig extends CoreConfig {
  label: string;
  icon?: string;
  active?: boolean;
  raised?: boolean;
  disabled?: boolean;
  outlined?: boolean;
}

/**
 * Button component
 * @element uxl-button
 *
 * @fires active-changed - Fires whenever active property changes
 * @fires disabled-changed - Fires whenever disabled property changes
 *
 * @cssprop --uxl-button-background-color - Button background color
 * @cssprop --uxl-button-border-color - Button border color
 * @cssprop --uxl-button-icon-color - Button icon color
 */
@customElement("uxl-button")
export default class UxlButton extends LitElement {
  constructor() {
    super();
  }

  /**
   * Button text content
   */
  @property({ type: String })
  label: string;

  /**
   * Button icon content. Uses `uxl-icon` underneath so icon must be defined with format `iconSetId:iconId`
   */
  @property({ type: String })
  icon: string;

  /**
   * If true, the button is a toggle and is currently in the active state.
   */
  @property({ type: Boolean, reflect: true })
  active: boolean;

  /**
   * Disables button interactions
   */
  @property({ type: Boolean, reflect: true })
  disabled: boolean;

  /**
   * Applies button elevation and shadow styling
   */
  @property({ type: Boolean, reflect: true })
  raised: boolean;

  /**
   * Outlines button with defined border
   */
  @property({ type: Boolean, reflect: true })
  outlined: boolean;

  private elixButton: HTMLElement;

  attributeChangedCallback(name: string, oldVal: any, newVal: any) {
    if (!this.elixButton)
      this.elixButton = this.shadowRoot.querySelector("elix-button");
    if (newVal != null || newVal != undefined)
      this.elixButton?.setAttribute(name, newVal);
    else this.elixButton?.removeAttribute(name);
    if (name == "active" || name == "disabled")
      this.dispatchEvent(
        new CustomEvent(`${name}-changed`, {
          detail: { [name]: newVal == "" ? true : false },
        })
      );

    super.attributeChangedCallback(name, oldVal, newVal);
  }

  render(): TemplateResult {
    return html`<elix-button
      id="elix-button"
      ?active="${this.active}"
      ?disabled="${this.disabled}"
      ?raised="${this.raised}"
      ?outlined="${this.outlined}"
    >
      ${this.icon && this.icon != "undefined"
        ? html`<uxl-icon icon=${this.icon}></uxl-icon
            ><span>${this.label}</span>`
        : html`${this.label}`}
    </elix-button>`;
  }

  static get styles(): CSSResult {
    return styles;
  }
}