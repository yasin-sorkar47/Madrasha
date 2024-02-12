import Banner from "./components/Banner/Banner";
import ClassSection from "./components/ClassSection/ClassSection";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Notice from "./components/Notice/Notice";

export default function Home() {
  return (
    <>
      <Header />
      <Banner />
      <ClassSection />
      <Notice />
      <Footer />
    </>
  );
}
