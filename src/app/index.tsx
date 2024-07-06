import { Suspense } from "react";
import "./styles/index.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { publicRoutes } from "../router/routes";

const App = () => {

  return (
    <Router>
      <Suspense fallback={<>wait...</>}>
        <Routes>
          {publicRoutes.map(({ path, Component }) =>
            <Route key={path} path={path} element={Component} />
          )}
        </Routes>
      </Suspense>
    </Router>
  );
};

export default App;