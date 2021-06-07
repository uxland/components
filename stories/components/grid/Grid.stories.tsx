import "@uxland/ui-grid";
import {GridConfig} from "@uxland/ui-grid";
import {html} from "lit-html";
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

const Template = (config) => html`
	<div class="container">
		<uxl-grid
				.showHeader=${config.showHeader}
				.columns=${config.columns}
				.source=${config.source}
		></uxl-grid>
	</div>`;

const defaultConfig: GridConfig = {
	showHeader: true,
	columns: [
		{property: "id", displayName: "ID"},
		{property: "name", displayName: "Name"},
	],
	source: [
		{id: "1", name: "John Doe"},
		{id: "2", name: "Jane Doe"},
		{id: "3", name: "Adriana C. Ocampo Uria"},
		{id: "4", name: "Albert Einstein"},
		{id: "5", name: "Anna K. Behrensmeyer"},
		{id: "6", name: "Blaise Pascal"},
		{id: "7", name: "Caroline Herschel"},
		{id: "8", name: "Cecilia Payne-Gaposchkin"},
		{id: "9", name: "Chien-Shiung Wu"},
		{id: "10", name: "Dorothy Hodgkin"},
		{id: "11", name: "Edmond Halley"},
		{id: "12", name: "Edwin Powell Hubble"},
		{id: "13", name: "Elizabeth Blackburn"},
		{id: "14", name: "Enrico Fermi"},
		{id: "15", name: "Erwin Schroedinger"},
		{id: "16", name: "Flossie Wong-Staal"},
		{id: "17", name: "Frieda Robscheit-Robbins"},
		{id: "18", name: "Geraldine Seydoux"},
		{id: "19", name: "Gertrude B. Elion"},
		{id: "20", name: "Ingrid Daubechies"},
		{id: "21", name: "Jacqueline K. Barton"},
		{id: "22", name: "Jane Goodall"},
		{id: "23", name: "Jocelyn Bell Burnell"},
		{id: "24", name: "Johannes Kepler"},
		{id: "25", name: "Lene Vestergaard Hau"},
		{id: "26", name: "Lise Meitner"},
		{id: "27", name: "Lord Kelvin"},
		{id: "28", name: "Maria Mitchell"},
		{id: "29", name: "Marie Curie"},
		{id: "30", name: "Max Born"},
		{id: "31", name: "Max Planck"},
		{id: "32", name: "Melissa Franklin"},
		{id: "33", name: "Michael Faraday"},
		{id: "34", name: "Mildred S. Dresselhaus"},
		{id: "35", name: "Nicolaus Copernicus"},
		{id: "36", name: "Niels Bohr"},
		{id: "37", name: "Patricia S. Goldman-Rakic"},
		{id: "38", name: "Patty Jo Watson"},
		{id: "39", name: "Polly Matzinger"},
		{id: "40", name: "Richard Phillips Feynman"},
		{id: "41", name: "Rita Levi-Montalcini"},
		{id: "42", name: "Rosalind Franklin"},
		{id: "43", name: "Ruzena Bajcsy"},
		{id: "44", name: "Sarah Boysen"},
		{id: "45", name: "Shannon W. Lucid"},
		{id: "46", name: "Shirley Ann Jackson"},
		{id: "47", name: "Sir Ernest Rutherford"},
		{id: "48", name: "Sir Isaac Newton"},
		{id: "49", name: "Stephen Hawking"},
		{id: "50", name: "Werner Karl Heisenberg"},
		{id: "51", name: "Wilhelm Conrad Roentgen"},
		{id: "52", name: "Wolfgang Ernst Pauli"},
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
		{property: "id", displayName: "ID"},
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
		{property: "id", displayName: "ID"},
		{
			property: "name",
			displayName: "Name",
			disableSorting: true,
		},
	],
};
