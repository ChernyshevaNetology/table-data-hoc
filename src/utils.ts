import { format, getYear } from "date-fns";
import { ESortOptions, IRawData, ITableDataItem } from "./types";

export const handleTableFormat = (data: IRawData[], formatStyle: string) => {
  switch (formatStyle) {
    case ESortOptions.yearFormat:
      return data
        .map(({ date, amount }: IRawData) => ({
          amount,
          year: getYear(new Date(date)),
          id: Math.random(),
        }))
        .slice(0, 20);
    case ESortOptions.monthFormat:
      return data
        .map(({ date, amount }: IRawData) => {
          return {
            amount,
            month: format(new Date(date), "MMMM"),
            id: Math.random(),
          };
        })
        .slice(0, 20);
    case ESortOptions.sortFormat:
      return data
        .sort(
          // @ts-ignore
          (a: IRawData, b: IRawData) => new Date(a.date) - new Date(b.date)
        )
        .map((elem: any) => ({ ...elem, id: Math.random() }))
        .slice(0, 20);
    default:
      return data;
  }
};
