import React from 'react';
import { IoLogoLinkedin, IoLogoGithub, IoLogoGoogle } from 'react-icons/io';
import { SiLeetcode } from 'react-icons/si';
import { motion } from 'framer-motion';
import './Icons.css';

const Icons = () => {
    const navigateTo = (url) => {
        window.open(url, '_blank');
    };

    const iconVariants = {
        hover: { scale: 1.2,color: "#C69749", transition: { duration: 0.3 } },
        rest: { scale: 1 }
    };

    return (
        <div className="icon-container line-guide">
            <motion.div className="icon" variants={iconVariants} whileHover="hover" initial="rest">
                <IoLogoLinkedin onClick={() => navigateTo('https://www.linkedin.com/in/luthiraa')} />
            </motion.div>
            <motion.div className="icon" variants={iconVariants} whileHover="hover" initial="rest">
                <SiLeetcode onClick={() => navigateTo('https://leetcode.com/u/Luthiraa/')} />
            </motion.div>
            <motion.div className="icon" variants={iconVariants} whileHover="hover" initial="rest">
                <IoLogoGithub onClick={() => navigateTo('https://github.com/Luthiraa')} />
            </motion.div>
            <motion.div className="icon" variants={iconVariants} whileHover="hover" initial="rest">
                <IoLogoGoogle onClick={() => navigateTo('mailto:luthira.abeykoon@gmail.com')} />
            </motion.div>
        </div>
    );
};

export default Icons;