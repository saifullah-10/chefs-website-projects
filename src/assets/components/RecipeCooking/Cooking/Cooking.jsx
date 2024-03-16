import TimeIcon from "./images/time.svg";
import CaloriesIcon from "./images/calories.svg";
const Cooking = ({ recipe, handleRecipe }) => {
  const {
    recipe_image,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
  } = recipe;
  return (
    <>
      <div className="lg:p-4 p-3 border-2 rounded-3xl font-['Fira_Sans']">
        <div className="grid h-full gap-3">
          <div className="w-full  rounded-3xl">
            <img
              height="100%"
              width="100%"
              src={recipe_image}
              alt=""
              className="rounded-3xl bg-cover"
            />
          </div>
          <div className="border-b-2">
            <h2 className="text-[#282828] font-['Lexend'] text-xl font-semibold my-2">
              {recipe_name}
            </h2>
            <p className="text-[#878787] pb-3">{short_description}</p>
          </div>
          <div className="border-b-2 text-[#282828]">
            <h2 className="font-['Lexend'] text-lg font-medium">
              Ingredients: {ingredients.length}
            </h2>

            <ul
              style={{ listStyleType: "disc" }}
              className="pl-10 text-[#878787] pb-3"
            >
              {ingredients.map((ingredient, index) => (
                <li key={index}>{ingredient}</li>
              ))}
            </ul>
          </div>
          <div className="self-end">
            <div>
              <div className="flex items-center lg:gap-2 gap-5">
                <div className="flex items-center gap-1">
                  <img width="24px" height="24px" src={TimeIcon} alt="" />
                  <p className="text-[#150b2bcc]">
                    <span>{preparing_time}</span> minutes
                  </p>
                </div>
                <div className="flex items-center gap-1">
                  <img width="24px" height="24px" src={CaloriesIcon} alt="" />
                  <p className="text-[#150b2bcc]">
                    <span>{calories}</span> calories
                  </p>
                </div>
              </div>
              <div className="flex justify-center lg:justify-start mt-3">
                <button
                  onClick={(e) => handleRecipe(recipe)}
                  className="px-5 py-2 lg:py-3 bg-[#0BE58A] rounded-full text-[#150B2B] text-lg font-medium"
                >
                  Want to Cook
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default Cooking;
