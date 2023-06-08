import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import Weather from "./weather";
function App() {
  return (
    <div className="weather-app">
      <div className="container">
        <Weather />
        <footer>
          <p>
            Coded by S.Chard {""}
            <a
              className="Git-link"
              href="https://github.com/saz36/weather-react-app"
              target="_blank"
              rel="noopener noreferrer"
            >
              open source
            </a>
          </p>
        </footer>
      </div>
    </div>
  );
}

export default App;
