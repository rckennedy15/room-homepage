import React from 'react';

export default function Hero(props) {
	console.log(props.isMobile);
	const desktopImgs = [
		'../images/desktop-image-hero-1.jpg',
		'../images/desktop-image-hero-2.jpg',
		'../images/desktop-image-hero-3.jpg',
	];
	const mobileImgs = [
		'../images/mobile-image-hero-1.jpg',
		'../images/mobile-image-hero-2.jpg',
		'../images/mobile-image-hero-3.jpg',
	];

	function setImg(mobile) {
		if (mobile) {
			if (props.slideNum === 1) {
				return mobileImgs[0];
			} else if (props.slideNum === 2) {
				return mobileImgs[1];
			} else {
				return mobileImgs[2];
			}
		} else {
			if (props.slideNum === 1) {
				return desktopImgs[0];
			} else if (props.slideNum === 2) {
				return desktopImgs[1];
			} else {
				return desktopImgs[2];
			}
		}
	}

	return (
		<div className='bg-white lg:col-span-6 lg:row-span-3 col-span-10 row-start-1'>
			<img src={setImg(props.isMobile)} alt='' className='w-full' />
		</div>
	);
}
