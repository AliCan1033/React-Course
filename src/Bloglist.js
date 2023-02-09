const Bloglist = ({ blog,author }) => {
    console.log(blog)
    return (
        <div>
            <h1>{author}</h1>
            {blog.map((item) => (
                <div key={item.id} className="blogdiv">
                    <h3>{item.title}</h3>
                    <i>Authot is : {item.author}</i>
                    <p>{item.desc}</p>
                </div>
            ))}
        </div>
    );
}

export default Bloglist;