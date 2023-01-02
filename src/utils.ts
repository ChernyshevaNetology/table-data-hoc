import { format, getYear } from "date-fns";
import { ESortOptions, IRawData, ITableDataItem } from "./types";

export const handleTableFormat = (data: IRawData[], formatStyle: string) => {
  switch (formatStyle) {
    case ESortOptions.yearFormat:
      return data
        .map(({ date, amount }: IRawData) => ({
          amount,
          date,
          year: getYear(new Date(date)),
          id: Math.random(),
        }))
        .slice(0, 20);
    case ESortOptions.monthFormat:
      return data
        .map(({ date, amount }: IRawData) => {
          return {
            amount,
            date,
            month: format(new Date(date), "MMMM"),
            id: Math.random(),
          };
        })
        .slice(0, 20);
    case ESortOptions.sortFormat:
      return data
        .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())
        .map((elem: IRawData) => ({ ...elem, id: Math.random() }))
        .slice(0, 20);
    default:
      return data;
  }
};
