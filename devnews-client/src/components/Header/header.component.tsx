import { useEffect, useState } from 'react';

import { Category } from '../../services/api-types';
import { APIService } from '../../services/api.service';
import { Button } from '../global.component';
import { Container } from './header.styles';

import Logo from '/devnews.svg';

const Header = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await APIService.getCategories();

      setCategories(data);
    };

    fetchCategories();
  });

  return (
    <Container>
      <img src={Logo} alt="logo-devnews" />
      <ul>
        {categories.map((category) => (
          <li key={category._id}>{category.name}</li>
        ))}
      </ul>
      <Button>Login</Button>
    </Container>
  );
};

export default Header;
