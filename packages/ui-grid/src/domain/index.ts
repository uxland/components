export interface IColumns {
  property?: string;
  displayName?: string;
  renderCell?: (item: any) => any;
  orderCellValue?: (item: any) => any;
  order?: IOrder;
  disableSorting?: boolean;
}

export type IOrder = "ASC" | "DES";
