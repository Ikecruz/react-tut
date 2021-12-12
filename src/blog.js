const blogList = ({ blogs }) => {
    // const blogs = props.blogs;

    return (
        <div>
            {
                blogs.map((blog) => (
                    <div className="">
                        <p>{blog.title}</p>
                        <p>{blog.main}</p>
                    </div>
                ))
            }
        </div>

    )
}

export default blogList