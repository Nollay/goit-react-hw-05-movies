import { useEffect, useState } from 'react';
import { getCast } from 'service/api';
import { useParams } from 'react-router-dom';
import { CastList, CastItem } from './Cast.styled';

const Cast = () => {
  const { movieId } = useParams();
  const [cast, setCast] = useState([]);
  useEffect(() => {
    getCast(movieId)
      .then(res => {
        setCast([...res.data.cast]);
      })
      .catch(err => console.log(err));
  }, [movieId]);

  return (
    <div>
      <h2>Cast</h2>
      {cast.length > 0 && (
        <CastList>
          {cast.map(({ name, character, profile_path, id }) => {
            return (
              <CastItem key={id}>
                <img
                  src={
                    profile_path
                      ? 'https://image.tmdb.org/t/p/w500' + profile_path
                      : 'user-not-found'
                  }
                  alt={name}
                  width={300}
                />
                <h3>{name}</h3>
                <p>{character}</p>
              </CastItem>
            );
          })}
        </CastList>
      )}
    </div>
  );
};
export default Cast;
