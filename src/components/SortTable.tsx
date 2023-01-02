import React from "react";
import { withFormatTable } from "../HOC/withFormatTable";
import { ITableData, ITableDataItem } from "../types";

function SortTable({ list }: ITableData) {
  return (
    <div>
      <h2>Sort Table</h2>
      <table>
        <tr>
          <th>Date</th>
          <th>Amount</th>
        </tr>
        {list.map(({ date, amount, id }: ITableDataItem) => (
          <tr key={id}>
            <td>{date}</td>
            <td>{amount}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}

export const FormattedSortTable = withFormatTable(SortTable, "sortFormat");
