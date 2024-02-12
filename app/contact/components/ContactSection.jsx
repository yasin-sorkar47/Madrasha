import Image from "next/image";
import logoLock from "../../../public/undraw_login_re_4vu2.svg";

export default function ContactSection() {
  return (
    <section className="bg-blue-100 h-full sm:h-screen sm:flex sm:items-center">
      <div className="container mx-auto w-3/4 flex flex-col sm:flex-row sm:text-center">
        <div className="order-2 bg-gray-100 p-8 sm:order-2 sm:w-1/2">
          <h3 className="font-bold mb-1 text-xl">Welcome Back</h3>
          <p className="text-gray-500 font-semibold m-1">
            Please enter your details
          </p>
          <form action="">
            <label
              className="font-semibold mb-1 block sm:text-left"
              for="email"
            >
              Email address
            </label>
            <input
              className="p-2 mb-2 w-full focus:outline-gray-400"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <label
              className="font-semibold mb-1 block sm:text-left"
              for="password"
            >
              Password
            </label>
            <input
              className="p-2 mb-3 w-full focus:outline-gray-400"
              type="password"
              name="password"
              placeholder="Enter your password"
            />
            <input
              className="py-2 block w-full bg-blue-950 rounded text-white font-semibold"
              type="submit"
              value="Sing In"
            />
            <p className="text-gray-500 mt-3">
              Dont have a acount
              <a className="text-blue-500 underline" href="#">
                sing up
              </a>
            </p>
          </form>
        </div>
        <div className="order-1 py-8 sm:order-1 sm:w-1/2">
          <Image src={logoLock} alt="image" />
        </div>
      </div>
    </section>
  );
}
