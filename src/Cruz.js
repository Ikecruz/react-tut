import { useState } from 'react';
import './Cruz.css'

const Cruz = () => {
    
    let [name, setName] = useState('');
    let [age, setAge] = useState('');

    const handleSubmit = () => {
        console.log({name , age})
    }

    return(
        <div className="App">
            <form onSubmit={handleSubmit}>
                <label>Name: </label>
                <input type="text" value={name} onChange={(e) => setName(e.target.value)}/>
                <label>Age: </label>
                <input type="text" value={age} onChange={(e) => setAge(e.target.value)}/>
                <button type='submit'>submit</button>
            </form>
        </div>
    );
}

export default Cruz;