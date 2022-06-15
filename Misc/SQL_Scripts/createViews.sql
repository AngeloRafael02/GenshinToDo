--CHARACTERS VIEWS
--All Days Characters
CREATE VIEW AllCharacters AS 
SELECT characters.id, name, star, Elements.Element, WeaponTypes.Type, Regions.Region, AscensionDomains.DomainName, CharacterDomainMaterials.Material, Availability.Days, ImgURL
    FROM Characters
    JOIN Elements ON Characters.Element_id = Elements.id
    JOIN WeaponTypes ON Characters.WeaponType_id = WeaponTypes.id
    JOIN Regions ON Characters.Region_id = Regions.id
    JOIN AscensionDomains ON Characters.Domain_id = AscensionDomains .id
    JOIN CharacterDomainMaterials ON Characters.DomainMaterial_id = CharacterDomainMaterials.id
    JOIN Availability ON Characters.Availabilties = Availability.id
    WHERE Availabilties IN (1,2,3)
    ORDER BY characters.id ASC;
--Monday, Thursday, Sunday Characters
CREATE VIEW Day1Characters AS 
SELECT characters.id, name, star, Elements.Element, WeaponTypes.Type, Regions.Region, AscensionDomains.DomainName, CharacterDomainMaterials.Material, Availability.Days, ImgURL
    FROM Characters
    JOIN Elements ON Characters.Element_id = Elements.id
    JOIN WeaponTypes ON Characters.WeaponType_id = WeaponTypes.id
    JOIN Regions ON Characters.Region_id = Regions.id
    JOIN AscensionDomains ON Characters.Domain_id = AscensionDomains .id
    JOIN CharacterDomainMaterials ON Characters.DomainMaterial_id = CharacterDomainMaterials.id
    JOIN Availability ON Characters.Availabilties = Availability.id
    WHERE Availabilties = 1 
    ORDER BY characters.id ASC;
--Tuesday, Friday, Sunday Characters
CREATE VIEW Day2Characters AS 
SELECT characters.id, name, star, Elements.Element, WeaponTypes.Type, Regions.Region, AscensionDomains.DomainName, CharacterDomainMaterials.Material, Availability.Days , ImgURL
    FROM Characters
    JOIN Elements ON Characters.Element_id = Elements.id
    JOIN WeaponTypes ON Characters.WeaponType_id = WeaponTypes.id
    JOIN Regions ON Characters.Region_id = Regions.id
    JOIN AscensionDomains ON Characters.Domain_id = AscensionDomains .id
    JOIN CharacterDomainMaterials ON Characters.DomainMaterial_id = CharacterDomainMaterials.id
    JOIN Availability ON Characters.Availabilties = Availability.id
    WHERE Availabilties = 2 
    ORDER BY characters.id ASC;
--Wednesday, Saturday, Sunday Characters
CREATE VIEW Day3Characters AS 
SELECT characters.id, name, star, Elements.Element, WeaponTypes.Type, Regions.Region, AscensionDomains.DomainName, CharacterDomainMaterials.Material, Availability.Days, ImgURL
    FROM Characters
    JOIN Elements ON Characters.Element_id = Elements.id
    JOIN WeaponTypes ON Characters.WeaponType_id = WeaponTypes.id
    JOIN Regions ON Characters.Region_id = Regions.id
    JOIN AscensionDomains ON Characters.Domain_id = AscensionDomains .id
    JOIN CharacterDomainMaterials ON Characters.DomainMaterial_id = CharacterDomainMaterials.id
    JOIN Availability ON Characters.Availabilties = Availability.id
    WHERE Availabilties = 3
    ORDER BY characters.id ASC;

--Weapon Views
--All Days Weapons
CREATE VIEW ALLWeapons AS
SELECT Weapons.id, name, star,  WeaponTypes.Type, SecondStats.Stat, AscensionDomains.DomainName, WeaponDomainMaterials.Material, Availability.Days, ImgURL
    FROM Weapons
    JOIN SecondStats ON Weapons.SecondStat_ID = SecondStats.id
    JOIN WeaponTypes ON Weapons.WeaponType_ID = WeaponTypes.id
    JOIN AscensionDomains ON Weapons.Domain_ID = AscensionDomains .id
    JOIN WeaponDomainMaterials ON Weapons.DomainMaterial_id = WeaponDomainMaterials.id
    JOIN Availability ON Weapons.Availabilties = Availability.id
    WHERE Availabilties IN (1,2,3)
    ORDER BY Weapons.id ASC;
--Monday, Thursday, Sunday Weapons
CREATE VIEW Day1Weapons AS
SELECT Weapons.id, name, star,  WeaponTypes.Type, SecondStats.Stat, AscensionDomains.DomainName, WeaponDomainMaterials.Material, Availability.Days, ImgURL
    FROM Weapons
    JOIN SecondStats ON Weapons.SecondStat_ID = SecondStats.id
    JOIN WeaponTypes ON Weapons.WeaponType_ID = WeaponTypes.id
    JOIN AscensionDomains ON Weapons.Domain_ID = AscensionDomains .id
    JOIN WeaponDomainMaterials ON Weapons.DomainMaterial_id = WeaponDomainMaterials.id
    JOIN Availability ON Weapons.Availabilties = Availability.id
    WHERE Availabilties = 1 
    ORDER BY Weapons.id  ASC;
-- Tuesday, Friday, Sunday Weapons  
CREATE VIEW Day2Weapons AS  
SELECT Weapons.id, name, star,  WeaponTypes.Type, SecondStats.Stat, AscensionDomains.DomainName, WeaponDomainMaterials.Material, Availability.Days, ImgURL
    FROM Weapons
    JOIN SecondStats ON Weapons.SecondStat_ID = SecondStats.id
    JOIN WeaponTypes ON Weapons.WeaponType_id = WeaponTypes.id
    JOIN AscensionDomains ON Weapons.Domain_id = AscensionDomains .id
    JOIN WeaponDomainMaterials ON Weapons.DomainMaterial_id = WeaponDomainMaterials.id
    JOIN Availability ON Weapons.Availabilties = Availability.id
    WHERE Availabilties = 2 
    ORDER BY Weapons.id ASC;
-- Tuesday, Friday, Sunday Weapons  
CREATE VIEW Day3Weapons AS  
SELECT Weapons.id, name, star,  WeaponTypes.Type, SecondStats.Stat, AscensionDomains.DomainName, WeaponDomainMaterials.Material, Availability.Days, ImgURL
    FROM Weapons
    JOIN SecondStats ON Weapons.SecondStat_ID = SecondStats.id
    JOIN WeaponTypes ON Weapons.WeaponType_id = WeaponTypes.id
    JOIN AscensionDomains  ON Weapons.Domain_id = AscensionDomains .id
    JOIN WeaponDomainMaterials ON Weapons.DomainMaterial_id = WeaponDomainMaterials.id
    JOIN Availability ON Weapons.Availabilties = Availability.id
    WHERE Availabilties = 3
    ORDER BY Weapons.id ASC;
