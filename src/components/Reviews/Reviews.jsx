import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getReviews } from 'service/api';

const Reviews = () => {
  const { movieId } = useParams();
  const [reviews, setReviews] = useState([]);
  useEffect(() => {
    getReviews(movieId)
      .then(res => {
        setReviews(res.data.results);
      })
      .catch(err => console.log(err));
  }, [movieId]);
  return (
    <>
      <h2>{reviews.length === 0 ? 'There are no reviews' : 'Reviews'}</h2>
      {reviews.length > 0 && (
        <ul>
          {reviews.map(({ author, content, id, created_at }) => {
            return (
              <li key={id}>
                <h3>{author}</h3>
                <p>{content}</p>
                <p> Created: {new Date(created_at).toLocaleDateString()}</p>
              </li>
            );
          })}
        </ul>
      )}
    </>
  );
};
export default Reviews;
