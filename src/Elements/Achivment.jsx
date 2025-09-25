import React from "react";
import { useTranslation } from "react-i18next";

// 🔹 Иконки
import expYearsIcon from "../assets/icons/exp_years.svg";
import projectsPerYearIcon from "../assets/icons/projects_per_year.svg";
import clientsIcon from "../assets/icons/clients.svg";
import developmentIcon from "../assets/icons/development.svg";
import totalProjectsIcon from "../assets/icons/total_projects.svg";
import geoIcon from "../assets/icons/geo.svg";
import expertsIcon from "../assets/icons/experts.svg";
import partnershipIcon from "../assets/icons/partnership.svg";

// 🔹 Декорации (для Desktop)
import semicircle from "../assets/half-circle.svg";
import triangles from "../assets/right-triangle.svg";

const icons = {
    exp_years: expYearsIcon,
    projects_per_year: projectsPerYearIcon,
    clients: clientsIcon,
    development: developmentIcon,
    total_projects: totalProjectsIcon,
    geo: geoIcon,
    experts: expertsIcon,
    partnership: partnershipIcon,
};

const AchievementBlock = ({ icon, title, subtitle, filled = false }) => (
    <div
        className={`rounded-3xl p-6 md:p-8 h-full shadow-sm border border-[#E5EAF2] transition-colors duration-300 ${filled
            ? "bg-gradient-to-br from-[#4E7FFF] to-[#4E7FFF]/80 text-white"
            : "bg-white text-[#335DCD]"
            }`}
    >
        <img src={icon} alt="icon" className="mb-4 w-10 h-10" />
        <p className="text-2xl font-semibold mb-2">{title}</p>
        <p className="text-sm leading-relaxed">{subtitle}</p>
    </div>
);

export default function Achievements() {
    const { t } = useTranslation();

    const blocks = [
        { key: "exp_years", filled: true },
        { key: "projects_per_year" },
        { key: "clients" },
        { key: "development" },
        { key: "total_projects" },
        { key: "geo" },
        { key: "experts" },
        { key: "partnership" },
    ];

    return (
        <>
            {/* 🔹 Desktop Version */}
            <section
                id="achievements"
                className="relative hidden md:block bg-neutral-100 py-20"
            >
                {/* Background decorations */}
                <img
                    src={semicircle}
                    className="absolute top-0 right-1/2 translate-x-1/2 w-[200px] md:w-[260px]"
                    alt="semicircle"
                />
                <img
                    src={triangles}
                    className="absolute top-1/3 right-0 h-100 w-15 md:w-30"
                    alt="triangles"
                />

                <div className="relative z-10 max-w-6xl mx-auto px-4">
                    <h2 className="text-3xl md:text-4xl font-bold text-[#24325B] mb-12">
                        {t("achievements.title")}
                    </h2>

                    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                        {blocks.map(({ key, filled }) => (
                            <AchievementBlock
                                key={key}
                                filled={filled}
                                icon={icons[key]}
                                title={t(`achievements.${key}_title`)}
                                subtitle={t(`achievements.${key}_subtitle`)}
                            />
                        ))}
                    </div>
                </div>
            </section>

            {/* 🔹 Mobile Version */}
            <section id="achievements-mobile" className="md:hidden relative bg-neutral-100 py-12 px-4">
                <div className="relative z-10 max-w-md mx-auto">
                    <h2 className="text-2xl font-bold text-[#24325B] mb-8 text-center">
                        {t("achievements.title")}
                    </h2>

                    <div className="grid grid-cols-1 gap-5">
                        {blocks.map(({ key, filled }) => (
                            <AchievementBlock
                                key={key}
                                filled={filled}
                                icon={icons[key]}
                                title={t(`achievements.${key}_title`)}
                                subtitle={t(`achievements.${key}_subtitle`)}
                            />
                        ))}
                    </div>
                </div>
            </section>
        </>
    );
}
