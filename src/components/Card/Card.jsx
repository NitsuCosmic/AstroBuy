import { faStar as regularStar } from "@fortawesome/free-regular-svg-icons";
import { faStar as solidStar } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const Card = ({ children }) => {
	return (
		<div className="flex flex-col rounded-xl shadow-md bg-white overflow-hidden hover:shadow-lg transition-shadow">
			{children}
		</div>
	);
};

const Thumbnail = ({ src, alt }) => {
	return <img src={src} alt={alt} className="w-full h-auto object-cover" />;
};

const Price = ({ children }) => {
	return <span className="font-medium">${children}</span>;
};

const Title = ({ children }) => {
	return <h2 className="text-lg font-bold leading-5">{children}</h2>;
};

const Description = ({ children }) => {
	return <p className="text-sm text-gray-600">{children}</p>;
};

const Brand = ({ children }) => {
	return (
		<span className="text-sm font-semibold text-gray-700 text-box">
			{children}
		</span>
	);
};

const Rating = ({ stars }) => {
	return (
		<div className="flex items-center gap-1 text-yellow-500">
			{Array.from({ length: 5 }, (_, i) => (
				<FontAwesomeIcon icon={i < stars ? solidStar : regularStar} key={i} />
			))}
		</div>
	);
};

const AddToCartButton = ({ onClick }) => {
	return (
		<button className="text-sm font-medium px-4 py-2 rounded-full text-white bg-neutral-900 border-2 border-neutral-950 cursor-pointer hover:text-neutral-950 hover:bg-transparent transition-colors">
			Add to Cart
		</button>
	);
};

// Assign subcomponents to the main Card component
Card.Thumbnail = Thumbnail;
Card.Price = Price;
Card.Title = Title;
Card.Description = Description;
Card.Brand = Brand;
Card.Rating = Rating;
Card.AddToCartButton = AddToCartButton;

export default Card;
