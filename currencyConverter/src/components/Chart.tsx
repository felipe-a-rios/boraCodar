import React, { FC } from "react";
import {
  LineChart,
  Line,
  CartesianGrid,
  XAxis,
  YAxis,
  Tooltip,
} from "recharts";

interface ExchangeRate {
  currency: string;
  rate: number;
}

interface ChartProps {
  exchangeRates: ExchangeRate[];
}

const ExchangeRateChart: FC<ChartProps> = ({ exchangeRates }) => {
  return (
    <LineChart width={288} height={208} data={exchangeRates} className="mt-6">
      <Line type="monotone" dataKey="rate" stroke="#8884d8" />
      <CartesianGrid stroke="#ccc" />
      <XAxis dataKey="currency" />
      <YAxis />
      <Tooltip />
    </LineChart>
  );
};

export default ExchangeRateChart;
