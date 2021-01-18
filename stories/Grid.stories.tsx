import { html } from "lit-html";
import "@uxland/ui-grid";

export default {
  title: "Components/Grid",
  component: "uxl-grid",
};

export const Default = (config: any) =>
  html`<div style="height: 200px">
    <uxl-grid
      .showHeader=${config.showHeader}
      .source=${config.source}
      .columns=${config.columns}
    ></uxl-grid>
  </div>`;
// Default.storyName = "Default Dummy";
Default.args = {
  showHeader: true,
  columns: [
    { property: "id", displayName: "ID" },
    { property: "name", displayName: "Name" },
  ],
  source: [
    { id: "1", name: "John Doe" },
    { id: "2", name: "Jane Doe" },
  ],
};
