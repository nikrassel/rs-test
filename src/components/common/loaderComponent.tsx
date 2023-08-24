import React from "react";

const LoaderComponent = () => {
  return (
    <div>
      <h2>
        <span className="spinner-border text-primary" role="status"></span>
        Загрузка...
      </h2>
    </div>
  );
};

export default LoaderComponent;
