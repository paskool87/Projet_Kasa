import Banner from "../../components/Banner/Banner";
import Dropdown from "../../components/Dropdown/Dropdown";
import bannerImg from "../../assets/images/Image source 2.jpg";

import "./About.scss";

function About() {
  return (
    <div className="about">
      <Banner bannerImg={bannerImg} bannerAlt="Paysage Kasa" bannerTitle="" overlay="light" />

      <div className="about-dropdowns">
        <Dropdown
          title="Fiabilité"
          children="Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et
toutes les informations sont régulièrement vérifiées par nos équipes."
        />
        <Dropdown
          title="Respect"
          children="La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de
perturbation du voisinage entraînera une exclusion de notre plateforme."
        />
        <Dropdown
          title="Service"
          children="La qualité du service est au cœur de notre engagement chez Kasa. Nous veillons à ce que chaque interaction,
que ce soit avec nos hôtes ou nos locataires, soit empreinte de respect et de bienveillance."
        />
        <Dropdown
          title="Sécurité"
          children="La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement
correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l'hôte qu'au
locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons
également des ateliers sur la sécurité domestique pour nos hôtes."
        />
      </div>
    </div>
  );
}

export default About;
