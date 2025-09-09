"use client";
import { clashDisplay } from "../lib/fonts.js";
import { useTranslation } from "react-i18next";
import { GrSend } from "react-icons/gr";
import Link from "next/link.js";


const ContactSection = () => {
    const { t } = useTranslation();
    return(
        <section className="w-full flex flex-col justify-center items-center py-10 px-4 md:py-20" id="contact">
            <div className="w-full lg:w-auto lg:min-w-[900px] xl:min-w-[1250px] flex flex-col items-center justify-center bg-[#111116] rounded-3xl py-10 lg:py-12 px-6">
                {/*animacao pulse*/}
                <div className="py-2 px-4 rounded-full bg-[#2c2c35] flex items-center ">
                    <span className="relative flex size-2">
                        <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-sky-400 opacity-75"></span>
                        <span className="relative inline-flex size-2 rounded-full bg-sky-500"></span>
                    </span>
                    <p className="text-sm ml-2">{t('availability')}</p>
                </div>

                <h1 className={`text-3xl md:text-5xl font-bold text-center mt-5 ${clashDisplay.className} antialiased`}>
                    {t('ContactH1Sec1')}
                    <span className="ml-4 text-purple-500">{t('ContactH1Sec2')}</span>
                    <br/>
                    {t('ContactH1Sec3')}
                </h1>
                
                <a
                href="https://mail.google.com/mail/?view=cm&fs=1&to=lucasassuncao694@gmail.com&su=Orcamento Lucas A.&body=Olá, eu gostaria de um orçamento para criar um site."
                target="_blank">                   
                <button className="group relative inline-flex h-12 w-full overflow-hidden rounded-lg p-[1px] md:w-60 mt-10">
                        <span className="absolute inset-[-1000%] animate-[spin_2s_linear_infinite] bg-[conic-gradient(from_90deg_at_50%_50%,#E2CBFF_0%,#393BB2_50%,#E2CBFF_100%)]" />
                        <span className={`inline-flex h-full w-full cursor-pointer items-center justify-center rounded-lg bg-[#0b0b0d] px-7 py-3 text-base font-medium text-white backdrop-blur-3xl  `}
                        >
                        {t('ContactButton')} <GrSend className='ml-2 text-2xl 
                        transform group-hover:translate-x-1 group-hover:-translate-y-1 group-hover:scale-110 transition-transform duration-300' />
                        </span>
                    </button>
                </a>
            </div>
        </section>
    )
};export default ContactSection