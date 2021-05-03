import React, { Fragment } from 'react';

export default function NavItem(props) {
	return (
		<Fragment>
			<li className={`inline ${props.first ? 'pl-0 pr-3' : 'px-3'}`}>
				<a href='.'>{props.content}</a>
			</li>
		</Fragment>
	);
}
