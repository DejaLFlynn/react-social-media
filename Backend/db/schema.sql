DROP DATABASE IF EXISTS click_db;
CREATE DATABASE click_db;

\c click_db;

DROP TABLE IF EXISTS users;
DROP TABLE IF EXISTS pictures;
DROP TABLE IF EXISTS hashtags;
DROP TABLE IF EXISTS votes;

CREATE TABLE users (
   id serial Primary Key,
   fullname text,
   username text Not Null unique,
   email text NOT NULL UNIQUE,
   age Int,
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
   picture_id Int REFERENCES pictures(id) ON DELETE CASCADE,
   body text
);

CREATE TABLE votes (
   id serial Primary Key,
   voter_id Int REFERENCES users(id),
   picture_id Int REFERENCES pictures(id) ON DELETE SET NULL
);

INSERT INTO users (fullname, username, email, age, profile_pic)
   VALUES 
   ('Deja Flynn','dejaf', 'dejaflynn@pursuit.org', 30, 'https://img.gadgethacks.com/img/68/44/63703994759508/0/change-your-profile-picture-display-name-for-imessage-ios-13.w1456.jpg'),  
   ('Nílber Remón', 'nilberr', 'nilberremon@pursuit.org', 125, 'https://i1.sndcdn.com/artworks-000200690435-zz758s-t500x500.jpg'),
   ('Ashya Manning','ashyam', 'ashyamanning@pursuit.org', 27, 'https://qph.fs.quoracdn.net/main-qimg-217015358349186e0e382cb15c5d7c63'),
   ('Karen Morisset','karenm', 'karenmorisset@pursuit.org', 21, 'https://s3.amazonaws.com/images.seroundtable.com/google-social-knowledge-1561549945.jpg');

INSERT INTO pictures (user_id, picture)
   VALUES 
   (1, 'https://media3.giphy.com/media/I6nz63jvjod44/giphy.gif'),
   (1, 'https://media3.giphy.com/media/wW95fEq09hOI8/giphy.gif'),
   (2, 'https://www.rd.com/wp-content/uploads/2019/09/GettyImages-1126205831.jpg'),
   (2, 'https://www.rd.com/wp-content/uploads/2019/09/GettyImages-599966138-767x514.jpg'),
   (3, 'https://www.rd.com/wp-content/uploads/2019/09/GettyImages-171582169.jpg'),
   -- 6
   (3, 'https://www.rd.com/wp-content/uploads/2019/09/GettyImages-1058317014-760x506.jpg'),
   (4, 'https://media2.giphy.com/media/K0ZZjkjYKiD7y/giphy.gif'),
   (4, 'https://ichef.bbci.co.uk/news/976/cpsprodpb/D6E6/production/_109241055_mediaitem109241054.jpg'),
   (2, 'https://www.sheknows.com/wp-content/uploads/2018/08/psyyqkxg08z2lousgib9.gif'),
   (4, 'https://media.giphy.com/media/BcFuckdngP0ly/giphy.gif'),
   -- 11
   (4, 'https://quotationsquotes.com/wp-content/uploads/2015/09/Top-15-Very-Funny-Cat-GIFs-most-shared.gif'),
   (4, 'https://media.giphy.com/media/h5ucthNBNJID3A1e0W/giphy.gif'),
   (1, 'https://media0.giphy.com/media/1GrsfWBDiTN60/giphy.gif'),
   (1, 'https://media0.giphy.com/media/ND6xkVPaj8tHO/giphy.gif'),
   (1, 'https://thumbs.gfycat.com/AgreeableDaringHalcyon-size_restricted.gif');
   -- 16
   -- (1, 'https://media0.giphy.com/media/ND6xkVPaj8tHO/giphy.gif'),
   -- (1, 'https://media0.giphy.com/media/ND6xkVPaj8tHO/giphy.gif'),
   -- (1, 'https://media0.giphy.com/media/ND6xkVPaj8tHO/giphy.gif'),
   -- (1, 'https://media0.giphy.com/media/ND6xkVPaj8tHO/giphy.gif'),
   -- (1, 'https://media0.giphy.com/media/ND6xkVPaj8tHO/giphy.gif'),
   -- 21
   -- (2, 'https://media0.giphy.com/media/ND6xkVPaj8tHO/giphy.gif'),
   -- (2, 'https://media0.giphy.com/media/ND6xkVPaj8tHO/giphy.gif'),
   -- (2, 'https://media0.giphy.com/media/ND6xkVPaj8tHO/giphy.gif'),
   -- (2, 'https://media0.giphy.com/media/ND6xkVPaj8tHO/giphy.gif'),
   -- (2, 'https://media0.giphy.com/media/ND6xkVPaj8tHO/giphy.gif'),
   -- --26
   -- (2, 'https://media0.giphy.com/media/ND6xkVPaj8tHO/giphy.gif'),
   -- (3, 'https://media0.giphy.com/media/ND6xkVPaj8tHO/giphy.gif'),
   -- (3, 'https://media0.giphy.com/media/ND6xkVPaj8tHO/giphy.gif'),
   -- (3, 'https://media0.giphy.com/media/ND6xkVPaj8tHO/giphy.gif'),
   -- (3, 'https://media0.giphy.com/media/ND6xkVPaj8tHO/giphy.gif'),
   -- --31
   -- (3, 'https://media0.giphy.com/media/ND6xkVPaj8tHO/giphy.gif'),
   -- (3, 'https://media0.giphy.com/media/ND6xkVPaj8tHO/giphy.gif'),
   -- (3, 'https://media0.giphy.com/media/ND6xkVPaj8tHO/giphy.gif'),
   -- (3, 'https://media0.giphy.com/media/ND6xkVPaj8tHO/giphy.gif');


INSERT INTO hashtags (picture_id, body)
   VALUES 
   (1, 'whatchaulooking@'),
   (1, 'possessdog'),
   (2, 'funny'),
   (3, 'funnysquirrel'),
   (3, 'funny'),
   (3, 'OMG'),
   (4, 'funny'),
   (4, 'crazyhorse'),
   (4, 'bigmouth'),
   (5, 'possesskid'),
   (5, 'dad'),
   (5, 'whosleepsthathard?'),
   (6, 'funny'),
   (6, 'bossbaby'),
   (6, 'babybeenherebefore'),
   (7, 'wtf'),
   (7, 'funnyhorse'),
   (8, 'thematrix'),
   (9, 'election'),
   (9, 'biden'),
   (9, 'fail'),
   (10, 'itshandled'),
   (11, 'whogotthebestshimmy?'),
   (12, 'meafterthesocialmediaproject?'),
   (13, 'itsmybirthday'),
   (13, 'vacayfromthekids'),
   (12, 'afterfixedabug'),
   (14, 'touchmymoneyagain'),
   (14, 'staywoke...dontplaywitmymoney'),
   (15, 'jumponit');
   -- (14, 'staywoke...dontplaywitmymoney'),
   -- (14, 'staywoke...dontplaywitmymoney'),
   -- (14, 'staywoke...dontplaywitmymoney'),
   -- (14, 'staywoke...dontplaywitmymoney'),
   -- (14, 'staywoke...dontplaywitmymoney'),
   -- (14, 'staywoke...dontplaywitmymoney'),
   -- (14, 'staywoke...dontplaywitmymoney');

INSERT INTO votes (voter_id, picture_id)
   VALUES 
   (1, 2),
   (1, 4),
   (2, 2),
   (2, 6),
   (2, 8),
   (3, 2),
   (4, 1),
   (4, 1),
   (3, 6),
   (1, 6),
   (3, 3),
   (1, 9),
   (2, 9),
   (3, 9),
   (4, 9),
   (4, 11),
   (4, 8),
   (2, 9),
   (2, 11),
   (3, 11),
   (2, 11),
   (3, 12),
   (2, 12),
   (1, 12),
   (1, 15),
   (3, 14),
   (2, 14),
   (4, 14),
   (4, 12);

