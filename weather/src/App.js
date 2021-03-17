import logo from './logo.svg';
import './App.css';
import Weather from './app_component/weather.component';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'weather-icons/css/weather-icons.css'
// followed tutorial at https://www.youtube.com/watch?v=IxuqmfO6p28 for frontend

function App() {
  return (
    <div className="App">
      <Weather/>
    </div>
  );
}

export default App;
