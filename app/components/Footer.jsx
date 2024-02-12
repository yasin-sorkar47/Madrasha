import Image from "next/image";
import logo from "../../public/logo.png";

export default function Footer() {
  return (
    <footer className="bg-blue-500 pt-4 pb-8 sm:pb-4">
      <div className="container mx-auto w-full px-4 flex flex-col justify-center items-center sm:flex-row sm:justify-between">
        <div className="sm:w-[100px] md:w-[120px]">
          <Image src={logo} alt="image" />
        </div>
        <div className="text-center mb-3 sm:mb-0 sm:mr-2">
          <h3 className="text-white text-2xl font-bold md:text-4xl md:m-2">
            Madrasha Hzrat Fatematuz Zahra
          </h3>
          <p className="text-white text-base font-semibold md:text-2xl">
            House-63, Rode-14, Sector-14, Uttura, dhaka
          </p>
        </div>
        <div className="text-center">
          <h4 className="text-white text-xl font-medium mb-1">Contact Us</h4>
          <hr className="mb-3" />
          <div className="mb-2 sm:mb-1">
            <div className="flex">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                stroke-width="1.5"
                stroke="currentColor"
                className="w-4 h-4 text-white mr-1 mb-2 sm:mb-1"
              >
                <path
                  stroke-linecap="round"
                  stroke-linejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 0 0 2.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 0 1-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 0 0-1.091-.852H4.5A2.25 2.25 0 0 0 2.25 4.5v2.25Z"
                />
              </svg>
              <p className="text-white text-sm">+880 17123456</p>
            </div>
            <span className="text-white ml-5 text-sm">+880 17123456</span>
          </div>
          <div className="flex items-center">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke-width="1.5"
              stroke="currentColor"
              className="w-5 h-5 text-white mr-1"
            >
              <path
                stroke-linecap="round"
                stroke-linejoin="round"
                d="M21.75 6.75v10.5a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V6.75m19.5 0A2.25 2.25 0 0 0 19.5 4.5h-15a2.25 2.25 0 0 0-2.25 2.25m19.5 0v.243a2.25 2.25 0 0 1-1.07 1.916l-7.5 4.615a2.25 2.25 0 0 1-2.36 0L3.32 8.91a2.25 2.25 0 0 1-1.07-1.916V6.75"
              />
            </svg>

            <p className="text-white text-sm">info@email.com</p>
          </div>
        </div>
      </div>
    </footer>
  );
}
