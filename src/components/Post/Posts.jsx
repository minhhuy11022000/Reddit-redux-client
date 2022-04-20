import { useSelector } from "react-redux";
import "./Post.css";

const Posts = () => {
    const tags = ["None", "NSFW", "Mood", "Quotes", "Shitpost"];
    const post = useSelector(state => state.post.posts);
    return (
        <>
            <section className="post-container">
                {post.slice(1).map((post, idx) => {
                    return (
                        <div className="posts" key={idx}>
                            <p className="posts-title">{post.title}</p>
                            <p className={`posts-tags-${tags[post.tag]} posts-tags`}>{tags[post.tag]}</p>
                            <p className="posts-description">{post.description}</p>
                        </div>
                    )
                })}
            </section>
        </>
    );
}

export default Posts;