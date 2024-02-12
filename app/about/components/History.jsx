import Image from "next/image";
import Madrasha from "../../../public/madrash.jpg";
export default function History() {
  return (
    <section>
      <div class="container mx-auto w-full px-4 py-4 md:px-0 md:flex md:mt-10">
        <div class="text-center mb-8 md:mb-0 md:w-1/2 md:mr-3 md:text-start lg:mr-6">
          <h2 class="text-gray-800 text-2xl sm:text-3xl font-bold mb-2 lg:mb-3 mt-6">
            Our Madrasha History
          </h2>
          <p class="text-gray-600 text-[13.5px] lg:text-[15px] lg:leading-7 leading-6">
            Lorem Ipsum is simply dummy text of the printing and typesetting
            industry. Lorem Ipsum has been the industrys standard dummy text
            ever since the 1500s, when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
            only five centuries. when an unknown printer took a galley of type
            and scrambled it to make a type specimen book. It has survived not
          </p>
          <p class="text-gray-600 text-[13.5px] lg:text-[15px] lg:leading-7 leading-6">
            It has survived not only five centuries, but also the leap into
            electronic typesetting, remaining essentially unchanged. It was
            popularised in the 1960s with the release of Letraset sheets
            containing Lorem Ipsum passages.
          </p>
        </div>
        <div class="relative md:w-1/2">
          <div class="absolute w-full h-full top-0 left-0 z-10 bg-gray-600/60"></div>
          <Image
            class="w-full h-full object-cover"
            src={Madrasha}
            alt="image"
          />
        </div>
      </div>
    </section>
  );
}
