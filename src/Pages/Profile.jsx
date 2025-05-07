import {
  collection,
  limit,
  onSnapshot,
  orderBy,
  query,
} from "firebase/firestore";
import React, { useState, useEffect } from "react";
import { db } from "../config/firebase";
import { FiHeart, FiMessageCircle, FiShare2 } from "react-icons/fi";
import { formatDistanceToNow } from "date-fns";
import { motion } from "framer-motion";
import { FaCirclePlus } from "react-icons/fa6";
// import ProfileImage from "./ProfileImage";
import { Link } from "react-router-dom";
import { doc, updateDoc, increment } from "firebase/firestore";

const Profile = () => {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  const handleLike = async (postId) => {
    const postRef = doc(db, "posts", postId); // Adjust collection name if different

    try {
      await updateDoc(postRef, {
        likes: increment(1), // Increase likes by 1
      });
      console.log("Like updated");

      // Update the state locally without re-fetching all posts
      setPosts((prevPosts) =>
        prevPosts.map((post) =>
          post.id === postId
            ? { ...post, postLikes: post.postLikes + 1 } // Update the like count
            : post
        )
      );
    } catch (err) {
      console.error("Error updating like:", err);
    }
  };

  useEffect(() => {
    const q = query(
      collection(db, "posts"),
      orderBy("postTime", "desc"),
      limit(100)
    );

    const unsubscribe = onSnapshot(q, (snapshot) => {
      const postData = snapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));
      setPosts(postData);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  if (loading) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-base-200">
        <div className="loading loading-spinner text-primary"></div>
      </div>
    );
  }

  return (
    <div className="space-y-6">
      {/* Create Post Button */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        className="card bg-base-100 shadow-xl"
      >
        <div className="card-body p-4">
          <div className="flex items-center gap-3">
            <div className="avatar placeholder">
              <div className="bg-neutral text-neutral-content rounded-full w-12">
                <span className="text-lg">{/* <ProfileImage /> */}</span>
              </div>
            </div>
            <button className="btn btn-ghost flex-1 justify-start text-gray-400 hover:bg-base-300/50 border border-white">
              What's on your mind?
            </button>
            <button className="btn">
              <Link to="/AddNewPost" className="flex items-center">
                <FaCirclePlus />
                <p className="px-2">Add New Post</p>
              </Link>
            </button>
          </div>
        </div>
      </motion.div>

      {/* Posts List */}
      {posts.length === 0 ? (
        <div className="text-center text-gray-400 py-12">
          No posts available. Be the first to share something!
        </div>
      ) : (
        posts.map((post) => (
          <motion.div
            key={post.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="card bg-base-100 shadow-xl"
          >
            <div className="card-body p-4">
              {/* Post Header */}
              <div className="flex items-center gap-3 mb-4">
                <div className="avatar placeholder">
                  <div className="bg-neutral text-neutral-content rounded-full w-12">
                    <span className="text-lg">
                      {/* <ProfileImage /> */}

                      {post.username?.charAt(0).toUpperCase()}
                    </span>
                  </div>
                </div>
                <div>
                  <h2 className="font-semibold text-gray-300">
                    {post.username}
                  </h2>
                  <p className="text-xs text-gray-400">
                    {post.postTime &&
                      formatDistanceToNow(post.postTime.toDate(), {
                        addSuffix: true,
                      })}
                  </p>
                </div>
              </div>

              {/* Post Caption */}
              <p className="mb-4 whitespace-pre-line text-gray-300">
                {post.postCaption}
              </p>

              {/* Post Image */}
              {post.postImage && (
                <div className="relative rounded-xl overflow-hidden">
                  <img
                    src={post.postImage}
                    alt="Post content"
                    className="w-full h-auto object-cover"
                    loading="lazy"
                  />
                </div>
              )}

              {/* Post Actions */}
              {/* Post Actions */}
              <div className="flex items-center justify-between mt-4 px-2">
                <div className="flex items-center gap-4">
                  <button
                    onClick={() => handleLike(post.id)} // Call handleLike when clicked
                    className="btn btn-ghost btn-sm gap-2 hover:bg-base-300/50"
                  >
                    <FiHeart className="w-5 h-5 text-red-400" />
                    <span className="text-gray-400">
                      {post.likes || 0}
                    </span>{" "}
                    {/* Display likes */}
                  </button>
                  <button className="btn btn-ghost btn-sm gap-2 hover:bg-base-300/50">
                    <FiMessageCircle className="w-5 h-5 text-blue-400" />
                    <span className="text-gray-400">Comment</span>
                  </button>
                </div>
                <button className="btn btn-ghost btn-sm hover:bg-base-300/50">
                  <FiShare2 className="w-5 h-5 text-green-400" />
                </button>
              </div>
            </div>
          </motion.div>
        ))
      )}
    </div>
  );
};

export default Profile;
