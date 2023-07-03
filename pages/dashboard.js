import QuestionBankCard from "@/components/QuestionBankCard";
import Head from "next/head";
import React from "react";

const Dashboard = () => {
  return (
    <div>
      <Head>
        <title>Dashboard</title>
      </Head>
      <div dir="rtl" className="m-4">
        {/* Header Section */}
        <div>
          <div className="text-[20px] font-normal">
            الصفحة الرئيسية / بنك الأسئلة / بنك الأسئلة للقدرات
          </div>
          <div className="my-[60px] text-[32px] font-bold">
            بنك أسئلة المهارات
          </div>
        </div>
        {/* Question Bank Section */}
        <div className="m-4 p-12 rounded-xl  bg-white ">
          {/* Header */}
          <div className="flex justify-between items-center">
            <div className="flex justify-between items-center">
              <div className="text-[24px] font-semibold">بنك الأسئلة</div>
              {/* <div>Tabs</div> */}
            </div>
            {/* <div>Select</div> */}
          </div>
          {/* Card */}
          <div className="my-12">
            <QuestionBankCard />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
