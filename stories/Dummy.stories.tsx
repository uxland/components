import { html } from "lit-html";
import "@uxland/ui-dummy";

export default {
  title: "Components/Dummy",
  component: "uxl-dummy",
};

export const Default = (config: any) =>
  html`<uxl-dummy .reactive=${config.reactive}></uxl-dummy>`;
// Default.storyName = "Default Dummy";
Default.parameters = { reactive: true };
