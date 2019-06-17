create table qa_databases (
    id integer primary key auto_increment
    ,code varchar(255) unique not null
    ,title varchar(255) unique not null
    ,category_id integer not null
    ,consulter_id integer not null
    ,answerer_id integer not null
    ,question text not null
    ,answer text not null
    ,created_at datetime not null default current_timestamp 
    ,modified_at datetime default current_timestamp on update current_timestamp
);

