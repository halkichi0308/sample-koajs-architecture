create database dev;

create table if not exists dev.counsel(
    id int NOT NULL UNIQUE PRIMARY KEY AUTO_INCREMENT,
    title text,
    user int NOT NULL default 0,
    create_date date NOT NULL default '1990/01/01'
);

insert into dev.counsel(
  title
)values(
  'test_title'
);