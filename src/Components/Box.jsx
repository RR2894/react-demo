import '../App'
import { useState } from 'react';

const Box = (props) => {
    return(
        <div>
            <h1>Name: {props.name}</h1>
            <p>Title: {props.title}</p>
            <p>Location: {props.location}</p>
        </div>
    )
}

function BoxList() {
    const [boxes, setBoxes] = useState([
        {id: 1, name: 'Randolph'},
        {id: 2, name: 'someone'},
        {id: 3, name: 'someone_else'}
    ]);

}

export default Box;