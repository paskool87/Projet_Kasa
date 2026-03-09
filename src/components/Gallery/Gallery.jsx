import Card from "../Card/Card"
import datas from "../../datas/logementsKasa.json"
import "./Gallery.css"

function Gallery() {
  return (
    <div className="gallery">
      {datas.map((appart) => (
        <Card key={appart.id} title={appart.title} cover={appart.cover} />
      ))}
    </div>
  )
}

export default Gallery