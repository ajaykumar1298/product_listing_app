🛒 Product Listing App (React + Axios)
A modern and responsive Product Listing Application built using React.js, Axios, and Tailwind CSS.
This app fetches product data from a public API and displays it in a clean e-commerce style UI with pricing, discounts, and product details.

🚀 Features
-Fetch products from API
-E-commerce style product cards
-Discount badge on product image
-Product description
-Rating & 📦 stock display
-Pagination (Next / Previous)
-Loading state handling
-Fully responsive design
-Styled using Tailwind CSS

🛠️ Tech Stack
-Frontend: React.js (Hooks)
-HTTP Client: Axios
-Styling: Tailwind CSS
-API: FreeAPI Random Products

📂 Project Structure
src/
│── App.jsx
│── main.jsx
│── index.css

⚙️ Installation & Setup

1.Clone the repository
git clone https://github.com/your-username/product-listing-app.git
cd product-listing-app

2.Install dependencies
npm install

3.Run the project
npm run dev

🔗 API Endpoint
https://api.freeapi.app/api/v1/public/randomproducts?page=1


🔄 Pagination Logic
-Uses page state to track current page
-Fetches new data on page change
-Prev/Next buttons are disabled when:
    -No previous page
    -No next page
    -While loading

🧠 Concepts Used
-React Hooks (useState, useEffect)
-API integration using Axios
-Conditional rendering
-Optional chaining (?.)
-Dynamic price calculation
-Responsive UI design with Tailwind CSS

📌 Future Improvements
-Search products
-Filter (price, category, rating)
-Add to cart functionality
-Wishlist feature
-Infinite scrolling
-Product details page

👨‍💻 Author
Ajay Kumar

⭐ Support
If you like this project, give it a ⭐ on GitHub!