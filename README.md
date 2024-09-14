
# Vehicle Registration API

This API provides a platform to manage user registrations, including NIC, mobile numbers, and vehicle details. The API supports operations like creating, updating, deleting, and retrieving user records, with additional features such as pagination, filtering, and vehicle number validation.

### Features:
- Create a new user with vehicle and personal details.
- Validate vehicle numbers to check for duplicates.
- Filter users by NIC or vehicle number.
- Pagination support for fetching multiple users.
- Update and delete users by ID.
- Timestamps (`createdAt` and `updatedAt`) in Sri Lankan Time (UTC+5:30).

### Requirements:
- Node.js
- MongoDB
- npm (Node Package Manager)

### Installation:

1. **Clone the Repository**

   ```bash
   git clone https://github.com/yourusername/vehicle-registration-api.git
   cd vehicle-registration-api
   ```

2. **Install Dependencies**

   ```bash
   npm install
   ```

3. **Create a `.env` file** in the project root with the following content:

   ```bash
   MONGO_URI=mongodb://localhost:27017/yourdbname
   PORT=5000
   ```

4. **Start the Server**

   ```bash
   npm start
   ```

   The server will be running on `http://localhost:5000`.

### API Endpoints:

| Method | Endpoint                   | Description                           |
|--------|----------------------------|---------------------------------------|
| `POST` | `/api/v1/users`             | Create a new user                     |
| `GET`  | `/api/v1/users/:id`         | Get user by ID                        |
| `GET`  | `/api/v1/user/filter`       | Filter users by NIC or vehicle number |
| `GET`  | `/api/v1/users`             | Get all users with pagination         |
| `PUT`  | `/api/v1/users/:id`         | Update user by ID                     |
| `DELETE` | `/api/v1/users/:id`       | Delete user by ID                     |
| `POST` | `/api/v1/validate-vehicle`  | Validate vehicle number               |

### Example Requests:

1. **Create User**

   ```bash
   POST /api/v1/users
   ```

   Body:
   ```json
   {
     "user_name": "John Doe",
     "nic": "987654321V",
     "mobile": "0712345678",
     "vehicle_no": "WPABC1234",
     "vehicle_model": "Toyota Corolla"
   }
   ```

2. **Filter Users by NIC or Vehicle Number**

   ```bash
   GET /api/v1/user/filter?nic=987654321V
   ```

3. **Get Users with Pagination**

   ```bash
   GET /api/v1/users?page=1&limit=10
   ```

### Technologies Used:
- **Node.js**: JavaScript runtime environment.
- **Express.js**: Web framework for building REST APIs.
- **MongoDB**: NoSQL database for storing user data.
- **Mongoose**: ODM for MongoDB, used to model the database.
- **Swagger**: API documentation tool.
- **dotenv**: Environment variable management.

### Project Structure:

```
├── config/
│   └── db.js               # MongoDB connection setup
├── controllers/
│   └── userController.js    # Controller logic for user routes
├── models/
│   └── userModel.js         # Mongoose schema and model for user
├── routes/
│   └── userRoutes.js        # API routes for user-related operations
├── services/
│   └── userService.js       # Service logic for interacting with the database
├── swagger/
│   ├── info.js              # Swagger metadata
│   └── swagger.json         # API paths and components definition
├── .env                     # Environment variables (MongoDB connection, etc.)
├── app.js                   # Entry point for the Express server
└── package.json             # Project dependencies and scripts
```

### License
This project is licensed under the MIT License.
