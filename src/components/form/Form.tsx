import { FormEvent } from 'react';
import { IMesure } from '../../types/interfaces';
import SubmitBtn from '../ui/btns/SubmitBtn';
import Input from '../ui/inputs/Input';
import styles from './Form.module.css';

interface IProps {
  addMesureHandler: (data: IMesure) => void;
}

const Form = ({ addMesureHandler }: IProps) => {

  function submitHandler(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    
    const formData = new FormData(e.currentTarget);
    const date = formData.get('date') as string | null;
    const distance = parseFloat(formData.get('distance') as string | '');

    if (date && !isNaN(distance)) {
      const splitedDate = date.split('-');
      const measureData: IMesure = {
        date: splitedDate[2] + '.' + splitedDate[1] + '.' + splitedDate[0],
        distance: distance,
      };
      addMesureHandler(measureData);
    }
  }

  return (
    <form className={styles.form} onSubmit={submitHandler}>
      <Input 
        type='date'
        name='date'
        id='date'
        labelText='Дата (ДД.ММ.ГГГГ)'
        placeholder='дд.мм.гггг'
      />
      <Input 
        type='number'
        name='distance'
        id='distance'
        labelText='Пройдено км'
        placeholder='Расстояние'
      />
      <SubmitBtn text='OK' />
    </form>
  )
}

export default Form
