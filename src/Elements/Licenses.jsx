import React, { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import Zoom from "react-medium-image-zoom";
import "react-medium-image-zoom/dist/styles.css";

import doc1 from "../assets/licenses/doc1.jpg";
import doc2 from "../assets/licenses/doc2.jpg";
import doc4 from "../assets/licenses/doc4.jpg";
import doc5 from "../assets/licenses/doc5.jpg";
import doc7 from "../assets/licenses/doc7.jpg";
import doc8 from "../assets/licenses/doc8.jpg";
import doc9 from "../assets/licenses/doc9.jpg";
import doc10 from "../assets/licenses/doc10.jpg";
import doc11 from "../assets/licenses/doc11.jpg";
import doc13 from "../assets/licenses/doc13.jpg";

import { useTranslation } from "react-i18next";

const documents = [
    doc1, doc2, doc4, doc5, doc7,
    doc8, doc9, doc10, doc11, doc13,
];

const LicenseSection = () => {
    const { t } = useTranslation();
    const [selected, setSelected] = useState(null);

    const handleBackgroundClick = () => {
        setSelected(null);
    };

    const stopPropagation = (e) => {
        e.stopPropagation();
    };

    return (
        <>
            {/* 🔹 Desktop Version */}
            <section className="relative hidden md:block bg-neutral-100 py-20">
                <div className="relative z-10 max-w-7xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-semibold text-center text-[#2C4268] mb-6">
                        {t("licenses.title")}
                    </h2>
                    <p className="text-center text-[#2C4268] max-w-3xl mx-auto mb-12">
                        {t("licenses.description")}
                    </p>

                    {/* Сетка для картинок (Desktop) */}
                    <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 xl:grid-cols-5 gap-6">
                        {documents.map((doc, index) => (
                            <div key={index} className="cursor-pointer" onClick={() => setSelected(doc)}>
                                <img
                                    src={doc}
                                    alt={`license-${index + 1}`}
                                    className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Анимированная модалка */}
                <AnimatePresence>
                    {selected && (
                        <motion.div
                            className="fixed inset-0 z-50 flex justify-center items-start pt-24 px-4"
                            onClick={handleBackgroundClick}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                className="relative max-w-5xl w-full bg-white rounded-lg shadow-2xl p-4"
                                onClick={stopPropagation}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                            >
                                {/* Кнопка закрытия */}
                                <button
                                    className="absolute top-2 right-2 text-black text-3xl font-bold hover:text-red-500 transition"
                                    onClick={() => setSelected(null)}
                                    aria-label="Close"
                                >
                                    &times;
                                </button>

                                {/* Зумируемое изображение */}
                                <Zoom>
                                    <img
                                        src={selected}
                                        alt="Full view"
                                        className="w-full max-h-[80vh] object-contain rounded cursor-zoom-in"
                                    />
                                </Zoom>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>

            {/* 🔹 Mobile Version */}
            <section id="licenses-mobile" className="md:hidden relative bg-neutral-100 py-10 px-4">
                <div className="relative z-10 max-w-md mx-auto">
                    <h2 className="text-2xl font-bold text-[#24325B] mb-6">
                        {t("licenses.title")}
                    </h2>
                    <p className="text-center text-[#2C4268] max-w-3xl mx-auto mb-12">
                        {t("licenses.description")}
                    </p>

                    {/* Сетка для картинок (Mobile) */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        {documents.map((doc, index) => (
                            <div key={index} className="cursor-pointer" onClick={() => setSelected(doc)}>
                                <img
                                    src={doc}
                                    alt={`license-${index + 1}`}
                                    className="rounded-xl shadow-md hover:scale-105 transition-transform duration-300"
                                />
                            </div>
                        ))}
                    </div>
                </div>

                {/* Анимированная модалка */}
                <AnimatePresence>
                    {selected && (
                        <motion.div
                            className="fixed inset-0 z-50 flex justify-center items-start pt-24 px-4"
                            onClick={handleBackgroundClick}
                            initial={{ opacity: 0 }}
                            animate={{ opacity: 1 }}
                            exit={{ opacity: 0 }}
                        >
                            <motion.div
                                className="relative max-w-5xl w-full bg-white rounded-lg shadow-2xl p-4"
                                onClick={stopPropagation}
                                initial={{ scale: 0.8, opacity: 0 }}
                                animate={{ scale: 1, opacity: 1 }}
                                exit={{ scale: 0.8, opacity: 0 }}
                                transition={{ duration: 0.25 }}
                            >
                                {/* Кнопка закрытия */}
                                <button
                                    className="absolute top-2 right-2 text-black text-3xl font-bold hover:text-red-500 transition"
                                    onClick={() => setSelected(null)}
                                    aria-label="Close"
                                >
                                    &times;
                                </button>

                                {/* Зумируемое изображение */}
                                <Zoom>
                                    <img
                                        src={selected}
                                        alt="Full view"
                                        className="w-full max-h-[80vh] object-contain rounded cursor-zoom-in"
                                    />
                                </Zoom>
                            </motion.div>
                        </motion.div>
                    )}
                </AnimatePresence>
            </section>
        </>
    );
};

export default LicenseSection;
