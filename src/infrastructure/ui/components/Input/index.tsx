import { FunctionComponent, HTMLInputTypeAttribute, ChangeEventHandler, SetStateAction, Dispatch } from 'react';
import { InputContainer } from './styles';

type InputProps = {
  type?: HTMLInputTypeAttribute;
  placeholder?: string;
  label?: string;
  name?: string;
  action: {
    SetValue: (value: string) => void;
    value: string;
  };
  required?: boolean;
};
export const Input: FunctionComponent<InputProps> = ({ type, placeholder, action, name, label, required }) => {
  const handlerChange: ChangeEventHandler<HTMLInputElement> = ({ target }) => {
    action.SetValue(target.value);
  };

  return (
    <InputContainer>
      {label && <label id={name}>{label}</label>}
      <input
        name={name}
        placeholder={placeholder}
        type={type || 'text'}
        onChange={handlerChange}
        value={action.value}
        required={required || false}
      />
    </InputContainer>
  );
};
