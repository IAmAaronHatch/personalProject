create table users (
    id serial primary key,
    auth_id text,
    username varchar(14),
    email varchar,
    password varchar(16),
    profile_pic text
);

select * from users;

create table posts (
    id serial primary key,
    user_id integer references users,
    title varchar(40),
    content varchar
);

select * from posts;

create table comments (
    id serial primary key,
    posts_id integer references posts,
    commenter_id integer references users,
    comment varchar
);

select * from posts;

create table genre (
    id serial primary key,
    name varchar
);

select * from genre;

create table sub_genre (
    id serial primary key,
    sub_genre_name varchar,
    genre_id int references genre
);

select * from sub_genre;