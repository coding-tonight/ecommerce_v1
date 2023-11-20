import { Link } from "react-router-dom";

const NotFound = () => {
    return (
        <>
          <h1>Pages doesn't exits</h1>
           <Link to="/" className="text-blue-600"> Back to Home Page.</Link>    
        </>
    );
}

export default NotFound;