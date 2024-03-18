# Purpose

Alternative Technology Considerations: For the backend framework, ExpressJS was evaluated. ExpressJS is well-established and offers more flexibility and large package access suitable for medium to larger applications. We choose NodeJS if it works, if not we will move to PHP which is also a more lenient and easy to use technology which will speed up our development process while providing similar capabilities.

# Challenge Statement

<b>Problem:</b>
Kids lack an engaging online space specifically designed for their unique needs of learning, leaving parents struggling to find age-appropriate events and book resources. We need to create a safe, interactive website, "Kiddies Adventure Zone," that sparks kids' imagination, fosters a love for reading, and connects them to a community of young learners.

<b>Limitation:</b>
Capturing the diverse needs and interests of all children within a single online platform, ensuring content and engagement remains equally appealing across different age groups and learning styles.

<b>Target Audience:</b>
The project is relevant to anyone interested in reading however the main focus is on parents and children under 18years.
Locale: The project's relevance is not tied to a specific location.

### Tasks and Importance:

1. Database Setup: Establishing a robust database structure is crucial for storing and managing user data, quotes, authors, and other relevant information efficiently.
   Library: Getting to see more books the same time.
2. Navigation: Developing intuitive navigation features enhances user experience by facilitating easy access to desired quotes and authors.
3. Responsive Design: Designing a responsive and user-friendly interface ensures accessibility and optimal viewing experiences across different devices, catering to the needs of a diverse user base.

### Installation

To install Kiddies Adventure Zone locally, follow these steps:

```
    Clone the repository: git clone https://github.com/Jonah2016/kiddies_adventure_zone.git
    Navigate to the project directory: cd kiddies_adventure_zone
    Install dependencies: npm install

    Create an `.env` file and provide the following from the <b><a href="https://github.com/Jonah2016/kiddies_backend">kiddies_backend</a></b> project
    1. REACT_APP_ABOUT_API_URL=http://localhost:3001/api/about/{:id}
    2. REACT_APP_SERVICE_API_URL=http://localhost:3001/api/service/
    3. REACT_APP_BOOKS_URL=http://localhost:3001/api/book/
    4. REACT_APP_CATALOG_API_URL=http://localhost:3001/api/book/catalog
    5. REACT_APP_EVENT_API_URL=http://localhost:3001/api/event/
    6. REACT_APP_MEDIA_API_URL=http://localhost:3001/api/media/
```

### Usage

After installing the project, you can run it locally using the following command:

```
npm start
```

Visit `http://localhost:3000/`` in your web browser to access Kiddies Adventure Zone.
Contributing

We welcome contributions from the community to make Kiddies Adventure Zone even better! If you would like to contribute, please follow these steps:

    Fork the repository.
    Create a new branch for your feature: git checkout -b feature-name
    Make your changes and commit them: git commit -m 'Add new feature'
    Push to your branch: git push origin feature-name
    Submit a pull request detailing your changes.

### Related Projects

API: This frontend application is hooked to an API called <b><a href="https://github.com/Jonah2016/kiddies_backend">kiddies_backend</a></b>

### Licensing

This project is licensed under the MIT License - see the LICENSE file for details. Just change a couple of things and add a .env file
