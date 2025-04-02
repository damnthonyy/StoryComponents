import React from 'react';
import styles from "./InputPassword.module.scss"
import { UseFormRegisterReturn } from 'react-hook-form';


interface PasswordInputProps {
    label?: string;
    error?: string;
    disabled?: boolean;
    register: UseFormRegisterReturn;
  }


export const InputPassword: React.FC<PasswordInputProps>=({label='Password',error,disabled,register})=>{
    return(
        <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>
                {label}
            </label>


            <input 
                type='password'
                placeholder=''
                disabled={disabled}
                {...register}
                className={`${styles.inputField} ${error ? styles.error : ''} ${disabled ? styles.default : ''}`}
            />
            {error && <p className={styles.errorMessage}>{error}</p>}
            
        </div>
    )
}