"use client";
import Image from "next/image";
import { useTranslation } from "react-i18next";

// Array com SVGs que existem na pasta public
export const logos = [
    { src: "/assets/svgs/react-logo.svg", alt: "React Logo", name: "React", width: 30, height: 30 },
    { src: "/assets/svgs/Next-js.svg", alt: "Next.js Logo", name: "Next.js", width: 30, height: 30 },
    { src: "/assets/svgs/Tailwind-Logo.svg", alt: "Tailwind CSS Logo", name: "Tailwind CSS", width: 30, height: 30 },
    { src: "/assets/svgs/Javascript-Logo.svg", alt: "JavaScript Logo", name: "JavaScript", width: 30, height: 30 },
    { src: "/assets/svgs/figma-logo.svg", alt: "Figma Logo", name: "Figma", width: 24, height: 24 },
];

const Logo = ({ src, alt, name, width = 30, height = 30 }) => (
    <div className="flex items-center gap-2 self-center lg:items-center lg:gap-2">
        <div className="flex w-[60px] items-center justify-center">
            <Image src={src} alt={alt} width={width} height={height} />
        </div>
        {name && <div className="text-sm font-semibold lg:text-base">{name}</div>}
    </div>
);

export const LogoList = ({ startIndex = 0 }) => (
    <div className="flex items-center">
        {Array.from({ length: 2 }, (_, i) =>
            logos.map((logo, index) => (
                <div key={`logo-${startIndex}-${i}-${index}`} className="inline-flex items-center px-6">
                    <Logo {...logo} />
                </div>
            ))
        ).flat()}
    </div>
);

export default function Technologies() {
    const { t } = useTranslation();
    return (
        <div className="relative z-10 mx-auto mt-[50px] lg:mt-22 lg:max-w-[1080px] pb-10">
            <h2 className="mx-auto mb-4 w-full px-8 text-center text-[#a9a9bd] text-sm lg:mb-6 lg:px-0 lg:text-base">
                {t("Technologies")}
            </h2>

            <div
                className="relative flex w-full overflow-hidden text-[#f6f7ff] border-y border-[#191920] "
                style={{
                    maskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
                    WebkitMaskImage: "linear-gradient(to right, transparent, black 12%, black 88%, transparent)",
                }}
            >
                <div className="flex animate-marquee whitespace-nowrap py-6">
                    {Array.from({ length: 2 }, (_, i) => (
                        <LogoList key={`list-1-${i}`} startIndex={i} />
                    ))}
                </div>
                <div className="flex animate-marquee-scroll whitespace-nowrap py-6" style={{ animationDelay: "-20s" }} aria-hidden="true">
                    {Array.from({ length: 2 }, (_, i) => (
                        <LogoList key={`list-2-${i}`} startIndex={i + 2} />
                    ))}
                </div>
            </div>
        </div>
    );
}