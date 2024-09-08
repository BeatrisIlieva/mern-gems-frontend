// import { render, screen, fireEvent } from '@testing-library/react';
// import '@testing-library/jest-dom/extend-expect'; // For matchers like toBeInTheDocument
// import { CategoryCard } from './CategoryCard';
// import { useNavigate } from 'react-router-dom';
// import { useJewelry } from '../../../../hooks/useJewelry';
// import { slugify } from '../../../../utils/slugify';

// // Mocking the navigate function from react-router-dom
// jest.mock('react-router-dom', () => ({
//   useNavigate: jest.fn(),
// }));

// // Mocking the useJewelry hook
// jest.mock('../../../../hooks/useJewelry', () => ({
//   useJewelry: jest.fn(),
// }));

// // Mocking the slugify function
// jest.mock('../../../../utils/slugify', () => ({
//   slugify: jest.fn((str) => str.toLowerCase().replace(/\s/g, '-')),
// }));

// describe('CategoryCard component', () => {
//   const mockNavigate = jest.fn();

//   beforeEach(() => {
//     useNavigate.mockReturnValue(mockNavigate);
//   });

//   afterEach(() => {
//     jest.clearAllMocks();
//   });

//   test('renders correctly when there are jewelries by category', () => {
//     // Mocking useJewelry to return jewelries
//     useJewelry.mockReturnValue({
//       jewelriesByCategory: [{"_id":1,"title":"Pink Sapphire and Diamond Bracelet","firstImageUrl":"https://res.cloudinary.com/deztgvefu/image/upload/v1723714894/forget-me-not-collection/bracelets/forget_me_not_bracelet_diamond_and_pink_sapphire_brpsprfflrfmn_e_1_vz9pv4.avif","secondImageUrl":"https://res.cloudinary.com/deztgvefu/image/upload/v1723714893/forget-me-not-collection/bracelets/forget_me_not_bracelet_diamond_and_pink_sapphire_brpsprfflrfmn_e_2_kdpnm6.avif","category":1,"color":1,"description":"45 pear-shaped and round brilliant pink sapphires weighing a total of approximately 4.36 carats and 33 pear-shaped, marquise and round brilliant diamonds weighing a total of approximately 4.24 carats, set in platinum","categories":[{"title":"Bracelets"}],"colors":[{"title":"Pink"}],"inventories":[{"size":"15.2 cm","quantity":78,"price":33000},{"size":"17.8 cm","quantity":0,"price":34000},{"size":"19.3 cm","quantity":2,"price":35000}]}],
//     });

//     render(<CategoryCard categoryTitle="Bracelets" colorTitle="Pink" />);

//     // Expect ShopBy component to be rendered
//     expect(screen.getByText('Shop by Bracelets')).toBeInTheDocument();

//     // Expect Content component to be rendered
//     expect(screen.getByText('Content')).toBeInTheDocument(); // Assuming 'Content' text is inside the Content component
//   });

//   test('does not render when there are no jewelries by category', () => {
//     // Mocking useJewelry to return an empty array
//     useJewelry.mockReturnValue({
//       jewelriesByCategory: [],
//     });

//     render(<CategoryCard categoryTitle="Bracelets" colorTitle="Pink" />);

//     // Expect nothing to be rendered when jewelriesByCategory is empty
//     expect(screen.queryByText('Shop by Bracelets')).not.toBeInTheDocument();
//     expect(screen.queryByText('Content')).not.toBeInTheDocument();
//   });

//   test('updates selectedColor state when updateSelectedColor is called', () => {
//     // Mocking useJewelry to return jewelries
//     useJewelry.mockReturnValue({
//       jewelriesByCategory: [{"_id":1,"title":"Pink Sapphire and Diamond Bracelet","firstImageUrl":"https://res.cloudinary.com/deztgvefu/image/upload/v1723714894/forget-me-not-collection/bracelets/forget_me_not_bracelet_diamond_and_pink_sapphire_brpsprfflrfmn_e_1_vz9pv4.avif","secondImageUrl":"https://res.cloudinary.com/deztgvefu/image/upload/v1723714893/forget-me-not-collection/bracelets/forget_me_not_bracelet_diamond_and_pink_sapphire_brpsprfflrfmn_e_2_kdpnm6.avif","category":1,"color":1,"description":"45 pear-shaped and round brilliant pink sapphires weighing a total of approximately 4.36 carats and 33 pear-shaped, marquise and round brilliant diamonds weighing a total of approximately 4.24 carats, set in platinum","categories":[{"title":"Bracelets"}],"colors":[{"title":"Pink"}],"inventories":[{"size":"15.2 cm","quantity":78,"price":33000},{"size":"17.8 cm","quantity":0,"price":34000},{"size":"19.3 cm","quantity":2,"price":35000}]}],
//     });

//     render(<CategoryCard categoryTitle="Bracelets" colorTitle="Pink" />);

//     // Simulating the updateSelectedColor prop passed to Content component
//     const contentComponent = screen.getByText('Content');
//     fireEvent.click(contentComponent); // Simulate calling updateSelectedColor inside the component

//     // Expect the color title to update
//     expect(useJewelry).toHaveBeenCalledWith({
//       categoryTitle: 'Bracelets',
//       colorTitle: 'Pink',
//     });
//   });

//   test('navigates to the correct URL when the button is clicked', () => {
//     // Mocking useJewelry to return jewelries
//     useJewelry.mockReturnValue({
//       jewelriesByCategory: [{"_id":1,"title":"Pink Sapphire and Diamond Bracelet","firstImageUrl":"https://res.cloudinary.com/deztgvefu/image/upload/v1723714894/forget-me-not-collection/bracelets/forget_me_not_bracelet_diamond_and_pink_sapphire_brpsprfflrfmn_e_1_vz9pv4.avif","secondImageUrl":"https://res.cloudinary.com/deztgvefu/image/upload/v1723714893/forget-me-not-collection/bracelets/forget_me_not_bracelet_diamond_and_pink_sapphire_brpsprfflrfmn_e_2_kdpnm6.avif","category":1,"color":1,"description":"45 pear-shaped and round brilliant pink sapphires weighing a total of approximately 4.36 carats and 33 pear-shaped, marquise and round brilliant diamonds weighing a total of approximately 4.24 carats, set in platinum","categories":[{"title":"Bracelets"}],"colors":[{"title":"Pink"}],"inventories":[{"size":"15.2 cm","quantity":78,"price":33000},{"size":"17.8 cm","quantity":0,"price":34000},{"size":"19.3 cm","quantity":2,"price":35000}]}],
//     });

//     render(<CategoryCard categoryTitle="Bracelets" colorTitle="Pink" />);

//     // Simulate the button click
//     const shopByButton = screen.getByText('Shop by Bracelets'); // Assuming "Shop by Bracelets" is the button text
//     fireEvent.click(shopByButton);

//     // Expect slugify to be called with category title
//     expect(slugify).toHaveBeenCalledWith('Bracelets');

//     // Expect navigation to have been triggered with the correct URL
//     expect(mockNavigate).toHaveBeenCalledWith('/collection/Bracelets/pink');
//   });
// });
