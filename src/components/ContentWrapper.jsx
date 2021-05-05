import React, { useState } from 'react';

import Hero from './Hero';
import Discover from './Discover';
import Buttons from './Buttons';
import DarkImg from './DarkImg';
import About from './About';
import LightImg from './LightImg';

export default function ContentWrapper(props) {
	const [slideNum, setSlideNum] = useState(1);

	function upSlide() {
		setSlideNum(() => {
			if (slideNum === 3) {
				return 1;
			} else {
				return slideNum + 1;
			}
		});
	}

	function downSlide() {
		setSlideNum(() => {
			if (slideNum === 1) {
				return 3;
			} else {
				return slideNum - 1;
			}
		});
	}

	document.onkeydown = function (evt) {
		if (evt.key === 'ArrowRight') {
			upSlide();
		} else if (evt.key === 'ArrowLeft') {
			downSlide();
		}
	};

	return (
		<div className='grid grid-flow-row grid-cols-10'>
			<Hero isMobile={props.isMobile} slideNum={slideNum} />
			<Discover isMobile={props.isMobile} slideNum={slideNum} />
			<Buttons
				isMobile={props.isMobile}
				slideNum={slideNum}
				setSlideNum={setSlideNum}
				upSlide={upSlide}
				downSlide={downSlide}
			/>
			<DarkImg isMobile={props.isMobile} />
			<About isMobile={props.isMobile} />
			<LightImg isMobile={props.isMobile} />
		</div>
	);
}
