import * as React from 'react';
import { Link } from 'react-router-dom';
import { useForm } from "react-hook-form";
import { Form } from '../../Components/Form/Form';
import { InputField } from '../../Components/Form/InputField';
import { SelectField } from '../../Components/Form/SelectField';
import * as z from 'zod';

//MUI
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Container from '@mui/material/Container';

const schema = z
  .object({
    email: z.string().min(1, 'Required'),
    firstName: z.string().min(1, 'Required'),
    lastName: z.string().min(1, 'Required'),
    password: z.string().min(1, 'Required'),
  })

type FormValues = {
    firstName: string;
    lastName: string;
    email: string;
    password: string;
};

type RegisterFormProps = {
    onSuccess: () => any;
};
  
export const RegisterForm = ({ onSuccess }: RegisterFormProps) => {
    const { register, handleSubmit } = useForm<FormValues>();
    const onSubmit = (data: FormValues) => alert(JSON.stringify(data));

    return (
        <Container maxWidth="sm" sx={{ bgcolor: '#A4A4A4', mt: 5, justifyContent: 'center' }}>
            <Box sx={{ alignContent: 'center' }}>    
                <form onSubmit={handleSubmit(onSubmit)}>
                    <InputField
                    type="text"
                    label="First Name"
                    registration={register('firstName')}
                    />
                    <InputField
                    type="text"
                    label="Last Name"
                    registration={register('lastName')}
                    />
                    <InputField
                    type="email"
                    label="Email Address"
                    registration={register('email')}
                    />
                    <InputField
                    type="password"
                    label="Password"
                    registration={register('password')}
                    />
                    <div>
                    <Button type="submit" variant="contained" sx={{ mt: 2 }}>
                        Register
                    </Button>
                    </div>
                </form>
            </Box>
        </Container>
    );
};