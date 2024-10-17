import React from 'react';
import { Bar } from 'react-chartjs-2';
import { Chart as ChartJS, CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend } from 'chart.js';

ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

interface SalesData {
    productID: string;
    costPrice: string;
    sellingPrice: string;
}

interface BarChartProps {
    data: SalesData[];
}

const BarChart: React.FC<BarChartProps> = ({ data }) => {
    const labels = data.map(item => item.productID);
    const costPrices = data.map(item => item.costPrice);
    const sellingPrices = data.map(item => item.sellingPrice);

    const chartData = {
        labels: labels,
        datasets: [
            {
                label: 'Cost Price',
                data: costPrices,
                backgroundColor: 'rgba(75, 192, 192, 0.6)',
            },
            {
                label: 'Selling Price',
                data: sellingPrices,
                backgroundColor: 'rgba(255, 159, 64, 0.6)',
            },
        ],
    };

    const options = {
        responsive: true,
        plugins: {
            legend: {
                position: 'top' as const,
            },
        },
        scales: {
            y: {
                beginAtZero: true,
            },
        },
    };

    return <Bar data={chartData} options={options} />;
};

export default BarChart;
