select p.*, u.name as author
from posts p 
join users u 
on p.user_id = u.id 
order by points desc;