import './App.css';
import Card from './components/Card'


function App() {
  return (
    <div className="App">
       <Card title="Javier Delgado" info1="33" info2="Colombiano" bgColor="green"/>
       <Card title="Hobbie" info1="Programar" info2="Hacer deporte" info3="Escuchar música" bgColor="blue"/>
       <Card title="Peliculas favoritas" info1="The Profesional" info2="Transpoiting " info3="Fight Club" bgColor="red"/>
    </div>
  );
}

export default App;
