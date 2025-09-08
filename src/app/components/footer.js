import {getSocialMedias} from "../utils/utils.js"

const footer = () => {
    const SocialMedias = getSocialMedias();
    return(
        <div className="w-full px-5 py-4 md:py-10">
            <div className="flex flex-col md:flex-row justify-between items-center md:mx-[17%]">
                <p className="md:text-base text-sm text-[#a9a9bd] font-light">
                    © 2025 Lucas Cardoso. All rights reserved.
                </p>
                <div className="flex items-center space-x-4 mt-4 md:mt-0">
                    {SocialMedias.map((social) => (
                        <a
                            key={social.id}
                            href={social.link}
                            className="text-[#a9a9bd] hover:text-[#ffffff] transition-all text-2xl "
                            target="_blank"
                        >
                            {social.icon}
                        </a>
                    ))}
                </div>
            </div>
        </div>
    )
};
export default footer