import { useEffect, useState } from 'react';

import News from '../../components/News/news.component';
import TopInformations from '../../components/TopInformations/top-informations.component';
import { Category } from '../../services/api-types';
import { APIService } from '../../services/api.service';
import styles from './home.module.sass';
import '../../components/global.styles.sass';

const Home = () => {
  const [categories, setCategories] = useState<Category[]>([]);

  useEffect(() => {
    const fetchCategories = async () => {
      const data = await APIService.getCategories();

      setCategories(data);
    };

    fetchCategories();
  });

  return (
    <div>
      <TopInformations />
      <div className={styles.newsContainer}>
        {categories.map((category) => (
          <div key={category._id}>
            <h2 className="categories-title">{category.name}</h2>
            <div className={styles.news}>
              <News />
              <News />
              <News />
              <News />
              <News />
              <News />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Home;
