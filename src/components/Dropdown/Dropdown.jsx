import { useState } from "react";
import arrow from "../../assets/icones/arrow.svg";
import "./Dropdown.scss";

function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <div className="dropdown-hide"></div>
      <div className="dropdown-header">
        <span>{title}</span>
        <span className={isOpen ? "arrow open" : "arrow"}>
          <img
            src={arrow}
            alt="flèche de dropdown"
            className="arrow-img"
            onClick={() => setIsOpen(!isOpen)}
          />
        </span>
      </div>

      { <div className={`dropdown-content ${isOpen ? "open" : "closed"}`}>{children}</div> }



    </div>
  );
}

export default Dropdown;
