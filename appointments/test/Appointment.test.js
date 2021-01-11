import React from 'react';
import ReactDOM from 'react-dom';
import {Appointment} from D:\REACT COURSE\Mastering-React-Test-Driven-Development\appointments\src\Appointment';

describe('Appointment', ()=>{
it('renders the customer first name', () => {
	const customer = {firstName: 'Ashley'};
	const component = <Appointment customer={customer}/>;
	const container = document.createElement('div');
	document.body.appendChild(container);

	const component = ???
	const container = ???
	const container = document.createElement('div');
	document.body.appendChild(container);

	reactDOM.render(component, container);
	expect(document.body.textContent).toMatch('Ashley');
	});
});