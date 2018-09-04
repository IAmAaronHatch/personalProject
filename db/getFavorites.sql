select p.*, u.name as author from favorites f
join posts p
on p.id = f.post_id
join users u 
on p.user_id = u.id
where f.user_id = $1