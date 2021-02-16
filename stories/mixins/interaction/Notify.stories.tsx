import { html } from "lit-html";
import { NotifyOptions, notify } from "@uxland/ui-interaction";
import "./confirmation";



export default {
  title: "Mixins/Interaction Notify",
};

const showNotify = (config) => notify(config);
const Template = (config) => html`<button @click=${() => showNotify(config)}>
  Show Notify
</button>`;

export const Basic = Template.bind({});
Basic.args = { message: 'Basic Snackbar', delay: 10000, leading: true } as NotifyOptions;

export const Stacked = Template.bind({});
Stacked.args = { message: 'Stacked Snackbar', delay: 10000, stacked: true } as NotifyOptions;

export const Centered = Template.bind({});
Centered.args = { message: 'Centered Snackbar', delay: 10000, leading: false } as NotifyOptions;

export const Danger = Template.bind({});
Danger.args = { message: 'danger Snackbar', type: 'danger', delay: -1 } as NotifyOptions;

export const Warning = Template.bind({});
Warning.args = { message: 'warning Snackbar', type: 'warning', delay: 10000 } as NotifyOptions;

export const Info = Template.bind({});
Info.args = { message: 'Info Snackbar', type: 'info', delay: 10000 } as NotifyOptions;

export const Success = Template.bind({});
Success.args = { message: 'Success Snackbar', type: 'success', delay: 10000 } as NotifyOptions;

export const NoCloseButton = Template.bind({});
NoCloseButton.args = { message: 'Without close button Snackbar',hideAction: true , delay: 10000 } as NotifyOptions;


export const CustomColors = Template.bind({});
CustomColors.args = {
      message: 'Custom colors Snackbar',
      showCloseButton: true,
      styles: { backgroundColor: '#283593', textColor: 'yellow', iconColor: 'yellow' },
      delay: 10000
    } as NotifyOptions;

