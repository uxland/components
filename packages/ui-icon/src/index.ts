import {
  css,
  CSSResult,
  customElement,
  html,
  LitElement,
  property,
  PropertyValues,
  TemplateResult,
} from "lit-element";
import { unsafeSVG } from "lit-html/directives/unsafe-svg";
import "@uxland/ui-iconset";
import { CoreConfig } from "@uxland/ui-core";
import { styles } from "./styles";

export interface IconConfig extends CoreConfig {
  src?: string;
  icon?: string;
}

/**
 * Icon component
 * @element uxl-icon
 *
 * @cssprop --uxl-icon-size - Icon size (width & height)
 * @cssprop --uxl-icon-color - Icon color
 */
@customElement("uxl-icon")
export default class UxlIcon extends LitElement {
  constructor() {
    super();
  }

  render(): TemplateResult {
    return html`${unsafeSVG(this.src)}`;
  }

  static get styles(): CSSResult {
    return styles;
  }

  @property({ type: String })
  private src: string;

  /**
   * Use `icon` to pass icon id using format of `iconSetId:iconId`
   */
  @property({ type: String })
  icon: string;

  setSrcByIcon(context) {
    this.src = (window as any).UxlIconSet.requestAvailability().getIcon(
      this.icon,
      context
    );
    return this.src;
  }

  attributeChangedCallback(
    name: string,
    old: string | null,
    value: string | null
  ) {
    super.attributeChangedCallback(name, old, value);

    if (name == "icon") this.setSrcByIcon(this);

    // changedProperties.forEach((oldValue, propName) => {
    //   if (propName == 'icon') {
    //     if (this[propName]) this.setSrcByIcon(this);
    //     else this.src = null;
    //   }
    //   if (propName == 'src') {
    //     // look this up in the registry
    //     if (this[propName]) this.shadowRoot.querySelector('image').setAttribute('xlink:href', this[propName]);
    //   }
    // });
  }
}
