// // import React, { useState } from 'react';
// // import axios from 'axios';

// // const Course = () => {
// //   const [input, setInput] = useState({
// //     Seat: "",
// //     Semester: "",
// //     Coursename: "",
// //     StateCourse: "",
// //     Price: "",
// //     Instructor: "",
// //     Durations: "",
// //     Lessons: "",
// //     TotalStudent: "",
// //     language: "",
// //     Certification: "",
// //     CourseDescription: "",
// //     InstructorCourse: "",
// //     Review: "",
// //     TrainerName: "",
// //     LastDate: "",
// //   });
// //   const [imageFiles, setImageFiles] = useState([])

// //     const handleImageChange = (e) => {
// //     const files = Array.from(e.target.files)

// //     if (files.length + imageFiles.length > 5) {
// //       setError('You can upload a maximum of 5 images')
// //       return
// //     }

// //     setImageFiles((prev) => [...prev, ...files.slice(0, 5 - prev.length)])
// //     setError('')

// //     const newPreviews = []
// //     files.slice(0, 5 - imageFiles.length).forEach((file) => {
// //       const reader = new FileReader()
// //       reader.onload = (e) => {
// //         newPreviews.push(e.target.result)
// //         if (
// //           newPreviews.length === files.length ||
// //           newPreviews.length === 5 - imageFiles.length
// //         ) {
// //           setImagePreviews((prev) => [...prev, ...newPreviews])
// //         }
// //       }
// //       reader.readAsDataURL(file)
// //     })
// //   }

// //   const removeImage = (index) => {
// //     setImageFiles((prev) => prev.filter((_, i) => i !== index))
// //     setImagePreviews((prev) => prev.filter((_, i) => i !== index))
// //   }

// //      if (imageFiles.length === 0) {
// //       setError('Please upload at least one image')
// //       return
// //     }

// //     setError('')
// //     setLoading(true)
// //     setSuccess(false)

// //     const formData = new FormData()
// //     formData.append('URL', url)
// //     imageFiles.forEach((file) => formData.append('images', file))



// //   const handleInput = (e) => {
// //     const { name, value } = e.target;
// //     setInput((values) => ({ ...values, [name]: value }));
// //   };

// //   const handleSubmit = async (e) => {
// //     e.preventDefault();
// //     try {
// //       const api = 'http://localhost:8000/api/course';

// //       const response = await axios.post(api, input);
// //       console.log(response.data);
// //       alert("Registration successful!");
// //       // navigate("/login"); // Uncomment if using react-router
// //     } catch (error) {
// //       console.error(error);
// //       alert("Registration failed. Please try again.");
// //     }
// //   };

// //   return (
// //     <form
// //       onSubmit={handleSubmit}
// //       className="w-full max-w-xl mx-auto p-8 bg-gray-100 rounded-lg shadow-md"
// //     >
// //       <h2 className="text-2xl font-bold mb-6 text-center">Course Registration</h2>

// //       <div className="mb-4">
// //         <label className="block mb-1 font-medium">Course Name</label>
// //         <input
// //           type="text"
// //           name="Coursename"
// //           value={input.Coursename}
// //           onChange={handleInput}
// //           className="w-full p-2 border border-gray-300 rounded"
// //         />
// //       </div>


// //           <div className="mb-4">
// //         <label className="block mb-1 font-medium">Semester</label>
// //         <input
// //           type="number"
// //           name="Semester"
// //           value={input.Semester}
// //           onChange={handleInput}
// //           className="w-full p-2 border border-gray-300 rounded"
// //         />
// //       </div>

// //       <div className="mb-4">
// //         <label className="block mb-1 font-medium">State Course</label>
// //         <input
// //           type="text"
// //           name="StateCourse"
// //           value={input.StateCourse}
// //           onChange={handleInput}
// //           className="w-full p-2 border border-gray-300 rounded"
// //         />
// //       </div>

// //       <div className="mb-4">
// //         <label className="block mb-1 font-medium">Price</label>
// //         <input
// //           type="number"
// //           name="Price"
// //           value={input.Price}
// //           onChange={handleInput}
// //           className="w-full p-2 border border-gray-300 rounded"
// //         />
// //       </div>

// //       <div className="mb-4">
// //         <label className="block mb-1 font-medium">Instructor</label>
// //         <input
// //           type="text"
// //           name="Instructor"
// //           value={input.Instructor}
// //           onChange={handleInput}
// //           className="w-full p-2 border border-gray-300 rounded"
// //         />
// //       </div>

// //       <div className="mb-4">
// //         <label className="block mb-1 font-medium">Durations</label>
// //         <input
// //           type="text"
// //           name="Durations"
// //           value={input.Durations}
// //           onChange={handleInput}
// //           className="w-full p-2 border border-gray-300 rounded"
// //         />
// //       </div>

// //       <div className="mb-4">
// //         <label className="block mb-1 font-medium">Total Students</label>
// //         <input
// //           type="number"
// //           name="TotalStudent"
// //           value={input.TotalStudent}
// //           onChange={handleInput}
// //           className="w-full p-2 border border-gray-300 rounded"
// //         />
// //       </div>

// //       <div className="mb-4">
// //         <label className="block mb-1 font-medium">Language</label>
// //         <input
// //           type="text"
// //           name="language"
// //           value={input.language}
// //           onChange={handleInput}
// //           className="w-full p-2 border border-gray-300 rounded"
// //         />
// //       </div>

// //       <div className="mb-4">
// //         <label className="block mb-1 font-medium">Certification</label>
// //         <input
// //           type="text"
// //           name="Certification"
// //           value={input.Certification}
// //           onChange={handleInput}
// //           className="w-full p-2 border border-gray-300 rounded"
// //         />
// //       </div>

// //       <div className="mb-4">
// //         <label className="block mb-1 font-medium">Course Description</label>
// //         <input
// //           type="text"
// //           name="CourseDescription"
// //           value={input.CourseDescription}
// //           onChange={handleInput}
// //           className="w-full p-2 border border-gray-300 rounded"
// //         />
// //       </div>

// //       <div className="mb-4">
// //         <label className="block mb-1 font-medium">Instructor Course</label>
// //         <input
// //           type="text"
// //           name="InstructorCourse"
// //           value={input.InstructorCourse}
// //           onChange={handleInput}
// //           className="w-full p-2 border border-gray-300 rounded"
// //         />
// //       </div>

// //       <div className="mb-4">
// //         <label className="block mb-1 font-medium">Review</label>
// //         <input
// //           type="text"
// //           name="Review"
// //           value={input.Review}
// //           onChange={handleInput}
// //           className="w-full p-2 border border-gray-300 rounded"
// //         />
// //       </div>

// //       <div className="mb-6">
// //         <label className="block mb-1 font-medium">Last Date</label>
// //         <input
// //           type="date"
// //           name="LastDate"
// //           value={input.LastDate}
// //           onChange={handleInput}
// //           className="w-full p-2 border border-gray-300 rounded"
// //         />
// //       </div>


// //         <div className="mb-4">
// //               <label className="block text-sm font-medium text-gray-700 mb-2">Banner Images</label>
      
// //               {imagePreviews.length > 0 && (
// //                 <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-4">
// //                   {imagePreviews.map((preview, index) => (
// //                     <div key={index} className="relative group">
// //                       <img
// //                         src={preview}
// //                         alt={`Preview ${index + 1}`}
// //                         className="h-24 w-24 object-cover rounded-md border border-gray-300"
// //                       />
// //                       <button
// //                         type="button"
// //                         onClick={() => removeImage(index)}
// //                         className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
// //                       >
// //                         <X size={16} />
// //                       </button>
// //                     </div>
// //                   ))}
// //                 </div>
// //               )}
      
// //               {/* Upload Button */}
// //               <label
// //                 className={`flex items-center justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-primary-500 focus:outline-none ${
// //                   imageFiles.length >= 5 ? 'opacity-50 cursor-not-allowed' : ''
// //                 }`}
// //               >
// //                 <div className="flex flex-col items-center space-y-2">
// //                   <Upload className="w-6 h-6 text-gray-500" />
// //                   <span className="font-medium text-gray-600">
// //                     Drop files or
// //                     <span className="text-primary-600 underline ml-1">browse</span>
// //                   </span>
// //                   <span className="text-xs text-gray-500">
// //                     {imageFiles.length >= 5
// //                       ? 'Maximum 5 images reached'
// //                       : `Upload up to 5 images (${imageFiles.length}/5)`}
// //                   </span>
// //                 </div>
// //                 <input
// //                   type="file"
// //                   name="images"
// //                   accept="image/*"
// //                   multiple
// //                   onChange={handleImageChange}
// //                   className="hidden"
// //                   disabled={imageFiles.length >= 5}
// //                 />
// //               </label>
// //             </div>
      

// //       <button type="submit" className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition">
// //         Submit
// //       </button>
// //     </form>
// //   );
// // };

// // export default Course;


// import React, { useState } from 'react';
// import axios from 'axios';
// import { Upload, X } from 'lucide-react';

// const Course = () => {
//   const [input, setInput] = useState({
//     Seat: '',
//     Semester: '',
//     Coursename: '',
//     StateCourse: '',
//     Price: '',
//     Instructor: '',
//     Durations: '',
//     Lessons: '',
//     TotalStudent: '',
//     language: '',
//     Certification: '',
//     CourseDescription: '',
//     InstructorCourse: '',
//     Review: '',
//     TrainerName: '',
//     LastDate: '',
//   });

//   const [imageFiles, setImageFiles] = useState([]);
//   const [imagePreviews, setImagePreviews] = useState([]);
//   const [error, setError] = useState('');
//   const [loading, setLoading] = useState(false);
//   const [success, setSuccess] = useState(false);

//   const handleInput = (e) => {
//     const { name, value } = e.target;
//     setInput((prev) => ({ ...prev, [name]: value }));
//   };

//   const handleImageChange = (e) => {
//     const files = Array.from(e.target.files);
//     if (files.length + imageFiles.length > 5) {
//       setError('You can upload a maximum of 5 images');
//       return;
//     }

//     const newPreviews = [];
//     files.slice(0, 5 - imageFiles.length).forEach((file) => {
//       const reader = new FileReader();
//       reader.onload = (event) => {
//         newPreviews.push(event.target.result);
//         if (
//           newPreviews.length === files.length ||
//           newPreviews.length === 5 - imageFiles.length
//         ) {
//           setImagePreviews((prev) => [...prev, ...newPreviews]);
//         }
//       };
//       reader.readAsDataURL(file);
//     });

//     setImageFiles((prev) => [...prev, ...files.slice(0, 5 - prev.length)]);
//     setError('');
//   };

//   const removeImage = (index) => {
//     setImageFiles((prev) => prev.filter((_, i) => i !== index));
//     setImagePreviews((prev) => prev.filter((_, i) => i !== index));
//   };

//   const handleSubmit = async (e) => {
//     e.preventDefault();

//     if (imageFiles.length === 0) {
//       setError('Please upload at least one image');
//       return;
//     }

//     setError('');
//     setLoading(true);
//     setSuccess(false);

//     const formData = new FormData();
//     Object.entries(input).forEach(([key, value]) => {
//       formData.append(key, value);
//     });

//     imageFiles.forEach((file) => formData.append('images', file));

//     try {
//       const api = 'http://localhost:8000/api/course';
//       const response = await axios.post(api, formData, {
//         headers: { 'Content-Type': 'multipart/form-data' },
//       });

//       console.log(response.data);
//       alert('Course registration successful!');
//       setSuccess(true);
//       setInput({});
//       setImageFiles([]);
//       setImagePreviews([]);
//     } catch (err) {
//       console.error(err);
//       alert('Course registration failed.');
//     } finally {
//       setLoading(false);
//     }
//   };

//   return (
//     <form
//       onSubmit={handleSubmit}
//       className="w-full max-w-xl mx-auto p-8 bg-gray-100 rounded-lg shadow-md"
//     >
//       <h2 className="text-2xl font-bold mb-6 text-center">Course Registration</h2>

//       {Object.keys(input).map((key) => (
//         <div className="mb-4" key={key}>
//           <label className="block mb-1 font-medium capitalize">{key}</label>
//           <input
//             type={key === 'Price' || key === 'Semester' || key === 'TotalStudent' ? 'number' : key === 'LastDate' ? 'date' : 'text'}
//             name={key}
//             value={input[key]}
//             onChange={handleInput}
//             className="w-full p-2 border border-gray-300 rounded"
//           />
//         </div>
//       ))}

//       <div className="mb-4">
//         <label className="block text-sm font-medium text-gray-700 mb-2">Banner Images</label>

//         {imagePreviews.length > 0 && (
//           <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-4">
//             {imagePreviews.map((preview, index) => (
//               <div key={index} className="relative group">
//                 <img
//                   src={preview}
//                   alt={`Preview ${index + 1}`}
//                   className="h-24 w-24 object-cover rounded-md border border-gray-300"
//                 />
//                 <button
//                   type="button"
//                   onClick={() => removeImage(index)}
//                   className="absolute -top-2 -right-2 bg-red-500 text-white rounded-full p-1 shadow-sm opacity-0 group-hover:opacity-100 transition-opacity"
//                 >
//                   <X size={16} />
//                 </button>
//               </div>
//             ))}
//           </div>
//         )}

//         <label
//           className={`flex items-center justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-primary-500 focus:outline-none ${
//             imageFiles.length >= 5 ? 'opacity-50 cursor-not-allowed' : ''
//           }`}
//         >
//           <div className="flex flex-col items-center space-y-2">
//             <Upload className="w-6 h-6 text-gray-500" />
//             <span className="font-medium text-gray-600">
//               Drop files or <span className="text-primary-600 underline ml-1">browse</span>
//             </span>
//             <span className="text-xs text-gray-500">
//               {imageFiles.length >= 5
//                 ? 'Maximum 5 images reached'
//                 : `Upload up to 5 images (${imageFiles.length}/5)`}
//             </span>
//           </div>
//           <input
//             type="file"
//             name="images"
//             accept="image/*"
//             multiple
//             onChange={handleImageChange}
//             className="hidden"
//             disabled={imageFiles.length >= 5}
//           />
//         </label>
//       </div>

//       {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

//       <button
//         type="submit"
//         disabled={loading}
//         className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
//       >
//         {loading ? 'Submitting...' : 'Submit'}
//       </button>
//     </form>
//   );
// };

// export default Course;



import React, { useState } from 'react';
import axios from 'axios';
import { Upload, X } from 'lucide-react';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

const Course = () => {
  const [input, setInput] = useState({
    Seat: '',
    Semester: '',
    Coursename: '',
    StateCourse: '',
    Price: '',
    Instructor: '',
    Durations: '',
    Lessons: '',
    TotalStudent: '',
    language: '',
    Certification: '',
    CourseDescription: '',
    InstructorCourse: '',
    Review: '',
    TrainerName: '',
    LastDate: '',
  });

  const [imageFiles, setImageFiles] = useState([]);
  const [imagePreviews, setImagePreviews] = useState([]);
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleInput = (e) => {
    const { name, value } = e.target;
    setInput((prev) => ({ ...prev, [name]: value }));
  };

  const handleImageChange = (e) => {
    const files = Array.from(e.target.files);
    if (files.length + imageFiles.length > 5) {
      setError('You can upload a maximum of 5 images');
      return;
    }

    const newPreviews = [];
    files.slice(0, 5 - imageFiles.length).forEach((file) => {
      const reader = new FileReader();
      reader.onload = (event) => {
        newPreviews.push(event.target.result);
        if (
          newPreviews.length === files.length ||
          newPreviews.length === 5 - imageFiles.length
        ) {
          setImagePreviews((prev) => [...prev, ...newPreviews]);
        }
      };
      reader.readAsDataURL(file);
    });

    setImageFiles((prev) => [...prev, ...files.slice(0, 5 - prev.length)]);
    setError('');
  };

  const removeImage = (index) => {
    setImageFiles((prev) => prev.filter((_, i) => i !== index));
    setImagePreviews((prev) => prev.filter((_, i) => i !== index));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (imageFiles.length === 0) {
      toast.error('Please upload at least one image');
      return;
    }

    setLoading(true);

    const formData = new FormData();
    Object.entries(input).forEach(([key, value]) => {
      formData.append(key, value);
    });

    imageFiles.forEach((file) => formData.append('images', file));

    try {
      const api = 'http://localhost:8000/api/course';
      const response = await axios.post(api, formData, {
        headers: { 'Content-Type': 'multipart/form-data' },
      });

      toast.success('Course registration successful!');
      setInput({
        Seat: '',
        Semester: '',
        Coursename: '',
        StateCourse: '',
        Price: '',
        Instructor: '',
        Durations: '',
        Lessons: '',
        TotalStudent: '',
        language: '',
        Certification: '',
        CourseDescription: '',
        InstructorCourse: '',
        Review: '',
        TrainerName: '',
        LastDate: '',
      });
      setImageFiles([]);
      setImagePreviews([]);
    } catch (err) {
      console.error(err);
      toast.error('Course registration failed.');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="w-full max-w-5xl mx-auto p-8 bg-gray-100 rounded-lg shadow-md"
    >
      <ToastContainer position="top-center" />
      <h2 className="text-2xl font-bold mb-6 text-center">Course Registration</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        {Object.keys(input).map((key) => (
          <div className="" key={key}>
            <label className="block mb-1 font-medium capitalize">{key}</label>
            <input
              type={
                key === 'Price' || key === 'Semester' || key === 'TotalStudent'
                  ? 'number'
                  : key === 'LastDate'
                  ? 'date'
                  : 'text'
              }
              name={key}
              value={input[key]}
              onChange={handleInput}
              className="w-full p-2 border border-gray-300 rounded"
            />
          </div>
        ))}
      </div>

      <div className="my-6">
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Banner Images
        </label>

        {imagePreviews.length > 0 && (
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4 mb-4">
            {imagePreviews.map((preview, index) => (
              <div key={index} className="relative group">
                <img
                  src={preview}
                  alt={`Preview ${index + 1}`}
                  className="h-24 w-24 object-cover rounded-md border border-gray-300"
                />
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
          className={`flex items-center justify-center w-full h-32 px-4 transition bg-white border-2 border-gray-300 border-dashed rounded-md appearance-none cursor-pointer hover:border-primary-500 focus:outline-none ${
            imageFiles.length >= 5 ? 'opacity-50 cursor-not-allowed' : ''
          }`}
        >
          <div className="flex flex-col items-center space-y-2">
            <Upload className="w-6 h-6 text-gray-500" />
            <span className="font-medium text-gray-600">
              Drop files or <span className="text-primary-600 underline ml-1">browse</span>
            </span>
            <span className="text-xs text-gray-500">
              {imageFiles.length >= 5
                ? 'Maximum 5 images reached'
                : `Upload up to 5 images (${imageFiles.length}/5)`}
            </span>
          </div>
          <input
            type="file"
            name="images"
            accept="image/*"
            multiple
            onChange={handleImageChange}
            className="hidden"
            disabled={imageFiles.length >= 5}
          />
        </label>
      </div>

      {error && <p className="text-red-500 text-sm mb-4">{error}</p>}

      <button
        type="submit"
        disabled={loading}
        className="w-full bg-blue-600 text-white py-2 rounded hover:bg-blue-700 transition"
      >
        {loading ? 'Submitting...' : 'Submit'}
      </button>
    </form>
  );
};

export default Course;
