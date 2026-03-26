import Banner from "../../components/Banner/Banner";
import Gallery from "../../components/Gallery/Gallery";
import bannerImg from "../../assets/images/Image source 1.jpg";

import "./Home.scss";

function Home() {
  return (
    <>
      <div className="home">
        <Banner
          bannerImg={bannerImg}
          bannerAlt="Paysage Kasa"
          bannerTitle="Chez vous, partout et ailleurs"
          overlay="dark"
        />
        <Gallery />
      </div>
    </>
  );
}

export default Home;
