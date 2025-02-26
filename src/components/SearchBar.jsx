import { faChevronLeft } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useEffect, useRef } from "react";

export const SearchBar = ({ closeSearchBar }) => {
	const inputRef = useRef(null);

	useEffect(() => {
		if (inputRef.current && window.innerWidth < 768) {
			inputRef.current.focus();
		}
	}, []);

	const handleClick = (e) => {
		e.preventDefault();
		closeSearchBar();
	};

	const handleSubmit = (e) => {
		e.preventDefault();
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="flex gap-2 bg-white w-full h-full px-4 md:p-0 md:max-w-lg"
		>
			<button onClick={handleClick} className="md:hidden">
				<FontAwesomeIcon icon={faChevronLeft} />
			</button>
			<div className="flex justify-center w-full">
				<input
					ref={inputRef}
					type="text"
					name="search"
					id="search"
					className="w-full h-full px-2 outline-0 md:py-2 md:bg-neutral-200"
					placeholder="Search..."
				/>
			</div>
		</form>
	);
};
