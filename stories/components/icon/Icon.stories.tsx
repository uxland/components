import "@uxland/ui-icon";
import { html } from "lit-html";
import "./icon.css";
import { IconConfig } from '@uxland/ui-icon';

export default {
  title: "Components/Icon",
  component: "uxl-icon",
};

const Template = (config) => html`<div class="container">
  <uxl-icon
    .svg=${config.icon}
    .icon=${config.name}
  ></uxl-icon>
</div>`;

export const CustomSvg = Template.bind({});
CustomSvg.storyName = "Custom SVG Icon";
CustomSvg.args = {
    icon: html `<svg width="24" height="24" viewBox="0 0 24 24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z"/></svg>`,
} as IconConfig;

export const CustomIconName = Template.bind({});
CustomIconName.storyName = "Custom Icon name";
CustomIconName.args = {
    name: 'folder',
} as IconConfig;
