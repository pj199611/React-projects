import express from "express";
import cors from "cors";
import morgan from "morgan";

const app=express();
const PORT=process.env.PORT || 4000;

const formData=[]


app.use(express.json());
app.use(express.urlencoded({extended:true}));
app.use(cors())
app.use(morgan("dev"))

app.post("/",(req,res)=>{
        const data=req.body;
        formData.push(data);
        return res.send(data)
})

app.get("/",(req,res)=>{
        return res.send(formData)
})

app.listen(PORT,()=>{
        console.log(`listening on port ${PORT}`)
})