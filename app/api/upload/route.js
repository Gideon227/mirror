import { v2 as cloudinary } from 'cloudinary';


// Set up Cloudinary configuration
cloudinary.config({
  cloud_name: process.env.CLOUDINARY_CLOUD_NAME,
  api_key: process.env.CLOUDINARY_API_KEY,
  api_secret: process.env.CLOUDINARY_API_SECRET,
});

export const POST = async (request) => {  
  const { images } = await request.json()

    try {
      const imageUploadPromises = images.map(async (image) => {
        const result = await cloudinary.uploader.upload(image, {
          folder: 'clsvbmcg', // Folder in Cloudinary where images will be stored
        });
        return result.secure_url; // Return the URL of the uploaded image
      });

      const uploadedImageUrls = await Promise.all(imageUploadPromises);
      return new Response(JSON.stringify({ urls: uploadedImageUrls }), { status: 200 })
    } catch (error) {
        return new Response("Failed to upload image to cloudinary",{ status: 500 })
    }
  }

