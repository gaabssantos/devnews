import { IoCloudyNightSharp, IoSearchOutline } from 'react-icons/io5';

import { Container, InputControl } from './top-informations.styles';

const TopInformations = () => {
  return (
    <Container>
      <div className="weather">
        <IoCloudyNightSharp />
        <p>21° São Paulo, SP</p>
      </div>
      <InputControl>
        <IoSearchOutline className="search" />
        <input type="text" placeholder="Pesquise por notícias" />
      </InputControl>
      <p>31 de Julho de 2023</p>
    </Container>
  );
};

export default TopInformations;
