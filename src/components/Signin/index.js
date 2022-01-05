import React from 'react';
// import { auth } from '../firebase-config';
// import { useState } from 'react';
// import { useHistory } from 'react-router-dom';

import {
  Container,
  FormWrap,
  Icon,
  FormContent,
  Form,
  FormH1,
  FormLabel,
  FormInput,
  FormButton,
  Text
} from './SigninElements';


const Signin = () => {

  


  return (
    <>
      <Container>
        <FormWrap>
          <Icon to="/">Vir-Bank</Icon>
          <FormContent>
            <Form action="#">
              <FormH1>Sign in to your account</FormH1>
              <FormLabel htmlfor="for" placeholder="Email.."
                >Email</FormLabel>
              <FormInput type='email' required />
              <FormLabel htmlfor="for" placeholder="Password..."
                >Password</FormLabel>
              <FormInput type='password' required />
              <FormButton type='submit'  >Continue</FormButton>
              <Text>Forgot Password</Text>
            </Form>
          </FormContent>
        </FormWrap>
      </Container>
    </>
  )
}

export default Signin;

