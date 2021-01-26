import { html } from "lit-html";
import "@uxland/ui-rich-text-editor";
import { RTEConfig } from "@uxland/ui-rich-text-editor";

export default {
  title: "Components/Rich Text Editor",
  component: "uxl-rich-text-editor",
};

const Template = (config: RTEConfig) =>
  html`<div class="container">
    <uxl-rich-text-editor .options=${config.options}></uxl-rich-text-editor>
  </div>`;

export const Default = Template.bind({});
export const CustomOptions = Template.bind({});
CustomOptions.args = { options: ["bold"] };
