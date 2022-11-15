import { useEffect, useState } from "react";
import HomePage from "./app/HomePage";
import LogoComponent from "./logo-container/LogoCompoent";

function App() {
  const [logoPrompt, setLogoPromt] = useState<boolean>(true);
  useEffect(() => {
    setTimeout(() => setLogoPromt(false), 8000);
  }, []);
  return logoPrompt ? (
    <LogoComponent />
  ) : (
    <>
      <HomePage />
    </>
  );
}

export default App;
