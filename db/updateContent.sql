
update posts
set content = $1
where id = $2;

slect * from posts;
