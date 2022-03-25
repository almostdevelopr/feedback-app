function Header({ text }) {
	return (
		<Header>
			<div className="container">
				<h2>{text}</h2>
			</div>
		</Header>
	);
}

Header.defaultProps = {
	text: "Feedback UI",
};
export default Header;
