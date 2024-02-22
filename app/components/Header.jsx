import Image from "next/image";
import logo from "../../public/logo.png";
import Navigation from "./Nvigation";
export default function Header() {
  return (
    <header className="bg-[#2B3990] relative">
      <div className="container mx-auto w-full px-4 py-4 sm:px-0 flex justify-between items-center">
        <a
          href="/index.html"
          className="flex items-center font-medium text-white"
        >
          <Image className="w-[50px]" src={logo} alt="iamge" />
          Madrasha Hzrat Fatematuz Zahra
        </a>
        <Navigation />
      </div>
    </header>
  );
}
