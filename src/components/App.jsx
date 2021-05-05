import React, { useState, useEffect } from 'react';
import Nav from './Nav';
import ContentWrapper from './ContentWrapper';
import Attribution from './Attribution';

export default function App() {
	const size = useWindowSize();
	console.log(size);
	let isMobile = false;
	if (size.width < 1024) {
		isMobile = true;
	}
	return (
		<div className='App text-xs font-main font-medium bg-white h-screen'>
			<Nav isMobile={isMobile} />
			<ContentWrapper isMobile={isMobile} />
			<Attribution isMobile={isMobile} />
		</div>
	);
}

// Hook
function useWindowSize() {
	// Credit: usehooks.com
	// https://usehooks.com/useWindowSize/
	const [windowSize, setWindowSize] = useState({
		width: undefined,
		height: undefined,
	});
	useEffect(() => {
		// Handler to call on window resize
		function handleResize() {
			// Set window width/height to state
			setWindowSize({
				width: window.innerWidth,
				height: window.innerHeight,
			});
		}
		// Add event listener
		window.addEventListener('resize', handleResize);
		// Call handler right away so state gets updated with initial window size
		handleResize();
		// Remove event listener on cleanup
		return () => window.removeEventListener('resize', handleResize);
	}, []); // Empty array ensures that effect is only run on mount
	return windowSize;
}
