
# Code Challenge

This project is a front-end implementation based on a provided Figma design, assigned as a code challenge. The goal is to replicate the design using React.js as the primary framework. The project emphasizes clean, readable, and maintainable code, with a focus on showcasing effective use of React.js features.


## Implementation Approach

My implementation approach focused on adhering closely to the provided Figma design, ensuring a pixel-perfect and responsive user interface. I began by breaking down the design into modular components, leveraging the power of React.js to create a well-structured and maintainable codebase.

### Highlights:

1. #### Design Replication:
- Paid close attention to detail for an accurate replication of the Figma design.
- Utilized React components to encapsulate UI elements, promoting reusability and maintainability.

2. #### Responsive Design:
- Ensured responsiveness across various screen sizes to deliver a seamless user experience.
- Employed media queries and Flexbox/Grid layouts to adapt the UI dynamically.

3. #### Search Functionality:

- Implemented a robust search feature allowing users to search for profiles by name and location.
- Leveraged React state management for real-time updates and responsiveness.

4. #### Explore Page Enhancements:

- Integrated the "See All" and "See Less" functionality seamlessly.
- Effectively managed data visibility, providing users with a streamlined experience.

5. #### Data Fetching and CORS Issue:

- Overcame CORS issues while fetching data from the JSON file by incorporating the proxy-middleware.
- Set up proxy requests to ensure smooth data retrieval, maintaining a smooth user experience.


## Challenges Encountered:

**CORS Issue:**  The primary challenge was the CORS issue during data fetching. This was addressed by installing and configuring the proxy-middleware to facilitate seamless communication with the JSON file.

**Time Management:** Given the time constraint, prioritizing features and focusing on core functionalities became crucial. I approached this by ensuring the key features were implemented effectively while maintaining code quality.


## Positive Outcome:
Despite the challenges, the implementation resulted in a visually appealing and functional application. The React.js framework proved instrumental in achieving a clean and maintainable codebase, showcasing my proficiency in utilizing its features.


## Tech Stack

**Client:** React, TailwindCSS

**Server:** Node,


## Get Started

Follow these steps to set up and run the project locally:

### Prerequisites

Ensure you have the following installed on your machine:
- Node.js: The project is built using Node.js, and it includes npm for package management.

### Installation
1. Clone the repository:

```bash
git clone https://github.com/your-username/your-project.git

```

2. Install dependencies:

```bash
  npm install
```

### Usage

1. Start the development server:

```bash
  npm start or npm run start
```

2. Open your web browser and access the application at http://localhost:3000.


## Dependencies
- proxy-middleware: Middleware to handle proxy requests for resolving CORS issues.


## Notes

- Make sure to run npm install before starting the project.
- For data fetching, ensure that the provided JSON file link is accessible.


