import { useState } from "react";
import Cooking from "./Cooking/Cooking";
import OrderInfo from "./OrderInfo/OrderInfo";
import { useEffect } from "react";
import toast, { Toaster } from "react-hot-toast";
const RecipeCooking = () => {
  const [recipes, setRecipes] = useState([]);
  const [orders, setOrders] = useState([]);
  const [currents, setCurrents] = useState([]);
  useEffect(() => {
    fetch("data.json")
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);
  const handleRecipe = (recipe) => {
    if (orders.find((order) => order.recipe_id == recipe.recipe_id)) {
      toast.error("Already Added");
    } else {
      const setData = [...orders, recipe];
      setOrders(setData);
    }
  };
  const handleCurrentlyCook = (order) => {
    const remove = orders.indexOf(order);
    const current = [...currents, order];
    orders.splice(remove, 1);
    const remaining = [...orders];
    setOrders(remaining);
    setCurrents(current);
  };

  return (
    <>
      <section className="max-w-[1600px] lg:w-[82%] w-[98%] mx-auto mt-4 lg:mt-6">
        <div className="lg:mb-14">
          <h1>Our Recipes</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur. Proin et feugiat senectus
            vulputate netus pharetra rhoncus. Eget urna volutpat curabitur
            elementum mauris aenean neque.
          </p>
        </div>
        <div className="flex flex-col lg:flex-row gap-5">
          <div className="lg:w-[60%] grid lg:grid-cols-2 gap-4 lg:gap-10">
            {recipes.map((recipe) => (
              <Cooking
                key={recipe.recipe_id}
                recipe={recipe}
                handleRecipe={handleRecipe}
              ></Cooking>
            ))}
            <Toaster></Toaster>
          </div>
          <div className="lg:w-[40%] border-2 rounded-3xl lg:p-6 p-4 lg:self-start ">
            <OrderInfo
              orders={orders}
              handleCurrentlyCook={handleCurrentlyCook}
              currents={currents}
            ></OrderInfo>
          </div>
        </div>
      </section>
    </>
  );
};
export default RecipeCooking;
