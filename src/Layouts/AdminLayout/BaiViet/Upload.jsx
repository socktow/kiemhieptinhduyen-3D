import React, { useState } from 'react';
import api from '../_Api/api';

const Upload = () => {
  const [image, setImage] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  const [success, setSuccess] = useState(null);
  const [imageUrl, setImageUrl] = useState("");

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    if (!file) {
      setError('No file selected.');
      return;
    }

    // Validate file type and size (e.g., limit to 5MB)
    const allowedTypes = ['image/jpeg', 'image/png', 'image/gif'];
    const maxSize = 5 * 1024 * 1024; // 5MB

    if (!allowedTypes.includes(file.type)) {
      setError('Invalid file type. Please upload a JPEG, PNG, or GIF image.');
      return;
    }
    if (file.size > maxSize) {
      setError('File size exceeds 5MB. Please upload a smaller file.');
      return;
    }

    setError(null);
    setImage(file);
  };

  const handleUpload = async () => {
    if (!image) {
      setError('Please select an image first.');
      return;
    }

    setLoading(true);
    setError(null);
    setSuccess(null);
    setImageUrl(""); // Reset the image URL before uploading

    try {
      const response = await api.uploadImage(image);
      setSuccess('Image uploaded successfully!');
      setImageUrl(response.image_url); // Store the image URL from the response
    } catch (err) {
      setError(err.response?.data?.message || 'Failed to upload image.');
      console.error(err);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-svh mx-auto mt-10 p-6 bg-white rounded-lg shadow-md">
      <h2 className="text-xl font-semibold text-center mb-6">Upload Image</h2>

      {error && <p className="text-red-500 text-center mb-4">{error}</p>}
      {success && (
        <div className="text-center mb-4">
          <p className="text-green-500">{success}</p>
          {imageUrl && (
            <div className="mt-4">
              <img
                src={imageUrl}
                alt="Uploaded"
                className="mx-auto mb-2 max-w-full h-auto"
              />
              <a
                href={imageUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="text-blue-500 underline"
              >
                View Image
              </a>
            </div>
          )}
        </div>
      )}

      <div className="mb-4">
        <input
          type="file"
          accept="image/*"
          onChange={handleFileChange}
          className="w-full px-4 py-2 border rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
      </div>

      <div className="flex justify-center">
        <button
          onClick={handleUpload}
          className={`px-6 py-2 bg-blue-500 text-white font-semibold rounded-md transition-transform ${
            loading ? 'cursor-wait opacity-50' : ''
          }`}
          disabled={loading}
        >
          {loading ? 'Uploading...' : 'Upload Image'}
        </button>
      </div>
    </div>
  );
};

export default Upload;
