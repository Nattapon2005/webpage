import React from 'react';
import { motion } from 'framer-motion';

const pageVariants = {
    initial: {
        opacity: 0,
        y: 22,
        scale: 0.996,
        filter: 'blur(7px)'
    },
    in: {
        opacity: 1,
        y: 0,
        scale: 1,
        filter: 'blur(0px)'
    },
    out: {
        opacity: 0,
        y: -16,
        scale: 0.998,
        filter: 'blur(5px)'
    }
};

const pageTransition = {
    type: 'tween',
    ease: [0.22, 1, 0.36, 1],
    duration: 0.55
};

const PageTransition = ({ children }) => {
    return (
        <motion.div
            className="page-tech"
            initial="initial"
            animate="in"
            exit="out"
            variants={pageVariants}
            transition={pageTransition}
        >
            {children}
        </motion.div>
    );
};

export default PageTransition;
