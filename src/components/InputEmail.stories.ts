import { Meta, StoryObj } from '@storybook/react';
import { InputEmail } from "./InputEmail";

const meta ={
    title:"StoryComponents/InputEmail",
    component:InputEmail,
    parameters: {
        layout: 'centered',
    },
    tags: ['autodocs'],

    argTypes: {
        placeholder: { control: 'text' },
        status: { control: 'select', options: ['default', 'focus', 'error'] },
        errorMessage: { control: 'text' },
        
    },

    args: {
        
        placeholder: 'JohnDoe@gmail.com',
        status: 'default'
        
    },

}satisfies Meta<typeof InputEmail>;

export default meta;
type Story= StoryObj<typeof meta>;

export const Default: Story = {
    args: {
        placeholder: 'JohnDoe@gmail.com',
        status: 'default'
    },
};
export const Focus: Story = {
    args: {
        placeholder: '',
        status: 'focus'
    },
};
export const Error: Story = {
    args: {
        placeholder: '',
        status: 'error',
        errorMessage:'Please enter a valid address '
    },
};