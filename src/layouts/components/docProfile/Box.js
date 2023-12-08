import upImg from "../../../assets/images/up.svg";
import downImg from "../../../assets/images/down.svg";
const Box = ({title,number,up,percentage}) => {
  return (
    <div className="drop-shadow-xl flex flex-col gap-y-[10px] w-[44%] h-[110px] p-[10px] text-[white] rounded-[10px] relative bg-[#2E8544]">
        <div className={`flex items-center justify-around absolute w-[42.5%] h-[35px]  ${up ? "bg-white" : "bg-[#FBC3C3] "} right-[-10px] top-[50px] shadow-xl rounded-md`}>
            <p className={up ? "text-[#008000] drop-shadow-2xl" : "text-[#D30404] drop-shadow-xl"} >{percentage}%</p>
            <img src={up ? upImg : downImg} alt="" />
        </div>
        <h2 className="text-[16px]">{title}</h2>
        <p className="text-[32px]">{number}</p>
    </div>
  )
}

export default Box