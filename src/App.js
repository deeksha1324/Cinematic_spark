import './App.css';
import AllRoutes from './routes/AllRoutes';
import { Footer, Header} from './components/index';
import { useEffect } from 'react';


function App() {

  return (
    <div className="App dark:bg-darkbg">
      <Header />
      <AllRoutes />
      <Footer />
      </div>
  );
}

export default App;
