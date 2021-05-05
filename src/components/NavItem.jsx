import React, { Fragment } from 'react';

export default function NavItem(props) {
	return (
		<Fragment>
			<li className={`nav-item inline ${props.first ? 'pl-0 pr-3' : 'px-3'}`}>
				<a href='.' className='hover:border-b-[3px] border-white pb-2'>
					{props.content}
				</a>
			</li>
		</Fragment>
	);
}
