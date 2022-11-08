const express = require('express');
const db = require('./config/db')
const cors = require('cors')

const app = express();
const PORT = 3002;
app.use(cors());
app.use(express.json())

//  USERS -------------------------------------------------------------------------
//CREATE
app.post('/api/users/create', (req,res)=> {

    const username = req.body.username;
    db.query("INSERT INTO users (username) VALUES (?)",[username], (err,result)=>{
       if(err) {
       console.log(err)
       } 
       console.log(result)
    });   
})

//READ
app.get('/api/users/get', (req,res)=> {

    db.query("SELECT * FROM users", (err,result)=>{
       if(err) {
       console.log(err)
       } 
       console.log(result)
       res.send(result)
    });   })

//SELECT
app.get('/api/users/getById', (req,res)=> {
    
    const id = req.params.id;
    
    db.query("SELECT * FROM users WHERE id = ?", id, (err,result)=>{
        if(err) {
            console.log(err)
        } 
        res.send(result)
    });   
});


//UPDATE unfinished
app.post('/api/users/update', (req,res)=> {

    const value = req.body.value;

    db.query("INSERT INTO users (username) VALUES (?)",[value], (err,result)=>{
       if(err) {
       console.log(err)
       } 
       console.log(result)
    });   })

//DELETE

//  CAMPAIGNS -------------------------------------------------------------------------
//CREATE
app.post('/api/campaigns/create', (req,res)=> {

    const name = req.body.name;
    const creatorId = req.body.creatorId;

    db.query("INSERT INTO campaigns (name, creatorID) VALUES (?, ?)",[name, creatorId], (err,result)=>{
       if(err) {
       console.log(err)
       } 
       console.log(result)
    });   
})

//READ
app.get('/api/campaigns/get', (req,res)=> {

    db.query("SELECT c.id as campaignId, c.name as camapignName, c.creatorId as creatorId, u.username as creatorName from campaigns as c JOIN users as u on c.creatorId = u.id", (err,result)=>{
       if(err) {
       console.log(err)
       } 
       console.log(result)
       res.send(result)
    });   })

//SELECT
app.get('/api/campaigns/getById', (req,res)=> {
    
    const id = req.params.id;
    
    db.query("SELECT * FROM campaigns WHERE id = ?", id, (err,result)=>{
        if(err) {
            console.log(err)
        } 
        res.send(result)
    });   
});
//UPDATE
//DELETE

//  CLASSES -------------------------------------------------------------------------

//READ
app.get('/api/classes/get', (req,res)=> {

    db.query("SELECT * from classes", (err,result)=>{
       if(err) {
       console.log(err)
       } 
       console.log(result)
       res.send(result)
    });   })



//  CHARACTERS -------------------------------------------------------------------------
//CREATE
app.post('/api/characters/create', (req,res)=> {

    const name = req.body.name;
    const race = req.body.race;
    const classId = req.body.classId;
    const level = req.body.level;
    const creatorId = req.body.creatorId;
    const campaignId = req.body.campaignId;
    const description = req.body.description;
    const image = req.body.image;
//    const imageDestination = '../../public/Photos/characterImages'
    console.log(image.height)

    db.query("INSERT INTO characters (name, race, classId, level, creatorId, campaignId, description) VALUES (?, ?, ?, ?, ?, ?, ?)",[name, race, classId, level, creatorId, campaignId, description], (err,result)=>{
       if(err) {
       console.log(err)
       } 
       console.log(result)
    });   
})
//READ
app.get('/api/characters/get', (req,res)=> {

    db.query(
        `SELECT cha.id as characterId,
            cha.name as characterName,
            cha.level as level,
            cha.race as race,
            cha.description as description,
            cha.campaignId as campaignId,
            cha.classId as classId,
            cha.creatorId as creatorId,
            cpg.name as campaignName, 
            classes.class as className, 
            users.username as creatorName
        FROM characters AS cha 
            JOIN users ON cha.creatorId = users.id
            JOIN campaigns AS cpg ON cha.campaignId = cpg.id
            JOIN classes ON cha.classId = classes.id`, (err,result)=>{
       if(err) {
       console.log(err)
       } 
       console.log(result)
       res.send(result)
    });   })

//SELECT by ID
app.get('/api/characters/getById/:id', (req,res)=> {
    
    const id = req.params.id;
    
    console.log("got to index with id: ", id)
    db.query("SELECT * FROM characters WHERE id = ?", [id], (err,result)=>{
        if(err) {
            console.log(err)
        
        } 
        console.log(id, result)
        res.send(result)

    });   
});

//READ by CAMPAIGN
app.get('/api/characters/getByCampaign', (req,res)=> {
    
    const campaignId = req.params.campaignId;
    
    db.query("SELECT * FROM characters WHERE campaignId = ?", campaignId, (err,result)=>{
        if(err) {
            console.log(err)
        } 
        res.send(result)
    });   
});


//UPDATE
//DELETE

//Below there is only lies, deception and testing

// Route to get all posts
app.get("/api/get", (req,res)=>{
db.query("SELECT * FROM testtable", (err,result)=>{
    if(err) {
    console.log(err)
    } 
res.send(result)
});   });

// Route to get one post
app.get("/api/getFromId/:id", (req,res)=>{

const id = req.params.id;
 db.query("SELECT * FROM testtable WHERE id = ?", id, 
 (err,result)=>{
    if(err) {
    console.log(err)
    } 
    res.send(result)
    });   });

// Route for creating the post

// Route to delete a post

app.delete('/api/delete/:id',(req,res)=>{
const id = req.params.id;

db.query("DELETE FROM testtable WHERE id= ?", id, (err,result)=>{
if(err) {
console.log(err)
        } }) })

app.listen(PORT, ()=>{
    console.log(`Server is running on ${PORT}`)
})