const express = require("express"),
Day1WeaponRoutes = express.Router(),
{pool}=require('../db')


//MONDAY - THURSDAY WEAPONS ROUTES
Day1WeaponRoutes.get(['/All'],async function (req,res) {
    try{
        const WeaponResponse = await pool.query(
          `SELECT Weapons.id, name, star,  WeaponTypes.Type, SecondStats.Stat, AscensionDomains.DomainName, WeaponDomainMaterials.Material, Availability.Days, ImgURL
           FROM Weapons
           JOIN SecondStats ON Weapons.SecondStat_ID = SecondStats.id
           JOIN WeaponTypes ON Weapons.WeaponType_ID = WeaponTypes.id
           JOIN AscensionDomains ON Weapons.Domain_ID = AscensionDomains .id
           JOIN WeaponDomainMaterials ON Weapons.DomainMaterial_id = WeaponDomainMaterials.id
           JOIN Availability ON Weapons.Availabilties = Availability.id
           WHERE Availabilties = 1
           ORDER BY WeaponDomainMaterials.id, star, WeaponTypes.id, Weapons.id ASC;`);
        res.json(WeaponResponse.rows);
    } catch(error){
        console.log(error)
    }
});
Day1WeaponRoutes.get(['/Mondstadt'],async function (req,res) {
    try{
        const WeaponResponse = await pool.query(
            "SELECT * FROM Day1Weapons WHERE material = 'Decarabian';");
        res.json(WeaponResponse.rows);
    } catch(error){
        console.log(error)
    }
})
Day1WeaponRoutes.get(['/Liyue'],async function (req,res) {
    try{
        const WeaponResponse = await pool.query(
            "SELECT * FROM Day1Weapons WHERE material = 'Guyun';");
        res.json(WeaponResponse.rows);
    } catch(error){
        console.log(error)
    }
});
Day1WeaponRoutes.get(['/Inazuma'],async function (req,res) {
    try{
        const WeaponResponse = await pool.query(
            "SELECT * FROM Day1Weapons WHERE material = 'Distant Sea';");
        res.json(WeaponResponse.rows);
    } catch(error){
        console.log(error)
    }
});

module.exports = {Day1WeaponRoutes}