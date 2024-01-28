import { AreaChartContainer } from "./AreaChartContainer";
import CartsContainer from "./CartsContainer";

const DashboardMainContainer = () => {
  return (
    <div className=" flex flex-col gap-14 ">
      <CartsContainer />
      <AreaChartContainer />
    </div>
  );
};
export default DashboardMainContainer;
