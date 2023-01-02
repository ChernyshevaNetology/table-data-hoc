import React, { useState, useEffect } from "react";
import { FormattedMonthTable } from "./components/MonthTable";
import { FormattedSortTable } from "./components/SortTable";
import { FormattedYearTable } from "./components/YearTable";
import { IRawData } from "./types";

const URL =
  "https://raw.githubusercontent.com/netology-code/ra16-homeworks/master/hoc/aggregation/data/data.json";

const App = () => {
  const [list, setList] = useState<IRawData[] | []>([]);

  const fetchTableData = async () => {
    try {
      const data = await fetch(URL);
      const dataJson = await data.json();
      setList(dataJson.list);
    } catch {
      console.warn("Error fetching data");
    }
  };

  useEffect(() => {
    fetchTableData();
  }, []);

  return (
    <div id={"app"}>
      <FormattedMonthTable list={list} />
      <FormattedYearTable list={list} />
      <FormattedSortTable list={list} />
    </div>
  );
};

export default App;
