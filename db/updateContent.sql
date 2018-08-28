
update posts
set content = $1
where id = $2;

select * from posts;
