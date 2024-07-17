import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Styles/WellStatistics.css';

function WellStatistics() {
  const { projectId, wellId } = useParams();
  const [well, setWell] = useState(null);
  const [excelData, setExcelData] = useState([]);
  const [mnemonicsData, setMnemonicsData] = useState([]);
  const [activeTab, setActiveTab] = useState('statistics');

  useEffect(() => {
    setWell({ id: wellId, name: `Well ${wellId}` });

    // также пока нет бека
    setExcelData([
      {
        File_Name: '2336.las',
        Step: 0.10,
        Top_depth: 3486.68,
        Bottom_dept: 3879.3,
        Null_value: -999,
        Export_Name: '2336.las',
        WriteFlag: '',
        Status: '',
        Number_of_Uniq: '',
        DoubleSet: 'Sw_Sw1, Poro_Poro1'
      },
    ]);

    // Пока нет бека
    setMnemonicsData([
      { File_Name: '2336.las', DEPT: '+', DEPTH: '+', NGP: '', PHIE: '+', PHIT: '', PHIT_SON: '', SOIL: '', SPI: '', SW: '+', SW1: '', VCLAV: '+', VSH: '' },
      { File_Name: '2361.las', DEPT: '+', DEPTH: '+', NGP: '', PHIE: '+', PHIT: '', PHIT_SON: '', SOIL: '', SPI: '', SW: '+', SW1: '', VCLAV: '+', VSH: '' },
      { File_Name: '2365.las', DEPT: '+', DEPTH: '+', NGP: '', PHIE: '+', PHIT: '', PHIT_SON: '', SOIL: '', SPI: '', SW: '+', SW1: '', VCLAV: '+', VSH: '' },

    ]);
  }, [projectId, wellId]);

  const handleExportToExcel = () => {
    console.log('Экспорт в Excel');
  };

  return (
    <div className="well-statistics">
      <h2>{well?.name} Statistics</h2>
      <div className="tabs">
        <button
          className={activeTab === 'statistics' ? 'active' : ''}
          onClick={() => setActiveTab('statistics')}
        >
          Statistics
        </button>
        <button
          className={activeTab === 'mnemonics' ? 'active' : ''}
          onClick={() => setActiveTab('mnemonics')}
        >
          Mnemonics
        </button>
      </div>

      {activeTab === 'statistics' && (
        <table className="excel-table">
          <thead>
            <tr>
              <th>File Name</th>
              <th>Step</th>
              <th>Top Depth</th>
              <th>Bottom Depth</th>
              <th>Null Value</th>
              <th>Export Name</th>
              <th>Write Flag</th>
              <th>Status</th>
              <th>Number of Uniq</th>
              <th>Double Set</th>
            </tr>
          </thead>
          <tbody>
            {excelData.map((row, index) => (
              <tr key={index}>
                <td>{row.File_Name}</td>
                <td>{row.Step}</td>
                <td>{row.Top_depth}</td>
                <td>{row.Bottom_dept}</td>
                <td>{row.Null_value}</td>
                <td>{row.Export_Name}</td>
                <td>{row.WriteFlag}</td>
                <td>{row.Status}</td>
                <td>{row.Number_of_Uniq}</td>
                <td>{row.DoubleSet}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      {activeTab === 'mnemonics' && (
        <table className="mnemonics-table">
          <thead>
            <tr>
              <th>File_Name</th>
              <th>DEPT</th>
              <th>DEPTH</th>
              <th>NGP</th>
              <th>PHIE</th>
              <th>PHIT</th>
              <th>PHIT_SON</th>
              <th>SOIL</th>
              <th>SPI</th>
              <th>SW</th>
              <th>SW1</th>
              <th>VCLAV</th>
              <th>VSH</th>
            </tr>
          </thead>
          <tbody>
            {mnemonicsData.map((row, index) => (
              <tr key={index}>
                <td>{row.File_Name}</td>
                <td>{row.DEPT}</td>
                <td>{row.DEPTH}</td>
                <td>{row.NGP}</td>
                <td>{row.PHIE}</td>
                <td>{row.PHIT}</td>
                <td>{row.PHIT_SON}</td>
                <td>{row.SOIL}</td>
                <td>{row.SPI}</td>
                <td>{row.SW}</td>
                <td>{row.SW1}</td>
                <td>{row.VCLAV}</td>
                <td>{row.VSH}</td>
              </tr>
            ))}
          </tbody>
        </table>
      )}

      <button onClick={handleExportToExcel} className="btn btn-primary">
        Export to Excel
      </button>
    </div>
  );
}

export default WellStatistics;