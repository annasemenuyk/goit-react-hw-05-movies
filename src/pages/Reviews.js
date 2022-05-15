import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import PropTypes from 'prop-types';

import styles from './styles/Review.module.css';
import { fetchReviews } from '../services/api-movies';

const FilmsReviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState(null);

  useEffect(() => {
    fetchReviews(movieId).then(movie => setReviews(movie.results));
  }, [movieId]);

  return (
    <ul className={styles.list}>
      {reviews &&
        reviews.map(({ id, author, content }) => {
          return (
            <li key={id} className={styles.item}>
              <h4 className={styles.author}>Author: {author}</h4>
              <p className={styles.content}>{content}</p>
            </li>
          );
        })}
    </ul>
  );
};

FilmsReviews.propTypes = {
  id: PropTypes.number,
  author: PropTypes.string,
  content: PropTypes.string,
};

export default FilmsReviews;
