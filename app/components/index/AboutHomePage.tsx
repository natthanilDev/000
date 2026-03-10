import Image from "next/image"
import { motion } from "framer-motion"
export default function AboutHomePage() {
  return (
    <div>
        <motion.div
                    className='image-company-box'
                    initial={{ opacity: 0 }}
                    whileInView={{ x: 0, opacity: 1 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={{
                        type: "spring",
                        stiffness: 80,
                        damping: 18,
                        mass: 0.8
                    }}
                >
     
            <Image className="image-company" src={"/company/company-index1.svg"} alt="" width={1000} height={1000}/>
        </motion.div>

        
    </div>
  )
}
