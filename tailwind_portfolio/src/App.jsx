import About from "./components/About";
import Hero from "./components/Hero";
import Navbar from "./components/Navbar";
import Projects from "./components/Projects";
import SectionTitle from "./components/SectionTitle";
import Skills from "./components/Skills";

const App = () => {
	return (
		<div>
			<Navbar />
			<Hero />
			<SectionTitle />
			<Skills />
			<About />
			<Projects />
		</div>
	);
};

export default App;
