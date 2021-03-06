import Header from "./components/Header";
import Footer from "./components/Footer";
import About from "./components/About";
import Contact from "./components/Contact";
import Portfolio from "./components/Portfolio"
import Resume from "./components/Resume"
import { useState } from "react";

function App() {

  const [menuItems] = useState(["About Me","Portfolio","Contact","Resume"]);

  const [currentPage, setPage] = useState(menuItems[0]);

  function renderPage(page){
    switch(page){
      case menuItems[0]:
        return <About/>;

      case menuItems[1]:
        return <Portfolio/>;

      case menuItems[2]:
        return <Contact/>;

      case menuItems[3]:
        return <Resume/>;

      default:
        return <About/>;
    }
  }

  return (
    <div className='flex-column justify-flex-start'>
      <Header
        currentPage={currentPage}
        setPage={setPage}
        menuItems={menuItems}
      />
        <main className='container'>
            {renderPage(currentPage)}
        </main>
      <Footer/>
    </div>
  );

}

export default App;