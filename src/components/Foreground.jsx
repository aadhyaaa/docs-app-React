import React, { useRef } from 'react'
import Card from './Card'


function Foreground() {
    const ref=useRef(null)
    const data=[{
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        filesize: "0.9mb",
        close: true,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green"},
    },
    {
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        filesize: "0.9mb",
        close: true,
        tag: { isOpen: false, tagTitle: "Download Now", tagColor: "blue"},
    },
    {
        desc: "Lorem ipsum dolor sit amet consectetur adipisicing.",
        filesize: "0.9mb",
        close: true,
        tag: { isOpen: true, tagTitle: "Download Now", tagColor: "green"},
    },];
  return (
    <div ref={ref} className='fixed flex gap-10 flex-wrap w-full h-full top-0 left-0 z-[3] p-5'>
        {data.map((item, index)=>(
            <Card data={item} reference={ref}/> 
        ))}
    </div>
  )
}

export default Foreground
