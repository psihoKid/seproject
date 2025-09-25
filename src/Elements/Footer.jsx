import React from "react";
import { useTranslation } from "react-i18next";

import phoneIcon from "../assets/icons/phone.svg";
import emailIcon from "../assets/icons/email.svg";
import locationIcon from "../assets/icons/location.svg";
import logoWhite from "../assets/logo-footer.svg";

const Footer = () => {
    const { t } = useTranslation();

    return (
        <footer className="bg-gradient-to-l from-[#2C4268] to-[#5783CE] text-white py-6 md:py-8">
            <div className="max-w-7xl mx-auto px-4">
                {/* Мобильная версия */}
                <div className="flex flex-col gap-6 md:hidden">
                    {/* Заголовок Контакты */}
                    <div className="text-center">
                        <h2 className="text-xl font-bold mb-4">Контакты</h2>

                        {/* Телефоны */}
                        <div className="mb-3">
                            <div className="flex items-center justify-center gap-2 mb-1">
                                <img src={phoneIcon} alt="phone" className="w-4 h-4" />
                                <span className="text-sm">+7702 000 21 12</span>
                            </div>
                            <div className="flex items-center justify-center gap-2">
                                <img src={phoneIcon} alt="phone" className="w-4 h-4 opacity-0" />
                                <span className="text-sm">+7700 900 06 69</span>
                            </div>
                        </div>

                        {/* Email */}
                        <div className="flex items-center justify-center gap-2 mb-4">
                            <img src={emailIcon} alt="email" className="w-4 h-4" />
                            <div className="flex gap-3 text-sm">
                                <a href="mailto:info@sikrg.kz" className="underline">info@sikrg.kz</a>
                                <a href="mailto:info.sik@bk.ru" className="underline">info.sik@bk.ru</a>
                            </div>
                        </div>

                        {/* Разделительная линия */}
                        <div className="border-t border-white/30 my-3"></div>

                        {/* Адрес */}
                        <div className="text-center">
                            <h3 className="text-lg font-bold mb-3">Адрес</h3>

                            <div className="flex items-start justify-center gap-2 mb-2">
                                <img src={locationIcon} alt="map" className="w-4 h-4 mt-0.5 flex-shrink-0" />
                                <div className="text-left text-sm">
                                    <span className="font-medium">Фактический адрес:</span><br />
                                    010000, Республика Казахстан, г.Астана, проспект Туран,50
                                </div>
                            </div>

                            <div className="flex items-start justify-center gap-2">
                                <img src={locationIcon} alt="map" className="w-4 h-4 mt-0.5 flex-shrink-0 opacity-0" />
                                <div className="text-left text-sm">
                                    <span className="font-medium">Юридический адрес:</span><br />
                                    100000, Республика Казахстан, г.Караганда, р-н Казыбек би, ул Тургенева 4/16
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Десктоп версия */}
                <div className="hidden md:flex flex-row justify-between items-start gap-8">
                    {/* Левая колонка - Контакты */}
                    <div className="flex-1">
                        <h2 className="text-2xl font-bold mb-4">Контакты</h2>

                        <div className="space-y-2">
                            <div className="flex items-center gap-2">
                                <img src={phoneIcon} alt="phone" className="w-4 h-4" />
                                <span>+7702 000 21 12</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <img src={phoneIcon} alt="phone" className="w-4 h-4 opacity-0" />
                                <span>+7700 900 06 69</span>
                            </div>
                            <div className="flex items-center gap-2 mt-3">
                                <img src={emailIcon} alt="email" className="w-4 h-4" />
                                <div className="flex gap-3">
                                    <a href="mailto:info@sikrg.kz" className="underline">info@sikrg.kz</a>
                                    <a href="mailto:info.sik@bk.ru" className="underline">info.sik@bk.ru</a>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Правая колонка - Адрес */}
                    <div className="flex-1">
                        <h3 className="text-2xl font-bold mb-4">Адрес</h3>

                        <div className="space-y-3">
                            <div className="flex items-start gap-2">
                                <img src={locationIcon} alt="map" className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                <div>
                                    <span className="font-medium">Фактический адрес:</span><br />
                                    010000, Республика Казахстан, г.Астана, проспект Туран,50
                                </div>
                            </div>

                            <div className="flex items-start gap-2">
                                <img src={locationIcon} alt="map" className="w-5 h-5 mt-0.5 flex-shrink-0" />
                                <div>
                                    <span className="font-medium">Юридический адрес:</span><br />
                                    100000, Республика Казахстан, г.Караганда, р-н Казыбек би, ул Тургенева 4/16
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Разделительная линия для десктопа */}
                <div className="hidden md:block border-t border-white/30 my-6"></div>

                {/* Кнопка вверх */}
                <div className="text-center mt-6 md:mt-0">
                    <button
                        onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
                        className="border border-white text-white px-4 py-2 rounded-full hover:bg-white hover:text-[#4567A2] transition text-sm"
                    >
                        Вверх ↑
                    </button>
                </div>
            </div>
        </footer>
    );
};

export default Footer;