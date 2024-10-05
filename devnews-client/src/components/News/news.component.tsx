import image from '../../assets/Frame 27.png';
import styles from './news.module.sass';

const News = () => {
  return (
    <div className={styles.container}>
      <img src={image} alt="imagem-da-noticia" />
      <p className={styles.newsTitle}>
        Egypt’s president expected to secure third term as the world’s eyes are
        fixed on Gaza
      </p>
    </div>
  );
};

export default News;
