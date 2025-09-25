import { useTranslation } from "react-i18next";
import leftImage from "../assets/triangle-left.svg";
import arrowIcon from "../assets/icons/arrow-right.svg";
import arrowup from "../assets/icons/arrow-up.svg";
import heroImg from "../assets/MobileAbout.png";

export default function AboutUs() {
    const { t } = useTranslation("common");

    const scrollToNextSection = () => {
        // Находим следующий раздел после hero
        const nextSection = document.getElementById('projects');
        if (nextSection) {
            nextSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    const scrollToNextSectionMobile = () => {
        // Находим следующий раздел после hero
        const nextSection = document.getElementById('projects-mobile');
        if (nextSection) {
            nextSection.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
        }
    };

    return (
        <>
            {/* Desktop Version */}
            <section id="about" className="relative hidden md:flex items-center justify-center py-16 bg-neutral-100">
                {/* 🔹 Левая часть с картинкой */}
                <div className="absolute top-0 left-0 h-full flex items-center">
                    <img
                        src={leftImage}
                        alt="Decoration"
                        className="h-2/4 w-auto object-contain"
                    />
                </div>

                {/* 🔹 Контент */}
                <div className="relative z-10 max-w-6xl mx-auto px-6 flex">
                    {/* Левая часть - основная информация */}
                    <div className="w-1/2 pr-12">
                        <h2 className="text-3xl font-bold mb-[74px] text-[#24325B]">
                            {t("AboutUs.AboutCompany")}
                        </h2>

                        <div className="inline-block rounded-full bg-neutral-100 bg-opacity-50 px-4 py-2 mb-6 shadow-md w-[186px]">
                            <h3 className="text-xl font-medium text-center text-[#446AD0]">
                                {t("AboutUs.AboutCompany")}
                            </h3>
                        </div>

                        <h2 className="text-2xl md:text-3xl font-bold leading-snug mb-6 text-[#24325B]">
                            {t("AboutUs.CompanyName1")} <br className="hidden md:block" />
                            {t("AboutUs.CompanyName2")} <br className="hidden md:block" />
                            {t("AboutUs.CompanyName3")}
                        </h2>

                        <p className="mb-4 text-[#2C4268]">
                            {t("AboutUs.CompanyDesc1")}<br />
                            {t("AboutUs.CompanyDesc2")}
                        </p>

                        <ul className="list-disc pl-5 mb-6 space-y-2 text-[#2C4268]">
                            <li>{t("AboutUs.List1")}</li>
                            <li>{t("AboutUs.List2")}</li>
                            <li>{t("AboutUs.List3")}</li>
                            <li>{t("AboutUs.List4")}</li>
                        </ul>

                        <p className="mb-10 text-[#2C4268]">
                            {t("AboutUs.TextUnderList")}
                        </p>

                        <button onClick={scrollToNextSection} className="flex items-center justify-center gap-2 px-8 py-4 bg-[#446AD0] text-white rounded-full shadow-lg hover:bg-[#24325B] transition-all duration-300 text-lg font-medium">
                            {t("AboutUs.OurProjectsButton")}
                            <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>

                    {/* Правая часть - статистика и принципы */}
                    <div className="w-1/2 pl-[180px]">
                        {/* Статистика */}
                        <div className="mb-12">
                            <div className="text-[40px] font-bold text-[#446AD0] mb-2 text-right mr-[29px]">22-24</div>
                            <p className="text-[18px] text-[#24325B] leading-relaxed">{t("AboutUs.ProjectYear")}</p>
                        </div>

                        {/* Принципы */}
                        <div className="mb-12 flex items-center justify-center gap-12">
                            <div className="flex flex-col space-y-12">
                                <div className="flex items-center">
                                    <div className="bg-white rounded-full py-3 px-8 shadow-lg w-[250px] text-center">
                                        <h4 className="text-lg font-medium text-[#24325B]">{t("AboutUs.Timeliness")}</h4>
                                    </div>
                                    <img src={arrowup} alt="arrow" className="ml-6 w-8 h-8 transform rotate-[-45deg]" />
                                </div>
                                <div className="flex items-center">
                                    <div className="bg-white rounded-full py-3 px-8 shadow-lg w-[250px] text-center">
                                        <h4 className="text-lg font-medium text-[#24325B]">{t("AboutUs.Impartiality")}</h4>
                                    </div>
                                    <img src={arrowIcon} alt="arrow" className="ml-6 w-8 h-8 transform rotate-[1deg]" />
                                </div>
                                <div className="flex items-center">
                                    <div className="bg-white rounded-full py-3 px-8 shadow-lg w-[250px] text-center">
                                        <h4 className="text-lg font-medium text-[#24325B]">{t("AboutUs.Efficiency")}</h4>
                                    </div>
                                    <img src={arrowup} alt="arrow" className="ml-6 w-8 h-8 transform rotate-[-55deg]" />
                                </div>
                            </div>
                            <div className="bg-[#24325B] text-white rounded-full px-12 py-6 w-[320px] text-center shadow-lg flex-shrink-0">
                                <h3 className="text-xl font-medium">{t("AboutUs.OurPrinciples")}</h3>
                            </div>
                        </div>

                        {/* Цель компании */}
                        <div className="flex flex-col items-center mt-40">
                            <div className="bg-white rounded-full py-3 px-8 shadow-lg mb-6">
                                <h3 className="text-xl font-medium text-[#446AD0]">
                                    {t("AboutUs.OurGoal")}
                                </h3>
                            </div>
                            <p className="text-sm text-[#24325B] leading-relaxed text-center w-[600px]">
                                {t("AboutUs.GoalText")} <br className="hidden md:block" />
                                {t("AboutUs.GoalText2")}
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Mobile Version */}
            <section className="md:hidden relative bg-gradient-to-b from-[#1f2c43]/90 to-[#1f2c43]/80 text-white p-6 rounded-3xl overflow-hidden m-4 shadow-xl">
                <img src={heroImg} alt="hero" className="absolute inset-0 h-full w-full object-cover object-center opacity-40 rounded-3xl" />
                <div className="relative z-10 space-y-4">
                    <div className="space-y-2">
                        <p className="text-lg font-bold leading-tight">
                            {t("AboutUs.CompanyName1")}
                        </p>
                        <p className="text-lg font-semibold opacity-90">
                            {t("AboutUs.CompanyName2")}
                        </p>
                        <p className="text-lg opacity-80">
                            {t("AboutUs.CompanyName3")}
                        </p>
                    </div>

                    <div className="space-y-3">
                        <p className="text-sm leading-relaxed">
                            {t("AboutUs.CompanyDesc1")} <br />
                            {t("AboutUs.CompanyDesc2")}
                        </p>

                        <ul className="space-y-2">
                            <li className="flex items-start gap-2 text-sm">
                                <span className="text-[#446AD0] mt-1">•</span>
                                <span>{t("AboutUs.List1")}</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm">
                                <span className="text-[#446AD0] mt-1">•</span>
                                <span>{t("AboutUs.List2")}</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm">
                                <span className="text-[#446AD0] mt-1">•</span>
                                <span>{t("AboutUs.List3")}</span>
                            </li>
                            <li className="flex items-start gap-2 text-sm">
                                <span className="text-[#446AD0] mt-1">•</span>
                                <span>{t("AboutUs.List4")}</span>
                            </li>
                        </ul>
                    </div>

                    <p className="text-sm leading-relaxed opacity-90">
                        {t("AboutUs.TextUnderList")}
                    </p>

                    <div className="pt-2 flex justify-end">
                        <button onClick={scrollToNextSectionMobile} className="w-[150px] h-[41px] bg-[#446AD0] hover:bg-[#3a5cb5] text-white rounded-full text-center text-sm font-medium flex items-center justify-center gap-2 transition-colors duration-200">
                            {t("AboutUs.OurProjectsButton")}
                            <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                    </div>
                </div>
            </section>
        </>
    );
}
