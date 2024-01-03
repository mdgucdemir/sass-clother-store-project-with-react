import React from "react";

const Slide = () => {
  return (
    <section className="slideshow">
      <div className="slideshow-slide">
        <div className="slideshow-content">
          <h2>Slide 1</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            ipsam tempora delectus atque ratione accusantium quisquam molestiae
            quo blanditiis vero.
          </p>
        </div>
        <img src={require("../../images/img1.jpg")} alt="img-1" />
      </div>
      <div className="slideshow-slide">
        <div className="slideshow-content">
          <h2>Slide 2</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            ipsam tempora delectus atque ratione accusantium quisquam molestiae
            quo blanditiis vero.
          </p>
        </div>
        <img src={require("../../images/img2.jpg")} alt="img-2" />
      </div>
      <div className="slideshow-slide">
        <div className="slideshow-content">
          <h2>Slide 3</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            ipsam tempora delectus atque ratione accusantium quisquam molestiae
            quo blanditiis vero.
          </p>
        </div>
        <img src={require("../../images/img3.jpg")} alt="img-3" />
      </div>
      <div className="slideshow-slide">
        <div className="slideshow-content">
          <h2>Slide 4</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            ipsam tempora delectus atque ratione accusantium quisquam molestiae
            quo blanditiis vero.
          </p>
        </div>
        <img src={require("../../images/img4.jpg")} alt="img-4" />
      </div>
      <div className="slideshow-slide">
        <div className="slideshow-content">
          <h2>Slide 5</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat
            ipsam tempora delectus atque ratione accusantium quisquam molestiae
            quo blanditiis vero.
          </p>
        </div>
        <img src={require("../../images/img5.jpg")} alt="img-5" />
      </div>
    </section>
  );
};

export default Slide;
