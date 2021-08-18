import { render, screen, waitFor, waitForElementToBeRemoved } from '@testing-library/react';
import { Async } from '.';

test('it renders correctly', async () => {
    render(<Async />);
    
    expect(screen.getByText('Hello world')).toBeInTheDocument();

    await waitForElementToBeRemoved(screen.queryByText('Button'));

    // await waitFor(() => {
    //     // return expect(screen.getByText('Button')).toBeInTheDocument();
    //     return expect(screen.queryByText('Button')).not.toBeInTheDocument();
    // });
});