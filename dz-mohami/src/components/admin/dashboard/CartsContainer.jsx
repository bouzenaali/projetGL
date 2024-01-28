import Image from "next/image";
const CartsContainer = () => {
  return (
    <div className=" w-full flex items-center justify-center gap-5 ">
      <SingleCart
        name="Avocats"
        value="15"
        imgUrl="/users.svg"
      />
    </div>
  );
};
export default CartsContainer;
const SingleCart = ({ name, value, imgUrl }) => {
  return (
    <div className=" bg-white header-shadow flex items-center justify-center p-5 rounded-8  max-w-[500px]   flex-1 gap-20  ">
      <Image
        src={imgUrl}
        width={50}
        height={50}
        className="object-contain rounded-full w-[50px] h-[50px] "
      />
      <div className="flex flex-col gap-2 ">
        <span className=" font-bold text-xl ">{value}</span>
        <span className=" text-sm text-[#A6ACBE]  ">{name}</span>
      </div>
    </div>
  );
};
