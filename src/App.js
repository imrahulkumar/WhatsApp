// import logo from './logo.svg';
// import './App.css';
// import {
//   createBrowserRouter,
//   RouterProvider,
// } from "react-router-dom";
// import Wrapper from './component/Wrapper';
// import Chat from './component/Chat';
// import Call from './component/Call';
// import Status from './component/Status';
// import CameraScreen from './component/CameraScreen';
// import Chatting from './component/Chatting';
import SideBar from './component2/SideBar';

function App() {


//   const router = createBrowserRouter([
//   {
//     path: "/",
//     element: <Wrapper />,
   
//     children: [
//       {
//         path: "chat",
//         element: <Chat />,
//       },
//         {
//         path: "call",
//         element: <Call />,
//       },
//         {
//         path: "status",
//         element: <Status />,
//       },
//       {
//         path: "camera",
//         element: <CameraScreen />,
//       },
//       {
//         path: "chatting/:id",
//         element: <Chatting />,
//       }
//     ],
//   },
// ]);



  return (
  //  <RouterProvider router={router}></RouterProvider>
  <SideBar/>
  );
}

export default App;
