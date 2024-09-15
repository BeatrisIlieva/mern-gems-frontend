<a name="js-gems"></a>

<p align="center" class="margin-left-custom" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100px;">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://res.cloudinary.com/deztgvefu/image/upload/v1724933359/forget-me-not-collection/miniImages/Screenshot_2024-08-29_at_15.08.13_ycwzhl.png" alt="Project Logo" width="300">
</p>


---

<a name="built-with"></a>
<a name="error-handling"></a>


<h4 align="center">
  <a href="#introduction">Introduction</a> ·
  <a href="#demo-video">Demo Video</a> ·
  <a href="#built-with">Built With</a> ·
  <a href="#responsive-design">Responsive Design</a> ·
  <a href="#languages">Languages</a> ·
  <a href="#testing">Testing</a> ·
  <a href="#error-handling">Error Handling</a> ·
  <a href="#features">Features</a> ·
  <a href="#backend">Backend</a> 
</h4>

<p align="center" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 60px;">
  <img src="https://res.cloudinary.com/deztgvefu/image/upload/v1725543807/forget-me-not-collection/miniImages/pngtree-sweet-pink-ribbon-png-image_13127280_cfwfwv.png" alt="Project Logo" width="80">
</p>

## Introduction
<p><i>Welcome to our Online Jewelry Store! This web application serves as a platform for showcasing and selling a stunning collection of exquisite jewelry.</i></p>

## Demo Video

[![Watch the video](https://img.youtube.com/vi/MBGi5NiVf_8/maxresdefault.jpg)](https://www.youtube.com/watch?v=MBGi5NiVf_8)

<p align="right" dir="auto"><a href="#js-gems">Back To Top</a></p>

## Built With
- React

<p align="right" dir="auto"><a href="#js-gems">Back To Top</a></p>

## Responsive Design
- Our website is fully optimized for all device sizes, starting from a minimum screen width of 340px, ensuring a seamless experience across smartphones, tablets, and desktops.

<p align="right" dir="auto"><a href="#js-gems">Back To Top</a></p>

## Languages
- Our application offers a user experience across three languages:

<p style="display: flex; align-items: center; justify-content: center; height: 60px;">
<img src="https://res.cloudinary.com/deztgvefu/image/upload/v1726300303/forget-me-not-collection/miniImages/british_1_mrryno.png" alt="British flag" width="50"> 
<span>English</span>
</p>
<p style="display: flex; align-items: center; justify-content: center; height: 60px;">
<img src="https://res.cloudinary.com/deztgvefu/image/upload/v1726300299/forget-me-not-collection/miniImages/chinese_1_infllx.png" alt="Chinese flag" width="50"> 
<span>Chinese</span>
</p>
<p style="display: flex; align-items: center; justify-content: center; height: 60px;">
<img src="https://res.cloudinary.com/deztgvefu/image/upload/v1726300300/forget-me-not-collection/miniImages/bulgarian_1_asspdw.png" alt="Bulgarian flag" width="50"> 
<span>Bulgarian</span>
</p>

<p align="right" dir="auto"><a href="#js-gems">Back To Top</a></p>

## Testing
- Jest

![Coverage Status](https://img.shields.io/badge/coverage-63%25-brightgreen.svg)

<p align="right" dir="auto"><a href="#js-gems">Back To Top</a></p>

## Error Handling
1. Input Validation
- All user inputs are validated using regular expressions (regex)
- The validation rules are centralized in a set of constants and utility functions
- DynamicForm component and a useForm hook are used to handle user inputs
- Real-time feedback that ensures all data entered meets the required criteria before submission

2. User Authentication
- Register Error Handling:
  - When a user tries to register, the application verifies the email against the database
  - If the email is already registered, an error message is displayed to notify the user
- Login Error Handling:
  - When a user tries to log in, the application verifies the email and password against the database
  - If the password is invalid or there is no user with the provided email, an error message is displayed to notify the user

3. Size Selection
- If a user clicks the "Add To Bag" button without selecting a size, an error message is displayed to inform them of the requirement

<p align="right" dir="auto"><a href="#js-gems">Back To Top</a></p>

## Features
#### Custom Forms
   
- Floating labels
  
- Validation Messages
  
- After submitting any of the forms, the backend also performs validation to ensure that all inputs, including menus and fields, offer only valid options
  
- Errors related to invalid inputs returned by the backend are displayed to the user

#### 2. JSON Web Token expiration (adjusted JWT token expiration to 10 seconds for demo video to showcase Login Popup; reset to 10 minutes and rebuilt app afterwards)
- The application tracks user activity, including keyboard inputs, clicks, and scrolling
- If no activity is detected for 10 minutes, the user is automatically logged out
- On the payment page, a popup informs the user that their session has expired. The popup includes a button to go to the login page. After logging in, the user is redirected back to the payment page to continue their transaction
- On pages other than the payment page, the user is logged out and redirected to the login page

#### 3. Load More Functionality in the `JewelryList` and `Wishlist` components
- When a component mounts, it fetches items based on the user selection - category or collection. The first subset of items, based on a predefined number, is displayed initially
- A "Load More" button is displayed at the bottom of the item list. Clicking the button triggers a `loadMoreHandler` function, which updates the number of items displayed
- The `loadMoreHandler` function increments the number of displayed items. When all items are displayed, the "Load More" button disappears

#### 4. Product filtration
- Utilizes DynamicDropdown components for selecting stone types and stone colors
- Implements changeHandler and submitHandler functions to respond to user selections and apply filters accordingly
- Offers clearFilter functionality to reset filters and update the displayed jewelry items based on user actions
- Provides visual indicators (isSelectedStoneType, isSelectedStoneColor) to highlight whether a stone type or stone color filter is active

#### 5. Product sorting
- Sorts items based on their current availability
- Arranges items in ascending order of price
- Arranges items in descending order of price
- Visual feedback is provided with a highlighted indicator next to the selected sorting option

#### 6. Toggle Like
- Allows users to toggle their liking status by clicking a heart icon associated with each jewelry item
- Utilizes useWishlistContext to access functions for adding and removing items from the wishlist
- Toggles the `isLikedByUser` state locally for immediate visual feedback

#### 7. Mini Bag
- Sets lastLocation in localStorage to "/user/shopping-bag" to track navigation and redirect unauthenticated users to their shopping bag after login
- Contains a miniBagRef to manage the reference to the mini bag's modal content, allowing the user to close the modal by clicking outside of it
- Provides buttons for "View Bag" and "Continue Checkout", which are links that navigate to the full shopping bag page and the checkout page, respectively
- Includes a close button (X mark) that allows users to close the mini bag
- Allows the user to increase or decrease the quantity of items. Additionally, the buttons for adjusting the quantity are styled to appear active or inactive based on the available stock. A remove button is also provided

#### 8. Authentication Required for Checkout
- If the user is not logged in and clicks the checkout button, they are redirected to the login page
- Upon successful login, they are then redirected back to the checkout page to complete their purchase

#### 9. Mini Navigation
- The component uses state variables (isScrolled, isScrollingUp, lastScrollY) to detect scroll direction and position
- When the user scrolls down, a minimized MiniHeader component is displayed
- Conversely, when the user scrolls up, the full header component with comprehensive navigation options is shown

#### 10. Search Box Popup

#### 11. Shopping Bag Count

#### 12. Wishlist Count

#### 13. Products Count

#### 14. Create/Update Personal Information Form

#### 15. Create/Update Shipping Information Form

#### 16. Update Password Form

#### 17. Update Email Form

#### 18. Logout Button

#### 19. Delete Account Popup

#### 20. Order Summary at every step of the Checkout process

#### 21. Order Confirmation Page

#### 22. Order History Page

#### 23. Route Guard 

#### 24. `ScrollToTop` component that ensures the window scrolls to the top of the page whenever the user navigates to a new route
  
<p align="right" dir="auto"><a href="#js-gems">Back To Top</a></p>

## Backend
- Built with Node.js, Express.js and MondoDB

#### *Find the Backend Repository [**HERE**](https://github.com/BeatrisIlieve/MERNGems-Backend)*

<p align="right" dir="auto"><a href="#js-gems">Back To Top</a></p>
