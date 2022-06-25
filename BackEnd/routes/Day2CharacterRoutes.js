const express = require('express'),
      Day2CharRoutes = express.Router(),
      {pool} = require('../db');

//TUESDAY - FRIDAY ROUTES
Day2CharRoutes.get(['/All'], async function(req,res){
    try{
        const charResponse = await pool.query(
           `SELECT characters.id, name, star, Elements.Element, WeaponTypes.Type, Regions.Region, AscensionDomains.DomainName, CharacterDomainMaterials.Material, Availability.Days , ImgURL
            FROM Characters
            JOIN Elements ON Characters.Element_id = Elements.id
            JOIN WeaponTypes ON Characters.WeaponType_id = WeaponTypes.id
            JOIN Regions ON Characters.Region_id = Regions.id
            JOIN AscensionDomains ON Characters.Domain_id = AscensionDomains .id
            JOIN CharacterDomainMaterials ON Characters.DomainMaterial_id = CharacterDomainMaterials.id
            JOIN Availability ON Characters.Availabilties = Availability.id
            WHERE Availabilties = 2 
            ORDER BY CharacterDomainMaterials.id, characters.id ASC;`);
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
    }
});
Day2CharRoutes.get(['/Mondstadt'], async function(req,res){
    try{
        const charResponse = await pool.query(
            "SELECT * FROM Day2characters WHERE material ='Resistance';");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
    }
});
Day2CharRoutes.get(['/Liyue'], async function(req,res){
    try{
        const charResponse = await pool.query(
            "SELECT * FROM Day2characters WHERE material = 'Diligence';");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
    }
});
Day2CharRoutes.get(['/Inazuma'], async function(req,res){
    try{
        const charResponse = await pool.query(
            "SELECT * FROM Day2characters WHERE material = 'Elegance';");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
    }
});

module.exports = {Day2CharRoutes}