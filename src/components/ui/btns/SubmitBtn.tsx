import './styles.css';

interface IProps {
  text: string;
}

const SubmitBtn = ({ text }: IProps) => {
  return (
    <button className='sbmtBtn' type="submit">{text}</button>
  )
}

export default SubmitBtn
