import styles from '../../styles/login.module.scss';

type InputProps = {
  placeholder: string;
  type: string;
  curVal?: any;
};

function InputContainer(props: InputProps) {
  return (
    <div
      className={`${styles['form--input']}`}
      style={{
        marginBottom: '0.8rem',
      }}
    >
      <input
        placeholder={props.placeholder}
        type={props.type}
        ref={props.curVal}
      />
    </div>
  );
}

export default InputContainer;
