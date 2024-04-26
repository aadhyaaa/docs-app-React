import React from 'react'
import { TbBrandPagekit } from "react-icons/tb";
import { MdOutlineFileDownload } from "react-icons/md";
import { IoMdClose } from "react-icons/io";
import { motion } from "framer-motion"

function Card({data, reference}) {
  return (
    <motion.div drag dragConstraints={reference} whileDrag={{scale:1.2}} className='relative flex-shrink-0 w-60 h-72 rounded-[20px] bg-zinc-900/90 text-white p-5 overflow-hidden py-5 px-8'>
        <TbBrandPagekit /> <p className='text-sm mt-5 font-semibold leading-tight'>{data.desc}</p>
        <div className='footer absolute bottom-0 w-full left-0'>
        <div className='flex items-center py-3 mb-3 px-8 justify-between'>
            <h5>{data.filesize}</h5>
            <span className='h-8 w-8 bg-zinc-600 rounded-full flex items-center justify-center'>
                {data.close ? <IoMdClose /> : <MdOutlineFileDownload size="0.8em" color="#fff"/>}
            
            </span>
        </div>
        {data.tag.isOpen && (
            <div className={`tag w-full py-4 ${data.tag.tagColor=="blue" ? "bg-blue-600" : "bg-green-600"} flex items-center justify-center`}>
                <h3 className='text-sm font-semibold'>{data.tag.tagTitle}</h3>
            </div>
        )}
        
        </div>
        
    </motion.div>
  );
}

export default Card
