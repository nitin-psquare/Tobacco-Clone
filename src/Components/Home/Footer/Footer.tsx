import "./Footer.css";
const brandWords = "TOBACCO".split("");

const Footer = () => {
	return (
		<footer className="footer-wrap">
			<div className="footer-words" aria-label="Tobacco word mark">
				{brandWords.map((word, index) => (
					<button key={`${word}-${index}`} className="footer-word" type="button">
						{word}
					</button>
				))}
			</div>
		</footer>
	);
};

export default Footer;
