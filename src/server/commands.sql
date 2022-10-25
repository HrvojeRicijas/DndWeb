SELECT ch.name, ch.race, ch.description, cl.class AS class, us.username AS player, cm.name AS campaign FROM characters AS ch
	JOIN classes AS cl ON ch.classId = cl.id
	JOIN users AS us ON ch.creatorId = us.id
	JOIN campaigns AS cm ON ch.campaignId = cm.id
