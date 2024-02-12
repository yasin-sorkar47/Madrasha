import Image from "next/image";
import Madrasha from "../../../public/madrash.jpg";

export default function BannerItem() {
  return (
    <div className="relative">
      <Image
        className="w-full h-[250px] sm:h-[300px] object-cover"
        src={Madrasha}
        alt="image"
      />
      <div className="absolute w-full h-full top-0 left-0 z-10 bg-gray-600/60"></div>
      <div className="w-full px-4 sm:px-0 absolute top-20 left-0 z-40 text-white text-center">
        <h1 className="text-2xl font-bold sm:text-4xl sm:mb-1">
          Madrasha Hzrat Fatematuz Zahra
        </h1>
        <p className="text-sm sm:w-[600px] mx-auto sm:text-xl">
          Lorem ipsum dolor, sit amet consectetur adipisicing elit. Quae magnam
          fugit aperiam est. Commodi assumenda omnis non debitis dignissimos
          repudiandae?
        </p>
      </div>
    </div>
  );
}
