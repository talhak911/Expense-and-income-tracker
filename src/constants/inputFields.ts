import { FIELDS_TYPE } from "../types/types";

export const PASSWORD_RESET_FIELDS = (
    password: string,
    setPassword: (text: string) => void,
    newPassword: string,
    setNewPassword: (text: string) => void,
    confirmPassword: string,
    setConfirmPassword: (text: string) => void,
  ): FIELDS_TYPE[] => [
    {
      value: password,
      onChange: setPassword,
      placeholder: 'Current password',
      secureInput: true,
    },
    {
      value: newPassword,
      onChange: setNewPassword,
      placeholder: 'New password',
      secureInput: true,
    },
    {
      value: confirmPassword,
      onChange: setConfirmPassword,
      placeholder: 'Confirm new password',
      secureInput: true,
    },
  ];
  

  export const UPDATE_PROFILE_FIELDS = (
    name: string,
    setName: (text: string) => void,
    email: string,
    setEmail: (text: string) => void,
  ): FIELDS_TYPE[] => [
    {
        label: 'Email',
        value: email,
        onChange: setEmail,
        placeholder: 'Enter your email',
        keyboardType: 'email-address',
  
      },
    {
      label: 'Name',
      value: name,
      onChange: setName,
      placeholder: 'Enter your name',
    }
   
  ];
  