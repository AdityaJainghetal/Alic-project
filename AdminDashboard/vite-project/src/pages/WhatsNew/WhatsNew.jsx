import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Upload, X, CheckCircle } from 'react-feather';
import { ToastContainer, toast } from 'react-toastify';
import { CKEditor } from "@ckeditor/ckeditor5-react";
import ClassicEditor from "@ckeditor/ckeditor5-build-classic";
import 'react-toastify/dist/ReactToastify.css';

import { fetchcategory } from "../../api";

// Custom Upload Adapter for CKEditor
class CustomUploadAdapter {
  constructor(loader) {
    this.loader = loader;
  }

  upload() {
    return this.loader.file.then(
      file =>
        new Promise((resolve, reject) => {
          const formData = new FormData();
          formData.append('file', file);

          axios
            .post('https://api.imagekit.io/v1/files/upload', formData, {
              headers: {
                'Content-Type': 'multipart/form-data',
                Authorization: 'Basic YOUR_BASE64_PUBLIC_API_KEY', // Replace this
              },
            })
            .then(response => {
              resolve({ default: response.data.url });
            })
            .catch(error => reject(error));
        })
    );
  }

  abort() {}
}

function CustomUploadAdapterPlugin(editor) {
  editor.plugins.get('FileRepository').createUploadAdapter = loader => {
    return new CustomUploadAdapter(loader);
  };
}

const WhatsNew = () => {
  const [formData, setFormData] = useState({
    Coursename: '',
    CourseDescription: '',
    category: ''
  });
  const [categories, setCategories] = useState([]);
  const [imageFiles, setImageFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [pdfFile, setPdfFile] = useState(null);
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errors, setErrors] = useState({});

  useEffect(() => {
    const fetchCategories = async () => {
      setLoading(true);
      try {
        const response = await fetchcategory();
        if (response.data) setCategories(response.data);
      } catch (error) {
        console.error("Error fetching categories:", error);
        toast.error("Failed to load categories. Please try again.");
      } finally {
        setLoading(false);
      }
    };
    fetchCategories();
  }, []);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name]) setErrors(prev => ({ ...prev, [name]: '' }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + imageFiles.length > 5) {
      toast.error('You can upload a maximum of 5 images');
      return;
    }
    setImageFiles(prev => [...prev, ...files.slice(0, 5 - prev.length)]);
    const newPreviews = [];
    files.slice(0, 5 - imageFiles.length).forEach(file => {
      const reader = new FileReader();
      reader.onload = (e) => {
        newPreviews.push(e.target.result);
        if (newPreviews.length === files.length || newPreviews.length === 5 - imageFiles.length) {
          setImagePreviews(prev => [...prev, ...newPreviews]);
        }
      };
      reader.readAsDataURL(file);
    });
  };

  const handlePdfChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type !== 'application/pdf') {
      toast.error('Only PDF files are allowed');
      return;
    }
    setPdfFile(file);
    if (errors.pdf) setErrors(prev => ({ ...prev, pdf: '' }));
  };

  const removeImage = (index) => {
    setImageFiles(prev => prev.filter((_, i) => i !== index));
    setImagePreviews(prev => prev.filter((_, i) => i !== index));
  };

  const validateForm = () => {
    const newErrors = {};
    if (!formData.Coursename.trim()) newErrors.Coursename = 'Course name is required';
    if (!formData.category) newErrors.category = 'Category is required';
    if (imageFiles.length === 0) newErrors.images = 'At least one image is required';
    if (!pdfFile) newErrors.pdf = 'PDF file is required';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    if (!validateForm()) return;

    setLoading(true);
    setSuccess(false);

    const formDataToSend = new FormData();
    formDataToSend.append('Coursename', formData.Coursename);
    formDataToSend.append('CourseDescription', formData.CourseDescription);
    formDataToSend.append('category', formData.category);
    imageFiles.forEach(file => formDataToSend.append('images', file));
    formDataToSend.append('pdf', pdfFile);

    try {
      const response = await axios.post('http://localhost:8000/api/whatsnew', formDataToSend, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });
      toast.success('Course added successfully!');
      setSuccess(true);
      setFormData({ Coursename: '', CourseDescription: '', category: '' });
      setImageFiles([]);
      setImagePreviews([]);
      setPdfFile(null);
      setErrors({});
    } catch (err) {
      console.error('Error adding course:', err);
      toast.error(err.response?.data?.error || 'Something went wrong');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <form onSubmit={handleSubmit} className="w-full max-w-3xl mx-auto p-8 bg-white rounded-lg shadow-md">
        <h2 className="text-2xl font-bold mb-6 text-center">Add New Course</h2>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Course Name*</label>
          <input
            type="text"
            name="Coursename"
            value={formData.Coursename}
            onChange={handleChange}
            className={`w-full p-2 border ${errors.Coursename ? 'border-red-500' : 'border-gray-300'} rounded`}
            required
          />
          {errors.Coursename && <p className="text-red-500 text-xs mt-1">{errors.Coursename}</p>}
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Description</label>
          <CKEditor
            editor={ClassicEditor}
            data={formData.CourseDescription}
            config={{ extraPlugins: [CustomUploadAdapterPlugin] }}
            onChange={(event, editor) => {
              const data = editor.getData();
              setFormData(prev => ({ ...prev, CourseDescription: data }));
              if (errors.CourseDescription) setErrors(prev => ({ ...prev, CourseDescription: '' }));
            }}
          />
        </div>

        <div className="mb-4">
          <label className="block mb-1 font-medium">Category*</label>
          <select
            name="category"
            value={formData.category}
            onChange={handleChange}
            className={`w-full p-2 border ${errors.category ? 'border-red-500' : 'border-gray-300'} rounded`}
            required
          >
            <option value="">Select a category</option>
            {categories.map((category) => (
              <option key={category._id} value={category._id}>
                {category.name}
              </option>
            ))}
          </select>
          {errors.category && <p className="text-red-500 text-xs mt-1">{errors.category}</p>}
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Course Images*</label>
          {imagePreviews.length > 0 && (
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-4">
              {imagePreviews.map((preview, index) => (
                <div key={index} className="relative group">
                  <img src={preview} alt={`Preview ${index + 1}`} className="h-24 w-24 object-cover rounded-md border border-gray-300" />
                  <button
                    type="button"
                    onClick={() => removeImage(index)}
                    className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
                  >
                    <X size={16} />
                  </button>
                </div>
              ))}
            </div>
          )}
          <label
            className={`flex items-center justify-center w-full h-32 px-4 transition bg-gray-50 border-2 ${
              errors.images ? 'border-red-500' : 'border-gray-300'
            } border-dashed rounded-md cursor-pointer hover:border-blue-500 ${
              imageFiles.length >= 5 ? 'opacity-50 cursor-not-allowed' : ''
            }`}
          >
            <div className="flex flex-col items-center space-y-2">
              <Upload className="w-6 h-6 text-gray-500" />
              <span className="font-medium text-gray-600">
                Drop images or <span className="text-blue-600 underline ml-1">browse</span>
              </span>
              <span className="text-xs text-gray-500">
                {imageFiles.length >= 5
                  ? 'Maximum 5 images reached'
                  : `Upload up to 5 images (${imageFiles.length}/5)`}
              </span>
            </div>
            <input
              type="file"
              accept="image/*"
              multiple
              onChange={handleImageChange}
              className="hidden"
              disabled={imageFiles.length >= 5}
            />
          </label>
          {errors.images && <p className="text-red-500 text-xs mt-1">{errors.images}</p>}
        </div>

        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-2">Upload PDF*</label>
          <input
            type="file"
            accept="application/pdf"
            onChange={handlePdfChange}
            className={`block w-full text-sm text-gray-900 border rounded cursor-pointer focus:outline-none ${
              errors.pdf ? 'border-red-500' : 'border-gray-300'
            }`}
          />
          {errors.pdf && <p className="text-red-500 text-xs mt-1">{errors.pdf}</p>}
          {pdfFile && (
            <p className="text-sm text-green-600 mt-2">
              Selected File: <strong>{pdfFile.name}</strong>
            </p>
          )}
        </div>

        <div>
          <button
            type="submit"
            disabled={loading}
            className={`w-full flex justify-center py-3 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700 focus:ring-2 focus:ring-blue-500 ${
              loading ? 'opacity-70 cursor-not-allowed' : ''
            }`}
          >
            {loading ? (
              <>
                <svg className="animate-spin -ml-1 mr-3 h-5 w-5 text-white" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24">
                  <circle className="opacity-25" cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4"></circle>
                  <path className="opacity-75" fill="currentColor" d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 7.938l3-2.647z"></path>
                </svg>
                Processing...
              </>
            ) : success ? (
              <>
                <CheckCircle className="w-5 h-5 mr-2" />
                Success! Add Another
              </>
            ) : (
              'Add Course'
            )}
          </button>
        </div>

        <ToastContainer position="top-right" autoClose={3000} />
      </form>
    </div>
  );
};

export default WhatsNew;
