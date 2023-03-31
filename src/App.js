import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import About from './component/about/About';
import Home from './component/home/Home';
import Service from './component/service/Service';
import Team from './component/Team/Team';

function App() {
  return (
    <div className="">
        <Home/>
        <About/>
        <Service/>
        <Team/>
    </div>
  );
}

export default App;
