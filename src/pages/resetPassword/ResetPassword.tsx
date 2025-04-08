import React from 'react'
import "./ResetPassword.scss"
import img2 from '../../assets/images/img2.jpeg'
import { Button } from '../../components/btn/Button'
import { InputEmail } from '../../components/InputEmail/InputEmail'
import { useForm } from 'react-hook-form'

interface ResetPasswordFormInputs {
    email: string;
}

export const ResetPassword: React.FC = () => {
    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<ResetPasswordFormInputs>();

    const onSubmit = (data: ResetPasswordFormInputs) => {
        console.log('Reset password data:', data);
    };

    return (
        <div className='reset-password-container'>
            <div className='reset-password-container-background'>
                
                <div className='reset-password-container-background-form'>
                    <div className='reset-password-container-background-form-title'>
                        <span className='reset-password-container-background-form-title-text'>Reset your password</span>
                        <span className='reset-password-container-background-form-subtitle-text'>Enter your email address to receive a reset link. Follow the instructions to set a new password securely.</span>
                    </div>

                    <form onSubmit={handleSubmit(onSubmit)}>
                        <div className='reset-password-container-background-form-input'>
                            <InputEmail
                                label='Email*'
                                register={register('email', {
                                    required: 'Email is required',
                                    pattern: {
                                        value: /^(?!\s*$)[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                                        message: 'Please enter a valid email address',
                                    },
                                })}
                                error={errors.email?.message}
                            />
                            <Button 
                                variant='GetLink'
                                label='Get Link'
                                onClick={handleSubmit(onSubmit)}
                            />
                        </div>
                    </form>
                </div>

                <div className='reset-password-container-background-image'>
                    <img src={img2} alt='reset-password-container-background-image' className='reset-password-container-background-image-img'/>
                </div>
            </div>

        </div>
    )
}