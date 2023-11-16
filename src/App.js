import { Routes, Route } from "react-router";
import "./App.css";
import { PageLayout } from "./pages/PageLayout/PageLayout";
import { Landing } from "./pages/Landing/Landing";

function App() {
  return (
    <PageLayout>
      <Routes>
        <Route path="/" element={<Landing />} />
      </Routes>
    </PageLayout>
  );
}

export default App;
