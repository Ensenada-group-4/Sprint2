import React, { useState, useEffect } from "react";
import { url } from "../../utils/url";
import { PostCard } from "./PostCard";

function PostFeed() {
    const [posts, setPosts] = useState([]);

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(url + "posts/feed")
                const data = await response.json();
                setPosts(data)                         
            } catch (error) {
                alert("Error de servidor")
                console.log(error)
            }
        }
        fetchPosts()
    }, []); 

    return (
        <>
            {/* .slice(0, 5) */}
            {posts.map((post) => (
                console.log(post.post_id_user, post.profile_picture),
                <PostCard
                    key={post.post_id}
                    // href={`profile/${post.post_id_user}`}
                    // src={`${post.profile_picture}`}
                    href={post.post_id_user}
                    src={post.profile_picture}
                    name={post.name}               
                    lastName={post.last_name}
                    content={post.post_content}
                />
            ))}
        </>
    );
}

export default PostFeed;