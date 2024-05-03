import About from "./components/About"
import Certy from "./components/Certy"
import Contact from "./components/Contact"
import Footer from "./components/Footer"
import Home from "./components/Home"
import Links from "./components/Links"
import NavBar from "./components/NavBar"
import Projects from "./components/Projects"
import Skills from "./components/Skills"

function App() {
  return (
    <>
      <NavBar />
      <Links />
      <Home />
      <section id="Projects">
        <Projects />
      </section>
      <Skills />
      <About/>
      <Certy />
      <Contact />
      <Footer />
    </>
  )
}

export default App


// <div>
// <a href="https://vitejs.dev" target="_blank">
//   <img src={viteLogo} className="logo" alt="Vite logo" />
// </a>
// <a href="https://react.dev" target="_blank">
//   <img src={reactLogo} className="logo react" alt="React logo" />
// </a>
// </div>
// <h1>Vite + React</h1>
// <div className="card">
// <button onClick={() => setCount((count) => count + 1)}>
//   count is {count}
// </button>
// <p>
//   Edit <code>src/App.jsx</code> and save to test HMR
// </p>
// </div>
// <p className="read-the-docs">
// Click on the Vite and React logos to learn more
// </p>
