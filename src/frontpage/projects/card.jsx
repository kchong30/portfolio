/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";

import "./styles/card.css"

const Card = ({ project }) => {
  const { title, description, technology, image, id} = project;


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
      <Link to={`/projects/${id}`} className="card-details-link">More Details</Link>
      </div>
    </div>
  );
};



export default Card;