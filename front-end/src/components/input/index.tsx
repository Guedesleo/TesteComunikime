import React, {
    InputHTMLAttributes,
    useEffect,
    useRef,
  } from 'react';
  import { IconBaseProps } from 'react-icons';
  import { useField } from '@unform/core';

  import './styles.css'
  
  
  interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
    name: string;
    containerStyle?: object;
    icon?: React.ComponentType<IconBaseProps>;
  }
  
  const Input: React.FC<InputProps> = ({
    name,
    containerStyle,
    ...rest
  }) => {
    const inputRef = useRef<HTMLInputElement>(null);
    const { fieldName, defaultValue, registerField } = useField(name);
  
  
    useEffect(() => {
      registerField({
        name: fieldName,
        ref: inputRef.current,
        path: 'value',
      });
    }, [fieldName, registerField]);
  
    return (
        <div>
             <input
                 className="inputLabel"
                 defaultValue={defaultValue}
                 ref={inputRef}
                {...rest}
        />
        </div>
    );
  };
  
  export default Input;
  