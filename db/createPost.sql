insert into posts (
    user_id, title, content
) values (
    ${user_id}, ${title}, ${content}
);

select p.*, u.name as author
from posts p 
join users u 
on p.user_id = u.id ;