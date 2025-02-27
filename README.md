## Nepali Tadka (Frontend Application)

Nepali Tadka is a web application that brings the flavors of Nepal to your kitchen. Discover, create, and share authentic Nepali recipes with a community of food enthusiasts.

### Features

- **User Authentication**: Sign up and log in to access personalized features.
- **Recipe Management**: Add, edit, and delete your own recipes.
- **Recipe Approval**: Admins can approve or reject recipes submitted by users.
- **Reviews and Ratings**: Leave reviews and ratings for recipes.

### Getting Started

To start the development server, follow these steps:

1. **Clone the repository**:
   ```sh
   git clone https://github.com/your-username/nepali-tadka-frontend.git
   cd nepali-tadka-frontend
   ```
2. **Install dependencies**:
   ```sh
   npm run dev
   ```
3. **Run the development server**:
   ```sh
   npm run dev
   ```
4. **Open the browser**:
   Open your browser and navigate to: http://localhost:5173

### Scripts

- `npm run dev`: Start the development server.
- `npm run build`: Build the application for production.
- `npm run lint`: Run ESLint to check for linting errors.
- `npm run preview`: Preview the production build locally.

### Project Structure

    ├── public/
    │ ├── assets/
    │ │ └── images/
    │ └── logo.svg
    ├── src/
    │ ├── components/
    │ │ ├── button/
    │ │ ├── delete-dialog/
    │ │ ├── footer/
    │ │ ├── header/
    │ │ ├── input-field/
    │ │ ├── navigation/
    │ │ ├── recipe-card/
    │ │ ├── textarea-field/
    │ │ └── user-recipe-card/
    │ ├── context/
    │ │ └── auth.context.jsx
    │ ├── layouts/
    │ │ └── default-layout/
    │ ├── pages/
    │ │ ├── about/
    │ │ ├── add-recipe/
    │ │ ├── contact/
    │ │ ├── edit-recipe/
    │ │ ├── home/
    │ │ ├── login/
    │ │ ├── my-approvals/
    │ │ ├── my-profile/
    │ │ └── my-recipes/
    │ ├── services/
    │ ├── App.css
    │ ├── App.jsx
    │ ├── index.css
    │ └── main.jsx
    ├── .gitignore
    ├── eslint.config.js
    ├── index.html
    ├── package.json
    └── vite.config.js

### Dependencies

- **React**: A JavaScript library for building user interfaces.
- **React Router**: Declarative routing for React applications.
- **React Toastify**: Notifications for React applications.
- **React Modal**: Accessible modal dialog component for React.
- **JWT Decode**: Decode JSON Web Tokens.

### Development Tools

- **Vite**: Next-generation frontend tooling.
- **ESLint**: Pluggable JavaScript linter.
- **Prettier**: Code formatter.

Happy cooking! 🍲
