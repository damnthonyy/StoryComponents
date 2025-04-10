import {Button} from './Button'
import {Meta, StoryObj} from '@storybook/react'

const meta:Meta<typeof Button>={
    title:'Book/Button',
    component:Button,
    parameters:{
        layout:'centered',
    },
    tags:['autodocs'],
    argTypes:{
        label:{control:'text'},
        variant:{control:'select'},
        onClick:{action:'clicked'},
    }
}

export default meta;

type Story=StoryObj<typeof meta>;

export const SignIn:Story={
    args:{
        label:'Sign in',
        variant:'SignIn',
        onClick:()=>{}
    }
}
export const SignInValid:Story={
    args:{
        label:'Sign in',
        variant:'SignInValid',
        onClick:()=>{}
    }
}

export const Edit:Story={
    args:{
        label:'Edit',
        variant:'Edit',
        onClick:()=>{}
    }
}

export const Delete:Story={
    args:{
        label:'Delete account',
        variant:'Delete',
        onClick:()=>{}
    }
}

export const GetLink:Story={
    args:{
        label:'get a link',
        variant:'GetLink',
        onClick:()=>{}
    }
}



