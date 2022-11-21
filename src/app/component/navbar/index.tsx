import "./index.css";

const NavbarComponent: React.FC<{}> = ({}) => {
  return (
    <>
      <div className="nav-main">
        <ul className="ha">
          <li>
            <a href="/about">About</a>
          </li>
          <li>
            <a href="/workflow"> Workflow</a>
          </li>
          <li>
            <a href="projects">Projects</a>
          </li>
          <li>
            <a href="contact">Contact</a>
          </li>
        </ul>
      </div>
    </>
  );
};

export default NavbarComponent;
