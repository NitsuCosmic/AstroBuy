import { useEffect, useState } from "react";
import { BASE_URL } from "../services/api";

const useProducts = () => {
	const [products, setProducts] = useState(null);
	const [limit, setLimit] = useState(null);
	const [total, setTotal] = useState(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const getProducts = async () => {
			setIsLoading(true);
			try {
				const response = await fetch(`${BASE_URL}/products`);
				if (!response.ok) throw new Error(`Error fetching products`);
				const data = await response.json();
				const { limit, products, total } = data;
				setProducts(products);
				setLimit(limit);
				setTotal(total);
				console.log(products);
			} catch (err) {
				console.error(`Error fetching products: ${err}`);
			} finally {
				setIsLoading(false);
			}
		};

		getProducts();
	}, []);

	return { products, isLoading };
};

export default useProducts;
