import PropTypes from 'prop-types';
import "./styles/card.css"

const Card = ({ project }) => {
  const { title, description, challenges, technology } = project;

  return (
    <div className="card">
      <h3>{title}</h3>
      <p>{description}</p>
      <p>Challenges: {challenges}</p>
      <p>Technology: {technology.join(', ')}</p>
    </div>
  );
};

Card.propTypes = {
    project: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      challenges: PropTypes.string.isRequired,
      technology: PropTypes.arrayOf(PropTypes.string).isRequired,
    }).isRequired,
  };



export default Card;