"use client"

import React from 'react';
import { Line } from 'react-chartjs-2';
import { Chart, ChartData, ChartOptions, ChartType, registerables } from 'chart.js';
Chart.register(...registerables);

interface FollowersChartProps {
  data: ChartData<'line'>;
  options: ChartOptions<'line'> ;
}

const FollowersChart: React.FC<FollowersChartProps> = ({ data, options }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <h2 className="text-xl font-bold mb-4">Followers Count</h2>
      <Line data={data} options={options} />
    </div>
  );
};

export default FollowersChart;