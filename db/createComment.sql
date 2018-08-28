insert into comments (
    posts_id, commenter_id, comment
) values (
    ${postId}, ${commenter_id}, ${comment}
);

select * from comments;