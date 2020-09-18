import { css } from "lit-element";
import { styles as coreStyles } from "@uxland/ui-styles";

export const styles = css`
  ${coreStyles}
  :host {
    --uxl-icon-size: 24px;
    --uxl-icon-color: black;
  }

  svg {
    width: var(--uxl-icon-size);
    height: var(--uxl-icon-size);
    fill: var(--uxl-icon-color);
  }
`;
