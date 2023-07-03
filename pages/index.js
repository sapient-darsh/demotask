import PackageCard from "@/components/PackageCard";
import Head from "next/head";

const packageData = [
  {
    id: 1,
    duration: "3 اشهر",
    price: "200 ريال",
    label: "تتضمن العبوة",
    list: [
      {
        id: 1,
        title: "دورة بناء القدرات الشاملة لمدة ثلاثة أشهر",
      },
      {
        id: 2,
        title: "كتاب لإخفاء الامكانيات الشاملة مدى الحياة",
      },
      {
        id: 3,
        title: "بنك الأسئلة لمدة ثلاثة أشهر",
      },
    ],
  },
  {
    id: 2,
    duration: "6 اشهر",
    price: "350 ريال",
    label: "تتضمن العبوة",
    list: [
      {
        id: 1,
        title: "دورة استخلاص شاملة لمدة ستة أشهر",
      },
      {
        id: 2,
        title: "كتاب الاستنباط الشامل مدى الحياة",
      },
      {
        id: 3,
        title: "بنك الأسئلة للقدرات لمدة سنة واحدة",
      },
    ],
  },
  {
    id: 3,
    duration: "سنة",
    price: "500 ريال",
    label: "تتضمن العبوة",
    list: [
      {
        id: 1,
        title: "دورة القدرات الخفية الشاملة لمدة عام",
      },
      {
        id: 2,
        title: "دورة القدرات الخفية الشاملة مدى الحياة",
      },
      {
        id: 3,
        title: "بنك الأسئلة للقدرات للعام",
      },
    ],
  },
];

const Home = () => {
  return (
    <div>
      <Head>
        <title>Pricing</title>
      </Head>
      {/* package cards */}
      <div className=" w-full h-screen flex flex-col justify-center items-center ">
        <span dir="rtl" className="text-3xl font-semibold my-4 p-2">
          عبوات المخفي
        </span>
        <div className="md:flex md:justify-center md:items-center">
          {packageData.map((item) => {
            return <PackageCard key={item.id} data={item} />;
          })}
        </div>
      </div>
    </div>
  );
};

export default Home;
