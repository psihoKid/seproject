import { useTranslation } from "react-i18next";
import { useState, useEffect } from "react";

// 🔹 Импорт картинок
import leftTriangle from "../assets/triangle-left.svg";
import rightTriangle from "../assets/right-triangle.svg";
import project1 from "../assets/projects/project1.jpg";
import project2 from "../assets/projects/project2.jpg";
import project3 from "../assets/projects/project3.jpg";
import project4 from "../assets/projects/project4.jpg";

const projectsData = [
    {
        id: 1,
        key: "project1",
        labelKey: "projects.list.project1.name",
        image: project1,
        nameKey: "projects.list.project1.name",
        descriptionKey: "projects.list.project1.description",
        year: 2007,
    },
    {
        id: 2,
        key: "project2",
        labelKey: "projects.list.project2.name",
        image: project2,
        nameKey: "projects.list.project2.name",
        descriptionKey: "projects.list.project2.description",
        year: 2008,
    },
    {
        id: 3,
        key: "project3",
        labelKey: "projects.list.project3.name",
        image: project3,
        nameKey: "projects.list.project3.name",
        descriptionKey: "projects.list.project3.description",
        year: 2009,
    },
    {
        id: 4,
        key: "project4",
        labelKey: "projects.list.project4.name",
        image: project4,
        nameKey: "projects.list.project4.name",
        descriptionKey: "projects.list.project4.description",
        year: 2010,
    },
    {
        id: 5,
        key: "project5",
        labelKey: "projects.list.project5.name",
        image: project1,
        nameKey: "projects.list.project5.name",
        descriptionKey: "projects.list.project5.description",
        year: 2011,
    },
    {
        id: 6,
        key: "project6",
        labelKey: "projects.list.project6.name",
        image: project2,
        nameKey: "projects.list.project6.name",
        descriptionKey: "projects.list.project6.description",
        year: 2012,
    }
];

export default function ProjectShowcase() {
    const { t } = useTranslation("common");
    const [currentSlide, setCurrentSlide] = useState(0);
    const [isModalOpen, setIsModalOpen] = useState(false);

    // Блокировка скролла при открытом модальном окне
    useEffect(() => {
        if (isModalOpen) {
            // Сохраняем текущую позицию скролла
            const scrollY = window.scrollY;
            document.body.style.position = 'fixed';
            document.body.style.top = `-${scrollY}px`;
            document.body.style.width = '100%';
            document.body.style.overflow = 'hidden';

            return () => {
                // Восстанавливаем скролл при закрытии
                const scrollY = document.body.style.top;
                document.body.style.position = '';
                document.body.style.top = '';
                document.body.style.width = '';
                document.body.style.overflow = '';
                window.scrollTo(0, parseInt(scrollY || '0') * -1);
            };
        }
    }, [isModalOpen]);

    const nextSlide = () => {
        setCurrentSlide((prev) => (prev === projectsData.length - 1 ? 0 : prev + 1));
    };

    const prevSlide = () => {
        setCurrentSlide((prev) => (prev === 0 ? projectsData.length - 1 : prev - 1));
    };

    const goToSlide = (index) => {
        setCurrentSlide(index);
    };

    const openModal = () => {
        setIsModalOpen(true);
    };

    const closeModal = () => {
        setIsModalOpen(false);
    };

    // Закрытие модального окна при клике на оверлей
    const handleOverlayClick = (e) => {
        if (e.target === e.currentTarget) {
            closeModal();
        }
    };

    // Закрытие модального окна по клавише Escape
    useEffect(() => {
        const handleEscape = (e) => {
            if (e.key === 'Escape' && isModalOpen) {
                closeModal();
            }
        };

        document.addEventListener('keydown', handleEscape);
        return () => document.removeEventListener('keydown', handleEscape);
    }, [isModalOpen]);

    return (
        <>
            {/* 🔹 Desktop Version */}
            <section id="projects" className="relative hidden md:block bg-neutral-100 py-16">
                {/* Левый треугольник */}
                <img
                    src={leftTriangle}
                    alt="left decoration"
                    className="absolute left-0 top-0 -translate-y-[30%] w-24 md:w-32"
                />

                {/* Правый треугольник */}
                <img
                    src={rightTriangle}
                    alt="right decoration"
                    className="absolute right-0 bottom-0 translate-y-[0%] w-24 md:w-32 bg-neutral-100 h-24 md:h-82"
                />

                <div className="relative z-10 max-w-6xl mx-auto px-4">
                    {/* Заголовок секции */}
                    <h2 className="text-3xl font-bold text-center mb-12">{t("projects.title")}</h2>

                    <div className="flex gap-12">
                        {/* Левая часть - Слайдер */}
                        <div className="w-1/2">
                            <div className="bg-white rounded-2xl shadow-lg p-6 h-full">
                                <div className="flex flex-col h-full">
                                    {/* Заголовок слайдера */}
                                    <div className="flex justify-between items-center mb-6">
                                        <h3 className="text-xl font-semibold">{t("projects.gallery")}</h3>
                                        <div className="flex gap-2">
                                            <button
                                                onClick={prevSlide}
                                                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition"
                                            >
                                                ←
                                            </button>
                                            <button
                                                onClick={nextSlide}
                                                className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition"
                                            >
                                                →
                                            </button>
                                        </div>
                                    </div>

                                    {/* Область слайдера */}
                                    <div className="flex-1 bg-gray-100 rounded-lg flex items-center justify-center mb-4 min-h-[300px] overflow-hidden">
                                        <img
                                            src={projectsData[currentSlide].image}
                                            alt={t(projectsData[currentSlide].nameKey)}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>

                                    {/* Навигация слайдера */}
                                    <div className="flex gap-2 justify-center">
                                        {projectsData.map((_, index) => (
                                            <button
                                                key={index}
                                                onClick={() => goToSlide(index)}
                                                className={`w-3 h-3 rounded-full transition-colors ${index === currentSlide ? 'bg-blue-600' : 'bg-gray-300 hover:bg-gray-400'
                                                    }`}
                                            />
                                        ))}
                                    </div>

                                    {/* Описание текущего слайда */}
                                    <div className="mt-4 text-center">
                                        <h4 className="font-semibold mb-2">{t(projectsData[currentSlide].nameKey)}</h4>
                                        <p className="text-sm text-gray-600 leading-relaxed">
                                            {t(projectsData[currentSlide].descriptionKey)}
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Правая часть - Таблица проектов */}
                        <div className="w-1/2">
                            <div className="bg-white rounded-2xl shadow-lg p-6">
                                <table className="w-full">
                                    <thead>
                                        <tr className="border-b-2 border-gray-200">
                                            <th className="text-left pb-3 font-semibold">{t("projects.table.name")}</th>
                                            <th className="text-right pb-3 font-semibold">{t("projects.table.year")}</th>
                                        </tr>
                                    </thead>
                                    <tbody>
                                        {projectsData.map((project, index) => (
                                            <tr
                                                key={project.id}
                                                className={`border-b border-gray-100 cursor-pointer transition-colors ${index === currentSlide ? 'bg-blue-50' : 'hover:bg-gray-50'
                                                    }`}
                                                onClick={() => goToSlide(index)}
                                            >
                                                <td className="py-3">
                                                    • {t(project.nameKey)}. {t(project.descriptionKey)}
                                                </td>
                                                <td className="text-right py-3 font-medium">{project.year}</td>
                                            </tr>
                                        ))}
                                    </tbody>
                                </table>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* 🔹 Mobile Version */}
            <section id="projects-mobile" className="md:hidden relative bg-neutral-100 py-10 px-4">
                <div className="relative z-10 max-w-md mx-auto">
                    {/* Заголовок */}
                    <h2 className="text-2xl font-bold text-[#24325B] mb-6">
                        {t("projects.title")}
                    </h2>

                    {/* Сетка 2x2 */}
                    <div className="grid grid-cols-2 gap-4 mb-8">
                        {projectsData.slice(0, 4).map((project) => (
                            <div
                                key={project.id}
                                className="relative w-full h-44 rounded-[20px] overflow-hidden bg-cover bg-center flex flex-col justify-between p-4"
                                style={{ backgroundImage: `url(${project.image})` }}
                            >
                                <div className="absolute inset-0 bg-[#24325BCC] z-0" />
                                <div className="relative z-10 text-white flex flex-col justify-between h-full">
                                    <div className="text-xs font-semibold mb-1">{t(project.labelKey)}</div>
                                    <div className="flex justify-between items-end">
                                        <p className="text-[11px] max-w-[80%] leading-tight">
                                            {t(project.descriptionKey)}
                                        </p>
                                        <button className="w-6 h-6 rounded-full bg-white text-[#24325B] text-sm flex items-center justify-center shrink-0">
                                            →
                                        </button>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Кнопка открытия модального окна */}
                    <div className="flex justify-center">
                        <button
                            onClick={openModal}
                            className="w-[150px] h-[40px] rounded-full border border-[#24325B] text-[#24325B] text-sm font-medium hover:bg-[#24325B] hover:text-white transition-colors duration-300"
                        >
                            {t("projects.moreButton")}
                        </button>
                    </div>
                </div>
            </section>

            {/* Модальное окно для мобильной версии */}
            {isModalOpen && (
                <div
                    className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-opacity-100 md:hidden"
                    onClick={handleOverlayClick}
                >
                    <div
                        className="bg-white rounded-2xl w-full max-w-md max-h-[80vh] overflow-hidden"
                        onClick={(e) => e.stopPropagation()} // Предотвращаем закрытие при клике на само окно
                    >
                        {/* Заголовок модального окна */}
                        <div className="sticky top-0 bg-white border-b border-gray-200 px-6 py-4">
                            <div className="flex justify-between items-center">
                                <h3 className="text-lg font-bold text-[#24325B]">
                                    {t("projects.title")}
                                </h3>
                                <button
                                    onClick={closeModal}
                                    className="w-8 h-8 rounded-full bg-gray-200 flex items-center justify-center hover:bg-gray-300 transition text-lg"
                                >
                                    ×
                                </button>
                            </div>
                        </div>

                        {/* Список проектов */}
                        <div className="overflow-y-auto p-6">
                            <div className="space-y-4">
                                {projectsData.map((project, index) => (
                                    <div
                                        key={project.id}
                                        className="border border-gray-200 rounded-lg p-4"
                                    >
                                        <div className="flex justify-between items-start mb-2">
                                            <h4 className="font-semibold text-sm text-[#24325B]">
                                                {t(project.nameKey)}
                                            </h4>
                                            <span className="text-xs font-medium bg-blue-100 text-blue-800 px-2 py-1 rounded">
                                                {project.year}
                                            </span>
                                        </div>
                                        <p className="text-xs text-gray-600 leading-relaxed">
                                            {t(project.descriptionKey)}
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Кнопка закрытия внизу */}
                        <div className="sticky bottom-0 bg-white border-t border-gray-200 px-6 py-4">
                            <button
                                onClick={closeModal}
                                className="w-full h-10 rounded-full bg-[#24325B] text-white text-sm font-medium hover:bg-[#1a2745] transition-colors duration-300"
                            >
                                {t("projects.closeButton")}
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
}