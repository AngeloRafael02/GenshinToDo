const express = require("express"),
Day2WeaponRoutes = express.Router(),
{pool}=require('../db');

//TUESDAY - FRIDAY WEAPONS ROUTES
Day2WeaponRoutes.get(['/All'],async function (req,res) {
    try{
        const WeaponResponse = await pool.query(
           `SELECT Weapons.id, name, star,  WeaponTypes.Type, SecondStats.Stat, AscensionDomains.DomainName, WeaponDomainMaterials.Material, Availability.Days, ImgURL
           FROM Weapons
           JOIN SecondStats ON Weapons.SecondStat_ID = SecondStats.id
           JOIN WeaponTypes ON Weapons.WeaponType_ID = WeaponTypes.id
           JOIN AscensionDomains ON Weapons.Domain_ID = AscensionDomains .id
           JOIN WeaponDomainMaterials ON Weapons.DomainMaterial_id = WeaponDomainMaterials.id
           JOIN Availability ON Weapons.Availabilties = Availability.id
           WHERE Availabilties = 2
           ORDER BY WeaponDomainMaterials.id, star, WeaponTypes.id, Weapons.id ASC;`);
        res.json(WeaponResponse.rows);
    } catch(error){
        console.log(error)
    }
});
Day2WeaponRoutes.get(['/Mondstadt'],async function (req,res) {
    try{
        const WeaponResponse = await pool.query(
            "SELECT * FROM Day2Weapons WHERE material = 'Boreal Wolf';");
        res.json(WeaponResponse.rows);
    } catch(error){
        console.log(error)
    }
});
Day2WeaponRoutes.get(['/Liyue'],async function (req,res) {
    try{
        const WeaponResponse = await pool.query(
            "SELECT * FROM Day2Weapons WHERE material = 'Mist Veiled';");
        res.json(WeaponResponse.rows);
    } catch(error){
        console.log(error)
    }
});
Day2WeaponRoutes.get(['/Inazuma'],async function (req,res) {
    try{
        const WeaponResponse = await pool.query(
            "SELECT * FROM Day2Weapons WHERE material = 'Narukami';");
        res.json(WeaponResponse.rows);
    } catch(error){
        console.log(error)
    }
});

module.exports = {Day2WeaponRoutes}