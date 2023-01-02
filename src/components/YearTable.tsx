import React from "react";
import { withFormatTable } from "../HOC/withFormatTable";
import { ITableData, ITableDataItem } from "../types";

function YearTable({ list }: ITableData) {
  return (
    <div>
      <h2>Year Table</h2>
      <table>
        <tr>
          <th>Year</th>
          <th>Amount</th>
        </tr>
        {list.map(({ id, year, amount }: ITableDataItem) => (
          <tr key={id}>
            <td>{year}</td>
            <td>{amount}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export const FormattedYearTable = withFormatTable(YearTable, "yearFormat");
