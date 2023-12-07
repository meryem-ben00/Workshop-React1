export default function DashboardPanel() {
  return (
    <>
      <div className="grid grid-cols-4 gap-12">
        <div className="bg-white rounded-md p-4">
          <h6 className="text-sm font-bold">New Patients</h6>
          <div className="flex items-center justify-between my-3">
            <span className="text-green-600 font-bold">125</span>
            <img src="/assets/icons/chart-1.png" alt="" />
          </div>
          <div className="h-1 w-full bg-neutral-200 ">
            <div className="h-1 bg-purple-900" style={{ width: "45%" }}></div>
          </div>
        </div>

        <div className="bg-white rounded-md p-4">
          <h6 className="text-sm font-bold">Old Patients</h6>
          <div className="flex items-center justify-between my-3">
            <span className="text-green-600 font-bold">218</span>
            <img src="/assets/icons/chart-3.png" alt="" />
          </div>
          <div className="h-1 w-full bg-neutral-200 ">
            <div className="h-1 bg-red-300" style={{ width: "45%" }}></div>
          </div>
        </div>

        <div className="bg-white rounded-md p-4">
          <h6 className="text-sm font-bold">Today's Visitor</h6>
          <div className="flex items-center justify-between my-3">
            <span className="text-green-600 font-bold">25</span>
            <img src="/assets/icons/chart-2.png" alt="" />
          </div>
          <div className="h-1 w-full bg-neutral-200 ">
            <div className="h-1 bg-green-300" style={{ width: "45%" }}></div>
          </div>
        </div>

        <div className="bg-white rounded-md p-4">
          <h6 className="text-sm font-bold">Visitors</h6>
          <div className="flex items-center justify-between my-3">
            <span className="text-green-600 font-bold">2479</span>
            <img src="/assets/icons/chart-4.png" alt="" />
          </div>
          <div className="h-1 w-full bg-neutral-200 ">
            <div className="h-1 bg-yellow-300" style={{ width: "45%" }}></div>
          </div>
        </div>
      </div>
    </>
  );
}
