import { useState } from 'react';
export const usePasswordToggler = () => {
  const [passwordVisibility, setPasswordVisibility] = useState(false);
  const [passwordVisibilityconfirm, setPasswordVisibilityconfirm] =
    useState(false);
  const [type, setType] = useState('password');
  const [typeConfirm, setTypeConfirm] = useState('password');
  const handlePasswordVisibility = () => {
    if (type === 'password') {
      setType('text');
      setPasswordVisibility(!passwordVisibility);
    } else if (type === 'text') {
      setType('password');
      setPasswordVisibility(!passwordVisibility);
    }
  };
  const handlePasswordVisibilityConfirm = () => {
    if (typeConfirm === 'password') {
      setTypeConfirm('text');
      setPasswordVisibilityconfirm(!passwordVisibilityconfirm);
    } else if (typeConfirm === 'text') {
      setTypeConfirm('password');
      setPasswordVisibilityconfirm(!passwordVisibilityconfirm);
    }
  };
  return {
    type,
    passwordVisibility,
    handlePasswordVisibility,
    handlePasswordVisibilityConfirm,
    passwordVisibilityconfirm,
    typeConfirm,
  };
};
