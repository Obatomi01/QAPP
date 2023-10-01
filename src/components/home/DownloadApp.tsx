import AppleStore from '../../images/toppng 2.png';
import PlayStore from '../../images/IMGBIN_google-play-app-store-png_vZ8NL2mj 1.png';

import styles from '../../styles/home/home.module.scss';

function DownloadApp() {
  return (
    <section className={styles['download--stores__container']}>
      <h2>Download The Future Now</h2>
      <div className={styles['download--stores']}>
        <img src={AppleStore} alt='download app' />
        <img src={PlayStore} alt='download app' />
      </div>
    </section>
  );
}

export default DownloadApp;
