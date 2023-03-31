import React from 'react'

const Button = ({isFilled,children,className}) => {
  return (
    <button className={`${isFilled?'bg-primary text-white':'text-primary'} text-lg font-[500] px-10 py-3 ${className || ''} rounded-[3rem] border-primary  border-[2px]`}>
        {children}
    </button>
  )
}

export default Button
