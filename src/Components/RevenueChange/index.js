import React from "react";
import { Card } from "antd";
import { Chart } from "react-google-charts";

const RevenueChange = () => {

    const data = [
        ["Department", "Revenues Change"],
        ["Shoes", { v: 12, f: "12.0%" }],
        ["Sports", { v: -7.3, f: "-7.3%" }],
        ["Toys", { v: 0, f: "0%" }],
        ["Electronics", { v: -2.1, f: "-2.1%" }],
        ["Food", { v: 22, f: "22.0%" }],
      ];
      
      const options = {
        allowHtml: true,
        showRowNumber: true,
      };
      
      const formatters = [
        {
          type: "ArrowFormat",
          column: 1,
        },
      ];
  return (
    <Card
    bordered={false}
  >
    <Chart
      chartType="Table"
      width="100%"
      height="300px"
      data={data}
      options={options}
      formatters={formatters}
    />
    </Card>
  );
}

export default RevenueChange;
