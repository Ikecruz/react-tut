import Navbar from "./components/Navbar"

const Cruz = () => {
    let title = "My blog";
    let obj = {name: "cruz"};

    const handleClick = () => {
        console.log("clicked");
    }

    const handleClickAgain = (name) => {
        console.log(`clicked by ${name}`)
    }
    
    return(
        <div className="App">
            <Navbar />
            <div>{ title }</div>

            {/* inline styling */}
            <p style={{fontWeight: "900", fontSize: "2.2em"}}>{obj.name}</p>

            {/* click event with an anonymous function */}
            <button onClick={() => console.log("You clicked me")}>click me</button>

            {/* click event with a normal function */}
            <button onClick={handleClick}>click me next</button>  {/* Note brackets wasn't passed cuz if passed function invokes itself */}

            {/* What if we need a parameter? */}
            <button onClick={() => handleClickAgain("Cruz")}>againnn</button>
        </div>
    );
}

export default Cruz;