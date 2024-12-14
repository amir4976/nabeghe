"use client";
import {
  Line,
  LineChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

function Chart() {
  const data = [
    { name: "فروردین", uv: 4000, pv: 2400, amt: 2400 },
    { name: "اردیبهشت", uv: 3000, pv: 1398, amt: 2210 },
    { name: "خرداد", uv: 2000, pv: 9800, amt: 2290 },
    { name: "تیر", uv: 2780, pv: 3908, amt: 2000 },
    { name: "مرداد", uv: 1890, pv: 4800, amt: 2181 },
    { name: "شهریور", uv: 2390, pv: 3800, amt: 2500 },
    { name: "مهر", uv: 4300, pv: 7900, amt: 2100 },
    { name: "آبان", uv: 3490, pv: 1210, amt: 2200 },
  ];
  return (
    <ResponsiveContainer
      width={"100%"}
      height={"90%"}
      className={"flex justify-center"}
    >
      <LineChart
        width={"100%"}
        height={200}
        data={data}
        margin={{
          top: 10,
          right: 30,
          left: 0,
          bottom: 0,
        }}
      >
        <XAxis dataKey={"name"} />
        <YAxis />
        <Tooltip />

        <Line type="monotone" dataKey="uv" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}

export default Chart;
