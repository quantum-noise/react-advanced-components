import React from 'react';
import { noop } from '../utils';

export const FormContext = React.createContext({
  values: {},
  handleChange: noop,
});
