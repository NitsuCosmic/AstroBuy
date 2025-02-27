import Card from "./Card/Card";

export const Products = ({ products }) => {
	return (
		<>
			{products.length > 0 ? (
				<section className="grid [grid-template-columns:repeat(auto-fill,minmax(300px,1fr))] gap-4">
					{products.map((product) => (
						<Card key={product.id}>
							<Card.Thumbnail src={product.thumbnail} alt={product.title} />
							<div className="flex flex-col gap-2 h-full p-4">
								<div className="flex justify-between items-center">
									<Card.Brand>{product.brand}</Card.Brand>
									<Card.Price>{product.price}</Card.Price>
								</div>
								<Card.Title>{product.title}</Card.Title>
								<div className="line-clamp-3 text-ellipsis">
									<Card.Description>{product.description}</Card.Description>
								</div>
								<div className="mb-4">
									<Card.Rating stars={product.rating} />
								</div>
								<div className="mt-auto">
									<Card.AddToCartButton
										onClick={() =>
											console.log(`${product.title} added to cart!`)
										}
									/>
								</div>
							</div>
						</Card>
					))}
				</section>
			) : (
				<section>
					<h3>No products</h3>
				</section>
			)}
		</>
	);
};
