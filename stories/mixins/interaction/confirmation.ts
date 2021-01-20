import { ConfirmMixin } from "@uxland/ui-interaction";
import { customElement, html, LitElement, TemplateResult } from "lit-element";

//@ts-ignore
@customElement("confirmation-dialog")
export class ConfirmationDialog extends ConfirmMixin(LitElement) {
  render(): TemplateResult {
    return html`custom-dialog`;
  }
}
