import { Route, Routes } from "react-router-dom";
import AboutPage from "./app/about";
import ContactPage from "./app/contact";
import HomePage from "./app/home/HomePage";
import MainLayout from "./app/layout/main.layout";
import ProjectsPage from "./app/projects";
import WorkflowPage from "./app/workflow";

function App() {
  return (
    <>
      <Routes>
        <Route element={<HomePage />} path="/"></Route>
        <Route
          element={
            <MainLayout>
              <AboutPage />
            </MainLayout>
          }
          path="/about"
        ></Route>
        <Route
          element={
            <MainLayout>
              <ContactPage />
            </MainLayout>
          }
          path="/contact"
        ></Route>
        <Route
          element={
            <MainLayout>
              <ProjectsPage />
            </MainLayout>
          }
          path="/projects"
        ></Route>
        <Route
          element={
            <MainLayout>
              <WorkflowPage />
            </MainLayout>
          }
          path="/workflow"
        ></Route>
      </Routes>
    </>
  );
}

export default App;
