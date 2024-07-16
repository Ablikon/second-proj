import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import './Styles/DataManagement.css'

function DataManagement() {
  const { id } = useParams();
  const navigate = useNavigate();
  const [files, setFiles] = useState([]);
  const [projectName, setProjectName] = useState('');

  useEffect(() => {
    if (id !== 'new') {
      // здесь будет запрос к беку
      setProjectName(`Project ${id}`);
      setFiles([/* Здесь должен быть список уже загруженных файлов */]);
    }
  }, [id]);

  const handleFileUpload = (event) => {
    const newFiles = Array.from(event.target.files);
    setFiles(prevFiles => [...prevFiles, ...newFiles]);
  };

  const handleRemoveFile = (index) => {
    setFiles(prevFiles => prevFiles.filter((_, i) => i !== index));
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    
    // Здесь должна быть логика отправки файлов на сервер
    // и создания/обновления проекта
    console.log('Загруженные файлы:', files);
    console.log('Имя проекта:', projectName);

    // После успешной загрузки перенаправляем на страницу проекта
    navigate(`/project/${id === 'new' ? 'new-id' : id}`);
  };

  return (
    <div className="data-management">
      <h2>{id === 'new' ? 'Создание нового проекта' : 'Управление данными проекта'}</h2>
      <form onSubmit={handleSubmit}>
        <div className="form-group">
          <label htmlFor="projectName">Имя проекта:</label>
          <input
            type="text"
            id="projectName"
            value={projectName}
            onChange={(e) => setProjectName(e.target.value)}
            required
          />
        </div>
        <div className="form-group">
          <label htmlFor="fileUpload">Загрузить файлы LAS 2.0:</label>
          <input
            type="file"
            id="fileUpload"
            accept=".las"
            multiple
            onChange={handleFileUpload}
          />
        </div>
        <div className="file-list">
          {files.map((file, index) => (
            <div key={index} className="file-item">
              <span>{file.name}</span>
              <button type="button" onClick={() => handleRemoveFile(index)}>Удалить</button>
            </div>
          ))}
        </div>
        <button type="submit" className="btn btn-primary">
          {id === 'new' ? 'Создать проект' : 'Обновить проект'}
        </button>
      </form>
    </div>
  );
}

export default DataManagement;
