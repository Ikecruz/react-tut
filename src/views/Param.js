import { useParams } from "react-router-dom";

const Param = () => {
    const { id, name } = useParams();

    return(
        <div>
            <p>Now trying to get the parameter: { id }</p>
            <p>Second parameter: {name}</p>
        </div>
    );
}

export default Param;