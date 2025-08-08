// // import { Password } from "@mui/icons-material"
// import mongoose from "mongoose";
//  const userSchema = new mongoose.Schema({
//    name:{type:String},
//    email:{type:String},
//    password:{type:String},
//    contact:{type:String},
//    address:{type:String},
//    profile:{type:String},
//    usertype:{type:String,default:"user"},
//    createAt:{type:Date,default:Date.now()},
//    deleteAt:{type:Date,default:Date.now()},
   
// })
// export const userModel=mongoose.model('users',userSchema);


// const propertySchema=new mongoose.Schema({
//     title:{type:String},
//     price:{type:String},
//     area:{type:String},
//     description:{type:String},
//     location:{type:String},
//     pic:{type:String}, 
//     createdAt:{type:Date,default:Date.now()},
//     updatedAt:{type:Date,default:Date.now()}, 
// })

// export const propertyModel=mongoose.model('properties',propertySchema);



// const BuyerSchema=new mongoose.Schema({
//     userId:{type:String},
//     propertyId:{type:String},
//     createdAt:{type:Date,default:Date.now()},
//     updatedAt:{type:Date,default:Date.now()}
// })

// export const buyerModel=mongoose.model('buyers',BuyerSchema);




import mongoose from "mongoose";

// ✅ User Schema
const userSchema = new mongoose.Schema({
  name: { type: String },
  email: { type: String },
  password: { type: String },
  contact: { type: String },
  address: { type: String },
  profile: { type: String },
  usertype: { type: String, default: "user" },
  createAt: { type: Date, default: Date.now },
  deleteAt: { type: Date, default: Date.now },
});

export const userModel = mongoose.model("users", userSchema);

// ✅ Property Schema
const propertySchema = new mongoose.Schema({
  title: { type: String },
  price: { type: String },
  area: { type: String },
  description: { type: String },
  location: { type: String },
  pic: { type: String },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const propertyModel = mongoose.model("properties", propertySchema);

// ✅ Buyer Schema
const buyerSchema = new mongoose.Schema({
  userId: { type: String, required: true },
  propertyId: { type: String, required: true },
  createdAt: { type: Date, default: Date.now },
  updatedAt: { type: Date, default: Date.now },
});

export const buyerModel = mongoose.model("buyers", buyerSchema);
