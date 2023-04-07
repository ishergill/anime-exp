import './App.css';
import Spline from '@splinetool/react-spline';
import 'bootstrap/dist/css/bootstrap.min.css';
function App() {

  return (
    <div className="App">
       <Spline className='' scene="https://prod.spline.design/yUXQwybcEmiU4fnM/scene.splinecode" style={{height : '50vh'}}/>
    </div >
  );
}

export default App;
