export enum ESortOptions {
  yearFormat = "yearFormat",
  monthFormat = "monthFormat",
  sortFormat = "sortFormat",
}

export interface IRawData {
  date: string;
  amount: number;
}

export interface ITableDataItem {
  id?: string;
  date?: string;
  year?: number;
  month?: string;
  amount: number;
}

export interface ITableData {
  list: ITableDataItem[];
}
