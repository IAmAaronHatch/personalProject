select m.*, u.name as messager
from messages m 
join users u 
on m.user_id = u.id 
order by id desc