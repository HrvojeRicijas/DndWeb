CREATE DATABASE IF NOT EXISTS dndweb;

DROP TABLE IF EXISTS characters;
DROP TABLE IF EXISTS campaigns;
DROP TABLE IF EXISTS classes;
DROP TABLE IF EXISTS users;

CREATE TABLE classes(
	id INT PRIMARY KEY AUTO_INCREMENT,
	class VARCHAR(55)
);



INSERT INTO classes(class) VALUES 
	('Artificer'),
	('Barbarian'),
	('Bard'),
	('Cleric'),
	('Druid'),
	('Fighter'),
	('Monk'),
	('Paladin'),
	('Ranger'),
	('Rogue'),
	('Sorcerer'),
	('Warlock'),
	('Wizard');


CREATE TABLE users(
	id INT PRIMARY KEY AUTO_INCREMENT,
	username VARCHAR(255)
);

INSERT INTO users(username) VALUES 
	('Marko'),
	('Laura'),
	('Peter'),
	('Pero'),
	('Branimir'),
	('Drvoje'),
	('Briga'),
	('Luce'),
	('Karnelija'),
	('Alan'),
	('Dodo'),
	('Vrabac'),
	('Coca cola');
	
CREATE TABLE campaigns(
	id INT PRIMARY KEY AUTO_INCREMENT,
	NAME VARCHAR(255),
	creatorId INT,
	FOREIGN KEY (creatorId) REFERENCES users(id) 
);

INSERT INTO campaigns(NAME, creatorId) VALUES 
	('Valem', 1),
	('Realm', 5),
	('Menethil', 5),
	('Totally not Menethil', 6),
	('Alrune', 5);

CREATE TABLE characters(
	id INT PRIMARY KEY AUTO_INCREMENT,
	NAME VARCHAR(255),
	race VARCHAR(255),
	classId INT,
	LEVEL INT,	
	creatorId INT,
	campaignId INT,
	DESCRIPTION TEXT,
	image VARCHAR(255),
	FOREIGN KEY (classId) REFERENCES classes(id),
	FOREIGN KEY (creatorId) REFERENCES users(id),
	FOREIGN KEY (campaignId) REFERENCES campaigns(id)
);

INSERT INTO characters(NAME, race, classId, LEVEL, creatorId, campaignId, DESCRIPTION) VALUES 
	('Milo Highhill', 'Shaved Goblin', 9, 10, 1, 5, "Similar to his player, a small goblinoid mapmaker"),
	('The Protector', 'Beef Jerky', 6, 10, 3, 5, "Big simp"),
	('Zaya', 'Fire Elemental obviously', 12, 2, 5, 2, "Fireball goes brr"),
	('Halasir', 'Tashas optimized charisma', 12, 10, 6, 5, "Small simp"),
	('Alitana', 'Elf minus ears minus leg', 10, 10, 2, 5, "Enjoys long walks on the beach and murdering unicorns");
