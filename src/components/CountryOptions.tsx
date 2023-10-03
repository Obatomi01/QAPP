import styles from '../styles/login.module.scss';

import { useState } from 'react';

import GermanyIcon from '../images/germany.png';
import FranceIcon from '../images/france.png';
import USIcon from '../images/united-states.png';
import UKIcon from '../images/united-kingdom.png';
import SpainIcon from '../images/spain.png';
import SouthKoreaIcon from '../images/south-korea.png';
import NigeriaIcon from '../images/nigeria.png';

type CountryOptionsProps = {
  onSelectedCountryHandler: any;
};

function CountryOptions(props: CountryOptionsProps) {
  const [selectedCountry, setSelectedCountry] = useState<any>('NIG');

  const countryOptions = [
    {
      name: 'ESP',
      flag: SpainIcon,
    },
    {
      name: 'FRA',
      flag: FranceIcon,
    },
    {
      name: 'GER',
      flag: GermanyIcon,
    },
    {
      name: 'KOR',
      flag: SouthKoreaIcon,
    },
    {
      name: 'NIG',
      flag: NigeriaIcon,
    },
    {
      name: 'UK',
      flag: UKIcon,
    },
    {
      name: 'USA',
      flag: USIcon,
    },
  ];

  const onHandleSelectedCountry = (country: any) => {
    setSelectedCountry(country.name);
    props.onSelectedCountryHandler(country.flag);
  };

  return (
    <div>
      {countryOptions.map((country: any, index: any) => (
        <div
          className={`${styles['country--option']} ${
            selectedCountry === country.name ? styles['active--option'] : ''
          }`}
          key={index}
          onClick={() => onHandleSelectedCountry(country)}
        >
          <img src={country.flag} alt='icon' />
          <p>{country.name}</p>
        </div>
      ))}
    </div>
  );
}

export default CountryOptions;
