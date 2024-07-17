import React, { useState, useEffect } from 'react';
// import './Styles/Settings.css';

function Settings() {
  const [settingsData, setSettingsData] = useState([]);

  useEffect(() => {
    // Здесь должен быть запрос к беку для получения данных из Interface.csv
    // Для примера используем моковые данные
    setSettingsData([
      { File_Name: '2336.las', Step: 0.10, Top_depth: 3486.68, Bottom_dept: 3879.3, Null_value: -999, Export_Name: '2336.las', Number_of_Uniq: 'Sw, Poro', DoubleSet: 'Sw_Sw1, Poro_Poro1' },
      // ... другие строки данных
    ]);
  }, []);

  return (
    <div className="settings">
      <h2>Settings</h2>
      <table>
        <thead>
          <tr>
            <th>File Name</th>
            <th>Step</th>
            <th>Top Depth</th>
            <th>Bottom Depth</th>
            <th>Null Value</th>
            <th>Export Name</th>
            <th>Number of Uniq</th>
            <th>Double Set</th>
          </tr>
        </thead>
        <tbody>
          {settingsData.map((row, index) => (
            <tr key={index}>
              <td>{row.File_Name}</td>
              <td>{row.Step}</td>
              <td>{row.Top_depth}</td>
              <td>{row.Bottom_dept}</td>
              <td>{row.Null_value}</td>
              <td>{row.Export_Name}</td>
              <td>{row.Number_of_Uniq}</td>
              <td>{row.DoubleSet}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default Settings;