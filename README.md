<a name="js-gems"></a>

<p align="center" class="margin-left-custom" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100px;">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://res.cloudinary.com/deztgvefu/image/upload/v1724933359/forget-me-not-collection/miniImages/Screenshot_2024-08-29_at_15.08.13_ycwzhl.png" alt="Project Logo" width="300">
</p>


---

<a name="built-with"></a>
<a name="error-handling"></a>

<h4 align="center">
  <a href="#built-with">Built With</a> ·
  <a href="#deployment">Deployment</a> ·
  <a href="#public-ssl-certificate">Public SSL Certificate</a> ·
  <a href="#testing">Testing</a> ·
  <a href="#error-handling">Error Handling</a> ·
  <a href="#features">Features</a> ·
  <a href="#languages">Languages</a> ·
  <a href="#frontend">Frontend</a> 
</h4>

<p align="center" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 60px;">
  <img src="https://res.cloudinary.com/deztgvefu/image/upload/v1725543807/forget-me-not-collection/miniImages/pngtree-sweet-pink-ribbon-png-image_13127280_cfwfwv.png" alt="Project Logo" width="80">
</p>

## Built With
- Node.js
- Express.js
- MongoDB
- MongoDB Atlas
- Mongoose

<p align="right" dir="auto"><a href="#js-gems">Back To Top</a></p>

## Deployment

- Amazon Web Services (AWS) EC2 Instance
- GitHub Actions
- Docker Hub

<p align="right" dir="auto"><a href="#js-gems">Back To Top</a></p>

## Public SSL Certificate

- AWS Certificate Manager 

<p align="right" dir="auto"><a href="#js-gems">Back To Top</a></p>

## Testing
- Jest

![Coverage Status](https://img.shields.io/badge/coverage-84%25-brightgreen.svg)

<p align="right" dir="auto"><a href="#js-gems">Back To Top</a></p>

## Error Handling
1. Model Validations Using Regular Expressions:
- Ensures that data fields such as email addresses follow a standard format, passwords meet complexity requirements, payment details are in correct format etc.
2. Functions for Additional Validations:
- Includes checks for email uniqueness during registration, verifies the correctness of the old password during password updates, checks if a card is not expired, etc.

<p align="right" dir="auto"><a href="#js-gems">Back To Top</a></p>

## Features

1. User Models:
- Implemented three distinct user models storing data about:
  - Logging credentials
  - Shipping details
  - Card details

- Each user model is linked by a common user ID:
  - The ID is derived from the logging credentials model
  - The IDs for the shipping and card details models are set at the time of user registration
    
- Update Email functionality
- Update Password functionality
- Create and Update Shipping details functionality
- Create and Update Card details functionality
- Logout functionality

2. Database aggregations for Product Filtering and Real-time Availability Tracking
   
3. Obligatory Size Selection
   
4. Users can increase or decrease the quantity of items in their shopping bag, with validations in place to ensure that they cannot add more than the available quantity in the database or reduce the quantity below zero
    
5. Wishlist
    
6. Orders History, ordered by the creation time
  
7. Email Notifications upon Registration and Order Completion

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

## Frontend
- Built with React

#### *Find the Frontend Repository [**HERE**](https://github.com/BeatrisIlieve/mern-gems-frontend)*

<p align="right" dir="auto"><a href="#js-gems">Back To Top</a></p>
