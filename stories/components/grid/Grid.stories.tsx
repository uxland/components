import "@uxland/ui-grid";
import { GridConfig } from "@uxland/ui-grid";
import { html } from "lit-html";
import "./grid.css";

export default {
  title: "Components/Grid",
  component: "uxl-grid",
  parameters: {
    actions: {
      handles: ["grid-row-selectedss", "click"],
    },
  },
};

const Template = (config) => html`<div class="container">
  <uxl-grid
    .showHeader=${config.showHeader}
    .columns=${config.columns}
    .source=${config.source}
  ></uxl-grid>
</div>`;

const defaultConfig: GridConfig = {
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

export const Basic = Template.bind({});
// Basic.storyName = "Basic Dummy";
Basic.args = {
  ...defaultConfig,
};

export const CustomCellRender = Template.bind({});
CustomCellRender.storyName = "Custom Cell Render";
CustomCellRender.args = {
  ...defaultConfig,
  columns: [
    { property: "id", displayName: "ID" },
    {
      property: "name",
      displayName: "Name",
      renderCell: (item) => html`${item.name.split(" ").reverse().join(", ")}`,
    },
  ],
};

export const DisableSorting = Template.bind({});
DisableSorting.storyName = "Disable Column Sorting";
DisableSorting.args = {
  ...defaultConfig,
  columns: [
    { property: "id", displayName: "ID" },
    {
      property: "name",
      displayName: "Name",
      disableSorting: true,
    },
  ],
};
