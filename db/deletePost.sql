delete from comments 
where posts_id = $1;

delete from posts
where id = $1;


select p.*, u.name as author
from posts p 
join users u 
on p.user_id = u.id;