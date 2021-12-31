
import React from "react";
import useFirestore from "../hooks/useFirestore";
// Found fix for issue on StackOverFlow... Had to change import loaction
// fixes --->
//  "Failed to compile
// ./node_modules/framer-motion/dist/es/components/AnimatePresence/index.mjs
// Can't import the named export 'Children' from non EcmaScript module (only default export is available)"
import { motion } from 'framer-motion/dist/framer-motion'


const ImageGrid = ({ setSelectedImg }) => {
    const { docs } = useFirestore('images')

    return (
        <div className="img-grid">
            {docs && docs.map(doc => (
                <motion.div
                    className="img-wrap"
                    key={doc.id}
                    layout
                    whileHover={{ opacity: 1 }}
                    onClick={() => setSelectedImg(doc.url)}
                >
                    <motion.img
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1 }}
                        transition={{ delay: 1 }}
                        src={doc.url}
                        alt={doc.id} />
                </motion.div>
            ))}
        </div>
    )
}



export default ImageGrid