import Box from "./Box"

const Statistic = () => {
  return (
    <div className="w-[33%] h-[467px] flex flex-col justify-between pt-5">
      <div className="flex flex-col gap-y-4 text-white pl-[10px]">
        <h1 className="text-[32.58px] font-bold">Dr.Brooklyn Simmons</h1>
        <h2 className="text-[22px]">Visits for today</h2>
        <h2 className="text-[55.33px]">104</h2>
      </div>
      <div className="flex flex-wrap gap-6 w-full">
        <Box title={"New Patients"} number={40} up={true}  percentage={51}/>
        <Box title={"Old Patients"} number={64} up={false}  percentage={20}/>
        <Box title={"New Patients"} number={40} up={true}  percentage={51}/>
        <Box title={"Old Patients"} number={64} up={false}  percentage={20}/>
      </div>
    </div>
  )
}

export default Statistic