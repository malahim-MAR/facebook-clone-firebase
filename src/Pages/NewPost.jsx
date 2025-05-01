// import React, { useState } from "react";
// import { collection, addDoc, serverTimestamp } from "firebase/firestore";
// import { db } from "../config/firebase";
// const NewPost = () => {
//   const [name, setName] = useState("");
//   const [caption, setCaption] = useState("");
//   const [image, setImage] = useState("");
//   const [like, setlike] = useState(0);

//   const [doc, setDoc] = useState([]);

//   const handlePost = async (e) => {
//     e.preventDefault();
//     console.log(name);
//     console.log(caption);
//     console.log(image);
//     console.log(like);
//     const postDocument = {
//       name,
//       caption,
//       image,
//       like,
//     };
//     setDoc(postDocument);
//     console.log(postDocument);

//     try {
//       await addDoc(collection(db, "posts"), {
//         username: name,
//         postCaption: caption,
//         postImage: image,
//         postTime: serverTimestamp(),
//         postLikes: like,
//       });
//     } catch (e) {
//       console.error("Doc Add Error", e);
//     }
//   };

//   return (
//     <>
//       <div className="AddNewPost">
//         <form>
//           <input
//             type="text"
//             placeholder="Enter Your Name"
//             value={name}
//             onChange={(e) => setName(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Enter Your Post Description/Caption"
//             value={caption}
//             onChange={(e) => setCaption(e.target.value)}
//           />
//           <input
//             type="text"
//             placeholder="Paste Your Post Image URL"
//             value={image}
//             onChange={(e) => setImage(e.target.value)}
//           />
//           <br />
//           <button onClick={handlePost}>Publish Your Post</button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default NewPost;
import React, { useState } from "react";
import { collection, addDoc, serverTimestamp } from "firebase/firestore";
import { db } from "../config/firebase";
import { motion } from "framer-motion";
import {
  FiImage,
  FiEdit,
  FiUser,
  FiUploadCloud,
  FiX,
  FiAlertCircle,
} from "react-icons/fi";

const NewPost = () => {
  const [name, setName] = useState("");
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const [error, setError] = useState("");
  const [success, setSuccess] = useState("");
  const [loading, setLoading] = useState(false);
  const [preview, setPreview] = useState("");
  const [touched, setTouched] = useState({
    name: false,
    caption: false,
    image: false,
  });

  const handleImageChange = (e) => {
    const url = e.target.value;
    setImage(url);
    setTouched((prev) => ({ ...prev, image: true }));
    setPreview(url);
  };

  const validateForm = () => {
    const errors = [];
    if (!name.trim()) errors.push("Name is required");
    if (!caption.trim()) errors.push("Caption is required");
    if (!image.trim()) errors.push("Image URL is required");
    if (caption.length > 500) errors.push("Caption exceeds 500 characters");

    setError(errors.join(". "));
    return errors.length === 0;
  };

  const handlePost = async (e) => {
    e.preventDefault();
    setTouched({ name: true, caption: true, image: true });

    if (!validateForm()) return;

    setLoading(true);
    setError("");
    setSuccess("");

    try {
      await addDoc(collection(db, "posts"), {
        username: name,
        postCaption: caption,
        postImage: image,
        postTime: serverTimestamp(),
        postLikes: 0,
      });
      setSuccess("Post published successfully!");
      setName("");
      setCaption("");
      setImage("");
      setPreview("");
      setTouched({ name: false, caption: false, image: false });
      setTimeout(() => setSuccess(""), 3000);
    } catch (e) {
      console.error("Doc Add Error", e);
      setError("Failed to publish post. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-base-200 p-4 md:p-8">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="max-w-2xl mx-auto"
      >
        <div className="card bg-base-100 shadow-xl rounded-2xl overflow-hidden">
          <div className="card-body p-6 md:p-8">
            {/* Header */}
            <div className="flex items-center justify-between mb-6">
              <h2 className="text-2xl font-bold flex items-center gap-2">
                <FiEdit className="text-primary" />
                <span className="text-gray-300">Create Post</span>
              </h2>
              <button className="btn btn-circle btn-ghost btn-sm">
                <FiX className="w-5 h-5" />
              </button>
            </div>

            {/* Error/Success Messages */}
            {error && (
              <div className="alert alert-error mb-4 shadow-lg">
                <FiAlertCircle className="w-6 h-6" />
                <span>{error}</span>
              </div>
            )}

            {success && (
              <div className="alert alert-success mb-4 shadow-lg">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="stroke-current shrink-0 h-6 w-6"
                  fill="none"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"
                  />
                </svg>
                <span>{success}</span>
              </div>
            )}

            <form onSubmit={handlePost} className="space-y-6">
              {/* Name Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text flex items-center gap-2 text-gray-400">
                    <FiUser className="w-5 h-5" />
                    Display Name
                    <span className="text-error">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  className={`input input-bordered ${
                    touched.name && !name.trim() ? "input-error" : ""
                  }`}
                  value={name}
                  onChange={(e) => {
                    setName(e.target.value);
                    setTouched((prev) => ({ ...prev, name: true }));
                  }}
                />
                {touched.name && !name.trim() && (
                  <label className="label">
                    <span className="label-text-alt text-error">
                      <FiAlertCircle className="inline mr-1" />
                      Name is required
                    </span>
                  </label>
                )}
              </div>

              {/* Caption Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text flex items-center gap-2 text-gray-400">
                    <FiEdit className="w-5 h-5" />
                    Post Caption
                    <span className="text-error">*</span>
                  </span>
                </label>
                <textarea
                  placeholder="What's on your mind?"
                  className={`textarea textarea-bordered h-32 ${
                    touched.caption && !caption.trim() ? "textarea-error" : ""
                  }`}
                  value={caption}
                  onChange={(e) => {
                    setCaption(e.target.value);
                    setTouched((prev) => ({ ...prev, caption: true }));
                  }}
                />
                <div className="flex justify-between mt-1">
                  {touched.caption && !caption.trim() ? (
                    <span className="text-error text-sm">
                      <FiAlertCircle className="inline mr-1" />
                      Caption is required
                    </span>
                  ) : (
                    <span className="text-gray-400 text-sm">
                      {caption.length}/500 characters
                    </span>
                  )}
                </div>
              </div>

              {/* Image Input */}
              <div className="form-control">
                <label className="label">
                  <span className="label-text flex items-center gap-2 text-gray-400">
                    <FiImage className="w-5 h-5" />
                    Image URL
                    <span className="text-error">*</span>
                  </span>
                </label>
                <input
                  type="text"
                  placeholder="Paste image URL"
                  className={`input input-bordered ${
                    touched.image && !image.trim() ? "input-error" : ""
                  }`}
                  value={image}
                  onChange={handleImageChange}
                />
                {touched.image && !image.trim() && (
                  <label className="label">
                    <span className="label-text-alt text-error">
                      <FiAlertCircle className="inline mr-1" />
                      Image URL is required
                    </span>
                  </label>
                )}
              </div>

              {/* Image Preview */}
              {preview && (
                <motion.div
                  initial={{ scale: 0.95 }}
                  animate={{ scale: 1 }}
                  className="relative group rounded-xl overflow-hidden border-2 border-dashed border-base-300"
                >
                  <img
                    src={preview}
                    alt="Preview"
                    className="w-full h-64 object-cover rounded-xl"
                    onError={() => setPreview("")}
                  />
                  <button
                    type="button"
                    onClick={() => {
                      setPreview("");
                      setImage("");
                      setTouched((prev) => ({ ...prev, image: false }));
                    }}
                    className="absolute top-2 right-2 btn btn-circle btn-sm btn-ghost bg-base-100/80 hover:bg-base-100"
                  >
                    <FiX className="w-4 h-4" />
                  </button>
                </motion.div>
              )}

              {/* Submit Button */}
              <button
                type="submit"
                className={`btn btn-primary w-full gap-2 text-lg ${
                  loading ? "loading" : ""
                }`}
                disabled={
                  loading || !name.trim() || !caption.trim() || !image.trim()
                }
              >
                {!loading && <FiUploadCloud className="w-6 h-6" />}
                {loading ? "Publishing..." : "Post to Feed"}
              </button>
            </form>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default NewPost;
