--NOTE: Set " to all Columns once filled with at least 1 row of data
--NOTE: Set references after making tables

--Side Tables
CREATE TABLE WeaponTypes (
    id SERIAL PRIMARY KEY,
    Type VARCHAR(10)
);
CREATE TABLE Regions (
    id SERIAL PRIMARY KEY,
    Region VARCHAR(20)
);
CREATE TABLE Elements (
    id SERIAL PRIMARY KEY,
    Element VARCHAR(20)
);
CREATE TABLE SecondStats (
    id SERIAL PRIMARY KEY,
    Stat VARCHAR(20)
);
CREATE TABLE Availability (
    id SERIAL PRIMARY KEY,
    Days VARCHAR(20)[]
);
CREATE TABLE AscensionDomains (
    id SERIAL PRIMARY KEY,
    DomainName VARCHAR(40),
    Region_ID INT REFERENCES Regions(id)
);
CREATE TABLE SecondaryAscensionMaterials ( --Data to be added
    id BIGSERIAL PRIMARY KEY,
    Material VARCHAR(30)[],
    Source VARCHAR(40)[]
);
CREATE TABLE CharacterDomainMaterials (
    id SERIAL PRIMARY KEY,
    Material VARCHAR(20),
    Domain_ID INTEGER REFERENCES AscensionDomains(id),
    Availabilities INT REFERENCES Availability(id)
);
CREATE TABLE WeaponDomainMaterials (
    id SERIAL PRIMARY KEY,
    Material VARCHAR(20),
    Domain_ID INTEGER REFERENCES AscensionDomains(id),
    Availabilities INT REFERENCES Availability(id)
);


--Main Tables
CREATE TABLE Characters (
    id BIGSERIAL PRIMARY KEY,
    Name VARCHAR(50),
    Star INTEGER,
    Element_ID BIGINT REFERENCES Elements(id),
    WeaponType_ID BIGINT REFERENCES WeaponTypes(id),
    Region_ID BIGINT REFERENCES Regions(id),
    Domain_ID BIGINT REFERENCES AscensionDomains(id),
    DomainMaterial_ID BIGINT REFERENCES CharacterDomainMaterials(id),
    --SecondaryAscensionMaterials_ID BIGINT REFERENCES WeaponDomainMaterials(id)
    Availabilties INT REFERENCES Availability(id),
    ImgURL TEXT
);
CREATE TABLE Weapons (
    id BIGSERIAL PRIMARY KEY,
    Name VARCHAR(50),
    Star INTEGER,
    WeaponType_ID BIGINT REFERENCES WeaponTypes(id),
    SecondStat_ID BIGINT REFERENCES SecondStats(id) ,
    Domain_ID BIGINT REFERENCES AscensionDomains(id),
    DomainMaterial_ID BIGINT REFERENCES WeaponDomainMaterials(id),
    --SecondaryAscensionMaterials_ID BIGINT REFERENCES WeaponDomainMaterials(id)
    Availabilties INT REFERENCES Availability(id),
    ImgURL TEXT
);

--ALTERATIONS for COLUMN and REFERENCES Adding

ALTER TABLE Regions
    ADD COLUMN Character_Domain_ID BIGINT REFERENCES AscensionDomains(id), --reference only Character Domains, Make column NULLABLE
    ADD COLUMN Weapon_Domain_ID BIGINT REFERENCES AscensionDomains(id); --reference only weapon domains, Make column NULLABLE
