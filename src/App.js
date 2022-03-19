import "./styles/app.scss";
import { Nav } from "./components/Nav";
import { Landing } from "./components/Landing";
import { About } from "./components/About";
import { Projects } from "./components/Projects";

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
			</main>
		</div>
	);
}

export default App;
