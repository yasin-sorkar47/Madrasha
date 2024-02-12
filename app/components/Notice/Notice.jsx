import NoticeItem from "./NoticeItem";

export default function Notice() {
  return (
    <section>
      <div className="container mx-auto w-full px-8 sm:px-4">
        <h3 className="text-center text-gray-700 font-bold text-2xl mb-5 sm:mb-10">
          The Notice Of Madrasha
        </h3>
        <NoticeItem />
        <NoticeItem />
        <NoticeItem />
        <NoticeItem />
      </div>
    </section>
  );
}
