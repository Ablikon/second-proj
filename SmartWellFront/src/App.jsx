import React from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import ProjectDetails from './Main_Page/components/ProjectDetails';
import ProjectList from './Main_Page/components/ProjectList';
import ExportSettings from './Main_Page/components/ExportSettings';
import DataManagement from './Main_Page/components/DataManagement';
import NewProject from './Main_Page/components/NewProject';


function App() {
  return (
    <Router>
      <div className="app">
        <header>
          <h1>Project Space</h1>
        </header>
        <main>
          <Routes>
            <Route path="/" element={<ProjectList />} />
            <Route path="/new-project" element={<NewProject />} />
            <Route path="/project/:id" element={<ProjectDetails />} />
            <Route path="/data-management/:id" element={<DataManagement />} />
            <Route path="/export/:id" element={<ExportSettings />} />
          </Routes>
        </main>
      </div>
    </Router>
  );
}

export default App;
