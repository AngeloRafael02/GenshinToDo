const express = require('express'),
      CharRouter = express.Router(),
      {pool} = require('../db');

//ALL CHARACTER ROUTES
CharRouter.get('/All', async function(req,res){
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
            WHERE Availabilties IN (1,2,3)
            ORDER BY AscensionDomains.id, characters.id ASC;`);
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
    }
}); 
CharRouter.get('/Mondstadt', async function(req,res){
    try{
        const charResponse = await pool.query(
            "SELECT * FROM AllCharacters WHERE material IN ('Freedom','Resistance','Ballad')");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
    }
});   
CharRouter.get('/Liyue', async function(req,res){
    try{
        const charResponse = await pool.query(
            "SELECT * FROM AllCharacters WHERE  material IN ('Prosperity','Diligence','Gold');");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
    }
});    
CharRouter.get('/Inazuma', async function(req,res){
    try{
        const charResponse = await pool.query(
            "SELECT * FROM AllCharacters WHERE material IN ('Transience','Elegance','Light');");
        res.json(charResponse.rows);
    } catch (error){
        console.log(error); 
    }
}); 

module.exports = {CharRouter};