import React, { useState } from 'react'

export default function DropArea() {
    const [showDrop, setShowDrop] = useState(false)
    console.log(showDrop)
  return (
    <section 
    onDragEnter={()=>setShowDrop(true)}
    onDragLeave={()=>setShowDrop(false)}
    className={showDrop ? 
    'border border-dashed border-black text-center font-bold p-20 opacity-55 rounded-xl transition-all ease-in-out duration-100 my-4' 
    : 'opacity-0'}>
      <h1>Drop Here</h1>
    </section>
  )
}
