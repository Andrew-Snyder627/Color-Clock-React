# Color Clock

A colorful digital clock built with React and Vite. Displays the current date and time, updating every second.

## Features

- Live updating clock using React state
- Date and time formatting with [date-fns](https://date-fns.org/)
- Custom gradient and color styling

## Getting Started

1. Clone the repository
2. Install dependencies:  
   `npm install`
3. Start the development server:  
   `npm run dev`
4. Open your browser to the displayed URL (usually [http://localhost:5173](http://localhost:5173))

## Dependencies

- React
- Vite
- date-fns

## Customization

Edit `src/App.css` to change the clock’s colors or layout.

## Screenshot

![Screenshot of Color Clock](./screenshot.png)

---

### **How it Works**

The app uses React hooks to keep the time up to date and `date-fns` for easy formatting.

---

## **Step 7: Screenshot**

![Screenshot of Color Clock](./src/assets/clock_screenshot.png)

---

## **Rubric Checklist**

- [ ] **Functionality:**

  - [ ] Clock displays the current date and time in a readable format
  - [ ] Clock updates every second (dynamic/live)
  - [ ] Uses `date-fns` for date and time formatting

- [ ] **Styling:**

  - [ ] Project has clear styling applied (not just default)
  - [ ] At least one color present beyond black and white
  - [ ] Layout and font are visually appealing and easy to read

- [ ] **npm and Dependencies:**

  - [ ] All required npm packages installed (`react`, `date-fns`, etc.)
  - [ ] No missing or incorrectly used dependencies
  - [ ] Project runs without dependency errors

- [ ] **Documentation and Maintainability:**
  - [ ] Project includes meaningful code comments
  - [ ] `README.md` file with:
    - [ ] Project description
    - [ ] Setup and run instructions
    - [ ] List of dependencies
    - [ ] Screenshot of the working application
  - [ ] Instructions in README are clear and easy to follow
