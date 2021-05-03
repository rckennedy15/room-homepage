import React from 'react';
import { ReactComponent as ReactLogo } from '../svg/logo.svg';
import NavItem from './NavItem';

export default function Nav() {
	return (
		<nav className='absolute'>
			<ol className='text-white py-10 font-semibold'>
				<li className='inline px-10'>
					<ReactLogo />
				</li>
				<NavItem content='home' first={true} />
				<NavItem content='shop' />
				<NavItem content='about' />
				<NavItem content='contact' />
			</ol>
		</nav>
	);
}
