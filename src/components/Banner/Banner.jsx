import "./Banner.scss";

function Banner({ bannerImg, bannerAlt, bannerTitle, overlay }) {
  return (
    <div className={`banner banner-${overlay}`}>
      <img src={bannerImg} alt={bannerAlt} className="banner-img" />
      <h1 className="banner-title">{bannerTitle}</h1>
    </div>
  );
}

export default Banner;
