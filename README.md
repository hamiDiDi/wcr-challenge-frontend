# Welcome Page Mobile App

## Overview

This project is a cross-platform mobile application that provides a visually appealing and user-friendly Welcome Page. The app includes interactive animations, tabbed authentication sections, and seamless containerized deployment. Designed for both iOS and Android platforms, it adheres to Material Design 3 principles for a consistent and modern user experience.

---

---

## Features

- **Interactive Animation**: A simple, interactable animation built using Spline.
- **Tabbed Sections**:
  - **Sign Up** and **Login** tabs, each styled with Google and Facebook SSO buttons.
  - Authentication functionality using APIs from the provided Swagger JSON file.
- **Cross-Platform Compatibility**: Built using Ionic and CapacitorJS.
- **Material Design 3**: UI design follows Material Design principles.
- **Dockerized Deployment**: Runs in a containerized environment for easy local setup.
  **Authentication**:
  - Simplified integration of login and signup workflows using provided Swagger APIs.
    **Responsive Design**:
  - Adapted for a variety of screen sizes.

## Deployment and Setup Instructions

### Prerequisites

Before starting, ensure the following tools are installed:

1. **Docker Desktop**: For containerized deployment.
2. **Node.js (v18+)** and **npm**: For dependency management and development.
3. **Git**: To clone the repository.

### Setup Steps

1. Clone the repository:
   ```bash
   git clone <repository-url>
   cd welcome-app
   ```
2. Install dependencies:
   ```bash
   npm install
   ```
3. Run the application locally using the Angular Development Server:
   ```bash
   npm start
   ```
4. Build and run the Docker container:
   ```bash
   docker build -t welcome-app .
   docker run -d -p 3030:3030 welcome-app
   ```

---

## Libraries and Dependencies

### **Core Dependencies**

1. **@angular/animations**: Provides support for animations using Angular's animation library, essential for creating dynamic, user-friendly transitions and effects.
2. **@angular/cdk**: Angular's Component Dev Kit used for building reusable and accessible UI components, such as overlays and dialog boxes.
3. **@angular/common**, **@angular/core**, **@angular/forms**, **@angular/platform-browser**, **@angular/router**: The backbone of Angular applications, offering modules for form handling, routing, core functionalities, and browser compatibility.
4. **@angular/material**: Implements Material Design 3 UI components to ensure modern, sleek, and responsive designs.
5. **@capacitor/core**, **@capacitor/android**, **@capacitor/ios**: Core Capacitor packages for integrating web-based applications with native functionality on iOS and Android platforms.
6. **@capacitor/app**, **@capacitor/haptics**, **@capacitor/keyboard**, **@capacitor/status-bar**: Plugins to enhance the app with native-like features, such as haptics, keyboard control, and status bar customization.
7. **@ionic/angular**: The core Ionic library for integrating Angular and Ionic, enabling the development of cross-platform mobile applications.
8. **ionicons**: A library of modern, customizable icons used across the app for enhancing UI/UX.
9. **rxjs**: Reactive programming library used in Angular for handling asynchronous data streams.
10. **tslib**: Runtime library for TypeScript, reducing boilerplate code and ensuring compatibility.
11. **zone.js**: A library for managing async operations, which is essential for Angular's change detection.

### **Development Dependencies**

1. **@angular-devkit/build-angular**: Tools for building and serving Angular applications in development and production modes.
2. **@angular-eslint**: Provides ESLint rules and configurations for linting Angular projects, ensuring clean and consistent code.
3. **@capacitor/cli**: Command-line tools for managing Capacitor projects, including building and deploying to native platforms.
4. **@ionic/angular-toolkit**: Additional tools for integrating Angular and Ionic workflows during development.
5. **eslint**, **@typescript-eslint/eslint-plugin**, **@typescript-eslint/parser**: ESLint and its plugins ensure code quality and enforce best practices in TypeScript development.
6. **typescript**: The programming language used for building Angular applications, offering type safety and modern JavaScript features.

---

## Rationale for Design and Structural Decisions

### User-Friendly Design

- The login and sign-up pages are designed with a clean and minimalistic interface to provide users with a simple and intuitive experience.
- The contrast between the background and form elements enhances readability and accessibility.

### Mobile-First Approach

- The layout is responsive, ensuring a seamless experience across devices.
- The single-column form structure adapts well to smaller screens, reducing the need for horizontal scrolling.

### Accessibility

- The form uses proper HTML semantic elements to enhance compatibility with assistive technologies.
- Required fields are clearly marked with an asterisk (\*) to ensure users understand which inputs are mandatory.

### Consistency in UI Elements

- The use of Ionic components, such as `ion-toolbar`, `ion-input`, and buttons, ensures a consistent and modern appearance across the app.
- The styling aligns with Material Design principles, maintaining a professional and familiar look for users.

### Validation and Error Handling

- Password and email fields include basic validation to ensure data integrity during form submission.
- Error messages provide immediate feedback if users input invalid data.

### Spline Integration

- Spline integration for the "Built with Spline" visual element adds a touch of modernity and creativity.

### Security Considerations

- Password fields are masked for security.
- The design supports secure handling of user credentials when integrated with a backend authentication system.

---

## Directory Structure

```
/src
├── /app                      # Main application folder
│   ├── /components           # Contains all reusable components
│   │   ├── /login            # Login component
│   │   │   ├── login.component.ts          # Component logic
│   │   │   ├── login.component.html        # Component template
│   │   │   ├── login.component.scss        # Component styles
│   │   │   └── login.component.spec.ts     # Component tests
│   │   ├── /sign-up          # Sign-up component
│   │       ├── sign-up.component.ts        # Component logic
│   │       ├── sign-up.component.html      # Component template
│   │       ├── sign-up.component.scss      # Component styles
│   │       └── sign-up.component.spec.ts   # Component tests
│   ├── /services             # Contains application services
│       ├── auth.service.ts                # Handles authentication logic
│       ├── platform.service.ts            # Provides platform-specific utilities
│   ├── app.module.ts         # Application root module
│   ├── app-routing.module.ts # Application routing configuration
│   └── app.component.ts      # Main application component
├── /assets                   # Static assets (e.g., images, fonts)
├── /environments             # Environment-specific configurations
│   ├── environment.ts        # Development environment settings
│   └── environment.prod.ts   # Production environment settings
├── index.html                # Application entry point
├── main.ts                   # Application bootstrap file
├── polyfills.ts              # Polyfills for older browsers
├── styles.scss               # Global styles
└── angular.json              # Angular CLI configuration
```

## Resources Used

- Material Design 3 Documentation: Material Design
- Angular Documentation: Angular
- Spline Animation Tool: Spline
- Swagger API Integration: Provided Swagger JSON file for authentication.
- Docker Documentation: Docker
- Ionic Documentation: Ionic Framework

[Link 1](https://chatgpt.com/c/677d117d-c368-800d-9286-0ad8e7958b80)

[Link 2](https://chatgpt.com/c/67800beb-a9a8-800d-b462-387946fc8dee)
