import React, { useState, useEffect } from "react";
import NewPost from "./NewPost";
import PostFeed from "./PostFeed";
import { url } from "../../utils/url";
import Pagination from "react-js-pagination";

//Post lists showing own posts and posts of users we follow

function PostList() {
  const [posts, setPosts] = useState([]);
  const [postAdded, setPostAdded] = useState([]);
  const [activePage, setActivePage] = useState(1);
  const [totalItemsCount, setTotalItemsCount] = useState(0);
  const itemsCountPerPage = 4;
  const loggedId = localStorage.getItem("userId");

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await fetch(url + `posts/feed/${loggedId}`);
        const data = await response.json();        
        setPosts(data);
        setTotalItemsCount(data.length);
      } catch (error) {
        alert("Error de servidor");
        console.error(error);
      }
    };
    fetchPosts();
  }, [postAdded]);

  //Pagination and limits
  const handlePageChange = (pageNumber) => {    
    setActivePage(pageNumber);
  };

  const indexOfLastItem = activePage * itemsCountPerPage;
  const indexOfFirstItem = indexOfLastItem - itemsCountPerPage;
  const currentItems = posts.slice(indexOfFirstItem, indexOfLastItem);

  return (
    <>
      <NewPost setPostAdded={setPostAdded} />
      <PostFeed posts={currentItems} postAdded={postAdded} />
      <div className="pagination-wrapper">
        <Pagination
          activePage={activePage}
          itemsCountPerPage={itemsCountPerPage}
          totalItemsCount={totalItemsCount}
          pageRangeDisplayed={5}
          onChange={handlePageChange}
          itemClass="page-item"
          linkClass="page-link"
        />
      </div>
    </>
  );
}

export default PostList;
