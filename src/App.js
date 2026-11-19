import './App.css';
import './scss/main.scss';
import Atlantis from './atlantis';
import Header from './header';
import Footer from './footer';
import About from './about';
import Demobutton from './about/demobutton';

function App() {
  return (
    <div>
         <Header/>  
       <Atlantis/> 
        <Footer/>    
       <About/>  
       {/* <Demobutton/> */}
    </div>
  );
}

export default App;
