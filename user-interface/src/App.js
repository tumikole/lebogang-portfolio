import { useState } from "react";
import Vid1 from "./Asserts/vid1.mp4";
import Vid2 from "./Asserts/vid2.mp4";
import Vid3 from "./Asserts/vid3.mp4";

function App() {
  const [activeVideo, setActiveVideo] = useState(null); // Tracks the active video

  const videos = [Vid1, Vid2, Vid3];

  return (
    <div className="App">
      <h1 style={{textAlign:"center"}}>Hi, Lebz</h1>
      <button
        style={{ marginTop: "2rem", marginLeft: "2rem" }}
        className="btn btn-success"
        onClick={() => setActiveVideo(0)} // Play Video 1
      >
        Play Video 1
      </button>
      <button
        style={{ marginTop: "2rem", marginLeft: "2rem" }}
        className="btn btn-success"
        onClick={() => setActiveVideo(1)} // Play Video 2
      >
        Play Video 2
      </button>
      <button
        style={{ marginTop: "2rem", marginLeft: "2rem" }}
        className="btn btn-success"
        onClick={() => setActiveVideo(2)} // Play Video 3
      >
        Play Video 3
      </button>

      <div style={{marginTop: "3rem"}}>
        {activeVideo !== null && (
          <video
            key={activeVideo} // Forces React to recreate the element when the key changes
            style={{
              width: "100%",
              border: "5px solid blue",
              borderRadius: "10px",
              boxShadow: "0 4px 10px rgba(0, 0, 0, 0.2)",
              backgroundColor: "black",
              height: "80vh",
            }}
            controls={false}
            autoPlay
          >
            <source src={videos[activeVideo]} type="video/mp4" />
            Your browser does not support the video tag.
          </video>
        )}
      </div>
    </div>
  );
}

export default App;
