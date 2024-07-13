import React, { useEffect } from "react";
import { logo } from "../../images";
import { disignData, disignData1, home1Data } from "../../components/data";
import "./index.scss";
import { homeBackground } from "../../videos";
import { home4, home5, home6 } from "../../images/home-img";
const Home = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <main className="w-full flex flex-col gap-[100px]">
      <section className="relative w-full h-screen content bg-black/10">
        <div className="absolute top-0 left-0 w-full h-full bg-black/50 z-1"></div>
        <div className="video-background">
          <video
            autoPlay
            loop
            muted
            playsInline
            className="min-w-full min-h-full object-cover"
          >
            <source src={homeBackground} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        </div>
        <main className="flex justify-center items-start flex-col  gap-3 w-11/12 mx-auto h-screen z-2 relative">
          <div className="w-full lg:w-1/2 flex flex-col justify-center items-center gap-3 text-start">
            <h1 className="clamp2 text-white font-bold head-h1">
              СТРОИТЕЛЬНАЯ КОМПАНИЯ «EXPRESS AUTOMATICA» - это Надежность,
              Качество, Технологии.
            </h1>
            <p className="clamp4 text-white head-h1">
              Компания «EXPRESS AUTOMATICA» проектирует и строит жилые дома,
              коммерческие здания, промышленные объекты, выполняет для них
              реконструкцию, ремонт, отделку. Мы работаем быстро, контролируем
              качество, даем гарантию на все услуги.
            </p>
          </div>
        </main>
      </section>
      <section className="w-11/12 max-w-[1440px] mx-auto grid grid-cols-3 gap-6 mb-2">
        {home1Data.map((item, idx) => (
          <div
            key={idx}
            className="hover:scale-105 transition-all duration-300 cursor-pointer w-full  flex justify-center items-center flex-col gap-3 bg-secondaryBg rounded-[12px] p-4"
          >
            <div className="w-full h-[220px]">
              <img
                className="rounded-md w-full h-full object-cover"
                src={item.img}
                alt=""
              />
            </div>
            <h1 className="text-thin font-bold clamp3">{item.title}</h1>
          </div>
        ))}
      </section>
      <section className="w-11/12 max-w-[1440px] mx-auto flex flex-col gap-3">
        <h1 className="text-center w-full clamp3 text-primary rounded-[12px] font-[500]">
          СТРОИТЕЛЬНАЯ КОМПАНИЯ
          <br /> «EXPRESS AUTOMATICA»
        </h1>
        <div className="flex justify-between items-center gap-3">
          <div className="flex justify-start items-start flex-col gap-3">
            <ul className="text-thin flex flex-col gap-3">
              <li>
                <strong>ПРОЕКТИРОВАНИЕ:</strong> эскизные, рабочие,
                дизайн-проекты, проекты для строительства, реконструкции,
                капитального ремонта, инженерных систем, их согласование.
              </li>
              <li>
                <strong>СТРОИТЕЛЬСТВО:</strong> промышленные, коммерческие
                быстровозводимые здания, жилые дома, малоэтажные здания;
              </li>
              <li>
                <strong>РЕКОНСТРУКЦИЯ:</strong> жилых, коммерческих,
                общественных зданий, медицинских учреждений, промышленных
                офисных, торговых комплексов;
              </li>
              <li>
                <strong>РЕМОНТ, ОТДЕЛКА:</strong> наружная, внутренняя отделка
                для жилых комплексов, бизнес-центров, офисов.
              </li>
            </ul>
          </div>
          <div className="w-full max-h-[400px]">
            <img className="w-full h-full object-contain" src={home4} alt="" />
          </div>
        </div>
      </section>
      <section className="w-11/12 max-w-[1440px] mx-auto flex flex-col gap-[32px]">
        <h1 className="text-center w-full clamp3 text-primary rounded-[12px] font-[500]">
          Мы работаем на условиях генерального подряда,
          <br /> субподряда, авторского надзора.
        </h1>
        <div className="grid grid-cols-5 gap-4">
          {disignData.map((item, idx) => (
            <div
              key={idx}
              className="flex flex-col gap-4 bg-secondaryBg p-4 rounded-md"
            >
              <div className="bg w-full h-[100px]">
                <img
                  className="rounded-md w-full h-full object-contain"
                  src={item.img}
                  alt=""
                />
              </div>
              <h1 className="text-primary font-bold clamp3">{item.title}</h1>
              <p className="text-thin clamp4">{item.desc}</p>
            </div>
          ))}
        </div>
        <div className="grid grid-cols-2 gap-6 mb-4">
          <div className="hover:scale-105 transition-all duration-300 w-full flex flex-col justify-start items-start gap-4 bg-secondaryBg p-4 rounded-md">
            <div className="bg w-full h-[230px]">
              <img
                className="rounded-md w-full h-full object-cover"
                src={home5}
                alt=""
              />
            </div>
            <h1 className="text-primary font-bold clamp3">
              Строительство и ремонт
            </h1>
            <ul className="text-thin clamp4 ">
              <li>Ремонт офисов </li>
              <li>Строительство загородных домов </li>
              <li>Малоэтажное строительство </li>
              <li>Ремонт и реконструкция зданий </li>
              <li>Общестроительные работы </li>
              <li>Отделочные работы </li>
              <li>Фасадные, кровельные работы </li>
              <li>Гидроизоляционный работы </li>
            </ul>
          </div>
          <div className="hover:scale-105 transition-all duration-300 w-full flex flex-col justify-start items-start gap-4 bg-secondaryBg p-4 rounded-md">
            <div className="bg w-full h-[230px]">
              <img
                className="rounded-md w-full h-full object-cover"
                src={home6}
                alt=""
              />
            </div>
            <div className="w-full">
              <h1 className="text-primary font-bold clamp3">
                Монтаж инженерных систем
              </h1>
              <ul className="text-thin clamp4 ">
                <li>Электромонтаж </li>
                <li>Вентиляция </li>
                <li>Холодоснабжение </li>
                <li>Системы отопления </li>
                <li>Сантехнические работы </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default Home;
