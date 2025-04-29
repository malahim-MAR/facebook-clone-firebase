import React, { useState } from "react";
import { compose } from "redux";

const NewPost = () => {
  const [name, setName] = useState("");
  const [caption, setCaption] = useState("");
  const [image, setImage] = useState("");
  const [like, setlike] = useState(0);

  const handlePost = (e) => {
    e.preventDefault();
    console.log(name);
    console.log(caption);
    console.log(image);
    console.log(like);
    const postDocument = [
      {
        name,
        caption,
        image,
        like,
      },
    ];
    console.log(postDocument);
  };

  return (
    <>
      <div className="AddNewPost">
        <form>
          <input
            type="text"
            placeholder="Enter Your Name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <input
            type="text"
            placeholder="Enter Your Post Description/Caption"
            value={caption}
            onChange={(e) => setCaption(e.target.value)}
          />
          <input
            type="text"
            placeholder="Paste Your Post Image URL"
            value={image}
            onChange={(e) => setImage(e.target.value)}
          />
          <br />
          <button onClick={handlePost}>Publish Your Post</button>
        </form>
      </div>
    </>
  );
};

export default NewPost;
