import Dropdown from "../../components/Dropdown/Dropdown";
import starActive from "../../assets/icones/star-active.svg";
import starInactive from "../../assets/icones/star-inactive.svg";
import "./LogementCard.scss";

function LogementCard({
  title,
  cover,
  pictures,
  description,
  host,
  rating,
  location,
  equipments,
  tags,
}) {
  const equipmentsList = equipments.map((equipment, index) => (
    <li key={index}>{equipment}</li>
  ));
  return (
    <div className="logement-card-container">
      <div className="logement-card">
        <img src={cover} alt={title} className="logement-card-img" />
        <h1 className="logement-card-title">{title}</h1>
        <p className="logement-card-location">{location}</p>
        <div className="logement-card-host">
          <div className="logement-card-host-name">{host.name} </div>
          <img src={host.picture} alt={host.name} />
        </div>
        <div className="logement-card-tags">
          {tags.map((tag, index) => (
            <span key={index} className="logement-card-tag">
              {tag}
            </span>
          ))}
        </div>
        <div className="logement-card-rating">
          {[1, 2, 3, 4, 5].map((star) =>
            rating >= star ? (
              <img key={star} src={starActive} alt="étoile active" />
            ) : (
              <img key={star} src={starInactive} alt="étoile inactive" />
            ),
          )}
        </div>
      </div>

      <div className="logement-card-low">
        <div className="logement-card-low-description">
          <Dropdown title="Description" children={description} />
        </div>
        <div className="logement-card-low-equipments">
          <Dropdown title="Équipements" children={equipmentsList} />
        </div>
      </div>
    </div>
  );
}

export default LogementCard;
