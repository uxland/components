import { html } from "lit-html";
import { ConfirmOptions, doConfirm } from "@uxland/ui-interaction";
import "./confirmation";

export default {
  title: "Mixins/Interaction Confirmation",
  //   component: "uxl-grid",
  //   parameters: {
  //     actions: {
  //       handles: ["grid-row-selectedss", "click"],
  //     },
  //   },
};

const openConfirm = (config) => doConfirm(config);
const Template = (config) => html`<button @click=${() => openConfirm(config)}>
  Open Confirmation
</button>`;

export const Basic = Template.bind({});
Basic.args = {
    title: 'A normal confirm dialog',
    message: "Hi! I'm a Dialog :)",
    acceptLabel: 'Accept',
    cancelLabel: 'Cancel',
    showCloseButton: true
} as ConfirmOptions;

export const Info = Template.bind({});
Info.args = {
    title: 'A info confirm dialog',
  message: "Hi! I'm a Dialog :)",
    type: 'info',
    acceptLabel: 'Accept',
    cancelLabel: 'Cancel',
    showCloseButton: true
} as ConfirmOptions;

export const Warning = Template.bind({});
Warning.args = {
    title: 'A warning confirm dialog',
  message: "Hi! I'm a Dialog :)",
    type: 'warning',
    acceptLabel: 'Accept',
    cancelLabel: 'Cancel',
    showCloseButton: true
} as ConfirmOptions;

export const Danger = Template.bind({});
Danger.args = {
    title: 'A danger confirm dialog',
  message: "Hi! I'm a Dialog :)",
    type: 'danger',
    acceptLabel: 'Accept',
    cancelLabel: 'Cancel',
    showCloseButton: true
} as ConfirmOptions;

export const Success = Template.bind({});
Success.args = {
    title: 'A success confirm dialog',
    message: "Hi! I'm a Dialog :)",
    type: 'success',
    acceptLabel: 'Accept',
    cancelLabel: 'Cancel',
    showCloseButton: true
} as ConfirmOptions;

export const Modal = Template.bind({});
Modal.args = {
    title: 'A modal confirm dialog',
    message: "Hi! I'm a Dialog :)",
    acceptLabel: 'Accept',
    cancelLabel: 'Cancel',
    showCloseButton: true,
    modal: true
} as ConfirmOptions;

export const HeaderDismiss = Template.bind({});
HeaderDismiss.args = {
    title: 'A header dismiss confirm dialog',
    message: "Hi! I'm a Dialog :)",
    acceptLabel: 'Accept',
    cancelLabel: 'Cancel',
    showCloseButton: true,
    headerDismiss: true
} as ConfirmOptions;

export const CustomStyles = Template.bind({});
CustomStyles.args = {
   containerId: 'custom-css',
      title: 'A confirm dialog with custom css properties',
      message: "Hi! I'm a Dialog :)",
      type: 'info',
      acceptLabel: 'Accept',
      cancelLabel: 'Cancel',
      showCloseButton: true,
      styles: {
        backgroundColor: '#E8EAF6',
        headerBackgroundColor: '#CCC000',
        textColor: 'black',
        closeIconColor: '#pink',
        acceptColor: 'pink',
        actionsBackgroundColor: '#fff176'
      }
} as ConfirmOptions;

export const CustomWebComponentConfirm = Template.bind({});
CustomWebComponentConfirm.args = {
  title: "Confirm with custom component",
  htmlTag: "confirmation-dialog",
  acceptLabel: "Accept",
  cancelLabel: "Cancel",
  showCloseButton: true,
} as ConfirmOptions;
