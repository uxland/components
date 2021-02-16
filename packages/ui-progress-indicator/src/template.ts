import { html } from "lit-element/lit-element";
import { UxlProgressIndicator } from "./";

const getBusyTemplate = (props: UxlProgressIndicator) => {
  switch (props.type) {
    case "bouncing":
      return bouncingTemplate();
    case "circular":
      return circularTemplate(props);
    case "linear":
      return linearTemplate(props);
  }
};

export const template = (props: UxlProgressIndicator) => html`
    ${getBusyTemplate(props)}
  </div>
`;

const bouncingTemplate = () => html`
  <div class="bouncing-loader">
    <div></div>
    <div></div>
    <div></div>
  </div>
`;

const circularTemplate = (props: UxlProgressIndicator) => html`
  <div class="progress-container">
    <div class="spinner"></div>
    <div ?hidden="${!props.text}" class="progress-title">${props.text}</div>
  </div>
`;

const linearTemplate = (props: UxlProgressIndicator) =>
  html` <progress class="linear-progress"></progress> `;
