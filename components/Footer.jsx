import React from 'react';
import { FaInstagram, FaGithub, FaTwitter, FaEnvelope, FaDev } from 'react-icons/fa';

const Footer = () => {
    return (
        <footer className="px-3 mt-20 text-center">
            <div className="py-1 flex justify-center">
                <a href="https://www.instagram.com/hossen_iftakher/"><FaInstagram className="mx-1 text-xl" /></a>
                <a href="https://github.com/iftakherhossen/"><FaGithub className="mx-1 text-xl" /></a>
                <a href="https://twitter.com/iftakher_hossen"><FaTwitter className="mx-1 text-xl" /></a>
                <a href="mailto:iftakher.one@gmal.com"><FaEnvelope className="mx-1 text-xl" /></a>
                <a href="https://dev.to/iftakher_hossen"><FaDev className="mx-1 text-xl" /></a>
            </div>
            <div className="mb-4 py-1">
                <p className="text-md font-[1.2em] font-mono">©Code Editor 2022 developed by <a href="https://iftakher-hossen.vercel.app/">Iftakher Hossen</a></p>
            </div>
        </footer>
    );
};

export default Footer;