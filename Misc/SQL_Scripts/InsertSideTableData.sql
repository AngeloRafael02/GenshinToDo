--WEAPON_TYPE ROWS
INSERT INTO WeaponTypes (Type) VALUES 
    ('Sword'),
    ('Claymore'),
    ('Polearm'),
    ('Catalyst'),
    ('Bow');

--REGION ROWS
INSERT INTO Regions (Region) VALUES 
    ('Mondstadt'),  --1
    ('Liyue'),      --2
    ('Inazuma'),    --3
    ('Sumeru'),     --4
    ('Fontaine'),   --5
    ('Natlan'),     --6
    ('Snezhnaya');  --7

--ELEMENT ROWS
INSERT INTO Elements (Element) VALUES
    ('Pyro'),   --1
    ('Hydro'),  --2
    ('Anemo'),  --3
    ('Electro'),--4 
    ('Dendro'), --5
    ('Cryo'),   --6
    ('Geo');    --7

--SECOND_STAT (for Weapons Table)
INSERT INTO SecondStats (Stat) VALUES 
    ('ATK'),                --1
    ('HP'),                 --2
    ('DEF'),                --3
    ('Physical DMG Bonus'), --4
    ('Energy Recharge'),    --5
    ('Elemental Mastery'),  --6
    ('CRIT DMG'),           --7
    ('CRIT Rate');          --8

--AVAILABILITY ROWS
INSERT INTO Availability (Days) VALUES
    (ARRAY['Sunday','Monday','Thursday']),
    (ARRAY['Sunday','Tuesday','Friday']),
    (ARRAY['Sunday','Wednesday','Saturday']);

--DOMAIN_NAME ROWS
INSERT INTO AscensionDomains (DomainName, Region_ID) VALUES 
    ('Forsaken Rift', 1 ),                      --1 (CharacterDomain)
    ('Cecilia Garden', 1 ),                     --2 (WeaponsDomain)
    ('Taishan Mansion', 2 ),                    --3 (CharacterDomain)
    ('Hidden Palace of Lianshan Formula', 2 ),  --4 (WeaponsDomain)
    ('Violet Court', 3 ),                       --5 (CharactersDomain)
    ('Court of Flowing Sand', 3);               --6 (WeaponsDomain)

--CHARACTER_DOMAIN_MATERIAL ROWS
INSERT INTO CharacterDomainMaterials (Material, Domain_ID, Availabilities) VALUES 
    ('Freedom',1,1),          --1          
    ('Resistance',1,2),      --2 
    ('Ballad',1,3),          --3
    ('Prosperity',3,1),      --4
    ('Diligence',3,2),        --5
    ('Gold',3,3),             --6
    ('Transience',5,1),        --7
    ('Elegance',6,2),         --8
    ('Light',5,3);            --9

--WEAPON_DOMAIN_MATERIALS ROWS
INSERT INTO WeaponDomainMaterials (Material, Domain_ID, Availabilities) VALUES
    ('Decarabian',2,1),          --1
    ('Boreal Wolf',2,2),         --2
    ('Dandelion Gladiator',2,3), --3
    ('Guyun',4,1),               --4
    ('Mist Veiled',4,2),         --5
    ('Aerosiderite',4,3),        --6
    ('Distant Sea',3,1),         --7
    ('Narukami',6,2),            --8
    ('Mask',6,3);                --9

--NOTE: columns to be added -> Values must also be updated
UPDATE Regions SET Character_Domain_ID = 1, Weapon_Domain_ID = 2 WHERE  region = 'Mondstadt';
UPDATE Regions SET Character_Domain_ID = 3, Weapon_Domain_ID = 4 WHERE  region = 'Liyue';
UPDATE Regions SET Character_Domain_ID = 5, Weapon_Domain_ID = 6 WHERE  region = 'Inazuma';
