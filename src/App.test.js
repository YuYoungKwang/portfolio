import { render, screen } from '@testing-library/react';
import App from './App';

test('renders portfolio hero heading', () => {
  render(<App />);
  expect(screen.getByRole('heading', { level: 1, name: '유영광' })).toBeInTheDocument();
});
