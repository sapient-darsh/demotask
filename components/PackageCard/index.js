import Link from "next/link";
import React from "react";
import { HiCheck } from "react-icons/hi";

const PackageCard = ({ data }) => {
  return (
    <>
      <div
        dir="rtl"
        className="group  px-4 m-4  shadow-md rounded-2xl  text-center bg-white hover:bg-[#4344ec]
         hover:text-white transition duration-300 hover:scale-110 "
      >
        <div className="rounded-b-xl border-t-8 border-[#4344ec] group-hover:border-[#eef5ff]"></div>
        <div className="py-8 w-60 h-[500px] flex flex-col justify-between items-center">
          <div>
            <div className=" my-2 py-4 text-[24px] font-semibold text-[#4344ec] group-hover:text-white">
              {data.duration}
            </div>
            <div className=" my-1 py-2 text-3xl font-bold text-[#4344ec] group-hover:text-white">
              {data.price}
            </div>
            <div className="text-sm font-normal text-[#ababab] group-hover:text-white">
              {data.label}
            </div>
          </div>
          <div className="text-right">
            <ol>
              {data.list.map((item) => {
                return (
                  <li
                    key={item.id}
                    className=" text-[14px] text-[#606060] group-hover:text-white flex flex-wrap justify-start items-center"
                  >
                    <HiCheck
                      size={20}
                      className="text-[#4344ec] group-hover:text-white"
                    />
                    <p className="mx-2">{item.title}</p>
                  </li>
                );
              })}
            </ol>
          </div>

          <Link href="/dashboard">
            <span className="py-3 px-10 rounded-full text-[14px] font-semibold text-[#4344ec] group-hover:text-white  border-2 border-[#4344ec] group-hover:border-[#ffffff] ">
              إشترك الآن
            </span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default PackageCard;
