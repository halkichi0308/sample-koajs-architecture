create table user_accounts (
    id integer primary key auto_increment
    ,code text unique not null
    ,roll_id integer not null
);

