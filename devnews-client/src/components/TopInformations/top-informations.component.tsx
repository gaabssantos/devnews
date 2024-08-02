import { IoCloudyNightSharp, IoSearchOutline } from 'react-icons/io5';

import DateFormatted from '../../utils/date.util';
import styles from './top-informations.module.sass';

const TopInformations = () => {
  return (
    <div className={styles.container}>
      <div className={styles.weather}>
        <IoCloudyNightSharp className={styles.cloud} />
        <p className={styles.weatherText}>21° São Paulo, SP</p>
      </div>
      <div className={styles.inputControl}>
        <IoSearchOutline className={styles.search} />
        <input
          type="text"
          placeholder="Pesquise por notícias"
          className={styles.searchNews}
        />
      </div>
      <p className={styles.date}>{DateFormatted()}</p>
    </div>
  );
};

export default TopInformations;
