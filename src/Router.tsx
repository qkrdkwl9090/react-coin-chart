import { createBrowserRouter } from "react-router-dom";
import Coins from "./routes/Coins";
import Coin from "./routes/Coin";
import Root from "./Root";

const router = createBrowserRouter([
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "",
        element: <Coins />,
      },
      {
        path: ":coinId",
        element: <Coin />,
      },
    ],
  },
]);
export default router;
