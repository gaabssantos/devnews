import { IoCloudyNightSharp, IoSearchOutline } from 'react-icons/io5';

import DateFormatted from '../../utils/date.util';

import './top-informations.styles.sass';

const TopInformations = () => {
  return (
    <div className="top-container">
      <div className="weather">
        <IoCloudyNightSharp className="cloud" />
        <p className="weather-text">21° São Paulo, SP</p>
      </div>
      <div className="input-control">
        <IoSearchOutline className="search" />
        <input
          type="text"
          placeholder="Pesquise por notícias"
          className="search-news"
        />
      </div>
      <p className="date">{DateFormatted()}</p>
    </div>
  );
};

export default TopInformations;
