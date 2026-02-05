# 💱 MoneyRate – Currency Converter
MoneyRate is a lightweight and efficient **currency converter web application** built using **React and Vite**.
It allows users to convert amounts between different currencies using real-time exchange rate data.


## 🚀 Features
1. Real-time currency conversion
2. Supports multiple currencies
3. Clean and minimal user interface
4. Custom React hook for fetching exchange rates
5. Modular and reusable components
6. Fast development and build with Vite

## 🛠 Tech Stack
1. React
2. Vite
3. JavaScript (ES6+)
4. CSS
5. Currency Exchange API

## 📁 Project Structure
    MoneyRate/
    │
    ├── public/
    │   └── vite.svg
    │
    ├── src/
    │   ├── components/
    │   │   ├── InputBox.jsx
    │   │   └── ConvertButton.jsx
    │   │
    │   ├── hooks/
    │   │   └── useFatchCurrencyInfo.js
    │   │
    │   ├── App.jsx
    │   ├── App.css
    │   ├── main.jsx
    │   └── index.css
    │
    ├── package.json
    ├── vite.config.js
    └── README.md

## ⚙️ Installation and Setup
**Clone the repository**

    git clone https://github.com/your-username/MoneyRate.git

**Navigate to the project directory**
  
    cd MoneyRate
    
**Install dependencies**

    npm install

**Start the development server**
  
     npm run dev

**Open in browser**

     **http://localhost:5173**

##  🔁 Application Flow

1. User enters an amount
2. Selects source and target currencies
3. Exchange rates are fetched using a custom hook
4. Converted amount is calculated and displaye

## 🧩 Custom Hook
**useFatchCurrencyInfo**

1. Fetches real-time currency exchange data
2. Separates API logic from UI components
3. Improves code readability and reusability

## ⚠️ Limitations

1. No loading indicator
2. No error handling UI
3. No API response caching

## 🔮 Future Enhancements

1. Add loading and error states
2. Cache API responses
3. Add currency swap feature
4. Improve UI/UX
5. Add unit and integration tests

## 📄 License
This project is licensed under the MIT License.
