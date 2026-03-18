require("dotenv").config();

const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const bcrypt = require("bcrypt");
const session = require("express-session");
const passport = require("passport");
const LocalStrategy = require("passport-local").Strategy;

const User = require("./models/User");

const app = express();

/* VIEW ENGINE */

app.set("view engine", "ejs");

/* MIDDLEWARE */

app.use(bodyParser.urlencoded({ extended: true }));

app.use(
session({
secret: process.env.SESSION_SECRET,
resave: false,
saveUninitialized: false
})
);

app.use(passport.initialize());
app.use(passport.session());

/* DATABASE CONNECTION */

mongoose.connect(process.env.MONGO_URI)
.then(()=>console.log("MongoDB Connected"))
.catch(err=>console.log(err));

/* PASSPORT AUTHENTICATION */

passport.use(
new LocalStrategy(
{ usernameField: "email" },
async (email, password, done) => {

try{

const user = await User.findOne({ email });

if(!user){
return done(null,false);
}

const match = await bcrypt.compare(password,user.password);

if(!match){
return done(null,false);
}

return done(null,user);

}catch(err){
return done(err);
}

}
)
);

/* SESSION STORAGE */

passport.serializeUser((user, done) => {
done(null, user.id);
});

passport.deserializeUser(async (id, done) => {
const user = await User.findById(id);
done(null, user);
});

/* ROUTES */

/* HOME */

app.get("/", (req,res)=>{
res.redirect("/login");
});

/* REGISTER PAGE */

app.get("/register", (req,res)=>{
res.render("register");
});

/* REGISTER USER */

app.post("/register", async (req,res)=>{

const {name,email,password} = req.body;

/* CHECK IF EMAIL EXISTS */

const existingUser = await User.findOne({ email });

if(existingUser){
return res.send("Email already registered");
}

/* HASH PASSWORD */

const hashedPassword = await bcrypt.hash(password,10);

/* CREATE USER */

const newUser = new User({
name,
email,
password: hashedPassword,
role: "user"
});

await newUser.save();

console.log("User saved:", newUser);

res.redirect("/login");

});

/* LOGIN PAGE */

app.get("/login",(req,res)=>{
res.render("login");
});

/* LOGIN AUTH */

app.post("/login",
passport.authenticate("local",{
successRedirect: "/dashboard",
failureRedirect: "/login"
})
);

/* AUTHENTICATION CHECK */

function isAuthenticated(req,res,next){

if(req.isAuthenticated()){
return next();
}

res.redirect("/login");

}

/* DASHBOARD */

app.get("/dashboard",isAuthenticated,(req,res)=>{
res.render("dashboard",{user:req.user});
});

/* ADMIN RBAC */

function isAdmin(req,res,next){

if(req.isAuthenticated() && req.user.role === "admin"){
return next();
}

res.send("Access Denied");

}

/* ADMIN PAGE */

app.get("/admin",isAdmin,(req,res)=>{
res.render("admin",{user:req.user});
});

/* LOGOUT */

app.get("/logout",(req,res)=>{
req.logout(()=>{
res.redirect("/login");
});
});

/* SERVER START */

app.listen(process.env.PORT,()=>{
console.log("Server running on port " + process.env.PORT);
});