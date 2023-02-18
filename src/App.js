import './App.css';
import Counter from './components/Counter';

function App() {
	return (
		<div className='w-screen h-screen p-10 bg-gray-100 text-slate-700'>
			{/* header */}
			<h1 className='max-w-md mx-auto text-center text-2xl font-bold'>
				React Simple Counter Application
			</h1>

			{/* counters  */}
			<div className='max-w-md mx-auto mt-10 space-y-5'>
				<Counter />
				<Counter />
				<Counter />
			</div>
		</div>
	);
}

export default App;
