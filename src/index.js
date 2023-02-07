import { useState } from 'react';
import ReactDOM from 'react-dom';
import './css/main.css';
import './css/hello.css';

function App() {
	const [count, setCount] = useState(0);
	console.log('Hello');

	return (
		<>
			<div className="test test1">Basic react app with webpack</div>
			<button onClick={() => setCount(count + 1)}>Increment {count}</button>
		</>
	);
}

ReactDOM.render(<App />, document.querySelector('#root'));
