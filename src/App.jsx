import './App.css'
import Box from './Box'
import { useState } from 'react'
import Header from './Header.jsx'
import Footer from './Footer.jsx'
import Counter from './Counter.jsx'

function App() {
const [counter, setCounter] = useState(0)
const [persons, setPersons] = useState([
  {id:1, name: "Randolph", title: "CEO", location: "Helsinki"},
  {id:2, name: "Holden", title: "CTO", location: "somewhere"},
  {id:3, name: "Oberon", title: "something", location: "wherever"},
]);

const clickHandler = () => {
  console.log('Foxes forever!!!');
  alert('Foxes forever');
};

const clickIncCounter = () => {
  setCounter(counter+1);
};
const clickDecCounter = () => {
  setCounter(counter-1);
};
const clickCounterReset= () => {
  setCounter(counter*0);
};

  return (
    <>
    <p>Counter: {counter}</p>
    <button onClick={clickHandler}>Do NOT click me</button>
    <button onClick={clickIncCounter}>Counter increase</button>
    <button onClick={clickDecCounter}>Counter decrease</button>
    <button onClick={clickCounterReset}>Reset Counter</button>
    {persons.map((person) =>(
    <Box
      key={person.name}
      name={person.name}
      title={person.title}
      location={person.location}
    />
    ))}
    </>
  )
}

export default App