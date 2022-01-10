import React from "react";

// COMMENT ONE OUT------------------------------------------------------------------------------

// Found fix for issue on StackOverFlow... Had to change import loaction
// fixes --->
//  "Failed to compile
// ./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
// Can't import the named export 'Children' from non EcmaScript module (only default export is available)"
import { motion } from 'framer-motion/dist/framer-motion'

// If installing most recent Framer Motion, they fixed bugs. We can use --->
import { motion } from 'framer-motoion
// COMMENT ONE OUT

// COMMENT ONE OUT------------------------------------------------------------------------------



const Modal = ({ selectedImg, setSelectedImg }) => {

    const handleClick = (e) => {

        if (e.target.classList.contains('backdrop')) {
            setSelectedImg(null)
        }
    }

    return (
        <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            className="backdrop"
            onClick={handleClick}>
                 <motion.img 
                    initial={{y:'-100vh'}}
                    animate={{y:0}}
                    src={selectedImg} 
                    alt="enlarged pic" />
        </motion.div>
        
    )
}

export default Modal
