import Header from "../components/Header/Header";
import Banner from "../components/Banner/Banner";
import Gallery from "../components/Gallery/Gallery";
import Footer from "../components/Footer/Footer";
import "./Home.css";

function Home() {
  return (
    <>
      <div className="home">
        <Header />
        <Banner />
        <Gallery />
      </div>
      <Footer />
    </>
  );
}

export default Home;
