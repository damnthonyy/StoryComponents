import React from 'react'
import "./Login.scss"
import { InputEmail } from '../../components/InputEmail/InputEmail'
import {InputPassword} from '../../components/InputPassword/InputPassword'
import { useForm, SubmitHandler } from 'react-hook-form';

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
        <form onSubmit={handleSubmit(onSubmit)}>
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
                    required: 'Le mot de passe est requis',
                })}

            
            />

            <button style={{width:'240px', padding:'5px',gap:'5px',marginTop:'0.3rem'}}
                type="submit"
                disabled={disabled}>

                    sign in
            </button>

        


        </form>
    )
}