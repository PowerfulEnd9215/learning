# Dummy project for Learning -- Medical Tourism Website

This dummy project for learning is supposed to be a medical tourism website that allows users to securely log in, choose from various medical specialties and super-specialties, create appointments, and process payments for attended appointments. The application is built using Node.js and follows OWASP guidelines for security.

## Features

- **Secure User Authentication**: Implements secure login and registration processes with password hashing and session management.
- **Medical Specialties**: Users can browse and select from various medical specialties and super-specialties.
- **Appointment Management**: Users can create, view, and manage appointments for their chosen specialties.
- **Payment Processing**: Secure payment processing for attended appointments, including validation and transaction handling.

## Technologies Used

- Node.js
- Express.js
- MongoDB (or any other database of choice)
- Mongoose (for MongoDB object modeling)
- dotenv (for environment variable management)
- OWASP security guidelines for secure coding practices

## Installation

1. Clone the repository:
   ```
   git clone <repository-url>
   ```

2. Navigate to the project directory:
   ```
   cd medical-tourism-website
   ```

3. Install the dependencies:
   ```
   npm install
   ```

4. Create a `.env` file in the root directory and add your environment variables:
   ```
   DATABASE_URL=<your-database-url>
   SESSION_SECRET=<your-session-secret>
   ```

5. Start the application:
   ```
   npm start
   ```

## Usage

- Navigate to `http://localhost:3000` in your web browser to access the application.
- Users can register, log in, select specialties, create appointments, and make payments.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any enhancements or bug fixes.

## License

This project is licensed under the MIT License. See the LICENSE file for more details.
