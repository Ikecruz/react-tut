import BlogList from './blog';
import './Cruz.css'

const Cruz = () => {

    let blogs = [
        {title: "How to write a book", main: "lorem ......"},
        {title: "How to write a cook book", main: "lorem ......"}
    ]
    
    return(
        <div className="App">
            <BlogList blogs={ blogs } />
        </div>
    );
}

export default Cruz;