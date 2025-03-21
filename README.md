<a name="js-gems"></a>

<p align="center" class="margin-left-custom" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 100px;">
  &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;<img src="https://res.cloudinary.com/deztgvefu/image/upload/v1724933359/forget-me-not-collection/miniImages/Screenshot_2024-08-29_at_15.08.13_ycwzhl.png" alt="Project Logo" width="260">
</p>


---

<a name="built-with"></a>
<a name="error-handling"></a>


<h4 align="center">
  <a href="#built-with">Built With</a> ·
  <a href="#responsive-design">Responsive Design</a> ·
  <a href="#optimization">Optimization</a> ·
  <a href="#error-handling">Error Handling</a> ·
  <a href="#testing">Testing</a> ·
  <a href="#features">Features</a> ·
  <a href="#installation">Installation</a> 
</h4>

<p align="center" style="display: flex; flex-direction: column; align-items: center; justify-content: center; height: 60px;">
  <img src="https://res.cloudinary.com/deztgvefu/image/upload/v1725543807/forget-me-not-collection/miniImages/pngtree-sweet-pink-ribbon-png-image_13127280_cfwfwv.png" alt="Project Logo" width="80">
</p>

<p align="center"><i>Welcome to our Online Jewelry Store! This web application serves as a platform for showcasing and selling a stunning collection of exquisite jewelry.</i></p>

<br/>
<br/>

## *Demo Video*
[![Watch the video](https://img.youtube.com/vi/0aPSCCu5VB0/maxresdefault.jpg)](https://www.youtube.com/watch?v=0aPSCCu5VB0)

## Built With

- Frontend: React

- Backend: Node.js, Express.js, MongoDB, MongoDB Atlas, Mongoose

<p align="right" dir="auto"><a href="#js-gems">Back To Top</a></p>

## Responsive Design
Our website is fully optimized for all device sizes, starting from a minimum screen width of 340px, ensuring a seamless experience across smartphones, tablets, and desktops.

<p align="center">
  <img src="https://res.cloudinary.com/deztgvefu/image/upload/mobile/login_imeoyy.png" alt="Image 3" width="114">
  <img src="https://res.cloudinary.com/deztgvefu/image/upload/mobile/collection_fkxgvc.png" alt="Image 4" width="114">
  <img src="https://res.cloudinary.com/deztgvefu/image/upload/mobile/item_btovmk.png" alt="Image 8" width="114">
  <img src="https://res.cloudinary.com/deztgvefu/image/upload/mobile/bag_wurlyj.png" alt="Image 5" width="114">
  <img src="https://res.cloudinary.com/deztgvefu/image/upload/mobile/wishlist_gs1tbv.png" alt="Image 6" width="114">
  <img src="https://res.cloudinary.com/deztgvefu/image/upload/mobile/account_kqv6gf.png" alt="Image 1" width="114">
  <img src="https://res.cloudinary.com/deztgvefu/image/upload/mobile/order-confirmation_gwrn5n.png" alt="Image 7" width="114">
</p>


<p align="right" dir="auto"><a href="#js-gems">Back To Top</a></p>

## Optimization
The application is manually optimized for performance by utilizing React's useMemo, useCallback, and memo functions, to help minimize unnecessary re-renders and improve efficiency.

<p align="right" dir="auto"><a href="#js-gems">Back To Top</a></p>

## Error Handling
#### 1. Input Validation
- All user inputs are validated using regular expressions (regex)
- The validation rules are centralized in a set of constants and utility functions
- DynamicForm component and a useForm hook are used to handle user inputs
- Real-time feedback that ensures all data entered meets the required criteria before submission

#### 2. User Authentication
- Register Error Handling:
  - When a user tries to register, the application verifies the email against the database
  - If the email is already registered, an error message is displayed to notify the user
- Login Error Handling:
  - When a user tries to log in, the application verifies the email and password against the database
  - If the password is invalid or there is no user with the provided email, an error message is displayed to notify the user

#### 3. Size Selection
- If a user clicks the "Add To Bag" button without selecting a size, an error message is displayed to inform them of the requirement

#### 4. Model Validations Using Regular Expressions:
- Ensures that data fields such as email addresses follow a standard format, passwords meet complexity requirements, payment details are in correct format etc.

#### 5. Functions for Additional Validations:
- Includes checks for email uniqueness during registration, verifies the correctness of the old password during password updates, checks if a card is not expired, etc.

<p align="right" dir="auto"><a href="#js-gems">Back To Top</a></p>

## Testing
- Jest

- Frontend: 
<br> ![Coverage Status](https://img.shields.io/badge/coverage-80%25-brightgreen.svg) 
- Backend: 
<br> ![Coverage Status](https://img.shields.io/badge/coverage-84%25-brightgreen.svg) 

<p align="right" dir="auto"><a href="#js-gems">Back To Top</a></p>

## Features
#### 1. Custom Forms
   
- Floating labels
  
- Validation Messages
  
- After submitting any of the forms, the backend also performs validation to ensure that all inputs, including menus and fields, offer only valid options
  
- Errors related to invalid inputs returned by the backend are displayed to the user

#### 2. Languages
Our website offers a user experience across three languages:
<br/>
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

#### 3. Product filtration 

#### 4. Shopping Bag Count

#### 5. Wishlist Count

#### 6. Toggle Like

#### 7. Create/Update Card Details Form

#### 8. Create/Update Shipping Details Form

#### 9. Update Password Form

#### 10. Update Email Form

#### 11. Order History 

#### 12. Logout Button

#### 13. Mini Navigation at the checkout stage

#### 14. Order Summary at every step of the Checkout process

#### 15. Order Confirmation Page

#### 16. Route Guard 

#### 17. `ScrollToTop` component that ensures the window scrolls to the top of the page whenever the user navigates to a new route

#### 18. User Models:
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

#### 19. Database aggregations for Product Filtering and Real-time Availability Tracking
   
#### 20. Obligatory Size Selection
   
#### 21. Users can increase or decrease the quantity of items in their shopping bag, with validations in place to ensure that they cannot add more than the available quantity in the database or reduce the quantity below zero
    
#### 22. Wishlist
    
#### 23. Orders History, ordered by the creation time
  
#### 24. Email Notifications upon Registration and Order Completion
  
<p align="right" dir="auto"><a href="#js-gems">Back To Top</a></p>

## Installation

### Prerequisites
Make sure you have the following installed on your system:
- [Node.js](https://nodejs.org/) (LTS version recommended)
- [MongoDB](https://www.mongodb.com/) (for local development or use [MongoDB Atlas](https://www.mongodb.com/cloud/atlas))
- [Git](https://git-scm.com/)
- A package manager: **npm** (comes with Node.js)

---

### **1. Clone the Repository**

```sh
git clone https://github.com/beatrisilieva/mern-gems-ultimate.git
cd mern-gems
```

---

### **2. Setup Backend**
Navigate to the backend directory and install dependencies:

```sh
cd server
npm install
```

Run the backend server:

```sh
npm start
```

The backend should now be running on `http://localhost:4000`.

---

### **3. Setup Frontend**

Open a new terminal, navigate to the frontend directory, and install dependencies:

```sh
cd client
npm install
```

Start the frontend development server:

```sh
npm start
```

The frontend should now be running on `http://localhost:3000`.

<p align="right" dir="auto"><a href="#js-gems">Back To Top</a></p>
