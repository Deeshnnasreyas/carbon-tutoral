'use client';
import { usePasswordToggler } from '@/hooks/usePasswordToggler';
import {
  Grid,
  Column,
  FormGroup,
  Stack,
  TextInput,
  Button,
  Section,
  Heading,
} from '@carbon/react';

import React, { useState } from 'react';
import { useForm } from 'react-hook-form';
import { yupResolver } from '@hookform/resolvers/yup';
import Swal from 'sweetalert2';
import * as yup from 'yup';
const LoginForm = (props) => {
  const [loading, setLoading] = useState(false);
  const { type, passwordVisibility, handlePasswordVisibility } =
    usePasswordToggler();
  const passwordRegex = /^(?=.*[^a-zA-Z0-9])(?=.*[a-z])(?=.*[A-Z])(?=.*\d).+$/;
  const schema = yup.object().shape({
    email: yup.string().required('Email required'),
    Password: yup
      .string()
      .required('Password required')
      .min(8, 'Passwords must be 8 characters or more')
      .max(20, 'Max characters limit Reached')
      .matches(
        passwordRegex,
        'Password must contain at least one uppercase letter, one lowercase letter, one number and one special character'
      ),
  });

  const {
    register,
    handleSubmit,
    reset,
    clearErrors,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });
  const onSubmit = async (data) => {
    setLoading(true);
    if (data) {
      setLoading(false);

      Swal.fire({
        icon: 'success',
        text: 'Success',
        showConfirmButton: false,
        timer: 2000,
      });
    } else {
      setLoading(false);
      reset();
      Swal.fire({
        icon: 'error',
        text: 'Something went wrong!!',
        showConfirmButton: false,
        timer: 2000,
      });
    }
  };
  return (
    <>
      <FormGroup
        style={{
          maxWidth: '600px',
          alignItems: 'center',
        }}
      >
        <Section as="login">
          <Heading>Login</Heading>
        </Section>
        <Stack gap={2}>
          <TextInput
            type="email"
            labelText="Email"
            required
            {...register('email')}
          />
          <p className="errmsg pl-3 " style={{ color: 'red', width: '15rem' }}>
            {errors.email ? errors.email.message : ''}
          </p>
          <TextInput
            type="password"
            labelText="Pasword"
            required
            name="Password"
            {...register('Password')}
            pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
          />
          <p className="errmsg pl-3 " style={{ color: 'red', width: '15rem' }}>
            {errors.Password ? errors.Password.message : ''}
          </p>
          <Button onClick={handleSubmit(onSubmit)}>Login</Button>
        </Stack>
      </FormGroup>
    </>
  );
};
export default LoginForm;
