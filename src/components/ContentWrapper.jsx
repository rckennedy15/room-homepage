import React from 'react';
import { ReactComponent as LeftArrow } from '../svg/icon-angle-left.svg';
import { ReactComponent as RightArrow } from '../svg/icon-angle-right.svg';
import { ReactComponent as LongArrow } from '../svg/icon-arrow.svg';

export default function ContentWrapper() {
	return (
		<div className='grid grid-flow-row grid-cols-10'>
			<div className='bg-white col-span-6 row-span-3'>
				<img src='../images/desktop-image-hero-1.jpg' alt='' />
			</div>
			<div className='bg-white col-span-4 row-span-2'>
				<div className='px-14 pt-16'>
					<h1 className='text-2xl font-semibold leading-7'>
						Discover innovative ways to decorate
					</h1>
					<p className='text-gray py-4 text-[8px] leading-[0.8rem]'>
						We provide unmatched quality, comfort, and style for property owners
						across the country. Our experts combine form and function in
						bringing your vision to life. Create a room in your own style with
						our collection and make your property a reflection of you and what
						you love.
					</p>
					<a href='.' className='tracking-[0.4rem] text-[0.5rem]'>
						SHOP NOW <LongArrow />
					</a>
				</div>
			</div>
			<div className='col-start-7 col-span-1 row-start-3 flex items-end'>
				<button className='leftArrow bg-black w-1/2 h-3/4'>
					<LeftArrow />
				</button>
				<button className='rightArrow bg-black w-1/2 h-3/4'>
					<RightArrow />
				</button>
			</div>
			<div className='bg-white col-span-3 row-span-2 h-[179px] col-start-1'>
				<img src='../images/image-about-dark.jpg' alt='' />
			</div>
			<div className='bg-white col-span-4 row-span-2 px-10 pt-10'>
				<h1 className='text-[8px] tracking-[0.2rem] font-bold'>
					ABOUT OUR FURNITURE
				</h1>
				<p className='text-gray py-4 text-[7px] leading-[0.8rem]'>
					Our multifunctional collection blends design and function to suit your
					individual taste. Make each room unique, or pick a cohesive theme that
					best express your interests and what inspires you. Find the furniture
					pieces you need, from traditional to contemporary styles or anything
					in between. Product specialists are available to help you create your
					dream space.
				</p>
			</div>
			<div className='bg-white col-span-3 row-span-2 h-[179px]'>
				<img src='../images/image-about-light.jpg' alt='' className='h-full' />
			</div>
		</div>
	);
}
