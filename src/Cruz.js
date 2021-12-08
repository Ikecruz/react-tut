// USESTATE
import { useState } from 'react';

const Cruz = () => {

    let [ name, setName] = useState("Cruz");

    const changeName = (name) => {
        setName(name)
    }

    return(
        <div className="App">
            <div>{ name }</div>
            <button onClick={() => changeName("Dave")}>change name</button>
        </div>
    );
}

export default Cruz;