import './App.css';
import Home from './pages/Home';

function App() {
  const title = "Bem vindo ao Clash Royale";
  const link = [
    {lable:'Cards',href:'cards.html'},
    { lable:'Layout',href:'layout.html'},
    { lable:'Form',href:'form.html'},
    { lable:'Button',href:'button.html'},
    {  lable:'Navbar',href:'navbar.html'}
  ];
  
  return (
    <div>
      <Home title={title} links={link} />
    </div>
  );
}

export default App;