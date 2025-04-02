import React from 'react';
import './Button.scss';


interface ButtonProps{
    variant?: 'SignIn' | 'Edit' | 'Delete'
    label?:string
    onClick?:()=>void
}

export const Button:React.FC<ButtonProps>=({label,onClick,variant})=>{
    
    return(
        <button className={`btn-class  btn-class--${variant}`} onClick={onClick}>
            {label}
        </button>
    )
}