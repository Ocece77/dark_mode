

# Dark Mode / Light Mode Toggle App 🌗

This project demonstrates a simple Dark Mode / Light Mode toggle app built with Tailwind CSS and React.js. It uses `useContext` to manage and toggle between themes.

### Live Demo
🚀 Check out the live demo [here](https://your-live-demo-link.com)!

### Features
✨ Toggle between Dark Mode and Light Mode with a click  
✨ Demonstrates usage of `useContext` in React  
✨ Styled with Tailwind CSS for rapid UI development  

### Technologies Used
- React.js
- Tailwind CSS
- JavaScript (ES6+)

### How to Use

1. **Clone the Repository**
   ```bash
   git clone https://github.com/your-username/dark-mode-light-mode.git
   cd dark-mode-light-mode
   ```

2. **Install Dependencies**
   ```bash
   npm install
   ```

3. **Run the Application**
   ```bash
   npm start
   ```

4. **Open in Browser**
   Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### Understanding `useContext` in React

#### Context API
The Context API provides a way to pass data through the component tree without having to pass props down manually at every level. It's particularly useful for sharing state across multiple components that are not directly related.

#### How it's used here:

- **Theme Context Creation:**
  - `ThemeContext` is created using `createContext()` to manage the theme state (`mode` and `toggleMode`).
  
- **Theme Provider:**
  - `ThemeProvider` component wraps the entire application with `ThemeContext.Provider`.
  - It manages the state (`mode`) and provides a function (`toggleMode`) to update the theme.

- **Consuming the Context:**
  - In `GlobalStyle` component, `useContext(ThemeContext)` is used to consume the `mode` and pass it to `DarkModeStyle`.

### Contributing
Contributions are welcome! If you have any ideas or improvements, feel free to open an issue or create a pull request.

### License
This project is licensed under the no License


