import { css } from "lit-element";
import { styles as coreStyles } from "@uxland/ui-styles";

export const styles = css`
  ${coreStyles}
  :host {
    --uxl-button-background-color: var(--uxl-base-color);
    --uxl-button-text-color: white;
    --uxl-button-border-color: var(--uxl-base-color);
  }

  elix-button::part(inner) {
    height: 36px;
    min-width: 64px;
    padding-left: 8px;
    padding-right: 8px;
    border-radius: 4px;
    cursor: pointer;
    text-transform: uppercase;
    background-color: var(--uxl-button-background-color);
    color: var(--uxl-button-text-color);
  }

  elix-button > span {
    margin-left: 8px;
  }

  elix-button[disabled]::part(inner) {
    opacity: 0.38;
    pointer-events: none;
  }

  elix-button[raised]::part(inner) {
    box-shadow: var(--shadow-elevation-2dp);
    padding-left: 16px;
    padding-right: 16px;
  }

  elix-button[active]::part(inner) {
    box-shadow: var(--shadow-elevation-4dp);
    padding-left: 16px;
    padding-right: 16px;
  }

  elix-button[outlined]::part(inner) {
    box-shadow: var(--shadow-none);
    border: 1px solid var(--uxl-button-border-color);
    padding-left: 16px;
    padding-right: 16px;
  }

  // elix-button:not([disabled]):hover::part(inner) {
  //   background-color: green;
  // }
`;
