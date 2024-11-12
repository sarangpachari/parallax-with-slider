import "./App.css";
import SimpleImageSlider from "react-simple-image-slider";

function TextBlock() {
  const images = [
    { url: "images/1.jpg" },
    { url: "images/2.jpg" },
    { url: "images/3.jpg" },
    { url: "images/4.jpg" },
    { url: "./images/5.jpg" },
    { url: "./images/6.jpg" },
    { url: "./images/7.jpg" },
  ];
  return (
    <div id="textblock">
      <div id="textblock-container">
        <h1 id="textblock-title">Image Slider</h1>
        <div>
          <SimpleImageSlider
            width={896}
            height={504}
            images={images}
            showBullets={true}
            showNavs={true}
          />
        </div>
      </div>
    </div>
  );
}

export default TextBlock;
