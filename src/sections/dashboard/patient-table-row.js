import PropTypes from "prop-types";
import { ParseDate } from "../../utils/format-time";

export default function PatientTableRow({ row }) {
  const { image, fullName, dateIn, diagnostic, status } = row;

  const statusClass =
    status === "incoming"
      ? "text-orange-400"
      : status === "cancelled"
      ? "text-gray-300"
      : "text-blue-600";

  return (
    <tr className="bg-white ">
      <th className=" py-4 font-medium flex items-center">
        <img className="h-8 w-10 rounded-md me-2" src={image} alt="" />
        {fullName}
      </th>
      <td className="text-gray-300 py-4 ">{ParseDate(dateIn)}</td>
      <td className="text-gray-300 py-4">{diagnostic}</td>
      <td className={[" py-4", statusClass].join(" ")}>{status}</td>

      <td className="text-gray-300 py-4">
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="25"
          height="24"
          viewBox="0 0 25 24"
          fill="none"
        >
          <path
            d="M19.4101 9.25C20.9118 9.25 22.127 10.48 22.127 12C22.127 13.52 20.9118 14.75 19.4101 14.75C17.9084 14.75 16.6932 13.52 16.6932 12C16.6932 10.48 17.9084 9.25 19.4101 9.25ZM19.4101 13.25C20.0918 13.25 20.645 12.69 20.645 12C20.645 11.31 20.0918 10.75 19.4101 10.75C18.7284 10.75 18.1751 11.31 18.1751 12C18.1751 12.69 18.7284 13.25 19.4101 13.25Z"
            fill="#A9A9A9"
          />
          <path
            d="M5.57805 9.25C7.07974 9.25 8.29492 10.48 8.29492 12C8.29492 13.52 7.07974 14.75 5.57805 14.75C4.07637 14.75 2.86119 13.52 2.86119 12C2.86119 10.48 4.07637 9.25 5.57805 9.25ZM5.57805 13.25C6.25974 13.25 6.81299 12.69 6.81299 12C6.81299 11.31 6.25974 10.75 5.57805 10.75C4.89637 10.75 4.34311 11.31 4.34311 12C4.34311 12.69 4.89637 13.25 5.57805 13.25Z"
            fill="#A9A9A9"
          />
          <path
            d="M12.4941 9.25C13.9958 9.25 15.2109 10.48 15.2109 12C15.2109 13.52 13.9958 14.75 12.4941 14.75C10.9924 14.75 9.7772 13.52 9.7772 12C9.7772 10.48 10.9924 9.25 12.4941 9.25ZM12.4941 13.25C13.1758 13.25 13.729 12.69 13.729 12C13.729 11.31 13.1758 10.75 12.4941 10.75C11.8124 10.75 11.2591 11.31 11.2591 12C11.2591 12.69 11.8124 13.25 12.4941 13.25Z"
            fill="#A9A9A9"
          />
        </svg>
      </td>
    </tr>
  );
}

PatientTableRow.propTypes = {
  row: PropTypes.object,
};
