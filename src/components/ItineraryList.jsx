import ItineraryItem from "./ItineraryItem";

function ItineraryList({ itineraries, onRemoveItinerary }) {
	return (
		<div>
			<h2 className="text-2xl font-semibold mb-4">Your Itineraries</h2>
			{itineraries.length === 0 ? (
				<p className="text-gray-600">No itineraries added yet.</p>
			) : (
				<ul>
					{itineraries.map((item, index) => (
						<ItineraryItem
							key={index}
							{...item}
							onRemove={() => onRemoveItinerary(index)}
						/>
					))}
				</ul>
			)}
		</div>
	);
}

export default ItineraryList;
