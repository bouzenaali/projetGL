import NavBar from "@/shared/layout/NavBar";
import FilterContainer from "./FilterContainer";
import { FilterDropDown } from "@/shared/FormItems/FilterDropDown";
import { useSelector, useDispatch } from "react-redux";
import LawyersContainer from "./LawyersContainer";
const LawyersMainContainer = () => {
  // some cities to test the dropdown
  const cities = [
    {
      value: "cairo",
      label: "Cairo",
    },
    {
      value: "alex",
      label: "Alexandria",
    },
    {
      value: "mansoura",
      label: "Mansoura",
    },
    {
      value: "tanta",
      label: "Tanta",
    },
    {
      value: "aswan",
      label: "Aswan",
    },
  ];
  // some categories for testing
  const categories = [
    {
      value: "family",
      label: "Family",
    },
    {
      value: "criminal",
      label: "Criminal",
    },
    {
      value: "civil",
      label: "Civil",
    },
    {
      value: "business",
      label: "Business",
    },
  ];
  // some lawyers for testing
  const lawyers = [
    {
      id: "1",
      image: "/placeholder.png",
      name: "Ahmed Allaoua",
      rating: 4,
      mainSpecialty: "Family",
      email: "y_allaoua@estindz",
      phone: "0555555555",
      location: "Algiers",
      wilaya: "Algiers",
      description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
    {
      id: "2",
      image: "/placeholder.png",
      name: "Youcef Allaoua",
      rating: 4,
      mainSpecialty: "Family",
      email: "y_allaoua@estindz",
      phone: "0555555555",
      location: "Algiers",
      wilaya: "Algiers",
      description: "lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum lorem ipsum",
    },
  ];

  return (
    <div className=" w-screen flex flex-col gap-5 bg-[#F4F6F5] min-h-screen ">
      <NavBar />
      <section className="container py-10 flex flex-col gap-10">
        <FilterContainer
          cities={cities}
          categories={categories}
        />
        <LawyersContainer
          lawyers={lawyers}
          totalPages={10}
        />
      </section>
    </div>
  );
};
export default LawyersMainContainer;
