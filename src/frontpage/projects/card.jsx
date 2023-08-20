import PropTypes from 'prop-types';
import "./styles/card.css"

const Card = ({ project }) => {
  const { title, description, technology, image, detailsLink } = project;


  return (
    <div className="card">
      <div className="card-content">
        <div className="card-text">
          <h3 className="card-title">{title}</h3>
          <p className="card-description">{description}</p>
        </div>
        <p className="card-tech">Stack: {technology.join(', ')}</p>
      </div>
      <div className="card-overlay">
        <img src={image} alt={`${title} preview`} />
        <a href={detailsLink} className="card-details-link">More Details</a>
      </div>
    </div>
  );
};

Card.propTypes = {
    project: PropTypes.shape({
      title: PropTypes.string.isRequired,
      description: PropTypes.string.isRequired,
      challenges: PropTypes.string.isRequired,
      image: PropTypes.string,
      technology: PropTypes.arrayOf(PropTypes.string).isRequired,
      detailsLink: PropTypes.string
    }).isRequired,
  };



export default Card;