import { FaTimes, FaEdit } from "react-icons/fa";
import Card from "./shared/Card";
import PropTypes from "prop-types";
import { useContext } from "react";
import FeedbackContext from "../context/FeedbackContext";

function FeedbackItem({ item }) {
	const { editFeedback } = useContext(FeedbackContext);

	return (
		<Card reverse={true}>
			<div className="num-display">{item.rating}</div>
			<button className="close">
				<FaTimes color="purple" />
			</button>
			<button onClick={() => {}} className="edit">
				<FaEdit color="purple" />
			</button>
			<div className="text-display">{item.text}</div>
		</Card>
	);
}

FeedbackItem.propTypes = {
	item: PropTypes.object.isRequired,
};

export default FeedbackItem;
