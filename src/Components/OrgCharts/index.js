import React from "react";
import { Card } from "antd";
import { Chart } from "react-google-charts";



const OrgCharts = () => {
    const data = [
        [
          {
            v: "Anush",
            f: 'Anush<div style="color:red; font-style:italic">Founder</div>',
          },
          "",
          "Founder",
        ],
        [
          {
            v: "Rajeen",
            f: 'Rajeen<div style="color:red; font-style:italic">Backend</div>',
          },
          "Anush",
          "Backend",
        ],
        ["Rohan", "Anush", ""],
        ["Mahesh", "Rajeen", "Bob Sponge"],
        ["Carol", "Mahesh", ""],
      ];
      
      const options = {
        allowHtml: true,
      };
  return (
    <Card
    bordered={false}
  >
    <Chart
      chartType="OrgChart"
      data={data}
      options={options}
      width="100%"
      height="300px"
    />
    </Card>
  );
}

export default OrgCharts;