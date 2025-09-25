import { useState } from "react";
import { useTranslation } from "react-i18next";
import logo from "../assets/Logo.png";
import KZ from "../assets/Kazakhstan.png";
import RU from "../assets/Russian.png";
import US from "../assets/USA.png";

const LANGS = [
  { code: "ru", labelKey: "lang.ru", img: RU },
  { code: "kk", labelKey: "lang.kk", img: KZ },
  { code: "en", labelKey: "lang.en", img: US }
];

function LangSwitcher() {
  const { i18n, t } = useTranslation();
  const [open, setOpen] = useState(false);

  const current = LANGS.find((l) => l.code === i18n.resolvedLanguage) || LANGS[0];

  const change = (code) => {
    i18n.changeLanguage(code);
    document.documentElement.lang = code;
    setOpen(false);
  };

  return (
    <div className="relative">
      <button
        onClick={() => setOpen((v) => !v)}
        className="flex items-center gap-2 rounded-full px-3 py-2 text-sm hover:bg-neutral-100"
      >
        <img
          src={current.img}
          alt={t(current.labelKey)}
          className="h-5 w-5 rounded-full object-cover"
        />
        <span className="hidden sm:block">{t(current.labelKey)}</span>
        <svg
          viewBox="0 0 24 24"
          fill="none"
          stroke="currentColor"
          strokeWidth="1.8"
          className="size-4"
        >
          <path d="M6 9l6 6 6-6" />
        </svg>
      </button>

      {open && (
        <ul className="absolute right-0 mt-2 w-44 rounded-xl border bg-white shadow-lg overflow-hidden z-50">
          {LANGS.map((l) => (
            <li key={l.code}>
              <button
                onClick={() => change(l.code)}
                className={`flex w-full items-center gap-2 px-3 py-2 text-sm hover:bg-neutral-50 ${i18n.resolvedLanguage === l.code ? "bg-neutral-50" : ""
                  }`}
              >
                <img
                  src={l.img}
                  alt={t(l.labelKey)}
                  className="h-5 w-5 rounded-full object-cover"
                />
                <span>{t(l.labelKey)}</span>
              </button>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
}

export default function Header() {
  const { t } = useTranslation();
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50 flex justify-center bg-neutral-100 py-3">
      <div className="mx-auto flex w-[860px] max-w-[95%] items-center justify-between rounded-full bg-white px-4 py-3 shadow-[0_8px_24px_-12px_rgba(0,0,0,0.25)] sm:px-6">
        <a href="#hero" className="flex items-center gap-2">
          <img src={logo} alt="Логотип" className="h-8 w-auto sm:h-10" />
        </a>

        {/* Мобильное меню */}
        <div className="flex items-center gap-4">
          <nav className={`fixed top-0 left-0 w-full h-full bg-white transform ${menuOpen ? 'translate-x-0' : '-translate-x-full'} transition-transform duration-300 ease-in-out z-40 md:hidden`}>
            <div className="flex flex-col items-center justify-center h-full space-y-8">
              <button
                onClick={() => setMenuOpen(false)}
                className="absolute top-4 right-4 text-2xl"
              >
                ✕
              </button>

              <ul className="flex flex-col items-center gap-8 text-lg font-medium text-neutral-700">
                <li><a href="#hero-mobile" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">{t("nav.home")}</a></li>
                <li><a href="#achievements-mobile" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">{t("nav.achievements")}</a></li>
                <li><a href="#projects-mobile" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">{t("nav.projects")}</a></li>
                <li><a href="#licenses-mobile" onClick={() => setMenuOpen(false)} className="hover:text-blue-600">{t("nav.licenses")}</a></li>
              </ul>
            </div>
          </nav>

          {/* Бургер-меню для мобильных */}
          <button
            className="md:hidden p-2"
            onClick={() => setMenuOpen(true)}
          >
            <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="w-6 h-6">
              <path d="M3 12h18M3 6h18M3 18h18" />
            </svg>
          </button>

          {/* Десктопное меню */}
          <nav className="hidden md:block">
            <ul className="flex items-center gap-8 text-sm font-medium text-neutral-700">
              <li><a href="#hero" className="hover:text-blue-600">{t("nav.home")}</a></li>
              <li><a href="#advantages" className="hover:text-blue-600">{t("nav.advantages")}</a></li>
              <li><a href="#about" className="hover:text-blue-600">{t("nav.about")}</a></li>
              <li><a href="#achievements" className="hover:text-blue-600">{t("nav.achievements")}</a></li>
              <li><a href="#projects" className="hover:text-blue-600">{t("nav.projects")}</a></li>
            </ul>
          </nav>

          <LangSwitcher />
        </div>
      </div>
    </header>
  );
}