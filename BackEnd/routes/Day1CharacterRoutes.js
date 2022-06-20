const express = require('express'),
Day1CharRoutes = express.Router(),
{pool} = require('../db');

//MONDAY - THURSDAY CHARACTER ROUTES
Day1CharRoutes.get(['/All'], async function(req,res){ //Mondstadt
    try{
        const charResponse = await pool.query(
           `SELECT characters.id, name, star, Elements.Element, WeaponTypes.Type, Regions.Region, AscensionDomains.DomainName, CharacterDomainMaterials.Material, Availability.Days, ImgURL
            FROM Characters
            JOIN Elements ON Characters.Element_id = Elements.id
            JOIN WeaponTypes ON Characters.WeaponType_id = WeaponTypes.id
            JOIN Regions ON Characters.Region_id = Regions.id
            JOIN AscensionDomains ON Characters.Domain_id = AscensionDomains .id
            JOIN CharacterDomainMaterials ON Characters.DomainMaterial_id = CharacterDomainMaterials.id
            JOIN Availability ON Characters.Availabilties = Availability.id
            WHERE Availabilties = 1 
            ORDER BY Regions.id, characters.id ASC;`);
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
    }
});
Day1CharRoutes.get(['/Mondstadt'], async function(req,res){ //Mondstadt
    try{
        const charResponse = await pool.query(
            "SELECT * FROM Day1characters WHERE material = 'Freedom';");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
    }
});
Day1CharRoutes.get(['/Liyue'], async function(req,res){ //Liyue
    try{
        const charResponse = await pool.query(
            "SELECT * FROM Day1characters WHERE material = 'Prosperity';");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
    }
});
Day1CharRoutes.get(['/Inazuma'], async function(req,res){ //Inazuma
    try{
        const charResponse = await pool.query(
            "SELECT * FROM Day1characters WHERE material = 'Transience';");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
    }
});

module.exports = {Day1CharRoutes};