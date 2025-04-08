import React, { useState, useEffect } from 'react'
import "./Login.scss"
import { InputEmail } from '../../components/InputEmail/InputEmail'
import {InputPassword} from '../../components/InputPassword/InputPassword'
import { useForm, SubmitHandler } from 'react-hook-form';
import { Button } from '../../components/btn/Button';
import img1 from '../../assets/images/img1.jpeg';
import { Link } from 'react-router-dom';

interface FormInputs {
    email: string;
    password: string;
}
  
interface LoginFormProps {
    disabled?: boolean;
}

export const Login: React.FC<LoginFormProps> = ({disabled=false}) => {
    const [isFormValid, setIsFormValid] = useState(false);

    const {
        register,
        handleSubmit,
        formState: { errors, isValid },
        watch
      } = useForm<FormInputs>({
        mode: "onChange"
      });

    // Observer les champs du formulaire
    const emailValue = watch('email');
    const passwordValue = watch('password');

    // Vérifier si les champs sont remplis et valides
    useEffect(() => {
      const isEmailValid = Boolean(emailValue) && !errors.email;
      const isPasswordValid = Boolean(passwordValue) && !errors.password;
      
      setIsFormValid(isEmailValid && isPasswordValid);
    }, [emailValue, passwordValue, errors.email, errors.password]);

    const onSubmit: SubmitHandler<FormInputs> = (data) => {
        console.log('Données du formulaire :', data);
      };

    return (
        <div className='login-form-container'>
            <div className='login-form-container-background'>
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
                    <Link to='/ResetPassword'> <span className='forgot-password'> Forgot Password ?</span> </Link>
                    <Button 
                      variant={isFormValid ? 'SignInValid' : 'SignIn'} 
                      label='Sign in' 
                      onClick={handleSubmit(onSubmit)}
                    />

                    <div className='login-form-footer'>
                        <div className='login-form-footer-line'>
                            <div className='login-form-footer-line-line'></div>
                            <span className='login-form-footer-line-span'>Or</span>
                            <div className='login-form-footer-line-line'></div>
                        </div>

                        <div className='SignUp'>
                            <span className='SignUp-text'>Don't have an account ?
                                <Link to=''> <span className='SignUp-link'>Sign up</span> </Link>
                            </span>
                            
                        </div>
                    </div>
                </form>
                <div className='login-form-container-image'>
                    <img src={img1} alt='login-form-container-image' className='login-form-container-image-img'/>
                </div>
            </div>
            
        </div>
        

    )
}