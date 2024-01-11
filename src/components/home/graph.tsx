"use client";
import { LineChart } from "@mui/x-charts";
import React from "react";

export default function Graph() {
  return (
    <div className="w-full flex justify-center items-center">
      <LineChart
        xAxis={[{ data: [1, 2, 3, 5, 8, 10] }]}
        series={[
          {
            data: [2, 5.5, 2, 8.5, 1.5, 5],
          },
        ]}
        width={800}
        height={300}
      />
    </div>
  );
}
