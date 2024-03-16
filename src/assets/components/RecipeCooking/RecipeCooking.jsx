import Cooking from "./Cooking/Cooking";
import OrderInfo from "./OrderInfo/OrderInfo";

const RecipeCooking = () => {
  return (
    <>
      <section>
        <div>
          <div>
            <Cooking></Cooking>
          </div>
          <div>
            <OrderInfo></OrderInfo>
          </div>
        </div>
      </section>
    </>
  );
};
export default RecipeCooking;
