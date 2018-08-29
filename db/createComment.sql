insert into comments (
    posts_id, commenter_id, comment
) values (
    ${postId}, ${commenter_id}, ${comment}
);

select c.*, u.id as user_id, u.name as commenter, u.profile_pic from comments c
join users u
on u.id = c.commenter_id
where c.posts_id = ${postId}
order by c.id desc;