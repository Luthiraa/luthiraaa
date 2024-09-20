import React from 'react';
import { email } from './config';
import './Email.css';
import { motion } from 'framer-motion';

const Email = () => {

    return (
        <div className="email-container line">
            <motion.div className="new" whileHover="hover" initial="rest">
                <a href={`mailto:${email}`}>{email}</a>
            </motion.div>
        </div>
    );
};

export default Email;