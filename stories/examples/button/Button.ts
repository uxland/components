// // // import { html } from 'lit-html';
// // // import './button.css';

// // // /**
// // //  * Primary UI component for user interaction
// // //  */
// // // export const Button = ({ primary, backgroundColor, size, label, onClick }) => {
// // //   const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

// // //   return html`
// // //     <button
// // //       type="button"
// // //       class=${['storybook-button', `storybook-button--${size || 'medium'}`, mode].join(' ')}
// // //       style=${backgroundColor && { backgroundColor }}
// // //       @click=${onClick}
// // //     >
// // //       ${label}
// // //     </button>
// // //   `;
// // // };

// import "@uxland/ui-button";
// import { ButtonConfig } from "@uxland/ui-button";
// import { html } from "lit-html";
// import "./button.css";

// const customClick = () => ({
//   action: "onClick",
// });

// export const Button = (config: ButtonConfig) =>
//   html`<uxl-button
//     @click="${config.onClick}"
//     ?disabled=${config.disabled}
//     ?raised=${config.raised}
//     ?outlined=${config.outlined}
//     label=${config.label}
//     icon=${config.icon}
//   ></uxl-button>`;
// export default Button;
