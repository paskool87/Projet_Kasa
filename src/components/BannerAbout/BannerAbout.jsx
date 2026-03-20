import bannerAboutImg from "../../assets/images/Image source 2.jpg";
import "./BannerAbout.scss";

function BannerAbout() {
  return (
    <div className="banner">
      <img src={bannerAboutImg} alt="Paysage Kasa" className="bannerAbout-img"/>
    </div>
  );
}

export default BannerAbout;
