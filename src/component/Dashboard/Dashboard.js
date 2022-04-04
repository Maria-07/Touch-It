import React from "react";
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ComposedChart,
  Legend,
  Line,
  LineChart,
  Pie,
  PieChart,
  ResponsiveContainer,
  Scatter,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";

const Dashboard = () => {
  const data = [
    {
      id: 1,
      month: "Mar",
      investment: 100000,
      sell: 241,
      revenue: 10401,
    },
    {
      id: 2,
      month: "Apr",
      investment: 200000,
      sell: 423,
      revenue: 24500,
    },
    {
      id: 3,
      month: "May",
      investment: 500000,
      sell: 726,
      revenue: 67010,
    },
    {
      id: 4,
      month: "Jun",
      investment: 500000,
      sell: 529,
      revenue: 40405,
    },
    {
      id: 5,
      month: "Jul",
      investment: 600000,
      sell: 601,
      revenue: 50900,
    },
    {
      id: 6,
      month: "Aug",
      investment: 700000,
      sell: 670,
      revenue: 61000,
    },
  ];

  return (
    <div className="container mx-auto grid md:grid-cols-2 my-12 gap-10">
      {/* SimpleLineChart */}
      <div className="my-10 mx-auto">
        <h2 className=" text-lg font-semibold text-teal-700">
          Month Wise Sell
        </h2>
        <LineChart width={500} height={300} data={data}>
          <Line dataKey={"sell"} stroke="#579d8f" activeDot={{ r: 8 }}></Line>
          <Line dataKey={"month"}></Line>
          <XAxis dataKey="month"></XAxis>
          <Tooltip />
          <Legend />
          <YAxis></YAxis>
        </LineChart>
      </div>

      {/* SimpleBarChart */}
      <div className="my-10 mx-auto">
        <h2 className=" text-lg font-semibold text-teal-700">
          Investment VS Revenue
        </h2>
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
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey={"investment"} fill="#82ca9d" />
          <Bar dataKey={"revenue"} fill="#8884d8" />
        </BarChart>
      </div>
      {/* LineBarAreaComposedChart */}
      <div className="my-10 mx-auto">
        <h2 className=" text-lg font-semibold text-teal-700">
          Investment VS Revenue
        </h2>
        <ComposedChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 20,
            right: 20,
            bottom: 20,
            left: 20,
          }}
        >
          <CartesianGrid stroke="#f5f5f5" />
          <XAxis dataKey="month" scale="band" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="investment"
            fill="#82ca9d"
            stroke="#8884d8"
          />
          <Bar dataKey="revenue" barSize={20} fill="#413ea0" />
          <Line type="monotone" dataKey="sell" stroke="#ff7300" />
        </ComposedChart>
      </div>
      {/* StackedAreaChart */}
      <div className="my-10 mx-auto">
        <h2 className=" text-lg font-semibold text-teal-700">
          Investment VS Revenue
        </h2>
        <AreaChart
          width={500}
          height={400}
          data={data}
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Tooltip />
          <Legend />
          <Area
            type="monotone"
            dataKey="investment"
            stackId="1"
            stroke="#8884d8"
            fill="#8884d8"
          />
          <Area
            type="monotone"
            dataKey="revenue"
            stackId="1"
            stroke="#82ca9d"
            fill="#579d8f"
          />
        </AreaChart>
      </div>

      <div className="mx-auto my-10">
        <h2 className="text-lg font-semibold text-teal-700">
          Investment VS Revenue
        </h2>
        <PieChart width={400} height={400}>
          <Tooltip />
          <Pie
            data={data}
            dataKey="revenue"
            cx="50%"
            cy="50%"
            outerRadius={60}
            fill="#8884d8"
          />
          <Pie
            data={data}
            dataKey="investment"
            cx="50%"
            cy="50%"
            innerRadius={70}
            outerRadius={90}
            fill="#82ca9d"
            label
          />
        </PieChart>
      </div>
    </div>
  );
};

export default Dashboard;
