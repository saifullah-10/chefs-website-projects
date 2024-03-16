import TimeIcon from "./images/time.svg";
import CaloriesIcon from "./images/calories.svg";
const Cooking = () => {
  const Img =
    "https://images.pexels.com/photos/11654228/pexels-photo-11654228.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1";
  return (
    <>
      <div className="lg:p-4 p-3 border-2 rounded-3xl">
        <div>
          <div className="w-full rounded-3xl">
            <img
              height="100%"
              width="100%"
              src={Img}
              alt=""
              className="rounded-3xl"
            />
          </div>
          <div className="border-b-2">
            <h2>Spaghetti Bolognese</h2>
            <p>Classic Italian pasta dish with savory meat sauce.</p>
          </div>
          <div className="border-b-2">
            <h2>Ingredients: 6</h2>
            <ul style={{ listStyleType: "disc" }} className="pl-10">
              <li>h1</li>
              <li>h3</li>
              <li>h4</li>
            </ul>
          </div>
          <div className="flex items-center gap-5">
            <div className="flex items-center gap-1">
              <img width="24px" height="24px" src={TimeIcon} alt="" />
              <p>30 min</p>
            </div>
            <div className="flex items-center gap-1">
              <img width="24px" height="24px" src={CaloriesIcon} alt="" />
              <p>600 cal</p>
            </div>
          </div>
          <div className="flex justify-center lg:justify-start">
            <button className="px-3 lg:px-5 py-1 lg:py-3 bg-[#0BE58A] rounded-full">
              want to cook
            </button>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cooking;
