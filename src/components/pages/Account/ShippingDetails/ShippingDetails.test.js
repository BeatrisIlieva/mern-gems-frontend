// ShippingDetails.test.js

import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import { ShippingDetails } from './ShippingDetails';
import { SectionContainer } from '../reusable/SectionContainer/SectionContainer';
import { Popup } from '../../../reusable/Popup/Popup';
import { LargeTitle } from '../../../reusable/LargeTitle/LargeTitle';
import { ShippingDetailsForm } from '../../../common/ShippingDetailsForm/ShippingDetailsForm';
import { faPlus } from '@fortawesome/free-solid-svg-icons';

// Mock components
jest.mock('../reusable/SectionContainer/SectionContainer', () => ({
  SectionContainer: ({ sectionTitle, callBackFunction, icon, buttonTitle }) => (
    <div>
      <h1>{sectionTitle}</h1>
      <button onClick={callBackFunction}>
        <i className={icon.iconName} /> {buttonTitle}
      </button>
    </div>
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

jest.mock('../../../reusable/LargeTitle/LargeTitle', () => ({
  LargeTitle: ({ title, textAlign }) => (
    <h2 style={{ textAlign }}>{title}</h2>
  )
}));

jest.mock('../../../common/ShippingDetailsForm/ShippingDetailsForm', () => ({
  ShippingDetailsForm: ({ popupCloseHandler }) => (
    <form>
      <button type="button" onClick={popupCloseHandler}>Form Button</button>
    </form>
  )
}));

describe('ShippingDetails Component', () => {
  test('does not render Popup initially', () => {
    render(<ShippingDetails />);

    // Verify that Popup is not present initially
    expect(screen.queryByTestId('popup')).not.toBeInTheDocument();
  });

  test('renders Popup when button is clicked', () => {
    render(<ShippingDetails />);

    // Click the button to show the Popup
    fireEvent.click(screen.getByText('Add a New Address'));

    // Verify that Popup is now in the document
    expect(screen.getByTestId('popup')).toBeInTheDocument();
    expect(screen.getByText('Add a New Address')).toBeInTheDocument();
    expect(screen.getByText('Form Button')).toBeInTheDocument();
  });

  test('closes Popup when close button is clicked', () => {
    render(<ShippingDetails />);

    // Click the button to show the Popup
    fireEvent.click(screen.getByText('Add a New Address'));

    // Click the close button in the Popup
    fireEvent.click(screen.getByText('Close'));

    // Verify that Popup is no longer in the document
    expect(screen.queryByTestId('popup')).not.toBeInTheDocument();
  });
});
