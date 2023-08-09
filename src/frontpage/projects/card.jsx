import PropTypes from 'prop-types';
import "./styles/card.css"

const Card = ({ project }) => {
  const { title, description, technology } = project;

  return (
    <div className="card">
      <div className="card-text">
        <h3 className = "card-title">{title}</h3>
        <p className="card-description">{description}</p>
      </div>
      <p className="card-tech">Stack: {technology.join(', ')}</p>
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