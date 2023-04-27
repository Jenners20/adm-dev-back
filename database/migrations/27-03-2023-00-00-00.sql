create table developer(
developer_id int8 primary key,
developer_name varchar(256)not null, 
developer_company varchar(256) not null,
certification_id int8,
email varchar(256),
phone varchar(256),
POS boolean,
program_name varchar(256),
independent boolean not null,
start_date date,
last_date date
)

create table integration(
integration_id int8 primary key,
developer_id int8 references developer (developer_id),
company_name varchar(256)not null,
service_type varchar(256) not null,
status varchar(256),
production_date date,
start_lab_date date,
end_lab_date date
)

create table users(
user_id int8 primary key,
user_name varchar(60) not null,
user_type varchar(80),
username varchar(80),
user_password varchar(90)
)