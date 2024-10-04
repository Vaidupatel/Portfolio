import { navItems } from "./assets/Data";
import Approach from "./Components/Approach";
import Clients from "./Components/Clients";
import Experience from "./Components/Experience";
import FloatingNav from "./Components/UI/FloatingNav";
import Footer from "./Components/Footer";
import Grid from "./Components/Grid";
import Hero from "./Components/Hero";
import RecentProjects from "./Components/RecentProjects";

function App() {
  return (
    <>
      <main className="relative dark:bg-black-100 bg-white flex justify-center items-center flex-col  mx-auto sm:px-10 px-5 overflow-clip">
        <div className="max-w-7xl w-full ">
          <FloatingNav navItems={navItems} />
          <Hero />
          <Grid />
          <RecentProjects />
          <Clients />
          <Experience />
          <Approach />
          <Footer />
        </div>
      </main>
    </>
  );
}

export default App;
