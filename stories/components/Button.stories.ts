import "@uxland/ui-button";
import { ButtonConfig } from "@uxland/ui-button";
import { html } from "lit-html";
import "./Button.css";

export default {
  title: "Components/Button",
  component: "uxl-button",
};

(window as any).UxlIconSet.requestAvailability().registerIconset("uxl", {
  remix:
    '<svg style="width:24px;height:24px" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">&gt;<path d="M8 17l4-4h3.2c.4 1.2 1.5 2 2.8 2 1.7 0 3-1.3 3-3s-1.3-3-3-3c-1.3 0-2.4.8-2.8 2H12L8 7V3H3v5h3l4.2 4L6 16H3v5h5v-4z"/></svg>',
});

const defaultConfig = { label: "Button" };
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

export const IconButton = (config: ButtonConfig) =>
  html`<uxl-button label="${config.label}" icon="${config.icon}"></uxl-button>`;
IconButton.args = { ...defaultConfig, icon: "uxl:remix" };

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
