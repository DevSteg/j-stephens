import "./styles/_app.scss";
import { Nav } from "./components/Nav";
import { Landing } from "./components/Landing";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Nav />
			</header>
			<main className="App-main">
				<Landing />
			</main>
		</div>
	);
}

export default App;
