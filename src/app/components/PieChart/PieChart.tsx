"use client"

import React from "react";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement,
} from "chart.js";
import { useSelector } from "react-redux";
import { AppStore } from "@/Redux/store";

ChartJS.register(
  LineElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend,
  PointElement
);

const LineChart = () => {
  const { lineChart} = useSelector((state: AppStore) => state.graph);
  const labels = lineChart.map((data) => `Product ${data.productID}`);
  const margins = lineChart.map((data) => parseInt(data.margin));

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Profit Margin",
        data: margins,
        borderColor: "rgba(75, 192, 192, 1)",
        backgroundColor: "rgba(75, 192, 192, 0.2)",
        fill: true,
        tension: 0.4,
      },
    ],
  };

  const options = {
    responsive: true,
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return <Line data={data} options={options} />;
};

export default LineChart;
