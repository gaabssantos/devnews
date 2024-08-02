import { useEffect, useState } from 'react';

import { Category } from '../../services/api-types';
import { APIService } from '../../services/api.service';

import Logo from '/devnews.svg';
import '../global.styles.sass';
import './header.styles.sass';

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
    <div className="container">
      <img src={Logo} alt="logo-devnews" />
      <ul>
        {categories.map((category) => (
          <li key={category._id}>{category.name}</li>
        ))}
      </ul>
      <button className="button">Login</button>
    </div>
  );
};

export default Header;
