import React from 'react'
import "./Login.scss"
import { InputEmail } from '../../components/InputEmail/InputEmail'
import {InputPassword} from '../../components/InputPassword/InputPassword'
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '../../components/btn/Button';
interface FormInputs {
    email: string;
    password: string;
}
  
interface LoginFormProps {
    disabled?: boolean;
}

export const Login: React.FC<LoginFormProps> = ({disabled=false}) => {

    const {
        register,
        handleSubmit,
        formState: { errors },
      } = useForm<FormInputs>();

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        console.log('Données du formulaire :', data);
      };

    return (
        <form onSubmit={handleSubmit(onSubmit)} style={{ width: 'fit-content'}} className='login-form'>
            
            <div className='login-form-header'>
                <h1 className='login-form-title'>Welcome back 👋🏾</h1>
                <p className='login-form-subtitle'>The quick brown fox jumps over the lazy dog lorem ipsum.</p>
            </div>
            

            <InputEmail
            disabled={disabled}
            error={errors.email?.message as string}
            register={register('email',{
                required:true,
                pattern:{
                    value: /^(?!\s*$)[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                    message:'Please enter a valid address ',
                },
            })}
            />

            <InputPassword 
                disabled={disabled}
                error={errors.password?.message as string}
                register={register('password', {
                    required: 'Please enter a correct password',
                })}

            
            />

            <span className='forgot-password'> Forgot Password ?</span>

            <Button variant='SignIn' label='Sign in' onClick={handleSubmit(onSubmit)}/>

            <div className='login-form-footer'>
                <div className='login-form-footer-line'>
                    <div className='login-form-footer-line-line'></div>
                    <span className='login-form-footer-line-span'>Or</span>
                    <div className='login-form-footer-line-line'></div>
                </div>

                <div className='SignUp'>
                    <span className='SignUp-text'>Don't have an account ?
                        <span className='SignUp-link'>Sign up</span>
                    </span>
                    
                </div>
            </div>

        


        </form>
    )
}