import "@uxland/ui-progress-indicator";
import { html } from "lit-html";
import "./progress-indicator.css";
import { ProgressIndicatorConfig } from '@uxland/ui-progress-indicator';

export default {
  title: "Components/ProgressIndicator",
  component: "uxl-progress-indicator",
};

const Template = (config: ProgressIndicatorConfig) => html`<div class="container">
  <uxl-progress-indicator .type=${config.type}></uxl-progress-indicator>
</div>`;

export const LinearBusy = Template.bind({});
LinearBusy.storyName = "Linear Busy";
LinearBusy.args = {
    type: 'linear'
} as ProgressIndicatorConfig;

export const CircularBusy = Template.bind({});
CircularBusy.storyName = "Circular busy";
CircularBusy.args = {
    type: 'circular'
};

export const BouncingBusy = Template.bind({});
BouncingBusy.storyName = "Bouncing busy";
BouncingBusy.args = {
    type: 'bouncing'
};
