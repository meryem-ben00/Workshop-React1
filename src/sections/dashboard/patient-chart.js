import { useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import { MONTHS } from "../../utils/constants";

export default function PatientChart() {
  
  const data = useMemo(
    () => ({
      series: [
        {
          name: "series1",
          data: [31, 40, 28, 51, 42, 109, 100],
          color: "#dddddd",
        },
        {
          name: "series2",
          data: [11, 32, 45, 32, 34, 52, 41],
          color: "#4CC2B0",
        },
      ],

      options: {
        chart: {
          toolbar: {
            show: false,
          },
        },

        legend: {
          show: false,
        },

        dataLabels: {
          enabled: false,
        },

        stroke: {
          curve: "smooth",
        },

        xaxis: {
          categories: MONTHS,
        },
      },
    }),
    []
  );

  return (
    <div className="bg-white rounded-md p-6 h-96">
      {/* Chart Header */}
      <div className="flex items-center justify-between">
        <h6 className="font-bold">New Patients</h6>

        <span className="text-xs text-green-300 flex items-center">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="w-4 h-6"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M4.5 15.75l7.5-7.5 7.5 7.5"
            />
          </svg>
          25% High then last month
        </span>
      </div>

      {/* Chart Analytics */}

      <div className="flex items-center justify-around">
        <div>
          <span className="text-xs text-gray-300">Overall Growth</span>
          <h6 className="font-bold text-xs">35.7%</h6>
        </div>

        <div>
          <span className="text-xs text-gray-300">Montly</span>
          <h6 className="font-bold text-xs">55.7%</h6>
        </div>

        <div>
          <span className="text-xs text-gray-300">Day</span>
          <h6 className="font-bold text-xs">5.7%</h6>
        </div>
      </div>

      <ReactApexChart
        options={data.options}
        series={data.series}
        type="area"
        height="280"
      />
    </div>
  );
}
