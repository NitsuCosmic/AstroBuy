import { Spinner } from "../components/Spinner";
import useProducts from "../hooks/useProducts";

export const ProductsPage = () => {
	const { products, isLoading } = useProducts();

	return (
		<section>
			<h2>Check out our list of products!</h2>
			{products &&
				products.map((product) => <div key={product.id}>{product.title}</div>)}
			{isLoading && <Spinner />}
		</section>
	);
};
