import React from 'react';
import '../css/SeasonDisplay.css';

const config = {
	summer: { text: "It's summer.. Beach time", iconName: 'sun' },
	winter: { text: "It's winter... Take your jackets!", iconName: 'snowflake' },
};

function currentSeason(lat, month) {
	if (month < 9 && month > 4 && lat > 0) {
		return 'summer';
	}

	if (month < 4 && month > 9 && lat < 0) {
		return 'summer';
	}
	return 'winter';
}

export default function SeasonDisplay(props) {
	const season = currentSeason(props.lat, new Date().getMonth());
	const { text, iconName } = config[season];

	return (
		<div className={`season-display ${season}`}>
			<i className={`icon-left massive ${iconName} icon`} />
			<h1>{text}</h1>
			<i className={`icon-right massive ${iconName} icon`} />
		</div>
	);
}
