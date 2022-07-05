const express = require("express"),
Day3WeaponRoutes = express.Router(),
{pool}=require('../db');

//WEDNESDAY - SATURDAY WEAPONS ROUTES
Day3WeaponRoutes.get(['/All'],async function (req,res) {
    try{
        const WeaponResponse = await pool.query(
           `SELECT Weapons.id, name, star,  WeaponTypes.Type, SecondStats.Stat, AscensionDomains.DomainName, WeaponDomainMaterials.Material, Availability.Days, ImgURL
            FROM Weapons
            JOIN SecondStats ON Weapons.SecondStat_ID = SecondStats.id
            JOIN WeaponTypes ON Weapons.WeaponType_ID = WeaponTypes.id
            JOIN AscensionDomains ON Weapons.Domain_ID = AscensionDomains .id
            JOIN WeaponDomainMaterials ON Weapons.DomainMaterial_id = WeaponDomainMaterials.id
            JOIN Availability ON Weapons.Availabilties = Availability.id
            WHERE Availabilties = 3
            ORDER BY WeaponDomainMaterials.id, star, WeaponTypes.id, Weapons.id ASC;`);
        res.json(WeaponResponse.rows);
    } catch(error){
        console.log(error);
        res.send('Error 500: Server Error');
    }
});
Day3WeaponRoutes.get(['/Mondstadt'],async function (req,res) {
    try{
        const WeaponResponse = await pool.query(
            "SELECT * FROM Day3Weapons WHERE material = 'Dandelion Gladiator';");
        res.json(WeaponResponse.rows);
    } catch(error){
        console.log(error);
        res.send('Error 500: Server Error');
    }
});
Day3WeaponRoutes.get(['/Liyue'],async function (req,res) {
    try{
        const WeaponResponse = await pool.query(
            "SELECT * FROM Day3Weapons WHERE material = 'Aerosiderite';");
        res.json(WeaponResponse.rows);
    } catch(error){
        console.log(error);
        res.send('Error 500: Server Error');
    }
});
Day3WeaponRoutes.get(['/Inazuma'],async function (req,res) {
    try{
        const WeaponResponse = await pool.query(
            "SELECT * FROM Day3Weapons WHERE material = 'Mask';");
        res.json(WeaponResponse.rows);
    } catch(error){
        console.log(error);
        res.send('Error 500: Server Error');
    }
});

module.exports = {Day3WeaponRoutes}