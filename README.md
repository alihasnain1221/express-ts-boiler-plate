<h1 align="center">Express TypeScript Boilerplate 👋</h1>

<!-- ![Express TypeScript Boilerplate](https://i.imgur.com/aLBaWqP.png) -->
<p align="center">
  <img src="https://i.imgur.com/aLBaWqP.png" alt="Express TypeScript Boilerplate">
</p>

---

## Overview

Welcome to **express-ts-boiler-plate**, a feature-rich and professionally structured boilerplate for building robust and scalable backend applications using Express.js and TypeScript. This boilerplate comes pre-configured with dynamic imports, ESLint, Prettier, and TypeScript settings to ensure a smooth development experience.

---

## Features

- **Dynamic Imports:** Leverage the power of dynamic imports to efficiently load modules as needed, enhancing the overall performance of your application.

- **ESLint and Prettier:** Maintain a consistent code style and catch potential issues early with ESLint and Prettier configurations included in the project.

- **TypeScript Setup:** Harness the benefits of TypeScript for enhanced code readability, maintainability, and early error detection.

- **Multi Environment setup:** Ease of multiple environemnts for replicalability.

- **Professional Backend Directory Structure:** The boilerplate follows a well-organized and intuitive directory structure that promotes scalability and maintainability of your backend codebase.

---

## Getting Started

### Prerequisites

Before you begin, ensure you have the following installed:

- [Node.js](https://nodejs.org/)
- [npm](https://www.npmjs.com/)
- [MongoDB](https://www.mongodb.com/)

---

### Installation

Setup the Boilerplate (Any Directory):

```bash
npx express-ts-boiler-plate@latest
```

The rest would be done via User Interaction.

---

### Configuration

Already created a `.env` file in the project root and configured with MongoDB connection:

```env
MONGODB_URI=localhost:27017/
```

---

### Run the Application

Start the application with the following command:

```bash
npm dev
```

To include the additional environment configurations in your `README.md`, you can revise the section about running the application to not only cover how to start the application in the development environment but also to explain how users can easily switch between different environments by simply modifying the `ENVIRONMENT` variable. Here's how you might articulate these updates:

---

### Configuring Multiple Environments

To switch between environments, modify the `ENVIRONMENT` variable in the npm script within the `package.json`. The default script for the development environment is shown below:

```json
"scripts": {
    "dev": "cross-env ENVIRONMENT=dev nodemon --exec ts-node-dev -r tsconfig-paths/register src/app.ts",
}
```

For example, to add a production environment, you could add a new script like this:

```json
"scripts": {
    "dev": "cross-env ENVIRONMENT=dev nodemon --exec ts-node-dev -r tsconfig-paths/register src/app.ts",
    "prod": "cross-env ENVIRONMENT=prod nodemon --exec ts-node-dev -r tsconfig-paths/register src/app.ts"
}
```

And just add .env.prod to the config directory.

To run the application in the production environment, you would then use:

```bash
npm run prod
```

This setup allows for easy configuration and switching between environments, ensuring that your application can be properly configured for different stages of deployment.

---

### Acknowledgments

Special thanks to [**Najam Bashir**](https://www.linkedin.com/in/najam-bashir-b33117139/) and [**Arslan Ahmad**](https://www.linkedin.com/in/arslanahmadiub/?originalSubdomain=pk) (Really appreciate the Motivation and the starting idea)

And all of my [NextTek Team](https://nextteksolutions.com/) family.
