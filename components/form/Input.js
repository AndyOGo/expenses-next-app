import {
  BSFormGroup,
  BSFormControl,
  BSFormLabel,
} from '../bootstrap/BSForm/BSForm';

const Input = ({ input, meta, label, as = 'input', children }) => (
  <BSFormGroup controlId={input.name}>
    <BSFormLabel>{label}</BSFormLabel>
    <BSFormControl {...input} as={as}>
      {children}
    </BSFormControl>
  </BSFormGroup>
);

export default Input;
