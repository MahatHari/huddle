import { render, screen } from '@testing-library/react';
import App from './App';

test('Community', () => {
  render(<App />);
  const linkElement = screen.getByText(/Community/i);
  expect(linkElement).toBeInTheDocument();
});
