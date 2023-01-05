import React from 'react';
import { render, screen, getByTestId, fireEvent } from '@testing-library/react';

import { Button } from '../Button';

describe('<Button />', () => {
  test('should display a button with passed text', () => {
    render(<Button>text</Button>);

    const button = screen.getByText('text');
    expect(button).toHaveTextContent('text');
    expect(button.tagName).toBe('BUTTON');
  });

  test('should display icons', () => {
    render(
      <Button
        startIcon={
          <span className="material-icons" data-testid="start-icon">
            face
          </span>
        }
        endIcon={
          <span className="material-icons" data-testid="end-icon">
            face
          </span>
        }
      >
        text
      </Button>
    );

    const button = screen.getByText('text');
    const startIcon = getByTestId(button, 'start-icon');
    const endIcon = getByTestId(button, 'end-icon');
    expect(button).toContainElement(startIcon);
    expect(button).toContainElement(endIcon);
  });

  test('passes basic <button /> attrs', () => {
    render(<Button type="button">text</Button>);

    const button = screen.getByText('text');
    expect(button).toHaveAttribute('type', 'button');
  });

  test('passes basic events', () => {
    const onClick = jest.fn();
    render(<Button onClick={onClick}>text</Button>);
    const button = screen.getByText('text');

    fireEvent.click(button);

    expect(onClick).toHaveBeenCalled();
  });
});
