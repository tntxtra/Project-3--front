import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import AddProduct from './components/funcComponents';
import 'index.html'
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <h1><strong>Words</strong></h1>
        <AddProduct/>
      
      </header>
    </div>
  );
}

export default App;
