import React, { useState } from 'react'
import styles from './InputEmail.module.scss';
import "./InputEmail.module.scss"

export type InputStatus = 'default'| 'focus'| 'error';

interface InputEmailProps{
    placeholder?:string,
    status?:InputStatus,
    errorMessage?:string,
    label?: string,
    required?: boolean,
}

export const InputEmail: React.FC<InputEmailProps> = ({
    placeholder='JohnDoe@gmail.com',
    status='default',
    errorMessage,
    label = 'Email',
    required = false,
}) => {

    let InputClass=styles.inputField;
    if (status === 'focus') {
        InputClass += ` ${styles.focus}`;
      } else if (status === 'error') {
        InputClass += ` ${styles.error}`;
      }

    const [email, setEmail] = useState('');
    const [isFocused, setIsFocused] = useState(false);
    const [isTouched, setIsTouched] = useState(false);

    const isError = required && email.trim() === '' && isTouched;

    return (
        <div className={styles.inputContainer}>
            <label htmlFor='input-email' className={styles.inputLabel}>
                {label} {required && '*'}

            </label>
            <input 
                type="email"
                id="input-email"
                placeholder={placeholder}
                className={InputClass}
                onFocus={() => setIsFocused(true)}
                onBlur={() => {
                    setIsFocused(false);
                    setIsTouched(true);
                }}
            />
            {status === 'error' && errorMessage && (
                <span className={styles.errorMessage}>{errorMessage}</span>
            )}
        </div>
    )
}