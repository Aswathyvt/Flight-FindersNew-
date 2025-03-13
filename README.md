# Flight Finders

Flight Finders is a React-based flight booking system that allows users to search, filter, and sort flights efficiently. The project is built using _React (Vite)_ and _Tailwind CSS_ for a fast and modern UI.

## 🚀 Features

- _Flight Search & Display_: View available flights with key details like departure, arrival, and price.
- _Filtering Options_: Filter flights based on price, airline, duration, and other criteria.
- _Sorting Mechanism_: Sort flights by price, duration, or departure time.
- _Responsive UI_: Optimized for both desktop and mobile devices.
- _Form Input_: Users can enter flight details through a form, and only the entered data is displayed.

## 📂 Project Structure

/public
/src
├── assets/
│ ├── logoimages/ # Airline logos and other images
│
├── components/ # Reusable UI components
│ ├── ui/ # UI elements
│ │ ├── Button.jsx
│ │ ├── Dialog.jsx
│ │ ├── Input.jsx
│ │ ├── Select.jsx
│ │ ├── Slider.jsx
│ │ ├── Switch.jsx
│ ├── FlightCard.jsx
│ ├── FlightForm.jsx
│ ├── FlightSearch.jsx
│
├── App.css
├── App.jsx
├── index.css
├── main.jsx

## 🛠️ Technologies Used

- _React (Vite)_ - Frontend framework
- _Tailwind CSS_ - Styling framework
- _JavaScript (ES6+)_ - Core programming language

## 🔧 Installation & Setup

1. Clone the repository:
   sh
   git clone https://github.com/Aswathyvt/Flight-FindersNew.git
2. Navigate to the project folder:
   sh
   cd Flight-FindersNew
3. Install dependencies:
   sh
   npm install
4. Start the development server:
   sh
   npm run dev
5. Open http://localhost:5173/ in your browser.

## 🎯 How to Use

1. View available flights on the homepage.
2. Use the _FlightForm_ to input flight details.
3. Use the _Filter & Sort_ options to refine search results dynamically.
4. Click on a flight for more details.

## ✅ Features

- Created an array to store flight data with fields: Airline Name, Logo, From Location, To Location, Price, Duration, Departure, and Arrival.
- Implemented sorting and filtering functionality based on price, departure time, and duration.
- Used React state to dynamically update flight listings based on user interaction.
- Built a simple, user-friendly UI focusing only on relevant flight details.

## 🤝 Contribution

Contributions are welcome! Feel free to fork the repo and submit pull requests.

## 📜 License

This project is licensed under the [MIT License](LICENSE).
