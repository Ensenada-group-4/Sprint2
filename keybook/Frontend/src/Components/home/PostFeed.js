import React, { useState, useEffect } from "react";
import { url } from "../../utils/url";
import { PostCard } from "./PostCard";

function PostFeed() {
    const [posts, setPosts] = useState([]);
    const loggedId = localStorage.getItem("userId");

    useEffect(() => {
        const fetchPosts = async () => {
            try {
                const response = await fetch(url + `posts/feed/${loggedId}`)
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
            {posts.map((post) => (
                <PostCard
                    key={post.post_id}
                    linkId={post.post_id_user}
                    avatar={`${post.profile_picture}`}
                    name={post.name}
                    lastName={post.last_name}
                    content={post.post_content}
                />
            ))}
        </>
    );
}

export default PostFeed;