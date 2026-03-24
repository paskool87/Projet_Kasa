import { useParams, Navigate } from "react-router-dom";
import logements from "../../Datas/logementsKasa.json";
import LogementCard from "../../components/LogementCard/LogementCard";

function Logement() {
  const { id } = useParams();

  const logement = logements.find((log) => log.id === id);

  if (!logement) {
    return <Navigate to="/error" />;
  }

  return (
    <div>
      <LogementCard
        title={logement.title}
        cover={logement.cover}
        pictures={logement.pictures}
        description={logement.description}
        host={logement.host}
        rating={logement.rating}
        location={logement.location}
        equipments={logement.equipments}
        tags={logement.tags}
      />
    </div>
  );
}

export default Logement;
