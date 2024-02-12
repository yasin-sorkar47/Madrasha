import Image from "next/image";
import logoLock from "../../../public/undraw_login_re_4vu2.svg";

export default function ContactSection() {
  return (
    <section className="bg-blue-100 h-full sm:h-screen sm:flex sm:items-center">
      <div className="container mx-auto w-3/4 flex flex-col sm:flex-row sm:text-center">
        <div className="order-2 bg-gray-100 p-8 sm:order-2 sm:w-1/2">
          <h3 class="font-bold mb-1 text-xl">Say Hello</h3>
          <form action="">
            <label class="font-semibold mb-1 block sm:text-left" for="email">
              Full Name
            </label>
            <input
              class="p-2 mb-2 w-full focus:outline-gray-400"
              type="text"
              name="full_name"
              placeholder="Enter Full Name"
            />
            <label class="font-semibold mb-1 block sm:text-left" for="email">
              Email address
            </label>
            <input
              class="p-2 mb-2 w-full focus:outline-gray-400"
              type="email"
              name="email"
              placeholder="Enter your email"
            />
            <label class="font-semibold mb-1 block sm:text-left" for="password">
              Subject
            </label>
            <input
              class="p-2 mb-3 w-full focus:outline-gray-400"
              type="text"
              name="subject"
              placeholder="Enter your email"
            />
            <textarea
              class="p-2 mb-4 w-full focus:outline-gray-400"
              name="text_area"
              placeholder="Your text here"
            ></textarea>
            <input
              class="py-2 block w-full bg-blue-950 rounded text-white font-semibold"
              type="submit"
              value="Sing In"
            />
          </form>
        </div>
        <div className="order-1 py-8 sm:order-1 sm:w-1/2">
          <Image src={logoLock} alt="image" />
        </div>
      </div>
    </section>
  );
}
