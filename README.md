    PLANTSHOP
A simple React application connected to a JSON backend that lets users view, add, search, and mark plants as out of stock.

      Setup
Clone the repo

bash
git clone https://github.com/your-username/plantshop.git
cd plantshop
Install dependencies

bash
npm install
Run the frontend

bash
npm run dev
The app will be available at http://localhost:5173.

Run the backend

bash
npm run server
JSON Server will run at http://localhost:6001/plants.

       Features
Fetch plants from backend and display dynamically.

Add new plant via form submission (POST request).

Mark plant out of stock with a toggle button.

Search plants by name using the search bar.

  Screenshots
Include screenshots of your app running locally:

Home view with plant list

Adding a new plant

Search functionality in action

  Tech Stack
React (frontend)

Vite (development server)

JSON Server (backend)

JavaScript (ES6+)

 Documentation
Code is commented to explain logic and intent.

Tests included (npm run test) to verify functionality.

Followed best practices: cleaned up branches, updated .gitignore, and documented features.

  Future Improvements
Persist “Out of Stock” state to backend.

Add categories or tags for plants.

Improve styling and responsiveness.