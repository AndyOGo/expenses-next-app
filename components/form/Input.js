import {
  BSFormGroup,
  BSFormControl,
  BSFormLabel,
} from '../bootstrap/BSForm/BSForm';

const Input = ({ input, meta, label, as = 'input', children, ...props }) => (
  <BSFormGroup controlId={input.name}>
    <BSFormLabel>{label}</BSFormLabel>
    <BSFormControl {...props} {...input} as={as}>
      {children}
    </BSFormControl>
  </BSFormGroup>
);

export default Input;
