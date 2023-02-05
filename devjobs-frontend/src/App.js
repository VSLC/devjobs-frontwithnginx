import GlobalStyle from "./GlobalStyle.js";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Registry from "./pages/RegistryPage/Registry.js";
import JobsPage from "./pages/jobsPage/JobsPage.js";
import InfoPage from "./pages/infoPage/InfoPage.js";

import jobIdContext from "./context/jobIdContext.js";

import { useState } from "react";
function App() {
  const [selectedJobId, setSelectedJobId] = useState({});
  console.log("App selectedJobId", selectedJobId);

  return (
    <>
      <GlobalStyle />
      <BrowserRouter>
        <jobIdContext.Provider value={{ selectedJobId, setSelectedJobId }}>
          <Routes>
            <Route path="/" element={<JobsPage />} />
            <Route path="/registry" element={<Registry />} />
            <Route path="/jobsInfo" element={<InfoPage />} />
          </Routes>
        </jobIdContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
