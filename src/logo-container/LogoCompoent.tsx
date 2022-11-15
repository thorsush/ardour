import "../logo-container/logo.css";
import { useEffect, useState } from "react";

const LogoComponent: React.FC<{}> = ({}) => {
  const [logoDone, setLogoDone] = useState<boolean>(false);
  useEffect(() => {
    setTimeout(() => setLogoDone(true), 5000);
  }, []);
  return (
    <>
      <div className="main">
        <div className="logo-container">
          <svg viewBox="0 0 1320 300">
            <text x="50%" y="50%" dy=".35em" textAnchor="middle">
              ARDOUR
            </text>
          </svg>
        </div>
        {logoDone && (
          <div className="secon-container geeks">
            <h1>ARDOUR </h1>
            <h1 className="ha" style={{ fontWeight: "lighter", font: "rouna" }}>
              DESIGN STUDIO
            </h1>
          </div>
        )}
      </div>
    </>
  );
};

export default LogoComponent;
