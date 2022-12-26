import React from 'react';
import { InputForm } from './InputForm.styled';
import PropTypes from 'prop-types';

export const InputPassword = ({ onChange, value }) => (
  <InputForm
    autoComplete="current-password"
    type="password"
    name="password"
    required
    onChange={onChange}
    value={value}
    pattern="(?=.*\d)(?=.*[a-z])(?=.*[A-Z]).{6,}"
    title="Має містити принаймні одну цифру, одну велику та малу літеру та принаймні 6 або більше символів"
  />
);