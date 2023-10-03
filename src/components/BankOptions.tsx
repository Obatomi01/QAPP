import { useState } from 'react';

import styles from '../styles/login.module.scss';

type BankOptionsProp = {
  onChangeOptionHandler: any;
};

function BankOptions(props: BankOptionsProp) {
  const [selectedOption, setSelectedOption] = useState<any>(null);

  const options = [
    'Access Bank',
    'Diamond Bank',
    'First Bank',
    'Guaranty Trust Bank',
    'United Bank of Nigeria',
    'Wema Bank',
    'Zenith Bank',
  ];

  const onChangingOption = (option: any) => {
    setSelectedOption(option);
    props.onChangeOptionHandler(option);
  };

  return (
    <div>
      {options.map((option: any, index: any) => (
        <p
          key={index}
          onClick={() => onChangingOption(option)}
          className={selectedOption === option ? styles['active--option'] : ''}
        >
          {option}
        </p>
      ))}
    </div>
  );
}

export default BankOptions;
