const express = require('express'),
      WeaponsRouter = express.Router(),
      {pool} = require('../db');

WeaponsRouter.get('/all', async function(req,res){
    try{
        const WeaponResponse = await pool.query(
           `SELECT Weapons.id, name, star,  WeaponTypes.Type, SecondStats.Stat, AscensionDomains.DomainName, WeaponDomainMaterials.Material, Availability.Days, ImgURL
            FROM Weapons
            JOIN SecondStats ON Weapons.SecondStat_ID = SecondStats.id
            JOIN WeaponTypes ON Weapons.WeaponType_ID = WeaponTypes.id
            JOIN AscensionDomains ON Weapons.Domain_ID = AscensionDomains.id
            JOIN WeaponDomainMaterials ON Weapons.DomainMaterial_id = WeaponDomainMaterials.id
            JOIN Availability ON Weapons.Availabilties = Availability.id
            ORDER BY AscensionDomains.id, star, WeaponTypes.id, Weapons.id ASC;`);
        res.json(WeaponResponse.rows);
    } catch (error){
        console.log(error); 
        res.send('Error 500: Server Error')
    }
});
WeaponsRouter.get(['/Mondstadt'], async function(req,res){
    try{
        const WeaponResponse = await pool.query(
            "SELECT * FROM AllWeapons WHERE domainname = 'Cecilia Garden';");
        res.json(WeaponResponse.rows);
    } catch (error){
        console.log(error); 
        res.send('Error 500: Server Error')
    }
});
WeaponsRouter.get(['/Liyue'], async function(req,res){
    try{
        const WeaponResponse = await pool.query(
            "SELECT * FROM AllWeapons WHERE domainname = 'Hidden Palace of Lianshan Formula';");
        res.json(WeaponResponse.rows);
    } catch (error){
        console.log(error); 
        res.send('Error 500: Server Error')
    }
});
WeaponsRouter.get(['/Inazuma'], async function(req,res){
    try{
        const WeaponResponse = await pool.query(
            "SELECT * FROM AllWeapons WHERE domainname = 'Court of Flowing Sand'");
        res.json(WeaponResponse.rows);
    } catch (error){
        console.log(error); 
        res.send('Error 500: Server Error')
    }
});
module.exports = {WeaponsRouter}