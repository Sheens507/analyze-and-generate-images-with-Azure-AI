import React from 'react';

function App() {
  // un titulo que diga algo sobre un analizador de objetos en imagenes con IA
  return (
    <><div className="Titulo">
      <h1>AImagenes</h1>
    </div>
      // un div llamado body que contenga un input para subir la imagen
      <div className="body">
        <input type="text" name="file" id="file" />
      </div>
      // un div llamado footer que contenga un boton que diga analizar
      <div className="footer">
        <button>Análisis de imágene</button>
        <button>Generación de imágene</button>
      </div></>
  );
}

export default App;
