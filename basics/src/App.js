import Home from "./Home";
import About from "./About";
import Contact from "./Contact"
/**
 * Renders the main application component.
 * 
 * @returns {JSX.Element} The rendered application component.
 */
function App() {
  return (
    <div>
    <h1>Hello</h1>
    <Home name = {'Pooja'} age = {24} />
    <About />
    <Contact />
    </div>
  );
}

export default App;
