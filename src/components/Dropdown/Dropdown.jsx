import { useState } from "react";
import "./Dropdown.scss";

function Dropdown({ title, children }) {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="dropdown">
      <div 
        className="dropdown-header"
        onClick={() => setIsOpen(!isOpen)}
      >
        <span>{title}</span>
        <span className={isOpen ? "arrow open" : "arrow"}>
          ▼
        </span>
      </div>

      {isOpen && (
        <div className="dropdown-content">
          {children}
        </div>
      )}
    </div>
  );
}

export default Dropdown;