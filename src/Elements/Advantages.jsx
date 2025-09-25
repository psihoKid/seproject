import { useTranslation } from "react-i18next";

// Иконки
import iconReliability from "../assets/icons/reliability.png";
import iconOptimization from "../assets/icons/optimization.png";
import iconQuality from "../assets/icons/quality.png";
import iconTransparency from "../assets/icons/transparency.png";

export default function Advantages() {
    const { t } = useTranslation();

    const items = [
        { key: "reliability", icon: iconReliability },
        { key: "optimization", icon: iconOptimization },
        { key: "quality", icon: iconQuality },
        { key: "transparency", icon: iconTransparency },
    ];

    return (
        <section id="advantages" className="hidden md:block relative py-16 bg-neutral-100">
            <div className="grid max-w-6xl mx-auto grid-cols-1 md:grid-cols-4 text-white rounded-3xl overflow-hidden">
                {items.map((item, i) => (
                    <div
                        key={i}
                        className={`group flex flex-col items-center justify-center p-8 transition-all duration-300 cursor-pointer
        bg-[#446AD0] hover:bg-[#24325B] hover:z-10`}
                    >
                        <div className="mb-4 flex justify-center transition-transform duration-300 group-hover:scale-125">
                            <img
                                src={item.icon}
                                alt={item.key}
                                className="h-12 w-12 object-contain"
                            />
                        </div>
                        <h3 className="text-lg font-semibold mb-2 transition-all duration-300 group-hover:text-xl">
                            {t(`hero.${item.key}.title`)}
                        </h3>
                        <p className="text-sm text-center leading-relaxed opacity-90 transition-all duration-300 group-hover:text-base group-hover:opacity-100">
                            {t(`hero.${item.key}.text`)}
                        </p>
                    </div>
                ))}
            </div>
        </section>


    );
}