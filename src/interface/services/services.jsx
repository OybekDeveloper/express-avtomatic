import React, { useEffect } from "react";
import { servicesData } from "../../components/data";
import { home1 } from "../../images/home-img";

const Services = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);
  return (
    <main className="w-full flex flex-col gap-[100px]">
      <section className="w-11/12 mx-auto max-w-[1440px] pt-4">
        <h1 className="text-primary font-bold clamp3 text-center">
          Услуги строительной компании «EXPRESS AUTOMATICA»
        </h1>
        <div className="grid grid-cols-4 gap-4 mt-3">
          {servicesData.map((item, idx) => (
            <div
              key={idx}
              className="hover:scale-105 transition-all duration-300 cursor-pointer w-full  flex justify-center items-center flex-col gap-3 bg-secondaryBg rounded-[12px] p-4"
            >
              <div>
                <img className="rounded-md" src={home1} alt="" />
              </div>
              <h2>{item.title}</h2>
              <p>{item.description}</p>
            </div>
          ))}
        </div>
        <p className="clamp4 text-thin pt-4">
          Строительная компания «EXPRESS AUTOMATICA» проектирует и строит жилые
          дома, быстровозводимые здания, офисные, торговые, медицинские центры,
          промышленные объекты, а также выполняет для них реконструкцию и
          ремонт.
        </p>
      </section>
      <section className="w-11/12 mx-auto max-w-[1440px] pt-4">
        <h1 className="text-primary font-bold clamp3">
          Качество услуг
        </h1>
        <ul className="flex flex-col gap-4">
          <li>
            <strong>Документы и сертификаты.</strong>. Работа компании
            лицензирована. «EXPRESS AUTOMATICA» является членом строительной
            СРО. Сотрудники имеют профильное образование, необходимые допуски.
            Это гарантирует надежность, качество, соблюдение технологий
            строительства.
          </li>
          <li>
            <strong>Обязательства по договору. </strong>.Мы работаем официально,
            закрепляем условия сотрудничества в договоре, гарантируем их
            исполнение. Это касается и качества, и соблюдения сроков, и цен на
            услуги.
          </li>
          <li>
            <strong>Гарантия.</strong>.Закреплена в договоре, действует на
            выполненные работы, поставленные материалы, оборудование.
          </li>
        </ul>
      </section>
      <section className="w-11/12 mx-auto max-w-[1440px] pt-4">
        <h1 className="text-primary font-bold clamp3">
          Виды услуг. Мы предлагаем:
        </h1>
        <ul className="flex flex-col gap-4 list-disc ml-4">
          <li>
            Проектирование. Подготовка дизайн-проектов, эскизной, рабочей
            документации для строительства, капитального ремонта, реконструкции,
            чистовой отделки;
          </li>
          <li>
            Строительство. «EXPRESS AUTOMATICA» строит загородные дома,
            быстровозводимые, малоэтажные здания, административные,
            общественные, коммерческие объекты. Мы выполняем любые
            общестроительные работы: заливку фундаментов, возведение стен (по
            каркасной, монолитной технологии, из бруса, кирпича, строительных
            блоков), устройство перекрытий, кровли, отделку фасада;
          </li>
          <li>
            Реконструкцию. Проводится для жилых многоквартирных домов, офисных,
            общественных, промышленных зданий, медучреждений;
          </li>
          <li>
            Ремонт, отделку. Выполняется для офисов, торговых, бизнес-центров,
            медицинских учреждений, жилых комплексов, коттеджных поселков;
          </li>
          <li>
            Устройство инженерных систем: электроснабжение, водоснабжение,
            вентиляция, канализация, дренаж и другие;
          </li>
          <li>
            Благоустройство: мы строим парковки, подъездные пути, создаем зоны
            отдыха, выполняем озеленение, устанавливаем декоративное освещение.
          </li>
        </ul>
        <p className="clamp4 text-thin pt-4">
          Компания «EXPRESS AUTOMATICA» может работать как генеральный
          подрядчик, обеспечивая все работы на объекте от проектирования до
          чистовой отделки. Возможно сотрудничество на условиях субподряда,
          обеспечение авторского надзора, выполнение отдельных работ.
        </p>
      </section>
    </main>
  );
};

export default Services;
