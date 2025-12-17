import "./assets/sass/common/SnowEffect.scss";

const SnowEffect = () => {
	const snowflakes = Array.from({ length: 50 });

	return (
		<div className="snowEffect">
			{snowflakes.map((_, i) => (
				<div
					key={i}
					className="snow"
					style={{
						left: Math.random() * 100 + "vw",
						animationDuration: 5 + Math.random() * 10 + "s",
						animationDelay: -Math.random() * 10 + "s",
						"--moveX": (Math.random() * 20 - 10) + "vw"
					}}
				>
					❄
				</div>
			))}
		</div>
	);
};

export default SnowEffect;
