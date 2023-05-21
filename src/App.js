import logo from './logo.svg';
import './App.css';
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import Wrapper from './component/Wrapper';
import Chat from './component/Chat';
import Call from './component/Call';
import Status from './component/Status';
import CameraScreen from './component/CameraScreen';

function App() {


  const router = createBrowserRouter([
  {
    path: "/",
    element: <Wrapper />,
   
    children: [
      {
        path: "chat",
        element: <Chat />,
      },
        {
        path: "call",
        element: <Call />,
      },
        {
        path: "status",
        element: <Status />,
      },
      {
        path: "camera",
        element: <CameraScreen />,
      },
    ],
  },
]);



  return (
   <RouterProvider router={router}></RouterProvider>
  );
}

export default App;
