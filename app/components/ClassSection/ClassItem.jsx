import Image from "next/image";
import ClassRoom from "../../../public/classRoom.jpg";

export default function ClassItem() {
  return (
    <div className="p-5 pb-3 bg-gray-200 rounded-md border hover:scale-105 transform duration-500 border-gray-300 mb-5">
      <Image src={ClassRoom} alt="image" />
      <div className="p-4 text-center sm:text-start sm:p-2 sm:mt-2">
        <h5 className="text-gray-700 font-semibold text-xl mb-2">Hifz Khana</h5>
        <p className="text-gray-600 text-sm leading-6">
          Till the one day when the lady met this fellow and they knew it was
          much more than a hunch. Its time to put on makeup.
        </p>
        <a
          className="py-2 bg-blue-500 mt-2 block text-white font-semibold tracking-wider sm:inline-block sm:px-3 rounded"
          href="#"
        >
          Read More
        </a>
      </div>
    </div>
  );
}
