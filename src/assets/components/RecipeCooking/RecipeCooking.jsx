import Cooking from "./Cooking/Cooking";
import OrderInfo from "./OrderInfo/OrderInfo";

const RecipeCooking = () => {
  return (
    <>
      <section className="max-w-[1600px] lg:w-[82%] w-[98%] mx-auto mt-4 lg:mt-6">
        <div className="lg:mb-14">
          <h1>Our Recipes</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
            vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
            elementum mauris aenean neque.{" "}
          </p>
        </div>
        <div className="lg:flex lg:items-center">
          <div className="lg:w-[60%] flex gap-4 lg:gap-10">
            <Cooking></Cooking>
            <Cooking></Cooking>
          </div>
          <div className="w-[40%]">
            <OrderInfo></OrderInfo>
          </div>
        </div>
      </section>
    </>
  );
};
export default RecipeCooking;
