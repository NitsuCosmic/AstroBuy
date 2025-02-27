import { NavBar } from "./components/layout/NavBar";
import { ProductsPage } from "./pages/ProductsPage";

function App() {
	return (
		<>
			<header className="font-rubik shadow-md bg-white">
				<NavBar />
			</header>
			<main className="p-2 max-w-screen-2xl mx-auto">
				<ProductsPage />
			</main>
		</>
	);
}

export default App;
