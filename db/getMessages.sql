select m.*, u.name as messager, u.profile_pic as picture
from messages m 
join users u 
on m.user_id = u.id 
order by id desc