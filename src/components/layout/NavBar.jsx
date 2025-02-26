import {
	faBars,
	faSearch,
	faShoppingCart,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useState } from "react";
import { SearchBar } from "../SearchBar";

export const NavBar = () => {
	const [isOpen, setIsOpen] = useState(false);
	const [isDesktop, setIsDesktop] = useState(window.innerWidth >= 768);
	const closeSearchBar = () => setIsOpen(false);

	useEffect(() => {
		const handleResize = () => {
			setIsDesktop(window.innerWidth >= 768);
		};

		window.addEventListener("resize", handleResize);
		return () => window.removeEventListener("resize", handleResize);
	}, []);

	useEffect(() => {
		if (isDesktop) {
			setIsOpen(true);
		} else {
			setIsOpen(false);
		}
	}, [isDesktop]);

	return (
		<nav className="flex justify-between items-center p-2 max-w-screen-2xl mx-auto relative">
			<h2 className="text-xl font-bold">ASTROBUY</h2>

			{isDesktop && (
				<div className="hidden w-full md:flex justify-center">
					<SearchBar closeSearchBar={closeSearchBar} />
				</div>
			)}

			{!isDesktop && isOpen && (
				<div className="absolute inset-0 w-full h-full">
					<SearchBar closeSearchBar={closeSearchBar} />
				</div>
			)}

			<div className="flex items-center gap-4">
				<button onClick={() => setIsOpen(!isOpen)} className="md:hidden">
					<FontAwesomeIcon icon={faSearch} size="lg" />
				</button>
				<button className="md:hidden">
					<FontAwesomeIcon icon={faBars} size="lg" />
				</button>
				<button>
					<FontAwesomeIcon icon={faShoppingCart} size="lg" />
				</button>
			</div>
		</nav>
	);
};
