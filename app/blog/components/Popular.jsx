import Image from "next/image";
import ClassRoom from "../../../public/classRoom.jpg";

export default function Popular() {
  return (
    <div className="mb-10">
      <h4 className="text-xl font-bold text-gray-700 mb-4">Popular Blog</h4>
      <div className="flex mb-5">
        <Image
          className="w-[160px] h-[100px] object-cover mr-4"
          src={ClassRoom}
          alt="iamg"
        />
        <div>
          <h5 className="text-gray-600 font-semibold mb-1">Give Blog Header</h5>
          <p className="text-gray-500 text-sm">
            amet consectetur, adipisicing elit. laboriosam aperiam cumque,
            eveniet mollitia nostrum.
          </p>
        </div>
      </div>
      <div className="flex mb-5">
        <Image
          className="w-[160px] h-[100px] object-cover mr-4"
          src={ClassRoom}
          alt="image"
        />
        <div>
          <h5 className="text-gray-600 font-semibold mb-1">Give Blog Header</h5>
          <p className="text-gray-500 text-sm">
            amet consectetur, adipisicing elit. laboriosam aperiam cumque,
            eveniet mollitia nostrum.
          </p>
        </div>
      </div>
    </div>
  );
}
