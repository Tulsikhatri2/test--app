import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";
import React from "react";
import { useSelector } from "react-redux";
import { AppStore } from "@/Redux/store";

ChartJS.register(
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend
);

const BarChart: React.FC = () => {
  const { barChart } = useSelector((state: AppStore) => state.graph);
  const chartData = {
    labels: barChart.map((item: any) => item.name),
    datasets: [
      {
        label: "Target",
        data: barChart.map((item) => parseInt(item.target)),
        backgroundColor: "gray",
      },
      {
        label: "Achievement",
        data: barChart.map((item) => parseInt(item.achievement)),
        backgroundColor: "black",
      },
    ],
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        position: "top" as const,
      },
      title: {
        display: true,
        text: "Target vs Achievement",
      },
    },
  };

  return <Bar data={chartData} options={options} />;
};

export default BarChart;
