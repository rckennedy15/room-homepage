import React from 'react';
import { ReactComponent as ReactLogo } from '../svg/logo.svg';
import NavItem from './NavItem';

export default function Nav(props) {
	return (
		<nav className='absolute'>
			<ol className='text-white py-10 font-bold text-[0.5rem]'>
				<li className='inline px-8'>
					<ReactLogo className='w-[16vw] lg:w-[4vw]' />
				</li>
				<NavItem content='home' first={true} />
				<NavItem content='shop' />
				<NavItem content='about' />
				<NavItem content='contact' />
			</ol>
		</nav>
	);
}
