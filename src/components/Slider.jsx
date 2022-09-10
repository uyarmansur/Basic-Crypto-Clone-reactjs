import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";

export default function App() {

  return (
    <div style={{marginTop:'80px'}}>
      <AwesomeSlider style={{ height: "350px" }}>
        
          <div className="item">
            <div className="right">
              <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRrNvb09XAu6cQDe6pSXRNCFITNLYuRq0HFig&usqp=CAU"
                alt="#"
                style={{ height: "100%", objectFit: "contain" }}
              />
            </div>
          </div>
       
      </AwesomeSlider>
    </div>
  );
}
