import "./webheader.css"
import { Link } from "react-router-dom";


const WebHeader = () => {
   
  return (
    <>
      <div style={{}}>
        <div style={{ height: "5em" }}>
          <ul style={{ marginLeft: "50em", width: "28em", paddingTop: "2em" }}>
            <Link className="navtextstyle" to="/">
              Home
            </Link>
            <Link className="navtextstyle" to="/Blogs">
              Blogs
            </Link>
            <Link className="navtextstyle" to="/About">
              About
            </Link>
            <Link className="navtextstyle" to="/Contact">
              Contact
            </Link>
            <Link className="navtextstyle" to="/SignIn">
              SignIn
            </Link>
          </ul>
        </div>

        
      </div>
    </>
  );
}

export default WebHeader;
