
update posts
set content = $1
where id = $2;

select * from posts;
-- select p.*, u.name as author
-- from posts p 
-- join users u 
-- on p.user_id = u.id 
-- where id = $3;