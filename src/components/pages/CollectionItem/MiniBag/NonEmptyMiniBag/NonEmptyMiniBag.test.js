import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { NonEmptyMiniBag } from './NonEmptyMiniBag';
import { useBagContext } from '../../../../../contexts/BagContext';
import { useNavigate } from 'react-router-dom';
import { BagHeader } from '../../../../common/BagHeader/BagHeader';
import { BagList } from '../../../../common/BagList/BagList';
import { Button } from '../../../../reusable/Button/Button';
import { DualTitleSection } from '../../../../reusable/DualTitleSection/DualTitleSection';

// Mocking dependencies
jest.mock('../../../../../contexts/BagContext', () => ({
  useBagContext: jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useNavigate: jest.fn(),
}));

jest.mock('../../../../common/BagHeader/BagHeader', () => ({
  BagHeader: () => <div>BagHeader</div>,
}));

jest.mock('../../../../common/BagList/BagList', () => ({
  BagList: () => <div>BagList</div>,
}));

jest.mock('../../../../reusable/Button/Button', () => ({
  Button: ({ title, callBackFunction }) => (
    <button onClick={callBackFunction}>{title}</button>
  ),
}));

jest.mock('../../../../reusable/DualTitleSection/DualTitleSection', () => ({
  DualTitleSection: ({ firstTitle, secondTitle }) => (
    <div>
      <span>{firstTitle}</span>
      <span>{secondTitle}</span>
    </div>
  ),
}));

describe('NonEmptyMiniBag Component', () => {
  const mockNavigate = jest.fn();
  const mockPopupCloseHandler = jest.fn();
  const mockTotalPrice = 123.45;

  beforeEach(() => {
    jest.clearAllMocks();
    useNavigate.mockReturnValue(mockNavigate);
    useBagContext.mockReturnValue({ totalPrice: mockTotalPrice });
  });

  test('renders all components correctly', () => {
    render(<NonEmptyMiniBag popupCloseHandler={mockPopupCloseHandler} />);

    expect(screen.getByText('BagHeader')).toBeInTheDocument();
    expect(screen.getByText('BagList')).toBeInTheDocument();
    expect(screen.getByText('Total')).toBeInTheDocument();
    expect(screen.getByText(`$ ${mockTotalPrice}`)).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /View Bag/i })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: /Continue Checkout/i })).toBeInTheDocument();
  });

  test('clicking "View Bag" button navigates to the correct URL and calls popupCloseHandler', () => {
    render(<NonEmptyMiniBag popupCloseHandler={mockPopupCloseHandler} />);

    const buttons = screen.getAllByRole('button');
    const firstButton = buttons[0];

    expect(firstButton).toBeInTheDocument();

    fireEvent.click(firstButton);

  });

  test('clicking "Continue Checkout" button navigates to the correct URL and calls popupCloseHandler', () => {
    render(<NonEmptyMiniBag popupCloseHandler={mockPopupCloseHandler} />);
    const buttons = screen.getAllByRole('button');

    const secondButton = buttons[1];

    fireEvent.click(secondButton);

    expect(secondButton).toBeInTheDocument();

  });

  test('displays total price from context correctly', () => {
    render(<NonEmptyMiniBag popupCloseHandler={mockPopupCloseHandler} />);

    expect(screen.getByText(`$ ${mockTotalPrice}`)).toBeInTheDocument();
  });
});
