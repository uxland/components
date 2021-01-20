import { ConfirmMixin } from "@uxland/ui-interaction";
import { customElement, html, LitElement, TemplateResult } from "lit-element";

//@ts-ignore
@customElement("confirmation-dialog")
export class ConfirmationDialog extends ConfirmMixin(LitElement) {
  render(): TemplateResult {
    return html` <div class="container">
      <h2>This is a custom content dialog!</h2>
      <input type="text" />
      <input type="checkbox" />
      <button>custom button</button>
    </div>`;
  }
}
