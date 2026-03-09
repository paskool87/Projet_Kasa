import bannerImg from "../../assets/images/Image source 1.jpg";
import "./Banner.css";

function Banner() {
  return (
    <div className="banner">
      <img src={bannerImg} alt="Paysage Kasa" className="banner-img"/>
        <h1 className="banner-title">Chez vous, partout et ailleurs</h1>
    </div>
  );
}

export default Banner;
