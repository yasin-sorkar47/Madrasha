export default function NoticeItem() {
  return (
    <div className="flex mb-10">
      <div className="bg-blue-500 w-[80px] h-[80px] flex flex-col justify-center items-center rounded outline-dotted outline-offset-1 flex-2 mr-4 sm:mr-6 mt-2">
        <p className="text-white font-bold text-xl">10</p>
        <span className="text-white text-xl">Jan. 20</span>
      </div>
      <div className="flex-1">
        <h5 className="text-xl font-medium text-gray-700 mb-2">
          University Admissions 2020-21
        </h5>
        <p className="text-base text-gray-600">
          Lorem Ipsum is simply dummy text of the printing and typesetting
          industry. Lorem Ipsum has been the industrys standard dummy text ever
          since the 1500s, when an unknown printer took a galley of type and
          scrambled it to make a type specimen book. It has survived not only
          five centuries.
        </p>
      </div>
    </div>
  );
}
