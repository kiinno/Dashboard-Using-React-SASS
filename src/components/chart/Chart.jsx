import { Tooltip } from "@mui/material";
import "./chart.scss";
import {
  Area,
  AreaChart,
  CartesianGrid,
  ResponsiveContainer,
  XAxis,
} from "recharts";

const Chart = () => {
  const data = [
    {
      name: "January",
      Tottal: 4000,
    },
    {
      name: "February",
      Tottal: 3000,
    },
    {
      name: "March",
      Tottal: 2000,
    },
    {
      name: "April",
      Tottal: 2780,
    },
    {
      name: "May",
      Tottal: 1890,
    },
    {
      name: "June",
      Tottal: 2390,
    },
  ];
  return (
    <div className="chart">
      <h5 className="title">last 6 months (revenue)</h5>
      <ResponsiveContainer width="100%" aspect={3 / 1}>
        <AreaChart
          width={730}
          height={250}
          data={data}
          margin={{ top: 10, right: 30, left: 0, bottom: 0 }}
        >
          <defs>
            <linearGradient id="colorTottal" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
              <stop offset="95%" stopColor="#8884d8" stopOpacity={0} />
            </linearGradient>
          </defs>
          <XAxis dataKey="name" stroke="gray" />
          <CartesianGrid strokeDasharray="3 3" className="chart-grid" />
          <Tooltip />
          <Area
            type="monotone"
            dataKey="Tottal"
            stroke="#8884d8"
            fillOpacity={1}
            fill="url(#colorTottal)"
          />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Chart;
