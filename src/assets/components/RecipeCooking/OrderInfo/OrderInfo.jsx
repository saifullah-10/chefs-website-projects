import "./order.css";
const OrderInfo = ({ orders, handleCurrentlyCook, currents }) => {
  const totalPreparingTime = currents.reduce(
    (total, current) => total + current.preparing_time,
    0
  );
  const totalCalories = currents.reduce(
    (total, current) => total + current.calories,
    0
  );
  return (
    <>
      <div>
        <div>
          <div className="flex flex-col items-center font-['Fira_Sans']">
            <div className="border-b-2 font-['Lexend']">
              <h1 className="text-[#282828] text-2xl font-semibold pb-2">
                Want to cook: <span>{orders.length}</span>
              </h1>
            </div>
            <div className="w-full">
              <table className="w-full">
                <thead>
                  <tr className="text-[#878787] ">
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                    <th></th>
                  </tr>
                </thead>
                <tbody>
                  {orders.length !== 0 ? (
                    orders.map((order, index) => (
                      <tr key={index} className="">
                        <td>{index + 1}</td>
                        <td>{order.recipe_name}</td>
                        <td>{order.preparing_time} min</td>
                        <td>{order.calories} cal</td>
                        <td>
                          <button
                            onClick={() => handleCurrentlyCook(order)}
                            className="px-3 py-1 bg-[#0BE58A] rounded-full font-medium"
                          >
                            Preparing
                          </button>
                        </td>
                      </tr>
                    ))
                  ) : (
                    <tr className="h-20">
                      <td colSpan="5">No Orders To Display</td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>

            <div className="border-b-2 font-['Lexend']">
              <h1 className="text-[#282828] text-2xl font-semibold pb-2">
                Currently cooking: {currents.length}
              </h1>
            </div>
            <div className="w-full">
              <table className="w-full">
                <thead>
                  <tr className="text-[#878787]">
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                  </tr>
                </thead>
                <tbody>
                  {currents.length !== 0 ? (
                    currents.map((current, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{current.recipe_name}</td>
                        <td>{current.preparing_time} min</td>
                        <td>{current.calories} cal</td>
                      </tr>
                    ))
                  ) : (
                    <tr className="h-20">
                      <td colSpan="5">No Orders To Display</td>
                    </tr>
                  )}
                  {currents.length !== 0 && (
                    <tr className="border-t-4 border-black">
                      <td></td>
                      <td></td>
                      <td>
                        Total Time <br />
                        {totalPreparingTime} minutes
                      </td>
                      <td>
                        Total Calories <br />
                        {totalCalories} calories
                      </td>
                    </tr>
                  )}
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};
export default OrderInfo;
