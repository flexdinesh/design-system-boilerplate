import { render, screen } from '@testing-library/react';
import HelloWorld from '../HelloWorld';

describe('HelloWorld', () => {
  it('should render', () => {
    render(<HelloWorld name="Terry" />);
    expect(
      screen.getByText('Hello World, Terry!', { selector: 'div' })
    ).toBeInTheDocument();
  });
});
