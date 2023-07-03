import React from "react";

const QuestionBankCard = () => {
  return (
    <div
      dir="rtl"
      className="w-72 h-auto p-8 border border-1 shadow-md rounded-md  bg-white"
    >
      <img
        className="my-4"
        src="/images/icon_note.svg"
        width="40"
        height="40"
      />
      <div className="my-4 text-[22px] font-semibold">صمم اختبارك</div>
      <div className="flex flex-wrap justify-start items-center">
        <span className="ml-2 my-2 py-1 px-4 rounded-full text-[#6f6ac3] bg-[#d9d9fc]">
          قدرات
        </span>
        <span className="ml-2 my-2 py-1 px-4 rounded-full text-[#d7a0bc] bg-[#fedfef]">
          قليل
        </span>
        <span className="ml-2 my-2 py-1 px-4 rounded-full text-[#da977f] bg-[#faded5]">
          لفظي
        </span>
      </div>
      <div className="my-4 text-[18Px] font-semibold">حول الاختبار</div>
      <div className="my-2 text-[16px] font-medium text-[#ababab]">
        صمم اختبارك على طريقتك الخاصة ، واختر المهارات والدروس التي تناسبك تحتاج
      </div>
    </div>
  );
};

export default QuestionBankCard;
