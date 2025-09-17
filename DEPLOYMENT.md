# Deployment Guide for VisiText AI Image Generator

This guide will walk you through deploying the VisiText AI Image Generator application to Vercel.

## Prerequisites

- A Vercel account (sign up at [vercel.com](https://vercel.com))
- A MongoDB Atlas database (or any MongoDB instance)
- An OpenAI API key
- (Optional) Cloudinary account for image storage
- (Optional) Razorpay account for payments

## Deployment Steps

### 1. Fork and Clone the Repository

```bash
git clone https://github.com/Piyush-gour/VisiText-AI-Image-Generator.git
cd VisiText-AI-Image-Generator
```

### 2. Set Up Environment Variables

#### Client Environment Variables
Create a `.env` file in the `Client` directory with:

```env
VITE_API_BASE_URL=https://your-vercel-app.vercel.app/api
```

#### Server Environment Variables
Create a `.env` file in the `Server` directory with:

```env
# Server Configuration
PORT=4000
NODE_ENV=production

# MongoDB Connection
MONGODB_URI=your_mongodb_connection_string

# JWT Configuration
JWT_SECRET=your_secure_jwt_secret
JWT_EXPIRES_IN=30d

# OpenAI API Key
OPENAI_API_KEY=your_openai_api_key

# Cloudinary Configuration (optional)
CLOUDINARY_CLOUD_NAME=your_cloudinary_cloud_name
CLOUDINARY_API_KEY=your_cloudinary_api_key
CLOUDINARY_API_SECRET=your_cloudinary_api_secret

# Razorpay Configuration (optional)
RAZORPAY_KEY_ID=your_razorpay_key_id
RAZORPAY_KEY_SECRET=your_razorpay_key_secret
```

### 3. Deploy to Vercel

#### Option A: Using Vercel CLI
1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Login to Vercel:
   ```bash
   vercel login
   ```

3. Deploy:
   ```bash
   vercel
   ```

#### Option B: Using GitHub Integration
1. Push your code to a GitHub repository
2. Go to [Vercel Dashboard](https://vercel.com/dashboard)
3. Click "Add New" → "Project"
4. Import your GitHub repository
5. Set up the project with these settings:
   - Framework Preset: `Other`
   - Root Directory: `/`
   - Build Command: `(leave empty)`
   - Output Directory: `(leave empty)`
   - Install Command: `npm install`

6. Add all the environment variables from the `.env` files in the Vercel project settings.

7. Click "Deploy"

### 4. Configure Custom Domain (Optional)

1. Go to your project in the Vercel dashboard
2. Click on "Settings" → "Domains"
3. Add your custom domain and follow the instructions to verify ownership

## Environment Variables Reference

### Client
- `VITE_API_BASE_URL`: The base URL of your API (e.g., `https://your-vercel-app.vercel.app/api`)

### Server
- `MONGODB_URI`: MongoDB connection string
- `JWT_SECRET`: Secret key for JWT token generation
- `OPENAI_API_KEY`: Your OpenAI API key
- `CLOUDINARY_*`: Cloudinary credentials (if using Cloudinary)
- `RAZORPAY_*`: Razorpay credentials (if using Razorpay for payments)

## Troubleshooting

### Common Issues

1. **CORS Errors**: Ensure your frontend URL is in the `allowedOrigins` array in `Server/server.js`
2. **Environment Variables Not Loading**: Make sure all environment variables are set in Vercel project settings
3. **Build Failures**: Check the build logs in the Vercel dashboard for specific error messages

### Checking Logs

1. Go to your project in the Vercel dashboard
2. Click on the "Logs" tab to view deployment and runtime logs

## Support

If you encounter any issues, please open an issue on the [GitHub repository](https://github.com/Piyush-gour/VisiText-AI-Image-Generator/issues).
