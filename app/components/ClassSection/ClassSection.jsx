import ClassItem from "./ClassItem";
import ClassSectionHeader from "./ClassSectionHeader";

export default function ClassSection() {
  return (
    <section>
      <div className="container mx-auto w-full px-8 sm:px-4 pt-[30px] sm:pt-[50px] pb-[40px]">
        <ClassSectionHeader />
        <div className="grid sm:grid-cols-2 sm:space-x-4 md:grid-cols-3">
          <ClassItem />
          <ClassItem />
          <ClassItem />
          <ClassItem />
          <ClassItem />
          <ClassItem />
        </div>
      </div>
    </section>
  );
}
