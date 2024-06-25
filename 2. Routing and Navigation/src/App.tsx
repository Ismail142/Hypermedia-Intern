import './App.css';

const App:React.FC = ()=>{

  return (
    
    <div className="App container">
      <nav>
        <p className='logo'>Education</p>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/about">About</a></li>
          <li><a href="/contact">Contact</a></li>
        </ul>
      </nav>
      <p>This is the Home Page</p>
    </div>
  );
}

export default App;
