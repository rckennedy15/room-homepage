import React from 'react';
import Nav from './Nav';
import ContentWrapper from './ContentWrapper';

export default function App() {
	return (
		<div className='App text-xs font-main font-medium bg-white h-screen'>
			<Nav />
			<ContentWrapper />
		</div>
	);
}
