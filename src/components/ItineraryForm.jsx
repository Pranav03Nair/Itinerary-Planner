import { useState } from "react";

function ItineraryForm({ addItinerary }) {
	const [destination, setDestination] = useState("");
	const [activities, setActivities] = useState("");
	const [date, setDate] = useState("");

	const handleSubmit = (e) => {
		e.preventDefault();
		addItinerary({ destination, activities, date });
		setDestination("");
		setActivities("");
		setDate("");
	};

	return (
		<form
			onSubmit={handleSubmit}
			className="bg-white p-6 rounded-lg shadow-md mb-6"
		>
			<h2 className="text-2xl font-semibold mb-4">Add New Itinerary</h2>
			<div className="mb-4">
				<label htmlFor="destination" className="block text-gray-700">
					Destination
				</label>
				<input
					type="text"
					id="destination"
					value={destination}
					onChange={(e) => setDestination(e.target.value)}
					className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
					required
				/>
			</div>
			<div className="mb-4">
				<label htmlFor="activities" className="block text-gray-700">
					Activities
				</label>
				<textarea
					id="activities"
					value={activities}
					onChange={(e) => setActivities(e.target.value)}
					className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
					required
				/>
			</div>
			<div className="mb-4">
				<label htmlFor="date" className="block text-gray-700">
					Date
				</label>
				<input
					type="date"
					id="date"
					value={date}
					onChange={(e) => setDate(e.target.value)}
					className="mt-1 block w-full p-2 border border-gray-300 rounded-md"
					required
				/>
			</div>
			<button
				type="submit"
				className="w-full bg-blue-500 text-white p-2 rounded-md hover:bg-blue-600"
			>
				Add Itinerary
			</button>
		</form>
	);
}

export default ItineraryForm;
