# VisiText AI Image Generator

A full-stack application that generates AI images from text prompts using OpenAI's DALL-E model. The application features user authentication, image generation, and a modern, responsive UI.

## Features

- 🎨 Generate AI images from text prompts
- 🔐 User authentication (signup/login)
- 💾 Save and manage generated images
- 🌈 Customize image generation parameters
- 🚀 Fast and responsive UI
- 🔄 Real-time image generation feedback

## Tech Stack

### Frontend
- React 19
- Vite
- Tailwind CSS
- React Router
- Axios for API calls

### Backend
- Node.js with Express
- MongoDB with Mongoose
- JWT for authentication
- OpenAI API for image generation
- (Optional) Cloudinary for image storage
- (Optional) Razorpay for payments

## Getting Started

### Prerequisites

- Node.js (v18 or later)
- npm or yarn
- MongoDB database
- OpenAI API key

### Installation

1. Clone the repository:
   ```bash
   git clone https://github.com/Piyush-gour/VisiText-AI-Image-Generator.git
   cd VisiText-AI-Image-Generator
   ```

2. Install dependencies for both client and server:
   ```bash
   # Install client dependencies
   cd Client
   npm install
   
   # Install server dependencies
   cd ../Server
   npm install
   ```

3. Set up environment variables:
   - Copy `.env.example` to `.env` in both `Client` and `Server` directories
   - Update the environment variables with your configuration

4. Start the development servers:
   ```bash
   # Start client (from root directory)
   cd Client
   npm run dev
   
   # In a new terminal, start server (from root directory)
   cd Server
   npm run dev
   ```

5. Open [http://localhost:5173](http://localhost:5173) in your browser

## Deployment

For deployment instructions, see [DEPLOYMENT.md](DEPLOYMENT.md).

## Environment Variables

### Client
Create a `.env` file in the `Client` directory:

```env
VITE_API_BASE_URL=http://localhost:4000/api  # Update with your API URL in production
```

### Server
Create a `.env` file in the `Server` directory:

```env
# Server Configuration
PORT=4000
NODE_ENV=development

# MongoDB Connection
MONGODB_URI=your_mongodb_connection_string

# JWT Configuration
JWT_SECRET=your_jwt_secret_key_here
JWT_EXPIRES_IN=30d

# OpenAI API Key
OPENAI_API_KEY=your_openai_api_key

# Optional: Cloudinary Configuration
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Optional: Razorpay Configuration
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

## Project Structure

```
VisiText-AI-Image-Generator/
├── Client/                 # Frontend React application
│   ├── public/             # Static files
│   ├── src/                # Source code
│   │   ├── assets/         # Images, fonts, etc.
│   │   ├── components/     # Reusable UI components
│   │   ├── pages/          # Page components
│   │   ├── services/       # API services
│   │   ├── utils/          # Utility functions
│   │   ├── App.jsx         # Main App component
│   │   └── main.jsx        # Entry point
│   └── package.json        # Frontend dependencies
│
├── Server/                 # Backend Node.js/Express server
│   ├── config/             # Configuration files
│   ├── controllers/        # Route controllers
│   ├── middlewares/        # Custom middlewares
│   ├── models/             # Database models
│   ├── routes/             # API routes
│   ├── utils/              # Utility functions
│   ├── server.js           # Server entry point
│   └── package.json        # Backend dependencies
│
├── .gitignore             # Git ignore file
├── vercel.json            # Vercel configuration
└── README.md              # This file
```

## Contributing

Contributions are welcome! Please feel free to submit a Pull Request.

1. Fork the repository
2. Create your feature branch (`git checkout -b feature/AmazingFeature`)
3. Commit your changes (`git commit -m 'Add some AmazingFeature'`)
4. Push to the branch (`git push origin feature/AmazingFeature`)
5. Open a Pull Request

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

## Acknowledgments

- OpenAI for the DALL-E API
- Vercel for hosting
- All contributors who helped improve this project

## Contact

Piyush Gour - [@your_twitter](https://twitter.com/your_twitter)

Project Link: [https://github.com/Piyush-gour/VisiText-AI-Image-Generator](https://github.com/Piyush-gour/VisiText-AI-Image-Generator)iText AI Image Generator

A full-stack application for generating AI images using text prompts.

## Project Structure

- `/Client` - Frontend React application
- `/Server` - Backend Node.js/Express server

## Getting Started

### Prerequisites

- Node.js (v16 or later)
- npm or yarn
- Vercel CLI (optional)

### Local Development

1. Install dependencies for both client and server:

```bash
# Install client dependencies
cd Client
npm install

# Install server dependencies
cd ../Server
npm install
```

2. Set up environment variables:
   - Copy `.env.example` to `.env` in both Client and Server directories
   - Update the environment variables with your configuration

3. Start the development servers:

```bash
# In one terminal (from root directory)
cd Client
npm run dev

# In another terminal (from root directory)
cd Server
npm run server
```

## Deployment

This project is configured for deployment on Vercel. To deploy:

1. Push your code to a GitHub/GitLab/Bitbucket repository
2. Import the repository to Vercel
3. Configure the following environment variables in your Vercel project settings:
   - `MONGODB_URI` (for database connection)
   - `OPENAI_API_KEY` (for AI image generation)
   - `JWT_SECRET` (for authentication)
   - `CLOUDINARY_*` (for image storage, if using Cloudinary)

4. Vercel will automatically detect the configuration and deploy your application

## Environment Variables

### Client (Client/.env)
```
VITE_API_BASE_URL=your_api_base_url
```

### Server (Server/.env)
```
PORT=5000
MONGODB_URI=your_mongodb_connection_string
JWT_SECRET=your_jwt_secret
OPENAI_API_KEY=your_openai_api_key
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret
```

## License

This project is licensed under the MIT License.
