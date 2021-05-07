import React from 'react';

export default function Attribution() {
	return (
		<div className='text-center text-white bg-darkGray py-2 lg:py-10 text-[0.35rem] lg:text-[0.8rem]'>
			Challenge by{' '}
			<a
				className='text-gray hover:text-white'
				href='https://www.frontendmentor.io?ref=challenge'
				target='_blank'
				rel='noreferrer'
			>
				Frontend Mentor
			</a>
			. Coded by{' '}
			<a
				className='text-gray hover:text-white'
				href='https://github.com/rckennedy15/'
			>
				Ryan Kennedy
			</a>
			.
		</div>
	);
}
