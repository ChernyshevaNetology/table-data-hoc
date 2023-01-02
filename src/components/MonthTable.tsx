import React from "react";
import { withFormatTable } from "../HOC/withFormatTable";
import { ITableData, ITableDataItem } from "../types";

function MonthTable({ list }: ITableData) {
  return (
    <div>
      <h2>Month Table</h2>
      <table>
        <tr>
          <th>Month</th>
          <th>Amount</th>
        </tr>
        {list.map(({ month, amount, id }: ITableDataItem) => (
          <tr key={id}>
            <td>{month}</td>
            <td>{amount}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export const FormattedMonthTable = withFormatTable(MonthTable, "monthFormat");
