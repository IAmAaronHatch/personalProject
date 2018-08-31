select * from favorites f
join posts p
on p.id = f.post_id
where f.user_id = $1