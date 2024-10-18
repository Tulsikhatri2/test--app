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
  const labels = lineChart.map((data) => parseInt(data.productID));
  const costPrice = lineChart.map((data)=>parseInt(data.costPrice));
  const sellingPrice = lineChart.map((data)=>parseInt(data.sellingPrice))

  const data = {
    labels: labels,
    datasets: [
      {
        label: "Cost Price",
        data: costPrice,
        borderColor: "rgba(75, 192, 192, 0.6)",
        backgroundColor: "rgba(75, 192, 192, 0.6)",
        fill: true,
        tension: 0.4
      },
      {
        label: "Selling Price",
        data: sellingPrice,
        borderColor: "rgba(255, 159, 64, 0.6)",
        backgroundColor: "rgba(255, 159, 64, 0.6)",
        fill: true,
        tension: 0.4
      }
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
