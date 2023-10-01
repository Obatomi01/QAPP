import styles from '../../styles/home/home.module.scss';

import ServiceLogo from '../../images/Group 33628.png';
import ArrowIcon from '../../images/Group 33630.png';

type ServiceProps = {
  serviceTitle: string;
  serviceDescription: string;
  serviceIcon: any;
};

function Service(props: ServiceProps) {
  return (
    <section className={styles['service--container']}>
      <span>
        <img
          src={props.serviceIcon}
          alt='service logo'
          className={styles['service--icon']}
        />
      </span>
      <h4>{props.serviceTitle}</h4>
      <div className={styles['service--description']}>
        <p>{props.serviceDescription}</p>
      </div>
      <img src={ArrowIcon} alt='arrow icon' className={styles['arrow--icon']} />
    </section>
  );
}

export default Service;
