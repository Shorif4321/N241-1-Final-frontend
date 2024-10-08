import { RouterProvider } from "react-router-dom";
import "./App.css";
import router from "./Routes/Route/Route";
import { Toaster } from "react-hot-toast";

function App() {
  return (
    <div className="max-w-[1440px] mx-auto">
      <RouterProvider router={router}></RouterProvider>;
      <Toaster position="bottom-right" />
    </div>
  );
}

export default App;
