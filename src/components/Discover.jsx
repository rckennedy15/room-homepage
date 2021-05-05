import React from 'react';
import { ReactComponent as LongArrow } from '../svg/icon-arrow.svg';

export default function Discover(props) {
	function setText() {
		if (props.slideNum === 1) {
			return {
				title: 'Discover innovative ways to decorate',
				paragraph:
					'We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with our collection and make your property a reflection of you and what you love.',
			};
		} else if (props.slideNum === 2) {
			return {
				title: 'We are available all across the globe',
				paragraph:
					"With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator. Any questions? Don't hesitate to contact us today.",
			};
		} else {
			return {
				title: 'Manufactured with the best materials',
				paragraph:
					'Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.',
			};
		}
	}

	return (
		<div className='bg-white col-span-10 lg:col-span-4 lg:row-span-2'>
			<div className='px-6 py-12 lg:px-14 lg:pt-20'>
				<h1 className='text-lg leading-6 lg:text-2xl font-semibold lg:leading-7'>
					{setText().title}
				</h1>
				<p className='text-gray py-4 text-[0.5rem] leading-[0.8rem]'>
					{setText().paragraph}
				</p>
				<a
					href='.'
					className='tracking-[0.4rem] text-[0.5rem] hover:text-darkGray'
				>
					SHOP NOW <LongArrow className='w-[3vw]' />
				</a>
			</div>
		</div>
	);
}
