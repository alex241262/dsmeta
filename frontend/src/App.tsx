import Header from "./componentes/Header";
import SalesCard from "./componentes/SalesCard";
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  return (
    <>
    <ToastContainer />
     <Header />
      <main>
        <section id="sales">
            <div className="dsmeta-container"></div>
            <SalesCard />
            
            
          </section>
        </main>
        
        </>
    
  )
}

export default App;
