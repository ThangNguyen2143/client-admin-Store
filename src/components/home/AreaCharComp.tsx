"use client";
import { Area, AreaChart, Legend, Tooltip, XAxis, YAxis } from "recharts";

export default function AreaChartComp({
  data,
  feilds,
}: {
  data: any[];
  feilds: string[];
}) {
  return (
    <AreaChart
      width={500}
      height={300}
      data={data}
      margin={{
        top: 5,
        right: 30,
        left: 20,
        bottom: 5,
      }}
    >
      <Tooltip />
      <Legend />
      <XAxis dataKey="name" />
      <YAxis />
      {feilds.map((key, i) => {
        return <Area dataKey={key} key={i} fill="#82ca9d" />;
      })}
    </AreaChart>
  );
}
