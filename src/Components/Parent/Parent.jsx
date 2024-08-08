import React, { useState } from 'react'
import img1 from '../../image/poert1.png'
import img2 from '../../image/port2.png'
import img3 from '../../image/port3.png'
import Child from '../Child/Child'

export default function Parent() {

    const [portItems, setPort] = useState([
        {id:1 , img:img1},
        {id:2 , img:img2},
        {id:3 , img:img3},
        {id:4 , img:img1},
        {id:5 , img:img2},
        {id:6 , img:img3},
    ])
    
  return <>
    {portItems.map((portItem)=> <Child key={portItem.id} items={portItem}/>)}
  </>
}
