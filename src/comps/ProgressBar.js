import React, { useEffect } from "react";
import useStorage from '../hooks/useStorage'

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


const ProgressBar = ({file, setFile})=>{

    const {url,progress} = useStorage(file)

    useEffect(()=>{
        if(url){
            setFile(null)
        }

    },[url,setFile])

    return(
        <motion.div className='progress-bar'
            initial={{width: 0}}
            animate={{width: progress + '%'}}
        ></motion.div>
    )
}

export default ProgressBar
