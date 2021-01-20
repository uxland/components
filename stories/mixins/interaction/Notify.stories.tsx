import { html } from "lit-html";
import { NotifyOptions, notify } from "@uxland/ui-interaction";
import "./confirmation";



export default {
  title: "Mixins/Interaction Notify",
  //   component: "uxl-grid",
  //   parameters: {
  //     actions: {
  //       handles: ["grid-row-selectedss", "click"],
  //     },
  //   },
};

const showNotify = (config) => notify(config);
const Template = (config) => html`<button @click=${() => showNotify(config)}>
  Show Notify
</button>`;

export const Basic = Template.bind({});
Basic.args = { message: 'Normal Snackbar', showCloseButton: true, delay: 10000 } as NotifyOptions;

export const Wide = Template.bind({});
Wide.args = { message: 'Snackbar with "wide" classifier', showCloseButton: true, classifiers: 'fit-bottom', delay: 5000 } as NotifyOptions;

export const Danger = Template.bind({});
Danger.args = { message: 'danger Snackbar', showCloseButton: true, type: 'danger', delay: 10000 } as NotifyOptions;

export const Warning = Template.bind({});
Warning.args = { message: 'warning Snackbar', showCloseButton: true, type: 'warning', delay: 10000 } as NotifyOptions;

export const Info = Template.bind({});
Info.args = { message: 'Info Snackbar', showCloseButton: true, type: 'info', delay: 10000 } as NotifyOptions;

export const Success = Template.bind({});
Success.args = { message: 'Success Snackbar', showCloseButton: true, type: 'success', delay: 10000 } as NotifyOptions;

export const NoCloseButton = Template.bind({});
NoCloseButton.args = { message: 'Without close button Snackbar', delay: 10000 } as NotifyOptions;

export const Top = Template.bind({});
Top.args = { message: 'A top snackbar', showCloseButton: true, position: 'top', type: 'info', delay: 10000 } as NotifyOptions;

export const Center = Template.bind({});
Center.args = { message: 'A top snackbar', showCloseButton: true, position: 'center', type: 'info', delay: 10000 } as NotifyOptions;

export const CustomColors = Template.bind({});
CustomColors.args = {
      message: 'Custom colors Snackbar',
      showCloseButton: true,
      styles: { backgroundColor: '#283593', textColor: 'yellow', iconColor: 'yellow' },
      delay: 10000
    } as NotifyOptions;

