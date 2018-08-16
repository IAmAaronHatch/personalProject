delete from comments
where id = $1;

select c.*, u.name as author
from comments c 
join users u
on c.commenter_id = u.id
join posts p 
on c.posts_id = p.id
where posts_id = $2