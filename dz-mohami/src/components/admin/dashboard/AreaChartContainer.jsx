"use client";
import React from "react";
import { Chart as ChartJS, CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend } from "chart.js";
import { Line } from "react-chartjs-2";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Title, Tooltip, Filler, Legend);

export const options = {
  responsive: true,
  plugins: {
    legend: {
      position: "top",
    },
    title: {
      display: false,
      text: "Avocata Par wilaya",
    },
  },
};

const labels = ["Alger", "Constantine", "Oran", "Adrar", "Chlef", "Oum El Boughit", "Khenchela"];

export const data = {
  labels,
  datasets: [
    {
      fill: true,
      label: "Avocats",
      data: [25, 20, 30, 22, 17, 29, 22],
      borderColor: "#EA163C",
      backgroundColor: "rgba(208, 16, 67, 0.5)",
    },
  ],
};

export function AreaChartContainer() {
  return (
    <Line
      options={options}
      data={data}
      height={120}
      width={400}
      className=" w-full "
    />
  );
}
