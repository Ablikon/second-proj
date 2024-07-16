import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import './Styles/WellStatistics.css'

function WellStatistics() {
  const { projectId, wellId } = useParams();
  const [well, setWell] = useState(null);
  const [curves, setCurves] = useState([]);

  useEffect(() => {
    // Здесь должен быть запрос к беку для получения данных скважины и кривых
    setWell({ id: wellId, name: `Well ${wellId}` });
    setCurves([
      { name: 'Curve 1', count: 100, min: 0, max: 100, avg: 50 },
      { name: 'Curve 2', count: 200, min: -50, max: 50, avg: 0 },
      { name: 'Curve 3', count: 150, min: 10, max: 90, avg: 45 },
    ]);
  }, [projectId, wellId]);

  return (
    <div className="well-statistics">
      <h2>{well?.name}</h2>
      <table>
        <thead>
          <tr>
            <th>Имя кривой</th>
            <th>Количество значений</th>
            <th>Минимальное значение</th>
            <th>Максимальное значение</th>
            <th>Среднее значение</th>
          </tr>
        </thead>
        <tbody>
          {curves.map((curve, index) => (
            <tr key={index}>
              <td>{curve.name}</td>
              <td>{curve.count}</td>
              <td>{curve.min}</td>
              <td>{curve.max}</td>
              <td>{curve.avg}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default WellStatistics;