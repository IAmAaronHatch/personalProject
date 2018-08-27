update posts
set title = $1
where id = $2;

select * from posts;
