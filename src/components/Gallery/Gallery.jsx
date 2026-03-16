import Card from "../Card/Card";
import datas from "../../datas/logementsKasa.json";
import "./Gallery.scss";

function Gallery() {
  return (
    <div className="gallery">
      <div className="gallery-container">
        {datas.map((appart) => (
          <Card key={appart.id} title={appart.title} cover={appart.cover} />
        ))}
      </div>
    </div>
  );
}

export default Gallery;
