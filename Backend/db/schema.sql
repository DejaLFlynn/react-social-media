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
   (2, 'https://lh3.googleusercontent.com/proxy/iAPVoAv79WBJq2GrHskQNz0dmZ-t_i4qxtXEoTUZ5nFNnrECQ-sZ7RLO7dLtdjbs0Zc8bF7oAfLlNgvQl7xsHDe6w45e8Me5B4CRuvKJWgnHCI5Izxx_XMjtYm-Z'),
   (2, 'https://media.giphy.com/media/3o7qE2VAxuXWeyvJIY/giphy.gif'),
   (3, 'https://stepcdn.com/assets/legacy/c29/tumblr_inline_n9nr687uwn1svbqb0-700x.gif'),
   (3, 'https://media.giphy.com/media/z5WtAAaFpnIgU/giphy.gif'),
   (4, 'https://media2.giphy.com/media/K0ZZjkjYKiD7y/giphy.gif'),
   (4, 'https://media1.tenor.com/images/1f84b096cbe1cc9f3763c803bb17e10e/tenor.gif?itemid=4323138'),
   (2, 'https://www.sheknows.com/wp-content/uploads/2018/08/psyyqkxg08z2lousgib9.gif'),
   (4, 'https://media.giphy.com/media/BcFuckdngP0ly/giphy.gif'),
   (4, 'https://quotationsquotes.com/wp-content/uploads/2015/09/Top-15-Very-Funny-Cat-GIFs-most-shared.gif'),
   (4, 'https://media.giphy.com/media/h5ucthNBNJID3A1e0W/giphy.gif'),
   (1, 'https://media0.giphy.com/media/1GrsfWBDiTN60/giphy.gif'),
   (1, 'https://media0.giphy.com/media/ND6xkVPaj8tHO/giphy.gif'),
   (1, 'https://thumbs.gfycat.com/AgreeableDaringHalcyon-size_restricted.gif'),
   (1, 'https://www.topbestpics.com/wp-content/uploads/2017/04/funny-gifs-funniest-gif-18.gif'),
   (1, 'https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcRBEovsKDneTa3BT5lTWuYxcaV3SdiQ1kKne7qKZ3gNbCGzME4I'),
   (1, 'https://s3.amazonaws.com/barkpost-assets/50+GIFs/43.gif'),
   (1, 'https://acegif.com/wp-content/gifs/dancing-rabbit-4.gif'),
   (1, 'https://media1.giphy.com/media/KAyCDfOolR8hq/source.gif'),
   (2, 'https://thumbs.gfycat.com/DearSoggyGrasshopper-size_restricted.gif'),
   (2, 'https://teamjimmyjoe.com/wp-content/uploads/2018/01/funny-say-what-confusion-lol-baby-child.gif'),
   (2, 'https://media2.giphy.com/media/MLhIi4DoxeUjC/source.gif'),
   (2, 'https://media.tenor.com/images/afd71649b45aaec286abf75779e79e5e/tenor.gif'),
   (2, 'https://media.giphy.com/media/9G3xHnqUItciiZGzXx/giphy.gif'),
   (2, 'https://media.giphy.com/media/YQ1xtJuNmxKNO/giphy.gif'),
   (3, 'https://media.tenor.com/images/fe8512ae693714059981ec0b1787154b/tenor.gif'),
   (3, 'https://media.tenor.com/images/b29b981a9c6b4276fffbad6a1765db17/tenor.gif'),
   (3, 'https://media1.giphy.com/media/mynNuzIEbN2uc/giphy.gif?cid=790b76114df278983e0f1fab33a5aae35714ed01f5c2602d&rid=giphy.gif'),
   (3, 'https://media0.giphy.com/media/l0MYJwgLnbx1oV0nm/source.gif');


INSERT INTO hashtags (picture_id, body)
   VALUES 
   (1, 'whatchaulooking@'),
   (1, 'possessdog'),
   (2, 'funny'),
   (3, 'catwins'),
   (3, 'twerking'),
   (3, 'OMG'),
   (4, 'funny'),
   (4, 'cute'),
   (5, 'wtf'),
   (5, 'mymomdeadlystare'),
   (6, 'asktodoovertime'),
   (7, 'wtf'),
   (7, 'whereshisneck'),
   (8, 'whenfridayishere'),
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
   (15, 'jumponit'),
   (15, 'tiktok'),
   (16, 'meeverymorningforwork'),
   (17, 'onlyglutenfree'),
   (17, 'NOCHOCOLATE!'),
   (18, 'crazydog'),
   (18, 'justleaveIT'),
   (19, 'twerking'),
   (19, 'ImSoHappy!'),
   (19, 'onpayday'),
   (20, 'so...naughty'),
   (20, 'lick....c..clickME'),
   (20, 'definitionoftheapp'),
   (21, 'soexcited'),
   (22, 'whoMe'),
   (23, 'notinthemood'),
   (23, 'angrybaby'),
   (24, 'FAB-U-LOUS'),
   (25, 'weLIT'),
   (25, 'groupcelebrationoncesocialmediaprojectisdone'),
   (26, 'whenacodebreaks'),
   (26, 'no..hellNO'),
   (27, 'whiteboarding'),
   (27, 'reactHooks'),
   (28, 'why?'),
   (28, 'cloutchasingatitsbest'),
   (28, 'PSA...DONTDODRUGS'),
   (29, 'whosleepsthathard'),
   (30, 'nycrushhouratitsfinest'),
   (30, 'peoplerushingforaseat');

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
   (4, 16),
   (1, 16),
   (2, 16),
   (2, 15),
   (2, 17),
   (3, 17),
   (4, 17),
   (4, 18),
   (2, 18),
   (1, 18),
   (3, 18),
   (4, 18),
   (2, 18),
   (2, 18),
   (2, 19),
   (3, 19),
   (4, 19),
   (3, 19),
   (3, 19),
   (3, 20),
   (1, 20),
   (2, 20),
   (4, 21),
   (1, 21),
   (1, 22),
   (3, 22),
   (3, 23),
   (4, 23),
   (1, 24),
   (4, 25),
   (2, 25),
   (3, 25),
   (1, 26),
   (3, 26),
   (4, 26),
   (1, 27),
   (2, 27),
   (4, 27),
   (1, 28),
   (2, 28),
   (4, 29),
   (1, 30),
   (2, 30),
   (3, 30);

