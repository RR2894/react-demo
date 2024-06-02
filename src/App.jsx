import { useState, useEffect } from 'react';
import { RouterProvider, createBrowserRouter } from 'react-router-dom';
import Home from './Components/Home.jsx';
import About from './Components/About.jsx';
import ErrorPage from './Pages/ErrorPage.jsx';
import Persons from './Pages/Persons.jsx';
import Root from './Root.jsx';
import Users from './Pages/Users.jsx';
import axios from 'axios';

function App() {
  const [persons, setPersons] = useState([
    { id: 1, name: 'Margit', title: 'CEO', age: 29, location: 'Helsinki' },
    { id: 2, name: 'Kati', title: 'developer', age: 25, location: 'NY' },
    { id: 3, name: 'Karin', title: 'designer', age: 45, location: 'Tartu' },
  ]);
  const [users, setUsers] = useState([]);

  useEffect(() => {
    axios.get('https://jsonplaceholder.typicode.com/users').then(res => { setUsers(res.data); });
  }, []);



  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      errorElement: <ErrorPage />,
      children: [
        { path: '/', element: <Home /> },
        { path: '/about', element: <About /> },
        { path: '/users', element: <Users users={users} /> },
        { path: '/persons', element: <Persons persons={persons} /> },
      ],
    },
  ]);

  return <RouterProvider router={router} />;
}

export default App;