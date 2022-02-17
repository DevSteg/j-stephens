import "./styles/_app.scss";
import { Nav } from "./components/Nav";

function App() {
	return (
		<div className="App">
			<header className="App-header">
				<Nav />
			</header>
			<main className="App-main"></main>
		</div>
	);
}

export default App;
