import starActive from '../assets/images/star-active.svg';
import starDeactive from '../assets/images/star-deactive.svg';

function Stars({rate}: { rate: number }) {
  const stars = [];
  for (let i = 0; i < 5; i++) {
    const isActive = i < rate;

    stars.push(
      <img
        key={i}
        src={isActive ? starActive : starDeactive}
        alt={isActive ? 'star active' : 'star deactive'}
        className="me-1"
      />
    );
  }

  return <div className="flex">{stars}</div>;
}

export default Stars;