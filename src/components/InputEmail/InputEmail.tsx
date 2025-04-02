import React from 'react';
import styles from './InputEmail.module.scss';
import "./InputEmail.module.scss"
import { UseFormRegisterReturn } from 'react-hook-form';
import { InfoCircledIcon } from '@radix-ui/react-icons';


interface EmailInputProps{
    label?:string;
    error?:string;
    disabled?:boolean;
    register:UseFormRegisterReturn;
}


export const InputEmail: React.FC <EmailInputProps>= ({label='email*',error,disabled,register}) => {

    return (
        <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>
                {label}
            </label>

            <input 
                type='email'
                placeholder='Ex:JohnDoe@gmail.com'
                disabled={disabled}
                {...register}
                className={`${styles.inputField} ${error ? styles.error : ''} ${disabled ? styles.default : ''}`}
            />
            {error && <p className={styles.errorMessage}> <InfoCircledIcon style={{width:'13.25px', height:'13.25px'}}/> {error}</p>}
            
        </div>
    )
}