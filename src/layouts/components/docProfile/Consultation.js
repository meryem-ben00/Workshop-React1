import React from "react";

const Consultation = () => {
    return (
        <div className="flex flex-col h-[330px] bg-white rounded-[15px] p-[20px] gap-y-[10px]" style={{width: 'calc(66% + 40px)'}}>
            <div className="w-full flex justify-between">
                <h2 className="text-[22.13px] font-medium">Consultation</h2>
                <a href="" className="underline decoration-solid font-medium">
                    View more
                </a>
            </div>
            <div className="flex h-[300px] border-[1px] border-[#58B6DE]/50 rounded-[12px]">
                <div className="flex flex-col  min-w-[360px] gap-y-[20px] px-[40px] items-center justify-center border-r-[1px] border-r-[#58B6DE]/50">
                    <div className="flex items-center gap-x-[20px]">
                        <div className={`w-[60px] h-[60px] rounded-full border-[1px] border-[#128983]/60 flex justify-center items-center`}>
                            <div className={`w-[50px] h-[50px] rounded-full bg-[#128983]/25 flex justify-center items-center text-[18.82px]`}>
                                DW
                            </div>
                        </div>
                        <div>
                            <p className="text-[25px] font-semibold">Denzel White</p>
                            <span className={`text-[14px] text-[#000000]/50 `}>
                                Male - 28 Years 3 Months
                            </span>
                        </div>
                    </div>
                    <div className="w-full flex justify-between">
                        <p className="text-[17px] font-medium">ADHD</p>
                        <p className="text-[17px] font-medium">Anxiety</p>
                        <p className="text-[17px] font-medium">Depression</p>
                    </div>
                </div>
                <div className="flex flex-col gap-y-[40px] pl-[30px] pr-[30px] m-auto items-start justify-center ">
                    <div className="flex gap-x-[20px]">
                        <p className="text-[13px] font-medium">Last Checked</p>
                        <p className="text-[13px] text-[#000000]/70"><strong className="text-[#000000]">Dr Everly</strong> on 21 April 2021 Prescription{' '}
                        <a href="" className="text-[#0000FF]/70 underline decoration-solid" >#2J983KT0</a> </p>
                    </div>
                    <div className="flex gap-x-[20px]">
                        <p className="text-[13px] font-medium">Observation</p>
                        <p className="text-[13px] text-[#000000]/50">High fever and cough at normal hemoglobin levels.</p>
                    </div>
                    <div className="flex gap-x-[20px]">
                        <p className="text-[13px] font-medium">Prescription</p>
                        <p className="text-[13px] text-[#000000]/50">Paracetmol - 2 times a day Dizopam - Day and Night before meal Wikoryl</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Consultation;
