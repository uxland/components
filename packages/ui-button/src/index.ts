import { html, TemplateResult } from "lit-html";
import { CoreConfig } from "@uxland/ui-core";

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
  raised: boolean;
  disabled: boolean;
  outlined: boolean;
}

// export default class UxlButton extends ElixButton {}
// customElements.define('uxl-button', UxlButton);

@customElement("uxl-button")
export default class UxlButton extends LitElement {
  constructor() {
    super();
    // this.addEventListener('click', this.handleClick.bind(this));
  }

  @property({ type: String, reflect: true })
  label: string;

  @property({ type: Boolean, reflect: true })
  disabled: boolean;

  @property({ type: Boolean, reflect: true })
  raised: boolean;

  /**
   * `outlined` is an exclusive property, meaning that it cannot be combined with `raised`
   */
  @property({ type: Boolean, reflect: true })
  outlined: boolean;

  elixButton: HTMLElement;

  attributeChangedCallback(name: string, oldVal: any, newVal: any) {
    console.log(name);
    if (!this.elixButton)
      this.elixButton = this.shadowRoot.querySelector("elix-button");
    if (name != "label") {
      if (newVal != null && newVal != false)
        this.elixButton?.setAttribute(name, newVal);
      else this.elixButton?.removeAttribute(name);
    }
    super.attributeChangedCallback(name, oldVal, newVal);
  }

  render(): TemplateResult {
    return html`<elix-button
      id="elix-button"
      ?disabled="${this.disabled}"
      ?raised="${this.raised}"
      ?outlined="${this.outlined}"
    >
      ${this.label}
    </elix-button>`;
  }

  static get styles(): CSSResult {
    return css`
      ${unsafeCSS(styles)}
    `;
  }
}
// //@ts-ignore
// @customElement('uxl-button')
// export default class Button extends ElixButton {
//   constructor() {
//     super();
//   }

//   @property()
//   label: string;

//   @property()
//   onClick: () => void;

//   @property()
//   disabled: boolean;

//   @property()
//   raised: boolean;

//   // render(): TemplateResult {
//   //   return html`<elix-button
//   //     class="custom-btn"
//   //     @click="${this.onClick}"
//   //     ?raised=${this.raised}
//   //     ?disabled="${this.disabled}"
//   //   >
//   //     ${this.label}
//   //   </elix-button>`;
//   // }

//   // static get styles(): CSSResult {
//   //   return css`
//   //     ${unsafeCSS(styles)}
//   //   `;
//   // }
// }
