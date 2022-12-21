import './App.css';
import About from './components/About';
import Appbar from './components/Appbar';
import Challenges from './components/Challenges';
import Home from './components/Home';
import Models from './components/Models';
import Team from './components/Team';

function App() {
  let Component
  switch (window.location.pathname) {
    case "/":
      Component = Home
      break
    case "/about":
      Component = About
      break
    case "/models":
      Component = Models
      break
    case "/team":
      Component = Team
      break
    case "/challenges":
      Component = Challenges
      break
  }
  return (
    <div className='App'>
      <Appbar />
      <Component />
    </div>
  );
}



export default App;
