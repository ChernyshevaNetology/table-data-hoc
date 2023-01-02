import React from "react";
import { handleTableFormat } from "../utils";
import { IRawData } from "../types";

interface IHocProps {
  list: IRawData[];
}

const withFormatTable = (
  WrappedComponent: React.FC<IHocProps>,
  formatStyle: string
) => {
  return ({ ...props }) => {
    const formattedData = handleTableFormat(props.list, formatStyle);
    return <WrappedComponent list={formattedData} />;
  };
};

export { withFormatTable };
