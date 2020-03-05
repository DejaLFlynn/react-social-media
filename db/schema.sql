DROP DATABASE IF EXISTS click_db;
CREATE DATABASE click_db;

\c click_db;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS pictures;
DROP TABLE IF EXISTS hashtags;
DROP TABLE IF EXISTS votes;

CREATE TABLE users (
   id serial Primary Key,
   username text Not Null unique,
   email text NOT NULL unique,
   profile_pic varchar
);

CREATE TABLE pictures (
   id serial Primary Key,
   user_id Int REFERENCES users(id),
   picture varchar,
   created_at TIMESTAMPTZ DEFAULT Now() 
);

CREATE TABLE hashtags (
   id serial Primary Key,
   picture_id Int REFERENCES pictures(id),
   body varchar
);

CREATE TABLE votes (
   id serial Primary Key,
   voter_id Int REFERENCES users(id),
   picture_id Int REFERENCES pictures(id)
);

INSERT INTO users (username, email, profile_pic)
   VALUES 
   ('dejaf', 'dejaflynn@pursuit.org', 'https://img.gadgethacks.com/img/68/44/63703994759508/0/change-your-profile-picture-display-name-for-imessage-ios-13.w1456.jpg'),  
   ('nilberr', 'nilberremon@pursuit.org', 'https://i1.sndcdn.com/artworks-000200690435-zz758s-t500x500.jpg'),
   ('ashyam', 'ashyamanning@pursuit.org', 'https://qph.fs.quoracdn.net/main-qimg-217015358349186e0e382cb15c5d7c63'),
   ('karenm', 'karenmorisset@pursuit.org', 'https://s3.amazonaws.com/images.seroundtable.com/google-social-knowledge-1561549945.jpg');

INSERT INTO pictures (user_id, picture)
   VALUES 
   (1, 'https://www.rd.com/wp-content/uploads/2019/09/GettyImages-621924830-768x549.jpg'),
   (1, 'https://i.ytimg.com/vi/bzZEH_5OuIs/maxresdefault.jpg'),
   (2, 'https://www.rd.com/wp-content/uploads/2019/09/GettyImages-1126205831.jpg'),
   (2, 'https://www.rd.com/wp-content/uploads/2019/09/GettyImages-599966138-767x514.jpg'),
   (3, 'https://www.rd.com/wp-content/uploads/2019/09/GettyImages-171582169.jpg'),
   (3, 'https://www.rd.com/wp-content/uploads/2019/09/GettyImages-1058317014-760x506.jpg'),
   (4, 'https://digitalsynopsis.com/wp-content/uploads/2017/12/funny-agency-life-creative-designer-copywriter-memes-1.jpg'),
   (4, 'https://ichef.bbci.co.uk/news/976/cpsprodpb/D6E6/production/_109241055_mediaitem109241054.jpg');

INSERT INTO hashtags (picture_id, body)
   VALUES 
   (1, '#possesdog'),
   (1, '#funny'),
   (2, '#crazydog'),
   (3, '#funnysquirrel'),
   (3, '#funny'),
   (3, '#OMG'),
   (4, '#funny'),
   (4, '#crazyhorse'),
   (4, '#bigmouth'),
   (5, '#possesskid'),
   (5, '#dad'),
   (5, '#whosleepsthathard?'),
   (6, '#funny'),
   (6, '#baby'),
   (6, '#babybeenherebefore'),
   (7, '#wtf'),
   (7, '#funnyhorse'),
   (8, '#thematrix');

INSERT INTO votes (voter_id, picture_id)
VALUES 
(1, 2),
(1, 4),
(2, 2),
(2, 6),
(2, 8),
(3, 2),
(4, 2),
(4, 1),
(3, 6),
(1, 6),
(3, 3);

