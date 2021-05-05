import React from 'react';
import { ReactComponent as LeftArrow } from '../svg/icon-angle-left.svg';
import { ReactComponent as RightArrow } from '../svg/icon-angle-right.svg';

export default function Buttons(props) {
	return (
		<div className='lg:col-start-7 lg:col-span-1 lg:row-start-3 flex items-end col-start-8 col-end-11 row-start-2 z-10 mt-[-15vw] '>
			<button
				className='leftArrow bg-black hover:bg-darkGray w-1/2 lg:h-[5vw] h-[15vw]'
				onClick={() => props.downSlide()}
			>
				<LeftArrow className='w-[1vw]' />
			</button>
			<button
				className='rightArrow bg-black hover:bg-darkGray w-1/2 lg:h-[5vw] h-[15vw]'
				onClick={() => props.upSlide()}
			>
				<RightArrow className='w-[1vw]' />
			</button>
		</div>
	);
}
