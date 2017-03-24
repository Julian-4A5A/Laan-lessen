CREATE DATABASE bedrijf_abc;

CREATE TABLE werknemers(
	id INT PRIMARY KEY AUTO_INCREMENT,
    voornaam varchar(255),
    tussenvoegsel varchar(255),
    achternaam varchar(255),
    geboortedatum date,
    salaris_schaal INT

)

INSERT INTO `werknemers`
  ( `voornaam`, `tussenvoegsel`, `achternaam`, `geboortedatum`, `salaris_schaal`)
  VALUES
    ('Nico','de','Boer','1975-12-23',18),
    ('Tim','','Jansen','1986-02-16',10),
    ('Pim','','Vosse','1990-06-07',10);
UPDATE `werknemers`
  SET
    voornaam = 'John' 
  WHERE id = 2

DELETE FROM `werknemers` WHERE id = 3
