import { useEffect , useState } from 'react';
import './Cruz.css'

const Cruz = () => {
    let [name , setName ] = useState("Cruz");

    useEffect(() => {
        console.log(`Rendered`);
        setName("Dave")
    }, [] /* Modifier */)

    return(
        <div className="App">
            <div>{ name }</div>
        </div>
    );
}

export default Cruz;