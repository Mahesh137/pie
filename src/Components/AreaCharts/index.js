import React from "react";
import { Card } from "antd";
import { Chart } from "react-google-charts";



 const AreaCharts = () => {
    const data = [
        ["Year", "Sales", "Expenses"],
        ["2013", 1000, 400],
        ["2014", 1170, 460],
        ["2015", 660, 1120],
        ["2016", 1030, 540],
      ];
      
       const options = {
        title: "Company Performance",
        hAxis: { title: "Year", titleTextStyle: { color: "#333" } },
        vAxis: { minValue: 0 },
        chartArea: { width: "50%", height: "70%" },
      };
  return (
    <Card
    bordered={false}
  >
    <Chart
      chartType="AreaChart"
      width="100%"
      height="300px"
      data={data}
      options={options}
    />
    </Card>
  );
}

export default AreaCharts;
