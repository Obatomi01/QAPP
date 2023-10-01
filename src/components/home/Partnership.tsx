import styles from '../../styles/home/home.module.scss';

import EcobankLogo from '../../images/Ecobank_logo white 1.png';
import FasylLogo from '../../images/Fasyl.png';
import SGLogo from '../../images/sg-logo white 1.png';
import FolixxLogo from '../../images/Folixx.png';

function Partnership() {
  return (
    <section className={styles['partnerships--container']}>
      <h2>Our Partnership</h2>
      <div className={styles['companies']}>
        <img src={EcobankLogo} alt='Company' />
        <img src={FasylLogo} alt='Company' />
        <img src={SGLogo} alt='Company' />
        <img src={FolixxLogo} alt='Company' />
      </div>
    </section>
  );
}

export default Partnership;
