import { ReactNode } from "react";
import NavbarComponent from "../component/navbar";
import logo from "../../assets/ardourlogo.svg";
import "./layout.css";

const MainLayout: React.FC<{ children: ReactNode }> = ({ children }) => {
  return (
    <>
      <div className="layout">
        <div className="sidebar">
          <NavbarComponent />
          <div className="nav-logo">
            <div className="logo-container-1">ARDOUR</div>

            <div style={{ fontFamily: "Arial", width: "50%", fontSize: "9px" }}>
              <div>ARDOUR </div>
              <div
                style={{
                  fontWeight: "lighter",
                  font: "rouna",
                  fontSize: "6px",
                }}
              >
                DESIGN STUDIO
              </div>
            </div>
          </div>
        </div>
        <div className="child-div">{children}</div>
      </div>
    </>
  );
};

export default MainLayout;
