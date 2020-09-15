// // import { html } from 'lit-html';
// // import './button.css';

// // /**
// //  * Primary UI component for user interaction
// //  */
// // export const Button = ({ primary, backgroundColor, size, label, onClick }) => {
// //   const mode = primary ? 'storybook-button--primary' : 'storybook-button--secondary';

// //   return html`
// //     <button
// //       type="button"
// //       class=${['storybook-button', `storybook-button--${size || 'medium'}`, mode].join(' ')}
// //       style=${backgroundColor && { backgroundColor }}
// //       @click=${onClick}
// //     >
// //       ${label}
// //     </button>
// //   `;
// // };

// import '@uxland/ui-button';
// import { html } from 'lit-html';
// import './button.css';
// import PropTypes from 'prop-types';

// const customClick = () => ({
//   action: 'onClick',
// });

// export const Button = ({ label, disabled, raised, outlined, onClick }) =>
//   html`<uxl-button
//     @click="${onClick}"
//     ?disabled=${disabled}
//     ?raised=${raised}
//     ?outlined=${outlined}
//     label=${label}
//   ></uxl-button>`;
// export default Button;
