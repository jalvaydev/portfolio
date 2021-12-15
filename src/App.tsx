import Footer from "./components/Footer";
import Greeting from "./components/Greeting";
import Header from "./components/Header";
import Projects from "./components/Projects";
import Skills from "./components/Skills";

function App() {
  return (
    <div className="relative min-h-screen">
      <Header />
      <div className="pb-20">
        <Greeting />
        <Skills />
        <Projects />
      </div>

      <Footer />
    </div>
  );
}

export default App;
