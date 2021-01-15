import "@uxland/ui-virtualizer";
import { html } from "lit-element/lit-element";
import { nothing } from "lit-html";
import { repeat } from "lit-html/directives/repeat";
import "lit-virtualizer/lit-virtualizer";
import { iconTemplate } from "../../icons/icons";
import { UxlGrid } from "./grid";

const renderItemFactory = (
  renderCard,
  onClickContentRow,
  onClickContentCell
) => (item, indexRow) => html`
  <div
    id="row-${indexRow + 1}"
    class="content__row"
    part="content__row"
    data-item="${JSON.stringify(item.item)}"
    data-row="${indexRow + 1}"
    @click="${onClickContentRow}"
  >
    ${renderCard
      ? html` <div class="card" part="card">${renderCard(item.item)}</div> `
      : nothing}
    ${repeat(
      item.columns,
      (column: any, indexColumn) => html`
        <div
          id="column-${indexColumn + 1}"
          class="content__cell ${item.renderCard ? "card--enabled" : ""}"
          part="content__cell content__cell-${indexColumn + 1}"
          data-item="${JSON.stringify(item.item)}"
          data-column="${indexColumn + 1}"
          data-row="${indexRow + 1}"
          @click="${onClickContentCell}"
        >
          ${(column.renderCell && column.renderCell(item.item)) ||
          item.renderValue(item.item, column.property)}
        </div>
      `
    )}
  </div>
`;

export const template = (props: UxlGrid) => html`${iconTemplate()}
<custom-style><style>${props.extraStyles}</style></custom-style>
<div id="grid">
	${
    props.showHeader
      ? html`
          <div class="header" part="header">
            ${repeat(
              props.columns,
              (column, index) => html`
                <div
                  id="header-cell-${index + 1}"
                  class="header__cell"
                  data-column-key="${column.displayName}"
                  part="header__cell header__cell-${index + 1}"
                  @click="${props.onClickHeaderCell}"
                >
                  ${column.displayName || ""}
                  ${column.order == "ASC"
                    ? html`
                        <iron-icon
                          class="order"
                          icon="uxl-grid:arrow-up"
                        ></iron-icon>
                      `
                    : html`
                        ${column.order == "DES"
                          ? html`
                              <iron-icon
                                class="order"
                                icon="uxl-grid:arrow-down"
                              ></iron-icon>
                            `
                          : nothing}
                      `}
                </div>
              `
            )}
          </div>
        `
      : nothing
  }
	<div class="content" part="content" id="content">
    <lit-virtualizer 
        exportparts="content__row content__cell content__cell-*" 
        .items="${props.virtualizeList}" 
        .renderItem="${renderItemFactory(
          props.renderCard,
          props.onClickTableRowCell,
          props.onClickTableCell
        )}"
        >
    </lit-virtualizer>
	</div>
</div>
</div>
`;
