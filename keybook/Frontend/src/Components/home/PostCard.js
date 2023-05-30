export const PostCard = ({ postId, linkId, avatar, name, lastName, content }) => {

  return (
    <>
      <div className="default-card" key={postId}>
        <div className="post-author">
          <a href={`/profile/${linkId}`}>
          <img src={avatar}  className="avatar"/>
          </a>
          <h3>{name} {lastName} </h3>
        </div>
        <p className="post-content">{content}</p>
      </div>
    </>
  );
}

