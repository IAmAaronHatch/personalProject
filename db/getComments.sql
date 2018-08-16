select c.*, u.name as commenter
from comments c 
join users u
on c.commenter_id = u.id
where posts_id = $1