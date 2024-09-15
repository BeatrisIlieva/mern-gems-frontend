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

#### 10. Product filtration 

#### 11. Shopping Bag Count

#### 12. Wishlist Count

#### 13. Toggle Like

#### 14. Create/Update Personal Information Form

#### 15. Create/Update Shipping Information Form

#### 16. Update Password Form

#### 17. Update Email Form

#### 18. Logout Button

#### 19. Mini Navigation at the checkout stage

#### 20. Order Summary at every step of the Checkout process

#### 21. Order Confirmation Page

#### 22. Order History Page

#### 23. Route Guard 

#### 24. `ScrollToTop` component that ensures the window scrolls to the top of the page whenever the user navigates to a new route
  
<p align="right" dir="auto"><a href="#js-gems">Back To Top</a></p>

## Backend
- Built with Node.js, Express.js and MondoDB

#### *Find the Backend Repository [**HERE**](https://github.com/BeatrisIlieve/mern-gems-backend/tree/main)*

<p align="right" dir="auto"><a href="#js-gems">Back To Top</a></p>
