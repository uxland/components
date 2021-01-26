import { html } from "lit-element/lit-element";
import { UxlIcon } from "./";
import { uxlIcons } from "./uxl-icons";

export const template = (props: UxlIcon) =>
  html`${props.svg != null && props.svg != undefined
    ? html`${props.svg}`
    : uxlIcons[props.icon]}`;
