import { html } from "lit-html";
import { ConfirmOptions, doConfirm } from "@uxland/ui-interaction";
import "./confirmation";

export default {
  title: "Mixins/Interaction",
  //   component: "uxl-grid",
  //   parameters: {
  //     actions: {
  //       handles: ["grid-row-selectedss", "click"],
  //     },
  //   },
};

const openConfirm = (config) => doConfirm(config);
const Template = (config) => html`<button @click=${() => openConfirm(config)}>
  Open
</button>`;

export const Basic = Template.bind({});
Basic.args = {
  title: "A danger confirm dialog",
  message: "Hi! I'm a Dialog :)",
  type: "danger",
  acceptLabel: "Accept",
  cancelLabel: "Cancel",
  showCloseButton: true,
};

export const WCConfirm = Template.bind({});
WCConfirm.args = {
  title: "WC Confirm",
  htmlTag: "confirmation-dialog",
  acceptLabel: "Accept",
  cancelLabel: "Cancel",
  showCloseButton: true,
} as ConfirmOptions;
