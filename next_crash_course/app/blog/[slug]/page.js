function BlogPost({ params }) {
  return (
    <>
      <div>BlogPost</div>
      {params.slug}
    </>
  );
}

export default BlogPost;
