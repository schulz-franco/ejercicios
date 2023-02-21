import './app.scss';

const data = require("./data.json");

function App() {
	const average = Math.round(data.reduce((a, value) => a + value.score, 0) / data.length)
    return (
		<div id="container">
			<div className="rating">
				<span className='title'>Your Result</span>
				<div className="score">
					<span className='score'>{average}</span>
					<span>of 100</span>
				</div>
				<span className='mark'>Great</span>
				<p>You scored higher than 65% of the people who have taken these tests.</p>
			</div>
			<div className="summary">
				<h4>Summary</h4>
				{data.map(fact => {
					return(
						<div key={fact.category}>
							<img src={fact.icon} alt={fact.category} width='20' height='20' />
							<span style={{color: fact.color}}>{fact.category}</span>
							<span className="score"><b>{fact.score}</b> / 100</span>
						</div>
					)
				})}
				<button>Continue</button>
			</div>
	    </div>
    );
}

export default App;
