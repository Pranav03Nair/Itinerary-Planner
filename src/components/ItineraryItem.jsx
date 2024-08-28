function ItineraryItem({ destination, activities, date, onRemove }) {
	return (
		<li className="bg-white p-4 mb-4 rounded-lg shadow-md relative">
			<h3 className="text-xl font-semibold">{destination}</h3>
			<p className="text-gray-700 mt-2">{activities}</p>
			<p className="text-gray-500 mt-2">
				Date: {new Date(date).toLocaleDateString()}
			</p>
			<button
				onClick={onRemove}
				className="absolute top-2 right-2 bg-red-500 text-white p-1 rounded-md hover:bg-red-600"
			>
				Remove
			</button>
		</li>
	);
}

export default ItineraryItem;
