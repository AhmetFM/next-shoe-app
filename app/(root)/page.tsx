import Banner from "../components/banner";
import FilterButtons from "../components/filter-buttons";
import HomeListItems from "../components/home-list-items";

export default function Home() {
  return (
    <section className="max-w-screen-xl mx-auto w-full min-h-screen">
      <Banner />
      <FilterButtons />
      <HomeListItems />
    </section>
  );
}
