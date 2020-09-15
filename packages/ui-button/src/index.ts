import { html, svg, TemplateResult } from "lit-html";
import { CoreConfig } from "@uxland/ui-core";
import { unsafeSVG } from "lit-html/directives/unsafe-svg";

import "elix/define/Button";
import {
  css,
  CSSResult,
  customElement,
  eventOptions,
  LitElement,
  property,
  PropertyValues,
  query,
  unsafeCSS,
} from "lit-element";
import styles from "./styles.scss";

export interface ButtonConfig extends CoreConfig {
  label: string;
  icon?: string;
  raised?: boolean;
  disabled?: boolean;
  outlined?: boolean;
  onClick?: () => void;
}

// export default class UxlButton extends ElixButton {}
// customElements.define('uxl-button', UxlButton);

@customElement("uxl-button")
export default class UxlButton extends LitElement {
  constructor() {
    super();
    // this.addEventListener('click', this.handleClick.bind(this));
  }

  @property({ type: String })
  label: string;

  @property({ type: String })
  icon: string;

  @property({ type: Boolean, reflect: true })
  disabled: boolean;

  @property({ type: Boolean, reflect: true })
  raised: boolean;

  @property({ type: Boolean, reflect: true })
  outlined: boolean;

  elixButton: HTMLElement;

  attributeChangedCallback(name: string, oldVal: any, newVal: any) {
    if (!this.elixButton)
      this.elixButton = this.shadowRoot.querySelector("elix-button");
    if (newVal != null || newVal != undefined)
      this.elixButton?.setAttribute(name, newVal);
    else this.elixButton?.removeAttribute(name);
    super.attributeChangedCallback(name, oldVal, newVal);
  }

  render(): TemplateResult {
    return html`<elix-button
      id="elix-button"
      ?disabled="${this.disabled}"
      ?raised="${this.raised}"
      ?outlined="${this.outlined}"
    >
      ${this.icon && this.icon != "undefined"
        ? html`${unsafeSVG(this.icon)}<span>${this.label}</span>`
        : html`${this.label}`}
    </elix-button>`;
  }

  static get styles(): CSSResult {
    return css`
      ${unsafeCSS(styles)}
    `;
  }
}
