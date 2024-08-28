import { useState } from "react";
import ItineraryForm from "./components/ItineraryForm";
import ItineraryList from "./components/ItineraryList";

function App() {
	const [itineraries, setItineraries] = useState([]);

	const addItinerary = (itinerary) => {
		setItineraries([...itineraries, itinerary]);
	};

	const removeItinerary = (index) => {
		setItineraries(itineraries.filter((_, i) => i !== index));
	};

	return (
		<div className="bg-gray-100 min-h-screen p-6">
			<header className="text-center mb-8">
				<h1 className="text-4xl font-bold text-gray-800">
					Travel Itinerary Planner
				</h1>
				<p className="text-gray-600">Plan your trips with ease</p>
			</header>
			<ItineraryForm addItinerary={addItinerary} />
			<ItineraryList
				itineraries={itineraries}
				onRemoveItinerary={removeItinerary}
			/>
		</div>
	);
}

export default App;
