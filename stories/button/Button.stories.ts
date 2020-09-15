import { ButtonConfig } from "@uxland/ui-button";
import { html } from "lit-html";
// import Button from './Button';
import "./button.css";

export default {
  title: "Simple/Button",
  argTypes: {
    backgroundColor: { control: "color" },
    onClick: { action: "onClick" },
    label: { control: "string" },
    raised: { control: "boolean" },
    disabled: { control: "boolean" },
    outlined: { control: "boolean" },
  },
};

const label = "Button";
const defaultConfig = { label };
const Template = (args: ButtonConfig) =>
  html`<uxl-button
    ?raised=${args.raised}
    ?disabled=${args.disabled}
    label=${args.label}
  ></uxl-button>`;
export const Default = Template.bind({});
Default.args = { label: "label", raised: false, disabled: false };
// export const Default = () => html`<uxl-button label=${label}></uxl-button>`;
export const Disabled = () =>
  html`<uxl-button disabled label=${label}></uxl-button>`;
export const Raised = () =>
  html`<uxl-button raised label=${label}></uxl-button>`;
export const Outlined = () =>
  html`<uxl-button outlined label=${label}></uxl-button>`;

// const Template = (args) => Button(args);

// export const Default = Template.bind({});
// Default.args = { label: 'Button' };
// export const Raised = Template.bind({});
// Raised.args = { label: 'Button', raised: true };
// export const Disabled = Template.bind({});
// Disabled.args = { label: 'Button', disabled: true };
// export const Outlined = Template.bind({});
// Outlined.args = { label: 'Button', outlined: true };

// export const Primary = Template.bind({});
// Primary.args = {
//   primary: true,
//   label: 'Button',
//   raised: true,
//   disabled: true,
// };

// export const Secondary = Template.bind({});
// Secondary.args = {
//   label: 'Button',
// };

// export const Large = Template.bind({});
// Large.args = {
//   size: 'large',
//   label: 'Button',
// };

// export const Small = Template.bind({});
// Small.args = {
//   size: 'small',
//   label: 'Button',
// };
