"use client";
import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Rectangle,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

export default function BarChartComp({
  data,
  feilds,
}: {
  data: any[];
  feilds: string[];
}) {
  return (
    <BarChart
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
        return (
          <Bar
            dataKey={key}
            key={i}
            fill="#82ca9d"
            activeBar={<Rectangle fill="gold" stroke="purple" />}
          />
        );
      })}
    </BarChart>
  );
}
