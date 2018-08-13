create table users (
    id serial primary key,
    auth_id text,
    username varchar(14),
    email varchar,
    password varchar(16),
    profile_pic text
);

create table posts (
    id serial primary key,
    user_id integer references users,
    title varchar(40),
    content varchar
);

create table comments (
    id serial primary key,
    posts_id integer references posts,
    commenter_id integer references users,
    comment varchar
);