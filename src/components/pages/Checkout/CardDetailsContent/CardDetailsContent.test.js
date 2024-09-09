
import { render, screen, fireEvent } from '@testing-library/react';
import { MemoryRouter} from 'react-router-dom';
import '@testing-library/jest-dom/extend-expect';
import { CardDetailsContent } from './CardDetailsContent';


// Mock components
jest.mock('../../../reusable/ChildWrapper/ChildWrapper', () => ({
  ChildWrapper: ({ children }) => <div>{children}</div>
}));

jest.mock('../../../reusable/LargeTitle/LargeTitle', () => ({
  LargeTitle: ({ title, textAlign }) => <h1 style={{ textAlign }}>{title}</h1>
}));

jest.mock('./ShippingInformation/ShippingInformation', () => ({
  ShippingInformation: ({ toggleDisplayShippingDetailsPopup }) => (
    <button onClick={toggleDisplayShippingDetailsPopup}>Toggle Popup</button>
  )
}));

jest.mock('../../../common/CardDetailsForm/CardDetailsForm', () => ({
  CardDetailsForm: () => <div>CardDetailsForm</div>
}));

jest.mock('../../../common/ShippingDetailsForm/ShippingDetailsForm', () => ({
  ShippingDetailsForm: ({ popupCloseHandler }) => (
    <form>
      <button type="button" onClick={popupCloseHandler}>Close Form</button>
    </form>
  )
}));

jest.mock('../../../reusable/Popup/Popup', () => ({
  Popup: ({ popupCloseHandler, modalVariant, children }) => (
    <div data-testid="popup" className={modalVariant}>
      <button onClick={popupCloseHandler}>Close</button>
      {children}
    </div>
  )
}));

describe('CardDetailsContent Component', () => {
  test('does not render Popup initially', () => {
    render(
      <MemoryRouter initialEntries={['/payment']}>
        <CardDetailsContent />
      </MemoryRouter>
    );

    // Verify that Popup is not present initially
    expect(screen.queryByTestId('popup')).not.toBeInTheDocument();
  });

  test('renders Popup when button is clicked', () => {
    render(
      <MemoryRouter initialEntries={['/payment']}>
        <CardDetailsContent />
      </MemoryRouter>
    );

    // Click the button to show the Popup
    fireEvent.click(screen.getByText('Toggle Popup'));

    // Verify that Popup is now in the document
    expect(screen.getByTestId('popup')).toBeInTheDocument();
    expect(screen.getByText('Edit Shipping Address')).toBeInTheDocument();
    expect(screen.getByText('Close Form')).toBeInTheDocument();
  });

  test('closes Popup when close button is clicked', () => {
    render(
      <MemoryRouter initialEntries={['/payment']}>
        <CardDetailsContent />
      </MemoryRouter>
    );

    // Click the button to show the Popup
    fireEvent.click(screen.getByText('Toggle Popup'));

    // Click the close button in the Popup
    fireEvent.click(screen.getByText('Close'));

    // Verify that Popup is no longer in the document
    expect(screen.queryByTestId('popup')).not.toBeInTheDocument();
  });

  test('renders correct content for /payment route', () => {
    render(
      <MemoryRouter initialEntries={['/payment']}>
        <CardDetailsContent />
      </MemoryRouter>
    );

    // Verify that the expected components are rendered
    expect(screen.getByText('Payment')).toBeInTheDocument();
    expect(screen.getByText('CardDetailsForm')).toBeInTheDocument();
  });
});
