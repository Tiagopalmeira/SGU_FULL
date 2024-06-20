import React from "react";
import '../../public/css/classe.css';

function Classes() {

  const handleDownload = (classe) => {
    const url = 'https://drive.google.com/drive/folders/1KEGGxFRiRCu-URWpz-5qaTb5sa2h2zBA?usp=sharing';
    window.open(url, '_blank');
  }

  return (
    <div className="classe">
      <ul>
        <li>
          <h4>Faça o download abaixo:</h4>
          <button className="azul" onClick={() => handleDownload('Amigo')}>Download</button>
        </li>
      </ul>
    </div>
  );

}

export default Classes;
