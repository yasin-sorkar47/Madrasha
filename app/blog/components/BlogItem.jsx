import Image from "next/image";
import Madrasha from "../../../public/madrash.jpg";

export default function BlogItem() {
  return (
    <div className="mt-7">
      <div className="relative">
        <div className="absolute w-full h-full top-0 left-0 z-10 bg-gray-600/60"></div>
        <Image
          className="w-full h-full object-cover"
          src={Madrasha}
          alt="image"
        />
      </div>
      <div className="text-center mb-8 md:mb-0 md:mr-3 sm:text-start lg:mr-6">
        <h2 className="text-gray-800 text-2xl sm:text-3xl font-bold mb-2 lg:mb-3 mt-6">
          Our Madrasha History
        </h2>
        <p className="text-gray-600 text-[13.5px] lg:text-[15px] lg:leading-7 leading-6">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries. when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not
        </p>
        <p className="text-gray-600 text-[13.5px] lg:text-[15px] lg:leading-7 leading-6">
          It has survived not only five centuries, but also the leap into
          electronic typesetting, remaining essentially unchanged. It was
          popularised in the 1960s with the release of Letraset sheets
          containing Lorem Ipsum passages.
        </p>
        <a
          className="py-2 bg-blue-500 mt-4 block text-white font-semibold tracking-wider sm:inline-block sm:px-3 rounded"
          href="#"
        >
          Read More
        </a>
      </div>
    </div>
  );
}
