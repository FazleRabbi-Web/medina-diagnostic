import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

const ServiceDetail = () => {
  const { id } = useParams();
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/services.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);

  const ExactIteam = data.filter((td) => td._id === id);

  return (
    <div className="text-center container">
      <img className="img-fluid" src={ExactIteam[0]?.imageURL} alt="" />
      <h1>
        <span className="text-info">{ExactIteam[0]?.name}</span> Service Details
      </h1>
      <h3>
        Cost: <span className="text-warning">{ExactIteam[0]?.price}</span>
      </h3>
      <p>{ExactIteam[0]?.description}</p>
    </div>
  );
};

export default ServiceDetail;
