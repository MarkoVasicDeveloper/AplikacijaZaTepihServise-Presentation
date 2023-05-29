import { useState } from "react";
import { Link } from "react-router-dom";
import "./HeaderHome.css";

export default function HeaderHome(props: { item: any }) {
  const [showMobileNav, setShowMobileNav] = useState(false);

  return (
    <div className="header-transparent">
      <div className="logo-container">
        <div className="logo">WASHER</div>
      </div>
      <div className={!showMobileNav ? "navBar" : "mobile-nav"}>
        <nav>
          {props.item.map((prop: any) => {
            return (
              <ul key={prop.id}>
                <li>
                  <Link to={prop.link}> {prop.text} </Link>
                </li>
              </ul>
            );
          })}
          <button onClick={() => window.location = window.location + 'user' as any}>Log In</button>
        </nav>
        <div className="manu">
          <button onClick={() => setShowMobileNav(!showMobileNav)}>Menu</button>
        </div>
      </div>
    </div>
  );
}
