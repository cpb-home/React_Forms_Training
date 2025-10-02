import React, { useState } from "react";
import styles from './Input.module.css';

interface IProps {
  type: string;
  name: string;
  placeholder: string;
  labelText: string;
  id: string;
}

const Input = ({ type, name, placeholder, labelText, id }: IProps) => {
  const [val, setVal] = useState('');

  return (
    <div className={styles.inputCont}>
      <label htmlFor={id}>{labelText}</label>
      <input 
        type={type} 
        name={name} 
        placeholder={placeholder} 
        value={val} 
        onChange={(e: React.ChangeEvent<HTMLInputElement>) => setVal(e.target.value)} 
        id={id}
        required 
      />
    </div>
  )
}

export default Input
