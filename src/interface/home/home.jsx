import React, { useEffect } from "react";
import { logo } from "../../images";
import { disignData, disignData1 } from "../../components/data";

const Home = () => {
  // useEffect(() => {
  //   window.scrollTo(0, 0);
  // }, []);
  return (
    <main className="w-full flex flex-col gap-4">
      <section className="w-full h-screen bg-primary ">
        <main className="grid grid-cols-2 gap-3 w-11/12 mx-auto h-screen">
          <div className="flex flex-col justify-center items-center gap-3">
            <h1 className="clamp2 text-white font-bold">
              СТРОИТЕЛЬНАЯ КОМПАНИЯ «EXPRESS AUTOMATICA» - это Надежность,
              Качество, Технологии.
            </h1>
            <p className="clamp4 text-thin ">
              Компания «EXPRESS AUTOMATICA» проектирует и строит жилые дома,
              коммерческие здания, промышленные объекты, выполняет для них
              реконструкцию, ремонт, отделку. Мы работаем быстро, контролируем
              качество, даем гарантию на все услуги.
            </p>
          </div>
          <div></div>
        </main>
      </section>
      <section className="w-11/12 max-w-[1440px] mx-auto grid grid-cols-3 gap-6 mb-2">
        {[1, 2, 3].map((item, idx) => (
          <div
            key={idx}
            className="hover:scale-105 transition-all duration-300 cursor-pointer w-full h-[300px] flex justify-center items-center flex-col gap-3 bg-secondaryBg rounded-[12px]"
          >
            <img src={logo} alt="" />
            <h1>Строительные услуги</h1>
          </div>
        ))}
      </section>
      <section className="w-11/12 max-w-[1440px] mx-auto grid grid-cols-2 gap-3">
        <h1 className="col-span-2 text-center w-full clamp3 text-primary rounded-[12px] font-[500]">
          СТРОИТЕЛЬНАЯ КОМПАНИЯ
          <br /> «EXPRESS AUTOMATICA»
        </h1>
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
              <strong>РЕКОНСТРУКЦИЯ:</strong> жилых, коммерческих, общественных
              зданий, медицинских учреждений, промышленных офисных, торговых
              комплексов;
            </li>
            <li>
              <strong>РЕМОНТ, ОТДЕЛКА:</strong> наружная, внутренняя отделка для
              жилых комплексов, бизнес-центров, офисов.
            </li>
          </ul>
        </div>
        <div className="w-full max-h-[400px]">
          <img className="w-full h-full object-contain" src={logo} alt="" />
        </div>
      </section>
      <section className="w-11/12 max-w-[1440px] mx-auto flex flex-col gap-6">
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
          <div className="hover:scale-105 transition-all duration-300 w-full flex flex-col justify-center items-center gap-4 bg-secondaryBg p-4 rounded-md">
            <div className="bg w-full h-[150px]">
              <img
                className="rounded-md w-full h-full object-contain"
                src={logo}
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
          <div className="hover:scale-105 transition-all duration-300 w-full flex flex-col justify-center items-center gap-4 bg-secondaryBg p-4 rounded-md">
            <div className="bg w-full h-[150px]">
              <img
                className="rounded-md w-full h-full object-contain"
                src={logo}
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
        </div>
      </section>
    </main>
  );
};

export default Home;
