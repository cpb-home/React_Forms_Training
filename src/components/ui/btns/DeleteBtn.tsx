import './styles.css';

interface IProps {
  deleteMesureHandler: (id: number) => void;
  idx: number;
}

const DeleteBtn = ({ deleteMesureHandler, idx }: IProps) => {
  return (
    <button className='delBtn' type='button' title='Удалить' onClick={() => deleteMesureHandler(idx)}>&#10060;</button>
  )
}

export default DeleteBtn
