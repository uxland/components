import "@uxland/ui-button";
import { ButtonConfig } from "@uxland/ui-button";
import { html } from "lit-html";

export default {
  title: "Components/Button",
  component: "uxl-button",
};

const defaultConfig = { label: "Button" };
const icon = `<svg id="menuIcon" part="menu-icon" viewBox="0 0 18 18" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
  <path d="M0 3 h18 v2 h-18 z m0 5 h18 v2 h-18 z m0 5 h18 v2 h-18 z"></path>
</svg>`;
const handleClick = (ev) => alert(`Button clicked!`);
const handleActiveChanged = (ev) => alert(`active: ${ev.detail.active}`);
const handleDisabledChanged = (ev) => alert(`disabled: ${ev.detail.disabled}`);

export const Default = (config: ButtonConfig) =>
  html`<uxl-button
    label="${config.label}"
    icon="${config.icon}"
    ?active="${config.active}"
    ?disabled=${config.disabled}
    ?raised=${config.raised}
    ?outlined=${config.outlined}
  ></uxl-button>`;
Default.args = { ...defaultConfig };

export const Disabled = (config: ButtonConfig) =>
  html`<uxl-button
    label="${config.label}"
    ?disabled=${config.disabled}
    @disabled-changed=${handleDisabledChanged}
  ></uxl-button>`;
Disabled.args = { ...defaultConfig, disabled: true };
Disabled.parameters = {
  docs: {
    source: {
      code:
        '(config: ButtonConfig) => html`<uxl-button label="${config.label}" @disabled-changed="(ev) => alert(\'disabled: ev.detail.disabled\')"></uxl-button>`',
    },
  },
};

export const Active = (config: ButtonConfig) =>
  html`<uxl-button
    label="${config.label}"
    ?active=${config.active}
    @active-changed=${handleActiveChanged}
  ></uxl-button>`;
Active.args = { ...defaultConfig, active: true };
Active.parameters = {
  docs: {
    source: {
      code:
        '(config: ButtonConfig) => html`<uxl-button label="${config.label}" @active-changed="(ev) => alert(\'active: ev.detail.active\')"></uxl-button>`',
    },
  },
};

export const Raised = (config: ButtonConfig) =>
  html`<uxl-button
    label="${config.label}"
    ?raised=${config.raised}
  ></uxl-button>`;
Raised.args = { ...defaultConfig, raised: true };

export const Outlined = (config: ButtonConfig) =>
  html`<uxl-button
    label="${config.label}"
    ?outlined=${config.outlined}
  ></uxl-button>`;
Outlined.args = { ...defaultConfig, outlined: true };

const iconCode =
  '(config: ButtonConfig) => html`<uxl-button label="${config.label}" icon=${config.icon}></uxl-button>`';
export const IconButton = (config: ButtonConfig) =>
  html`<uxl-button label="${config.label}" icon=${config.icon}></uxl-button>`;
IconButton.args = { ...defaultConfig, icon };
IconButton.parameters = {
  docs: {
    source: {
      code: `const config = {icon: '${icon}'};\n${iconCode}`,
    },
  },
};

export const Click = (config: ButtonConfig) =>
  html`<uxl-button label="${config.label}" @click=${handleClick}></uxl-button>`;
Click.args = { ...defaultConfig };
Click.parameters = {
  docs: {
    source: {
      code:
        '(config: ButtonConfig) => html`<uxl-button label="${config.label}" @click="() => alert(\'Button Clicked!\')"></uxl-button>`',
    },
  },
};
