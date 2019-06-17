create table qa_databases (
    id integer primary key auto_increment
    ,code text unique not null
    ,title text unique not null
    ,category_id integer not null
    ,consulter_id integer not null
    ,answerer_id integer not null
    ,question text not null
    ,answer text not null
    ,created_at text not null
);

