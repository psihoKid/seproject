import { useTranslation } from "react-i18next";
import bgMap from "../assets/bg-map.png";
import buttonImg from "../assets/buttonHero.png";
import heroImg from "../assets/hero.png";

export default function Hero() {
  const { t } = useTranslation();

  const scrollToNextSection = () => {
    // Находим следующий раздел после hero
    const nextSection = document.getElementById('advantages');
    if (nextSection) {
      nextSection.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      });
    }
  };



  return (
    <>
      {/* Десктопная версия */}
      <section
        id="hero"
        className="hidden md:flex relative flex-col-reverse items-center justify-between gap-8 px-6 pt-12 pb-16 
                   md:flex-row md:gap-12 md:pt-16 md:pb-24 
                   min-h-[calc(100vh-80px)] overflow-hidden 
                   bg-neutral-100 bg-no-repeat bg-center bg-contain"
        style={{ backgroundImage: `url(${bgMap})` }}
      >
        {/* Левая часть */}
        <div
          className="relative z-10 max-w-xl text-center md:text-left 
                     md:-translate-y-10 md:translate-x-24"
        >
          <h1
            className="text-3xl font-bold leading-tight md:text-5xl"
            style={{ color: "#24325B" }}
          >
            {t("hero.title1")}{" "}
            <span
              className="relative inline-block text-blue-700"
              style={{ color: "#446AD0" }}
            >
              {t("hero.title2")}
              <span className="absolute left-0 -bottom-3 flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-[#24325B] mr-1"></span>
                <span className="h-[3px] w-16 rounded-full bg-[#24325B]"></span>
              </span>
            </span>
          </h1>
          <p
            className="mt-4 w-[400px] text-neutral-600"
            style={{ color: "#24325B" }}
          >
            {t("hero.subtitle")}
          </p>

          <div className="mt-8 grid grid-cols-1 gap-6 sm:grid-cols-3">
            <div>
              <p className="text-2xl font-bold" style={{ color: "#446AD0" }}>
                300+
              </p>
              <p className="text-sm" style={{ color: "#24325B" }}>
                {t("hero.stat_projects")}
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold" style={{ color: "#446AD0" }}>
                24+
              </p>
              <p className="text-sm" style={{ color: "#24325B" }}>
                {t("hero.stat_experts")}
              </p>
            </div>
            <div>
              <p className="text-2xl font-bold" style={{ color: "#446AD0" }}>
                20 {t("hero.years")}
              </p>
              <p className="text-sm" style={{ color: "#24325B" }}>
                {t("hero.stat_years")}
              </p>
            </div>
          </div>
        </div>

        {/* Правая часть */}
        <div className="relative z-10 flex justify-center -mt-12 lg:-mt-16 lg:translate-x-[-100px] xl:translate-x-[-100px]">
          <img
            src={heroImg}
            alt="Hero"
            className="max-h-[420px] w-auto rounded-full object-cover shadow-lg"
          />
          <button
            onClick={scrollToNextSection}
            className="absolute -bottom-6 left-6 h-16 w-16 flex items-center justify-center cursor-pointer hover:scale-110 transition-transform duration-300"
          >
            <img
              src={buttonImg}
              alt="Scroll down"
              className="h-full w-full object-contain"
            />
          </button>
        </div>
      </section>

      {/* Мобильная версия */}
      <section
        id="hero-mobile"
        className="md:hidden relative bg-neutral-100 bg-no-repeat bg-center overflow-hidden pt-0 pb-0"
        style={{
          backgroundImage: `url(${bgMap})`,
          backgroundSize: '220%',
          backgroundPosition: 'center 20%'
        }}
      >
        <div className="container mx-auto px-5 pt-12">
          {/* Заголовок */}
          <div className="text-center mb-2">
            <h1
              className="text-2xl font-bold leading-tight mb-2"
              style={{ color: "#24325B" }}
            >
              {t("hero.title1")}
            </h1>
            <h1
              className="text-2xl font-bold leading-tight relative inline-block mb-4"
              style={{ color: "#446AD0" }}
            >
              {t("hero.title2")}
              <span className="absolute left-1/2 bottom-[-20px] transform -translate-x-1/2 flex items-center">
                <span className="h-1.5 w-1.5 rounded-full bg-[#24325B] mr-1"></span>
                <span className="h-[3px] w-16 rounded-full bg-[#24325B]"></span>
              </span>
            </h1>
          </div>

          {/* Подзаголовок */}
          <div className="text-center mb-4 px-2">
            <p
              className="text-sm leading-relaxed mb-6"
              style={{ color: "#24325B" }}
            >
              {t("hero.subtitle")}
            </p>

            {/* Статистика */}
            <div className="grid grid-cols-3 gap-2 text-center">
              <div>
                <p
                  className="text-lg font-bold mb-1"
                  style={{ color: "#446AD0" }}
                >
                  300+
                </p>
                <p
                  className="text-xs font-medium"
                  style={{ color: "#24325B" }}
                >
                  {t("hero.stat_projects")}
                </p>
              </div>

              <div>
                <p
                  className="text-lg font-bold mb-1"
                  style={{ color: "#446AD0" }}
                >
                  24+
                </p>
                <p
                  className="text-xs font-medium"
                  style={{ color: "#24325B" }}
                >
                  {t("hero.stat_experts")}
                </p>
              </div>

              <div>
                <p
                  className="text-lg font-bold mb-1"
                  style={{ color: "#446AD0" }}
                >
                  20 {t("hero.years")}
                </p>
                <p
                  className="text-xs font-medium"
                  style={{ color: "#24325B" }}
                >
                  {t("hero.stat_years")}
                </p>
              </div>
            </div>
          </div>



          {/* Декоративные элементы */}
          <div className="absolute top-8 left-6 w-2 h-2 rounded-full bg-[#446AD0] opacity-60"></div>
          <div className="absolute top-14 right-8 w-3 h-3 rounded-full bg-[#446AD0] opacity-40"></div>
          <div className="absolute bottom-32 left-10 w-1 h-1 rounded-full bg-[#24325B] opacity-50"></div>
        </div>
      </section>
    </>
  );
}