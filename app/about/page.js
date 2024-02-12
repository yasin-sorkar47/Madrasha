import Banner from "../components/Banner/Banner";
import ClassSection from "../components/ClassSection/ClassSection";
import Footer from "../components/Footer";
import Header from "../components/Header";
import Notice from "../components/Notice/Notice";
import History from "./components/History";

export default function About() {
  return (
    <>
      <Header />
      <Banner />
      <History />
      <ClassSection />
      <Notice />
      <Footer />
    </>
  );
}
