import React from 'react';
import { render, cleanup, waitForElement } from '@testing-library/react';
import HomePage from '../containers/HomePage';
import { BrowserRouter as Router } from 'react-router-dom';

const params = {
    context: {
        applications: [
            {
                guid: 'e4de92fa-e098-4dac-b7f8-c22b927ff62e',
                name: 'monster',
                state: 'analysis_succeed',
                versions: []
            },
            {
                guid: 'fee16fb9-81b3-4cec-9f05-04a4984c2ec8',
                name: 'nodeJS',
                state: 'analysis_succeed',
                versions: []
            }
        ]
    }
};

afterEach(cleanup);
describe('<HomePage />', () => {
	it('should render component with correct class',() => {
		const { container } = render(
			<Router>
				<HomePage {...params} />
			</Router>
		);
        // eslint-disable-next-line no-unused-expressions
        expect(container.querySelector('.search-wrapper')).not.toBeNull;
    });

    it('should render exact number of items in the list',() => {
		const { container } = render(
			<Router>
				<HomePage {...params} />
			</Router>
		);
        const children = container.querySelector('.MuiTableBody-root').children;
        expect(children.length).toEqual(2);
    });
    
    it('should render component with expected text', async () => {
		const { getByText } = render(
			<Router>
				<HomePage {...params} />
			</Router>
		);
		await waitForElement(() => getByText('monster'));
	});
});
