# Nabeghe

[./insta story-01.jpg]

Nabeghe is a modern learning platform for online courses, designed to deliver a seamless and efficient experience for both learners and educators. Built with cutting-edge technologies, Nabeghe combines a robust backend with a sleek and responsive user interface.

## Features

- **Course Management**: Create, edit, and organize online courses.
- **User Authentication**: Secure login and signup system.
- **Responsive Design**: Optimized for all devices using Tailwind CSS.
- **Dynamic Frontend**: Built with React and Next.js for an interactive and fast user experience.
- **Database Integration**: MongoDB for reliable and scalable data storage.
- **Real-time Updates**: Fast data loading and interaction through API endpoints.

## Tech Stack

### Frontend
- **Next.js**: Framework for server-rendered and statically generated React applications.
- **React**: JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.

### Backend
- **Next.js**: JavaScript runtime environment.
- **MongoDB**: NoSQL database for managing course and user data.

## Installation

### Prerequisites
- Node.js (v16 or later)
- MongoDB (running locally or via a cloud service like MongoDB Atlas)

### Steps

1. Clone the repository:
   ```bash
   git clone https://github.com/amir4976/nabeghe.git
   ```

2. Navigate to the project directory:
   ```bash
   cd nabeghe
   ```

3. Install dependencies:
   ```bash
   npm install
   ```

4. Create a `.env` file for environment variables:
   ```env
   MONGO_URI=your-mongodb-connection-string
   NEXTAUTH_SECRET=your-secret-key
   ```

5. Run the development server:
   ```bash
   npm run dev
   ```

6. Open your browser and go to [http://localhost:3000](http://localhost:3000).

## Folder Structure

```
├── public           # Static files (images, fonts, etc.)
├── src
│   ├── components   # Reusable React components
│   ├── pages        # Next.js pages (routes)
│   ├── styles       # Tailwind CSS configuration and global styles
│   ├── utils        # Utility functions and helpers
│   ├── models       # MongoDB models
│   ├── api          # API route handlers
├── .env             # Environment variables
├── package.json     # Project dependencies and scripts
```

## Scripts

- **`npm run dev`**: Start the development server.
- **`npm run build`**: Build the project for production.
- **`npm start`**: Start the production server.
- **`npm run lint`**: Run the linter to check for code issues.

## Contributing

Contributions are welcome! Please follow these steps to contribute:

1. Fork the repository.
2. Create a new branch (`git checkout -b feature/your-feature-name`).
3. Commit your changes (`git commit -m 'Add a new feature'`).
4. Push to the branch (`git push origin feature/your-feature-name`).
5. Create a pull request.

## License

This project is licensed under the MIT License. See the [LICENSE](LICENSE) file for details.

## Acknowledgments

- Thanks to the open-source community for their amazing tools and libraries.
- Special thanks to all contributors who make this project possible.
