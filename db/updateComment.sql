update comments
set comment = $1
where id = $2;

select c.*, u.name as author
from comments c 
join users u
on c.commenter_id = u.id
join posts p 
on c.posts_id = p.id
where posts_id = $3