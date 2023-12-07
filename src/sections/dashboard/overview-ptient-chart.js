import { useMemo } from "react";
import ReactApexChart from "react-apexcharts";
import { MONTHS } from "../../utils/constants";

export default function OverviewPatientChart() {
  const data = useMemo(
    () => ({
      series: [
        {
          name: "Male",
          data: [
            2331, 3340, 4328, 2351, 5342, 6109, 7100, 1000, 2300, 5000, 7398,
            2190,
          ],
          color: "#3A6FF8",
        },
        {
          name: "Female",
          data: [
            1331, 3340, 7328, 6351, 5342, 3109, 5100, 800, 4300, 3000, 6398,
            1190,
          ],
          color: "#dddddd",
        },
      ],

      options: {
        chart: {
          toolbar: {
            show: false,
          },
        },

        legend: {
          position: "top",
        },

        dataLabels: {
          enabled: false,
        },

        stroke: {
          curve: "smooth",
        },

        xaxis: {
          categories: MONTHS, // Replace with months
        },

        yaxis: {
          min: 0,
          max: 8000,
          tickAmount: 4,
        },
      },
    }),
    []
  );

  return (
    <div className="bg-white rounded-md p-6 h-96">
      <div className="flex items-center justify-between">
        <div>
          <h6 className="font-bold"> Patients Overview</h6>
        </div>

        <div className="months-box">
          <select className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1">
            <option selected>Monthly</option>
            {MONTHS.map((month, index) => (
              <option key={index} value={month}>
                {month}
              </option>
            ))}
          </select>
        </div>
      </div>

      <ReactApexChart
        options={data.options}
        series={data.series}
        height="310"
        type="line"
      />
    </div>
  );
}
