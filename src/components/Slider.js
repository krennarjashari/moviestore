import React from "react";

function Slider({ images }) {
  return (
    <>
      <div id="slider" className="carousel slide">
        <div className="carousel-indicators">
          {images.length > 0 &&
            images.map((image, index) =>
              image.id == "1" ? (
                <button
                  type="button"
                  key={image.id}
                  data-bs-target="#slider"
                  data-bs-slide-to={index}
                  className="active"
                  aria-current="true"
                  aria-label={`Slide ${image.id}`}
                ></button>
              ) : (
                <button
                  type="button"
                  key={image.id}
                  data-bs-target="#slider"
                  data-bs-slide-to={index}
                  aria-label={`Slide ${image.id}`}
                ></button>
              )
            )}
        </div>
        <div className="carousel-inner">
          {images.length > 0 &&
            images.map((image) => (
              <div
                className={`carousel-item ${image.id == "1" ? "active" : ""}`}
                key={image.id}
              >
                <img
                  src={image.url}
                  className="d-block w-100"
                  alt={image.alt}
                />
                <div className="carousel-caption d-none d-md-block">
                  <h5>{image.id}</h5>
                  <p>
                    <b>{image.alt}</b>
                  </p>
                </div>
              </div>
            ))}
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#slider"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#slider"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}

export default Slider;
