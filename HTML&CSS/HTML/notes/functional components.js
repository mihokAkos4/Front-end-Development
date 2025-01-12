Functional components

function Welcome(){
	return <h1>"Hello"</h1>
};

Class components 

class Welcome extends React.Component
{
	render(){
		return <h1>"Hello"</h1>
	};
};

source folder ---> index.js
	
	
	import React from 'react';
	import ReactDOM from 'react-dom/client';
	import App from './App.js'
	...
	.render(<App />)
	
	
JSX = html&js

Heading.js 
	all component must be capitalized
	otherwise they are treated as html elements
	
