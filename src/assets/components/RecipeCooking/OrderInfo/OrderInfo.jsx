import "./order.css";
const OrderInfo = ({ orders, handleCurrentlyCook, currents }) => {
  // console.log(recipe_name);
  return (
    <>
      <div>
        <div>
          <div className="flex flex-col items-center">
            <div>
              <h1>
                Want to cook: <span>{orders.length}</span>
              </h1>
            </div>
            <div className="w-full">
              <table className="w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                    <th></th>
                  </tr>
                </thead>
                {/* <tbody>
                  {orders.length === 0 ? (
                    <tr>
                      <td colSpan="5">No orders to display</td>
                    </tr>
                  ) : (
                    orders.map((order, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{order.recipe_name}</td>
                        <td>{order.preparing_time} min</td>
                        <td>{order.calories} cal</td>
                        <td>
                          <button
                            onClick={() => handleCurrentlyCook(order)}
                            className="px-3 py-1 bg-[#0BE58A] rounded-full"
                          >
                            Preparing
                          </button>
                        </td>
                      </tr>
                    ))
                  )}
                </tbody> */}

                <tbody>
                  {orders.length !== 0 ? (
                    orders.map((order, index) => (
                      <tr key={index}>
                        <td>{index + 1}</td>
                        <td>{order.recipe_name}</td>
                        <td>{order.preparing_time} min</td>
                        <td>{order.calories} cal</td>
                        <td>
                          <button
                            onClick={() => handleCurrentlyCook(order)}
                            className="px-3 py-1 bg-[#0BE58A] rounded-full"
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

            <div>
              <h1>Currently cooking: {currents.length}</h1>
            </div>
            <div className="w-full">
              <table className="w-full">
                <thead>
                  <tr>
                    <th></th>
                    <th>Name</th>
                    <th>Time</th>
                    <th>Calories</th>
                  </tr>
                </thead>
                <tbody>
                  {currents.length !== 0 ? (
                    currents.map((current, index) => (
                      <tr>
                        <td>{index + 1}</td>
                        <td>{current.recipe_name}</td>
                        <td>20 minutes</td>
                        <td>400 calories</td>
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
          </div>
        </div>
      </div>
    </>
  );
};
export default OrderInfo;
