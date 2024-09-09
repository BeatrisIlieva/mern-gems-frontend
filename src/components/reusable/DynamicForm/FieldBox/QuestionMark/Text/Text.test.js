import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { Text } from './Text';
import styles from './Text.module.css';

describe('Text Component', () => {
  test('renders the text prop correctly', () => {
    const textContent = 'Hello, World!';
    
    render(<Text text={textContent} />);
    
    const textElement = screen.getByText(textContent);
    
    // Check if the text is rendered correctly
    expect(textElement).toBeInTheDocument();
    expect(textElement).toHaveTextContent(textContent);
  });

  test('applies the correct CSS class', () => {
    const textContent = 'Styled Text';
    
    render(<Text text={textContent} />);
    
    const textElement = screen.getByText(textContent);
    
    // Check if the correct CSS class is applied
    expect(textElement).toHaveClass(styles["text"]);
  });
});
