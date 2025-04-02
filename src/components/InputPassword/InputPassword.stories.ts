import type { Meta, StoryObj } from '@storybook/react';
import { InputPassword } from './InputPassword';



const meta={

    title:'Book/InputPassword',
    component:InputPassword,

    parameters:{
        layout:'centered',
    },

    argTypes:{
        disabled: { control: 'boolean' },
        error: { control: 'text' },
    },

    tags:['autodocs'],
} satisfies Meta<typeof InputPassword>;

export default meta;
type Story=StoryObj<typeof meta>;

// Objet factice pour simuler le register de react-hook-form
const dummyRegister = {
    onChange: async () => Promise.resolve(),
    onBlur: async () => Promise.resolve(),
    name: 'password',
    ref: () => null,
};

export const Default: Story = {
    args: {
      disabled: false,
      error: '',
      register:dummyRegister,
    },
};

export const WithError: Story = {
    args: {
      disabled: false,
      error: 'Le mot de passe est requis',
      register: dummyRegister,
    },
};
  
export const Disabled: Story = {
    args: {
      disabled: false,
      error: '',
      register: dummyRegister,
    },
};
