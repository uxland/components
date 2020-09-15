import { ButtonConfig } from "@uxland/ui-button";
import Button from "./Button";

export default {
  title: "Simple/Button",
  component: "uxl-button",
  // parameters: {
  //   actions: {
  //     handles: ['mouseover', 'click'],
  //   },
  // },
  argTypes: {
    label: {
      name: "label",
      type: { name: "string", required: false },
      description: "Text content of button",
      defaultValue: { summary: "Button" },
    },
    disabled: {
      name: "disabled",
      description: "Disables button interactions",
      control: { type: "boolean" },
      table: { type: { summary: "boolean" }, defaultValue: { summary: false } },
    },
    raised: {
      name: "raised",
      description: "Applies elevation and shadow to button",
      control: { type: "boolean" },
      table: { type: { summary: "boolean" }, defaultValue: { summary: false } },
    },
    outlined: {
      name: "outlined",
      description: "Applies border styling",
      control: { type: "boolean" },
      table: { type: { summary: "boolean" }, defaultValue: { summary: false } },
    },
    onClick: {
      name: "click",
      type: { name: "action", required: false },
      description: "Callback function to be called when button is clicked",
      action: "clicked",
      control: { disable: true },
    },
  },
};

const label = "Button";
const defaultConfig = { label };
const Template = (config: ButtonConfig) => Button(config);

export const Default = Template.bind({});
Default.args = { ...defaultConfig };
Default.parameters = {
  docs: { source: { code: `<uxl-button label="Button"></uxl-button>` } },
};

export const Disabled = Template.bind({});
Disabled.args = {
  ...defaultConfig,
  disabled: true,
  raised: false,
  outlined: false,
};
Disabled.parameters = {
  docs: {
    source: { code: `<uxl-button disabled label="Button"></uxl-button>` },
  },
};

export const Raised = Template.bind({});
Raised.args = { ...defaultConfig, raised: true };
Raised.parameters = {
  docs: { source: { code: `<uxl-button raised label="Button"></uxl-button>` } },
};

export const Outlined = Template.bind({});
Outlined.args = { ...defaultConfig, outlined: true };
Outlined.parameters = {
  docs: {
    source: { code: `<uxl-button outlined label="Button"></uxl-button>` },
  },
};

export const Clicked = Template.bind({});
Clicked.args = { ...defaultConfig, onClick: () => alert("Clicked!") };
Clicked.parameters = {
  docs: {
    source: {
      code: `<uxl-button @click="() => alert('Clicked!')" label="Button"></uxl-button>`,
    },
  },
};

export const IconButton = Template.bind({});
IconButton.args = {
  ...defaultConfig,
  icon: `<svg
              id="menuIcon"
              part="menu-icon"
              viewBox="0 0 18 18"
              width="20"
              height="20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 3 h18 v2 h-18 z m0 5 h18 v2 h-18 z m0 5 h18 v2 h-18 z"
              ></path>
            </svg>`,
};
IconButton.parameters = {
  docs: {
    source: {
      code: `
      const icon = '<svg id="menuIcon" part="menu-icon" viewBox="0 0 18 18" width="20" height="20" xmlns="http://www.w3.org/2000/svg">
        <path d="M0 3 h18 v2 h-18 z m0 5 h18 v2 h-18 z m0 5 h18 v2 h-18 z"></path>
      </svg>';
      <uxl-button icon="icon" label="Button"></uxl-button>`,
    },
  },
};
