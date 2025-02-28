import { useEffect, useState } from "react";
import { BASE_URL } from "../services/api";

const useProducts = () => {
	const [products, setProducts] = useState([]);
	const [isLoading, setIsLoading] = useState(false);
	const [skip, setSkip] = useState(0);

	useEffect(() => {
		const getProducts = async () => {
			setIsLoading(true);
			try {
				const response = await fetch(`${BASE_URL}/products?skip=${skip}`);
				const data = await response.json();
				setProducts((prev) => [...prev, ...data.products]);
				console.log(data.products);
			} catch (err) {
				console.error(err);
			} finally {
				setIsLoading(false);
			}
		};

		getProducts();
	}, [skip]);

	const loadMore = () => {
		setSkip((prev) => prev + 30);
	};

	return { products, isLoading, loadMore };
};

export default useProducts;
