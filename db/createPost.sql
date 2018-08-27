insert into posts (
    user_id, title, content, picture
) values (
    ${user_id}, ${title}, ${content}, ${picture}
);

select p.*, u.name as author
from posts p 
join users u 
on p.user_id = u.id ;