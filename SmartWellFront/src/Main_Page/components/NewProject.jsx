import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './Styles/NewProject.css';

function NewProject() {
  const [files, setFiles] = useState([]);
  const navigate = useNavigate();

  const handleFileUpload = (event) => {
    const uploadedFiles = Array.from(event.target.files);
    setFiles((prevFiles) => [...prevFiles, ...uploadedFiles]);
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    // Здесь должна быть логика отправки файлов на сервер
    console.log('Загруженные файлы:', files);
    // После  загрузки перенаправка на страницу проекта
    navigate('/project/new');
  };

  return (
    <div className="new-project">
      <h2>Create New Project</h2>
      <form onSubmit={handleSubmit}>
        <div className="file-upload">
          <input
            type="file"
            accept=".las"
            multiple
            onChange={handleFileUpload}
          />
          <p>Drag and drop LAS 2.0 files here or click to select</p>
        </div>
        <div className="file-list">
          {files.map((file, index) => (
            <div key={index} className="file-item">
              {file.name}
            </div>
          ))}
        </div>
        <button type="submit" className="btn btn-primary">
          Create Project
        </button>
      </form>
    </div>
  );
}

export default NewProject;
