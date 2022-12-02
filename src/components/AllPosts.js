// src/components/AllPosts.js

import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import sanityClient from "../client.js";

export default function AllPosts() {
  const [allPostsData, setAllPosts] = useState(null);

  useEffect(() => {
    sanityClient
      .fetch(
        `*[_type == "post"]{
        title,
        slug,
        mainImage{
          asset->{
          _id,
          url
        }
      }
    }`
      )
      .then((data) => setAllPosts(data))
      .catch(console.error);
  }, []);

  return (
    <div>
      <p></p>
      <p></p>
      <p></p>
      <h2>Model Registry</h2>
      <h3>Add model</h3>
      <h3>Register version</h3>
      <h3>Assign stage</h3>
      <h3>View model details</h3>
      <h3>Etc...</h3>
      <h3>Etc...</h3>
      <p></p>
      <p></p>
      <p></p>


      <h2>Blog Posts</h2>
      <h3>Welcome to my blog posts page!</h3>
      <div>
        {allPostsData &&
          allPostsData.map((post, index) => (
            <Link to={"/" + post.slug.current} key={post.slug.current}>
              <span key={index}>
                {/* <img src={post.mainImage.asset.url} alt="" /> */}
                <span>
                  <h2>{post.title}</h2>
                </span>
              </span>
            </Link>
          ))}
      </div>
    </div>
  );
}