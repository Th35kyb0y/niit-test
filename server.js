// get express 
const express = require('express');



const path = require("path");

const app = express();
// port number , env for heroku
let port = 5000||process.env.PORT;
app.use(express.json())
app.use( express.static(path.join(__dirname,'/app')))

app.get("/*",(req,res)=>{
  res.sendFile(path.join(__dirname,"app","index.html"))
})
app.post("/handleForm",(req,res)=>{
let {opp_stage,lead_status}=req.body
let probability
if (lead_status =="Initiation" && opp_stage=="Cold"){
    probability = "0%";
res.send(probability)
  }
  else if (lead_status =="Initiation" && opp_stage=="Warm"){
    probability = "5%";
  }
  else if(lead_status =="Initiation" && opp_stage=="Hot"){
    probability ="5%";
  }
  else if(lead_status =="Discussion" && opp_stage=="Cold"){
    probability ="10%";
  }
  else if (lead_status =="Discussion" && opp_stage=="Warm"){
    probability = "15%";
  }
  else if(lead_status =="Discussion" && opp_stage=="Hot"){
    probability="20%";
 
res.send(probability)

}
  else if(lead_status =="Design" && opp_stage=="Cold"){
    probability="15%";
 
res.send(probability)

}
  else if (lead_status =="Design" && opp_stage=="Warm"){
    probability= "25%";

res.send(probability)

}
  else if(lead_status =="Design" && opp_stage=="Hot"){
    probability="30%";
 
res.send(probability)

}
  else if(lead_status =="Proposal" && opp_stage=="Cold"){
    probability="20%";
 
res.send(probability)

}
  else if (lead_status =="Proposal" && opp_stage=="Warm"){
    probability= "40%";

res.send(probability)

}
  else if(lead_status =="Proposal" && opp_stage=="Hot"){
    probability="50%";
 
res.send(probability)

}
  else if(lead_status =="Negotiation" && opp_stage=="Cold"){
    probability="20%";
 
res.send(probability)

}
  else if (lead_status =="Negotiation" && opp_stage=="Warm"){
    probability= "60%";

res.send(probability)

}
  else if(lead_status =="Negotiation" && opp_stage=="Hot"){
    probability="80%";
 
res.send(probability)

}
  else if(lead_status =="Won" && opp_stage=="Cold"){
    probability="100%";

res.send(probability)

}
  else if (lead_status =="Won" && opp_stage=="Warm"){
    probability= "100%";
    res.send(probability)

    
  }
  else if(lead_status =="Won" && opp_stage=="Hot"){
    probability="100%";

res.send(probability)

}
  else if(lead_status =="PO" && opp_stage=="Cold"){
    probability="100%";

res.send(probability)

}
  else if (lead_status =="PO" && opp_stage=="Warm"){
    probability= "100%";
    res.send(probability)

    
  }
  else if(lead_status =="PO" && opp_stage=="Hot"){
    probability="100%";

res.send(probability)

}
  else if(lead_status =="Lost" && opp_stage=="Cold"){
    probability="0%%";
 
res.send(probability)

}
  else if (lead_status =="Lost" && opp_stage=="Warm"){
    probability= "0%";
 
res.send(probability)

}
  else if(lead_status =="Lost" && opp_stage=="Hot"){
    probability="0%";
  
res.send(probability)

}
  else if(lead_status =="Delivery" && opp_stage=="Cold"){
    probability="100%";

res.send(probability)

}
  else if (lead_status =="Delivery" && opp_stage=="Warm"){
    probability= "100%";
    res.send(probability)

    
  }
  else if(lead_status =="Delivery" && opp_stage=="Hot"){
    probability="100%";

res.send(probability)

}
})
app.listen(port,()=>{
    console.log("app is listening on" + port + " port")
    })