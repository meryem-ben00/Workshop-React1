import { _PATIENT_DATA } from "../../_mock/patient-data";
import PatientTableRow from "./patient-table-row";

export default function PatientTableData() {
  return (
    <div className="relative overflow-x-auto bg-white rounded-md py-6 px-3 h-96">
      <div className="flex items-center justify-between">
        <div>
          <h6 className="font-bold"> Patients Overview</h6>
        </div>

        <span className="text-xs text-blue-600">View All</span>
      </div>

      <table className="w-full text-sm text-left rtl:text-right">
        <thead className="text-xs text-gray-300 ">
          <tr>
            <th scope="col" className="font-normal py-3">
              Patient name
            </th>
            <th scope="col" className="font-normal py-3">
              Date in
            </th>
            <th scope="col" className="font-normal py-3">
              Diagnostic
            </th>
            <th scope="col" className="font-normal py-3">
              Status
            </th>
            <tr></tr>
          </tr>
        </thead>
        <tbody>
          {_PATIENT_DATA.map((row) => (
            <PatientTableRow row={row} key={row?.id} />
          ))}
        </tbody>
      </table>
    </div>
  );
}
