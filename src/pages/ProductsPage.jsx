import { Products } from "../components/Products";
import { Spinner } from "../components/Spinner";
import useProducts from "../hooks/useProducts";

export const ProductsPage = () => {
	const { products, isLoading, loadMore } = useProducts();

	return (
		<section>
			<h2>Check out our list of products!</h2>
			{products && <Products products={products} />}
			{isLoading && (
				<div className="flex justify-center py-4">
					<Spinner />
				</div>
			)}
			{products.length > 0 && !isLoading && (
				<div className="flex justify-center py-4">
					<button
						onClick={loadMore}
						disabled={isLoading}
						className="font-medium px-4 py-2 rounded-full cursor-pointer bg-neutral-950 text-white "
					>
						Load more
					</button>
				</div>
			)}
		</section>
	);
};
