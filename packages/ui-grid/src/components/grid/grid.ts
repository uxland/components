import { propertiesObserver } from "@uxland/uxl-utilities";
import {
  css,
  customElement,
  html,
  LitElement,
  property,
  unsafeCSS,
} from "lit-element";
import * as R from "ramda";
import { IColumns } from "../../domain";
import styles from "./styles.scss";
import { template } from "./template";

// @ts-ignore
@customElement("uxl-grid")
export class UxlGrid extends propertiesObserver(LitElement) {
  /**
   * Properties
   */

  @property()
  public extraStyles: any;

  @property()
  public source: any[] = [];

  @property()
  public orderedList: any[] = [];

  @property()
  public virtualizeList: any[] = [];

  @property()
  public columns: IColumns[] = [];

  @property()
  public showHeader = true;

  @property()
  public renderCard: (any) => any;

  @property()
  private selectedColumn: IColumns;

  /**
   * Listeners
   */

  public onClickHeaderCell(event) {
    const htmlElement: HTMLElement = event.currentTarget;
    const displayName = htmlElement.dataset["columnKey"];
    this.selectedColumn = this.findColumn(displayName);
    if (!this.selectedColumn.disableSorting) {
      this.columns = this.changeColumnOrder();
      this.orderedList = R.clone(this.sortColumn());
    }
  }

  public onClickTableRowCell(event) {
    const htmlElement: HTMLElement = event.currentTarget;
    const item = JSON.parse(htmlElement.dataset["item"]);
    const row = Number.parseInt(htmlElement.dataset["row"]);
    if (item) {
      const onTableRowCellSelected = new CustomEvent(
        "uxl-grid-row-cell-selected",
        {
          composed: true,
          detail: { item, row },
        }
      );
      this.dispatchEvent(onTableRowCellSelected);
    }
  }

  public onClickTableCell(event) {
    const htmlElement: HTMLElement = event.currentTarget;
    const item = JSON.parse(htmlElement.dataset["item"]);
    const column = Number.parseInt(htmlElement.dataset["column"]);
    const row = Number.parseInt(htmlElement.dataset["row"]);
    if (item) {
      const onTableRowCellSelected = new CustomEvent(
        "uxl-grid-content-cell-selected",
        {
          composed: true,
          detail: { item, column, row },
        }
      );
      this.dispatchEvent(onTableRowCellSelected);
    }
  }

  /**
   * Methods
   */

  private findColumnIndex(displayName) {
    return this.columns.findIndex(
      (col) => col.displayName == (displayName || "")
    );
  }
  private findColumn(displayName): IColumns {
    return this.columns[this.findColumnIndex(displayName)];
  }

  toggleOrderField() {
    const selectedColumnClone = R.clone(this.selectedColumn);
    switch (selectedColumnClone.order) {
      case "ASC":
        selectedColumnClone.order = null;
        break;
      case "DES":
        selectedColumnClone.order = "ASC";
        break;
      default:
        selectedColumnClone.order = "DES";
        break;
    }
    return selectedColumnClone;
  }

  changeColumnOrder() {
    if (this.selectedColumn) {
      this.selectedColumn = this.toggleOrderField();
      this.columns.forEach((c) => (c.order = undefined));
      const index = this.columns.findIndex(
        (col) => col.displayName == (this.selectedColumn.displayName || "")
      );
      if (index > -1) {
        return R.pipe(
          R.remove(index, 1),
          R.insert(index, <any>this.selectedColumn)
        )(this.columns);
      }
    }
    return this.columns;
  }

  sortColumn() {
    if (!this.selectedColumn.order) {
      return this.source;
    }
    const order = this.selectedColumn.order == "ASC" ? R.ascend : R.descend;
    return R.sort(
      order(
        this.selectedColumn.orderCellValue ||
          R.prop(this.selectedColumn.property)
      )
    )(this.orderedList);
  }

  sourceChanged(newSource, oldSource) {
    if (!R.equals(newSource, oldSource)) {
      this.orderedList = R.clone(this.source);
      if (this.selectedColumn) {
        if (this.columns) {
          this.columns.forEach((column, index) => {
            if (column.property == this.selectedColumn.property) {
              this.columns[index] = this.selectedColumn;
            }
          });
        }
        this.orderedList = R.clone(this.sortColumn());
      }
    }
  }

  gridWidth = () => {
    const doc = this.shadowRoot.querySelector("#grid");
    if (doc) {
      doc.style.setProperty("--grid-width", `${doc.offsetWidth}px`);
      //console.log(doc.offsetWidth);
      doc.style.setProperty("--number-columns", `${this.columns.length + 1}`);
    }
  };

  renderValue(item, property) {
    if (item[property] != undefined && item[property] != null) {
      if (item[property] == 0 && typeof item[property] == "number") {
        return "0";
      }
      return item[property];
    }
    return "";
  }

  orderedListChanged() {
    this.virtualizeList = R.clone(
      this.orderedList.map((item) => {
        return {
          item,
          renderCard: this.renderCard,
          columns: this.columns,
          renderValue: this.renderValue,
        };
      })
    );
  }

  columnsChanged() {
    this.virtualizeList = R.clone(
      this.orderedList.map((item) => {
        return {
          item,
          renderCard: this.renderCard,
          columns: this.columns,
          renderValue: this.renderValue,
        };
      })
    );
  }

  constructor() {
    super();
    this.gridWidth();
  }

  firstUpdated(e) {
    this.gridWidth();
  }

  connectedCallback() {
    super.connectedCallback();
    window.addEventListener("resize", this.gridWidth);
  }

  disconnectedCallback() {
    super.disconnectedCallback();
    window.removeEventListener("resize", this.gridWidth);
  }

  render() {
    return html`${template(this)}`;
  }

  static get styles() {
    return css`
      ${unsafeCSS(styles)}
    `;
  }
}
