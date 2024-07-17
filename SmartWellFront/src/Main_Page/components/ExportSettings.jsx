import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import Select from 'react-select';
import './Styles/ExportSettings.css';

function ExportSettings() {
  const { id } = useParams();
  const [wells, setWells] = useState([]);
  const [selectedWells, setSelectedWells] = useState([]);
  const [curves, setCurves] = useState([]);
  const [curveMappings, setCurveMappings] = useState({});

  useEffect(() => {
    // Здесь должен быть запрос к беку для получения данных о скважинах и кривых
    setWells([
      { id: 1, name: 'Well 1' },
      { id: 2, name: 'Well 2' },
      { id: 3, name: 'Well 3' },
    ]);
    setCurves(['Ntg', 'Sw', 'Poro', 'Perm', 'VShal']);
  }, [id]);

  const handleWellSelection = (wellId) => {
    setSelectedWells((prev) =>
      prev.includes(wellId)
        ? prev.filter((id) => id !== wellId)
        : [...prev, wellId]
    );
  };

  const handleCurveMapping = (standardCurve, projectCurves) => {
    setCurveMappings((prev) => ({ ...prev, [standardCurve]: projectCurves }));
  };

  const handleExport = () => {
    // Здесь должна быть логика экспорта данных
    console.log('Экспорт:', { selectedWells, curveMappings });
    // Здесь будет запрос к беку для создания и скачивания ZIP-архива
  };

  const handleAddNewCurve = () => {
    setCurves([...curves, `New Curve ${curves.length + 1}`]);
  };

  const curveOptions = curves.map((curve) => ({
    value: curve,
    label: curve,
  }));

  return (
    <div className="export-settings">
      <h2>Export Settings</h2>
      <div className="well-filter">
        <h3>Well Filter</h3>
        <div className="well-list">
          {wells.map((well) => (
            <label key={well.id} className="well-item">
              <input
                type="checkbox"
                checked={selectedWells.includes(well.id)}
                onChange={() => handleWellSelection(well.id)}
              />
              <span>{well.name}</span>
            </label>
          ))}
        </div>
        <div className="well-actions">
          <button onClick={() => setSelectedWells(wells.map((w) => w.id))}>
            Choose All
          </button>
          <button onClick={() => setSelectedWells([])}>Clear</button>
        </div>
      </div>
      <div className="curve-mappings">
        <h3>Curve Settings</h3>
        <table>
          <thead>
            <tr>
              <th>Default Curve</th>
              <th>Curve In Project</th>
            </tr>
          </thead>
          <tbody>
            {curves.map((curve) => (
              <tr key={curve}>
                <td>
                  <input
                    type="text"
                    value={curve}
                    onChange={(e) => {
                      const newCurves = [...curves];
                      newCurves[newCurves.indexOf(curve)] = e.target.value;
                      setCurves(newCurves);
                    }}
                  />
                </td>
                <td>
                  <Select
                    isMulti
                    value={curveMappings[curve] || []}
                    options={curveOptions}
                    onChange={(selectedOptions) => handleCurveMapping(curve, selectedOptions)}
                  />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        <button onClick={handleAddNewCurve} className="btn btn-secondary">New</button>
      </div>
      <button onClick={handleExport} className="btn btn-primary">
        Export
      </button>
    </div>
  );
}

export default ExportSettings;
