select p.*, u.name as author
from posts p 
join users u 
on p.user_id = u.id 
where auth_id = $1;