import './Cruz.css';

import { useState } from 'react';

const Cruz = () => {

    let [nums, setNums] = useState([1, 2, 3, 4, 5, 5, 6, ]);

    return(
        <div className="App">
            <div>{ nums.map((num, index) => (
                <div key={index}>{num}</div>
            )) }</div>
        </div>
    );
}

export default Cruz;