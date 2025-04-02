import type { Meta, StoryObj } from '@storybook/react';
import { InputEmail } from './InputEmail';




const meta : Meta<typeof InputEmail>={

    title:'Book/InputEmail',
    component: InputEmail,

    parameters:{
        layout:'centered',
    },

    argTypes:{
        disabled: { control: 'boolean' },
        error: { control: 'text' },
    },


    tags:['autodocs'],
} satisfies Meta<typeof InputEmail>;

export default meta;
type Story= StoryObj<typeof meta>;

// Objet factice pour simuler le register de react-hook-form
const dummyRegister = {
    onChange: async () => Promise.resolve(),
    onBlur: async () => Promise.resolve(),
    name: 'email',
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
      error: 'Please enter a valid address ',
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