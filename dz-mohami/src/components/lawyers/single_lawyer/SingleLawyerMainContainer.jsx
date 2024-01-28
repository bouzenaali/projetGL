import NavBar from "@/shared/layout/NavBar";
import FilterContainer from "../FilterContainer";
import LawyerInfo from "./LawyerInfo";
import CommentsContainer from "./CommentsContainer";

const SingleLawyerMainContainer = () => {
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
  // some info about lawyer for testing
  const lawyerInfo = {
    name: "Ahmed Mohamed",
    mainSpecialty: "Family",
    rating: 4.5,
    email: "y_allaoua@esint.dz",
    phone: "0123456789",
    location: "Cairo",
    wilaya: "Cairo",
    description: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam, voluptatum.",
    experience: "5",
    image: "/placeholder.png",
  };
  return (
    <main className=" pb-10 w-screen flex flex-col gap-5 bg-[#F4F6F5] min-h-screen ">
      <NavBar />
      <div className="container flex flex-col gap-10">
        <FilterContainer
          categories={categories}
          cities={cities}
        />
        <LawyerInfo
          name={lawyerInfo.name}
          mainSpecialty={lawyerInfo.mainSpecialty}
          rating={lawyerInfo.rating}
          email={lawyerInfo.email}
          phone={lawyerInfo.phone}
          experience={lawyerInfo.experience}
          image={lawyerInfo.image}
          description={lawyerInfo.description}
          wilaya={lawyerInfo.wilaya}
          location={lawyerInfo.location}
        />
        <CommentsContainer email={lawyerInfo.email} />
      </div>
    </main>
  );
};
export default SingleLawyerMainContainer;
