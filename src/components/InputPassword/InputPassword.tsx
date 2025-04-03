import React, { useState } from 'react';
import styles from "./InputPassword.module.scss"
import { UseFormRegisterReturn } from 'react-hook-form';
import { EyeOpenIcon, EyeClosedIcon,InfoCircledIcon } from '@radix-ui/react-icons';


interface PasswordInputProps {
    label?: string;
    error?: string;
    disabled?: boolean;
    register: UseFormRegisterReturn;
}


export const InputPassword: React.FC<PasswordInputProps>=({label='Password',error,disabled,register})=>{
    const OpenIcon = <EyeOpenIcon  />
    const CloseIcon = <EyeClosedIcon  />

    const [showPassword, setShowPassword] = useState(false);

    const togglePassword = () => {
        setShowPassword(!showPassword);
    } 

    const inputType = showPassword ? 'text' : 'password';

    return(
        <div className={styles.inputContainer}>
            <label className={styles.inputLabel}>
                {label}
            </label>

            <div className={styles.inputFieldContainer}>

                <div className={styles.inputIcon}>
                    <input 
                    type={inputType}
                    placeholder=''
                    disabled={disabled}
                    {...register}
                    className={`${styles.inputField} ${error ? styles.error : ''} ${disabled ? styles.default : ''}`}
                    />
                    <button type="button" className={styles.eyeIcon} onClick={togglePassword} aria-label="Toggle password visibility">
                        {showPassword ? CloseIcon : OpenIcon}
                    </button>
                </div>
            
            

                {error && <p className={styles.errorMessage}> <InfoCircledIcon style={{width:'13.25px', height:'13.25px'}}/> {error}</p>}
            </div>
            
            
        </div>
    )
}