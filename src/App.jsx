import './App.css';
import {RouterProvider, createBrowserRouter} from 'react-router-dom';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import Root from './Root.jsx';
import Persons from './Pages/Persons.jsx';

function App() {

  const router = createBrowserRouter([
    { 
      path:'/', 
      element: <Root />,
      children: [
        { path: '/', element: <Home /> },
        { path:'/about', element: <About/>},
        { path:'/persons', element: <Persons/>},
  ],
},
]);


  return <RouterProvider router={router} />;
  

}

export default App;