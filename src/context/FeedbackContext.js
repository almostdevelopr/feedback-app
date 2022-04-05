import { v4 as uuidv4 } from "uuid";
import { createContext, useState, useEffect } from "react";

const FeedbackContext = createContext();

export const FeedbackProvider = ({ children }) => {
	const [isLoading, setIsLoading] = useState(true);
	const [feedback, setFeedback] = useState([]);

	const [setFeedbackEdit] = useState({
		item: {},
		edit: false,
	});

	useEffect(() => {
		fetchFeedback();
	}, []);

	// Fetch feedback
	const fetchFeedback = async () => {
		const response = await fetch(
			`http://localhost:5000/feedback?_sort=id&_order=desc`
		);

		const data = await response.json();

		setFeedback(data);

		setIsLoading(false);
	};

	// add feedback
	const addFeedback = (newFeedback) => {
		newFeedback.id = uuidv4();
		setFeedback([newFeedback, ...feedback]);
	};

	// set item to be updated
	const editFeedback = (item) => {
		setFeedbackEdit({
			item,
			edit: true,
		});
	};

	return (
		<FeedbackContext.Provider
			value={{
				feedback,
				addFeedback,
				editFeedback,
				isLoading,
			}}
		>
			{children}
		</FeedbackContext.Provider>
	);
};

export default FeedbackContext;
