import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Styles/ExportSettings.css'

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

  const handleCurveMapping = (standardCurve, projectCurve) => {
    setCurveMappings((prev) => ({ ...prev, [standardCurve]: projectCurve }));
  };

  const handleExport = () => {
    // Здесь должна быть логика экспорта данных
    console.log('Экспорт:', { selectedWells, curveMappings });
    // Здесь будет запрос к беку для создания и скачивания ZIP-архива
  };

  return (
    <div className="export-settings">
      <h2>Export Settings</h2>
      <div className="well-filter">
        <h3>Well Filter</h3>
        {wells.map((well) => (
          <label key={well.id}>
            <input
              type="checkbox"
              checked={selectedWells.includes(well.id)}
              onChange={() => handleWellSelection(well.id)}
            />
            {well.name}
          </label>
        ))}
        <button onClick={() => setSelectedWells(wells.map((w) => w.id))}>
          Choose All
        </button>
        <button onClick={() => setSelectedWells([])}>Очистить</button>
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
                <td>{curve}</td>
                <td>
                  <select
                    value={curveMappings[curve] || ''}
                    onChange={(e) => handleCurveMapping(curve, e.target.value)}
                  >
                    <option value="">Choose Curve</option>
                    {curves.map((c) => (
                      <option key={c} value={c}>
                        {c}
                      </option>
                    ))}
                  </select>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <button onClick={handleExport} className="btn btn-primary">
        Export
      </button>
    </div>
  );
}

export default ExportSettings;