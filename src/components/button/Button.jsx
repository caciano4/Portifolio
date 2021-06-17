import {Link} from "react-router-dom";
import React from "react";
import Area from "./style";

const Button =(props) => {
    return(
      <Area>
          <button>
              <Link to={props.link}>
                  {props.Children}
              </Link>
          </button>
      </Area>
    );

}
export default Button;