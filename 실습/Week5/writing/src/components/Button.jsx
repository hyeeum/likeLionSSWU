import React from 'react'
import { Link } from 'react-router-dom' //import 잘 되었는지 항상 확인하기!! 

const Button = () => {
  return (
    <div className='button_wrap'>
        <Link to ='/write'>Button</Link>
    </div>
  )
}

export default Button