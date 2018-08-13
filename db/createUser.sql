insert into users (
    auth_id, name, email, profile_pic
) values (
    ${sub}, ${nickname}, ${email}, ${picture}
) returning *;