import React from "react";
import "../Tarjetas/Tarjetas.css";
import imagen1 from '../../Images/Tesis.png';
import imagen2 from '../../Images/Electrolux.png';
import imagen3 from '../../Images/Batata.png';

function Card({ title, imageUrl,content, urlContent}) {
  return (
    <div className="card">
      <img src={imageUrl}/>
      <p>{content}</p>
      <a href={urlContent} target="__blank">{title}</a>
    </div>
  );
}

function Tarjetas() {
  const tarjetas = [
    {
      title: "State-Estimator",
      imageUrl: imagen1,
      content:"This state estimator was performed using state variables and LabView.",
      urlContent:"https://repository.usta.edu.co/handle/11634/46475",
    },
    {
      title: "Electro-Lux",
      imageUrl: imagen2,
      content:"Basic concepts of reducers and barrels were used.",
      urlContent:"https://globalelectro.jusehs.com/",
    },
    {
      title: "Batata-Bit",
      imageUrl: imagen3,
      content:"Mobile First methodology and responsive design were used.",
      urlContent:"https://github.com/Edu980-8/Batatabit",
    },
  ];

  return (
    <div className="grid-container">
      {tarjetas.map((tarjeta, index) => (
        <Card key={index} title={tarjeta.title} imageUrl={tarjeta.imageUrl} content={tarjeta.content} urlContent={tarjeta.urlContent}/>
      ))}
    </div>
  );
}

export default Tarjetas;
