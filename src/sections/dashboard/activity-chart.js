import ReactApexChart from "react-apexcharts";
import { MONTHS } from "../../utils/constants";
import { useMemo } from "react";

export default function ActivityChart() {
  const data = useMemo(
    () => ({
      series: [
        {
          name: "Male",
          data: [
            7331, 7370, 7000, 7351, 7372, 7109, 7000, 7000, 7300, 7000, 7398,
            7190,
          ],
          color: "green",
        },
        {
          name: "Female",

          data: [
            3331, 3370, 3000, 3351, 3342, 3109, 3100, 3000, 3300, 3000, 3398,
            3190,
          ],
          color: "blue",
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

        markers: {
          size: 6,
        },

        xaxis: {
          labels: {
            show: false,
          },
          categories: MONTHS,
        },

        yaxis: {
          show: false,
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
          <h6 className="font-bold">Ativity</h6>
        </div>

        <div className="months-box">
          <select className="bg-white border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-1">
            <option selected>Months</option>
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
        type="area"
      />
    </div>
  );
}
