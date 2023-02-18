import React, { useState } from 'react';

const Counter = () => {
	const [count, setCount] = useState(0);

	const incrementHandler = () => {
		setCount((prevCount) => prevCount + 1);
	};

	const decrementHandler = () => {
		setCount((prevCount) => prevCount - 1);
	};
	return (
		<div className='p-4 h-auto flex flex-col items-center justify-center space-y-5 bg-white rounded shadow'>
			<div className='text-2xl font-semibold' id='counter'>
				{count}
			</div>
			<div className='flex space-x-3'>
				<button
					className='bg-indigo-400 text-white px-3 py-2 rounded shadow'
					id='increment'
					onClick={incrementHandler}>
					Increment
				</button>
				<button
					className='bg-red-400 text-white px-3 py-2 rounded shadow'
					id='decrement'
					onClick={decrementHandler}>
					Decrement
				</button>
			</div>
		</div>
	);
};

export default Counter;
