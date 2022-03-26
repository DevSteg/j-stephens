import "./styles/app.scss";
import { Nav } from "./components/Nav";
import { Landing } from "./components/Landing";
import { About } from "./components/About";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Nav />
			</header>
			<main className="App-main">
				<Landing />
				<About />
				<Projects />
				<Contact />
			</main>
		</div>
	);
}

export default App;
