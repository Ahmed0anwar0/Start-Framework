import React, { useState } from 'react'

export default function Child({items}) {

    let { id, img } = items;

    const [showImage, setShowImage] = useState(false);

    const handleClick = () => {
      setShowImage(!showImage);
    };

    const handleBackgroundClick = () => {
        setShowImage(false);
      };

    return <>
       
        <div className="cards w-1/3 p-5">
            <div className="card cursor-pointer relative" onClick={handleClick}>
                 {showImage && (<div onClick={handleBackgroundClick} className='imgCon cursor-default'><img onClick={(e) => e.stopPropagation()} src={img} className='w-2/5 cursor-default'/></div>)}
                <img src={img} className='rounded-lg' />
                <div className="layer absolute rounded-lg content-center text-center inset-0 z-20 bg-main-Color">
                    <i className="text-8xl text-white fa-solid fa-plus"></i>
                </div>
            </div>
        </div>
    </>
}
