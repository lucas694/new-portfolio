"use client";
import { motion, AnimatePresence, useScroll, useMotionValueEvent } from "framer-motion";
import Link from "next/link";
import React, { useRef, useState } from "react";
import { BiCodeAlt } from "react-icons/bi";
import { useTranslation } from "react-i18next";




const Header = () => {
  // Estados para controlar a funcionalidade do header
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [visible, setVisible] = useState(false);
  const { t, i18n } = useTranslation();
  
  // Referência para o elemento header (usado para detectar scroll)
  const ref = useRef(null);
  
  // Hook do Framer Motion para detectar a posição do scroll
  const { scrollY } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  // Evento que detecta mudanças no scroll e atualiza o estado visible
  useMotionValueEvent(scrollY, "change", (latest) => {
    if (latest > 90) {
      setVisible(true);
    } else {
      setVisible(false);
    }
  });



  // Função para alternar o estado do menu mobile
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Função para alternar idioma
  const toggleLanguage = () => {
    const newLang = i18n.language === 'pt' ? 'en' : 'pt';
    i18n.changeLanguage(newLang);
  };

  return (
    <motion.header
      ref={ref}
      className="fixed inset-x-0 top-4 z-40 w-full"
    >
      {/* Desktop Navigation */}
      <motion.div
        animate={{
          backdropFilter: visible ? "blur(10px)" : "none",
          boxShadow: visible
            ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
            : "none",
          width: visible ? "40%" : "100%",
          y: visible ? 20 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 50,
        }}
        style={{
          minWidth: "800px",
        }}
        /**** Animacao Header ****/
        className={`relative z-[60] mx-auto hidden w-full max-w-7xl flex-row items-center justify-between self-start rounded-lg px-4 py-3 lg:flex ${visible ? "bg-neutral-950/80" : "bg-transparent"}`}
      >
        {/* Logo */}
        <Link
          href="/"
          className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-lg"
        >
          <div className="flex items-center font-semibold text-white">
            <BiCodeAlt className="text-2xl mr-1"/>
            <span>LUCAS</span>
          </div>
        </Link>

        {/* Navigation Items */}
        <nav className="absolute inset-0 hidden flex-1 items-center justify-center lg:flex">
          <ul className="flex ">
            <li>
              <Link
                href="/"
                className=" px-2 py-2 text-neutral-300 hover:text-white transition-colors duration-200"
              >
                {t('nav.home')}
              </Link>
            </li>
            <li>
              <a
                href="#about"
                className="px-2 py-2 text-neutral-300 hover:text-white transition-colors duration-200"
              >
                {t('nav.about')}
              </a>
            </li>
            <li>
              <a
                href="#projects"
                className="px-2 py-2 text-neutral-300 hover:text-white transition-colors duration-200"
              >
                {t('nav.projects')}
              </a>
            </li>
            <li>
              <a
                href="#contact"
                className="px-2 py-2 text-neutral-300 hover:text-white transition-colors duration-200"
              >
                {t('nav.contact')}
              </a>
            </li>
          </ul>
        </nav>

        {/* Button Language*/}
        <div className="relative z-20 flex items-center gap-2">
          <button
            onClick={toggleLanguage}
            className="px-2 py-2 rounded-md text-white text-sm font-bold cursor-pointer transform  border bg-transparent border-gray-700
            transition-all duration-300 hover:-translate-y-0.5  hover:bg-gray-900"
          >
            {i18n.language === 'pt' ? 'EN' : 'PT'}
          </button>
        </div>
      </motion.div>

      {/* Mobile Navigation */}
      <motion.div
        animate={{
          backdropFilter: visible ? "blur(10px)" : "none",
          boxShadow: visible
            ? "0 0 24px rgba(34, 42, 53, 0.06), 0 1px 1px rgba(0, 0, 0, 0.05), 0 0 0 1px rgba(34, 42, 53, 0.04), 0 0 4px rgba(34, 42, 53, 0.08), 0 16px 68px rgba(47, 48, 55, 0.05), 0 1px 0 rgba(255, 255, 255, 0.1) inset"
            : "none",
          width: visible ? "90%" : "100%",
          paddingRight: visible ? "12px" : "0px",
          paddingLeft: visible ? "12px" : "0px",
          borderRadius: visible ? "4px" : "2rem",
          y: visible ? 20 : 0,
        }}
        transition={{
          type: "spring",
          stiffness: 200,
          damping: 50,
        }}
        /**** Animacao Header ****/
        className={`relative z-50 mx-auto flex w-full max-w-[calc(100vw-2rem)] flex-col items-center justify-between px-0 py-2 lg:hidden ${visible ? "bg-neutral-950/80" : "bg-transparent"}`}
      >
        <div className="flex w-full flex-row items-center justify-between">
          {/* Mobile Logo */}
          <Link
          href="/"
          className="relative z-20 mr-4 flex items-center space-x-2 px-2 py-1 text-lg"
        >
          <div className="flex items-center font-semibold text-white">
            <BiCodeAlt className="text-2xl mr-1"/>
            <span>LUCAS</span>
          </div>
        </Link>

          {/* Mobile Menu Toggle */}
          <button
            onClick={toggleMobileMenu}
            className="text-white cursor-pointer p-2"
          >
            {isMobileMenuOpen ? (
              <span className="text-2xl">✕</span>
            ) : (
              <span className="text-2xl">☰</span>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        <AnimatePresence>
          {isMobileMenuOpen && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              /**** Animacao Header ****/
              className="absolute inset-x-0 top-16 z-50 flex w-full flex-col items-start justify-start gap-4 rounded-lg px-4 py-8 bg-neutral-950 shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset]"
            >
              <nav>
                <ul className="w-full space-y-2">
                  <li>
                    <Link
                      href="/"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full px-4 py-3 text-white hover:bg-neutral-800 rounded-lg transition-colors"
                    >
                      {t('nav.home')}
                    </Link>
                  </li>
                  <li>
                    <a
                      href="#about"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full px-4 py-3 text-white hover:bg-neutral-800 rounded-lg transition-colors"
                    >
                      {t('nav.about')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#projects"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full px-4 py-3 text-white hover:bg-neutral-800 rounded-lg transition-colors"
                    >
                      {t('nav.projects')}
                    </a>
                  </li>
                  <li>
                    <a
                      href="#contact"
                      onClick={() => setIsMobileMenuOpen(false)}
                      className="block w-full px-4 py-3 text-white hover:bg-neutral-800 rounded-lg transition-colors"
                    >
                      {t('nav.contact')}
                    </a>
                  </li>
                </ul>
              </nav>
              
              {/*Button language Mobile */}
              <div className="w-full px-4 pt-4 ">
                <button
                  onClick={toggleLanguage}
                  className="block w-full px-4 py-3 rounded-md text-white text-sm font-bold cursor-pointer transform  border bg-transparent border-gray-700
                  transition-all duration-300 hover:-translate-y-0.5  hover:bg-gray-900"
                >
                  {i18n.language === 'pt' ? 'English' : 'Português'}
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </motion.div>
    </motion.header>
  );
};

export default Header;
