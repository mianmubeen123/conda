const User = require('./models/User')
const Notes = require('./models/Notes')
const express = require('express');
const varifytoken = require('./JWT')
//
var bcrypt = require('bcryptjs');

//
var jwt = require('jsonwebtoken');
const JWT_SECRET = "!2#4@mun"
// npm install --save express-validator
const { body, validationResult } = require('express-validator');
const cors = require('cors');
const app = express();
app.use(express.json());
app.use(cors());
const port = 5000;
/// this api add user data signup__________________________
app.post("/signup", [
    body('name', 'enter valid name').isLength({ min: 5 }),
    body('email', 'enter valid email').isEmail(),
    body('password', 'enter valid password').isLength({ min: 5 }),
], async (req, res) => {
    console.log('signupvisited');
    let success=false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success, errors: errors.array() });
    }
    try {
        //adding hash ad salt for securing password
        let user = await User.findOne({ email: req.body.email });
        if (user) { return res.status(400).json({success, error: "sorry this email exist" }) }
        const salt = await bcrypt.genSalt(10);
        const secPass = await bcrypt.hash(req.body.password, salt);
        user = await User.create({
            name: req.body.name,
            password: secPass,
            email: req.body.email,
        });
        //jwt token -----------------------------------------------------
        const data = {
            user: {
                id: user.id
            }
        }
        success=true
        const authtoken = jwt.sign(data, JWT_SECRET)
        res.json({success, authtoken });
        // console.log(authtoken);

    } catch (e) {
        console.log(e.message)
        res.status(500).json({ error: "catcherror" });
    }
})
/// this api authenticate user data and login it__________________________
app.post("/login", [
    body('email', 'enter valid email').isEmail(),
    body('password', 'enter valid password').exists(),
], async (req, res) => {
    console.log("loginvisited");
    let success=false;
    const errors = validationResult(req);
    if (!errors.isEmpty()) {
        return res.status(400).json({ success,errors: errors.array() });
    }
    const { email, password } = req.body;
    try {
        let user = await User.findOne({ email }) //we can also write it like({email:email})
        if (!user) {
            return res.status(400).json({ success,error: "plzzz try to login with correct info" })
        }
        const passwordCompare = await bcrypt.compare(password, user.password);//asycronous func soawait necessary
        if (!passwordCompare) {
            return res.status(400).json({ success,error: "plzzz try to login with correct info" })
        }
        const data = {
            user: {
                id: user.id
            }
        }
        const authtoken = jwt.sign(data, JWT_SECRET)
         success=true;
        res.json({ success,authtoken });
    } catch (e) {
        console.log(e.message)
        res.status(500).json({ error: "catcherror" });
    }
});
//get data of authenticate user and login required_________________________________
app.post('/getuser', varifytoken, async (req, res) => {
    try {
        userId = req.user.id;
        const user = await User.findById(userId).select("-password")
        res.send(user)
    } catch (e) {
        console.log(e.message)
        res.status(500).json({ error: "catcherror" });
    }

})













// --------------------------NOTES SECTION START----------------------------
//it will get  all the note and show it login required 
app.get('/fetchnotes', varifytoken, async (req, res) => {
    try {
        let success=false;
        let result = await Notes.find({ user: req.user.id });
        // console.log(result.length)
        if (result.length===0) {
            return res.json({success,error:'404 no notes'} )
        }
        else{
            success=true;
            // console.log(result);
            res.send({success,result});
        }
        // }
        // res.send("404")
    } catch (e) {
        console.log(e.message)
        res.status(500).json({ error: "catcherror" });
    }
})

//it will add  the note and store it login required ,make sure that correct users notes


app.post('/addnotes'
// ,[
//     body('title', 'enter valid title').isLength({ min: 3 }),
//     body('description', 'enter valid desc').isLength({ min: 5 }),
//     body('tag', 'enter valid tag').isLength({ min: 3 }),]
    , varifytoken, async (req, res) => {
        try {
            let success=false;
            //  destructuring-----------------------------------
            const { name, price, category } = req.body;
            const errors = validationResult(req);
            if (!errors.isEmpty()) {
                return res.status(400).json({ success,errors: errors.array() });
            }
            const notes = new Notes({ name, price, category, user: req.user.id });
            const savenote = await notes.save();
             success=true;
            res.json({success,savenote});
        } catch (e) {
            console.log(e.message)
            res.status(500).json({ error: "catcherror" });
        }
    })

//it will update  the note of specific user !! login required 

app.put('/updatenotes/:id', varifytoken, async (req, res) => {
    try {
        
    const { name, price, category } = req.body;
    const newnote = {};
    if (name) { newnote.name = name }
    if (price) { newnote.price = price }
    if (category) { newnote.category=category }

    //find note and update it
    let success=false;
    let note = await Notes.findById(req.params.id);
    if (!note) { res.status(401).send({success,error:"note not found"}) }
    if (note.user.toString() !== req.user.id) { { res.status(401).send({success,error:"note not found"}) } }
    //now update the not bcz we authenticate it 
    note = await Notes.findByIdAndUpdate(req.params.id, { $set: newnote }, { new: true });
    //if we cannot use new true then it will send the res of old note but updated it 
    success=true;
    res.send({ success,note })
} catch (e) {
    console.log(e.message)
    res.status(500).json({ error: "catcherror" });
}
})

//it will delete  the note of specific user !! login required 

app.delete('/deletenotes/:id', varifytoken, async (req, res) => {
    try {
    
    const { name, price, category } = req.body;
    const newnote = {};
    if (name) { newnote.name = name }
    if (price) { newnote.price = price }
    if (category) { newnote.category=category }
    //find note and update it
let success=false;
    let note = await Notes.findById(req.params.id);
    if (!note) { res.status(200).send({success,error:"note not found"}) }
    if (note.user.toString() !== req.user.id) { { res.status(401).send({success,error:"note not found"}) } }
    //now update the not bcz we authenticate it 
    note = await Notes.findByIdAndDelete(req.params.id);
    //if we cannot use new true then itsuc will send the res of old note but updated it 
success=true;
    res.status(200).send({ success:"note has been deleted", note })

} catch (e) {
    console.log(e.message)
    res.status(500).json({ error: "catcherror" });
}
})

app.listen(port, () => {
    console.log(`The application started successfully on port ${port}`);
});
