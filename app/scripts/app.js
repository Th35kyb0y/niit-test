document.addEventListener("DOMContentLoaded", function () {
  console.log('ycjhj')
  app.initialized().then(function (_client) {
    console.log("jjhfhfkhkufhufhui")
    window.client = _client;
    client.events.on("app.activated", function () {

      client.data.get("currentEntityInfo").then(

        function (data) {
          console.log(data +" hfuhufuh data")
        var dealId = data.currentEntityInfo.currentEntityId;
        getDealDetails(dealId);
      }, function (error) {
        console.error(error);
      });
    });
  })
  .catch(err=>console.log('bjfjfjfjfjfhu'))
});


function getDealDetails(dealId) {
  client.iparams.get("account").then(
    function (iparam) {
    var url = `${iparam.account}/crm/sales/api/deals/` + dealId;
    var tkn = `${iparam.api_key}`;
    const headers = new Headers({
      'Content-Type': 'application/json',
      'Authorization': 'Token token='+ tkn
      //'Authorization': 'Token token=<%= iparam.api_key %>'
    });
    var options = { "headers": headers };
    client.request.get(url, options).then(function (data) {
      displayDealDetails(data.response);
      showNotification('success', 'Deal info retrieved successfully');
    }).catch(function (e) {
      console.error('Error occurred while retrieving deal details: ', e);
    });
  })
}

function showNotification(type, message) {
  client.interface.trigger("showNotify", {
    type: type,
    message: message
  });
}

function displayDealDetails(data) {
  var deal = (JSON.parse(data)).deal;
  document.getElementById('deal-data').innerHTML = "";
  addRow('deal-data', 'Name', deal.name);
  addRow('deal-data', 'Value', deal.amount);
  addRow('deal-data', 'Lead Status', deal.cf_lead_status);
  addRow('deal-data', 'Opportunity Stage', deal.cf_opportunity_stage);
  /*var lead_status = deal.cf_lead_status;
  var opp_stage = deal.cf_opportunity_stage;
  var probability;

  if (lead_status =="Initiation" && opp_stage=="Cold"){
    probability == "0%";

  }
  else if (lead_status =="Initiation" && opp_stage=="Warm"){
    probability == "5%";
  }
  else if(lead_status =="Initiation" && opp_stage=="Hot"){
    probability =="5%";
  }
  else if(lead_status =="Discussion" && opp_stage=="Cold"){
    probability =="10%";
  }
  else if (lead_status =="Discussion" && opp_stage=="Warm"){
    probability == "15%";
  }
  else if(lead_status =="Discussion" && opp_stage=="Hot"){
    probability =="20%";
  }
  else if(lead_status =="Design" && opp_stage=="Cold"){
    probability =="15%";
  }
  else if (lead_status =="Design" && opp_stage=="Warm"){
    probability == "25%";
  }
  else if(lead_status =="Design" && opp_stage=="Hot"){
    probability =="30%";
  }
  else if(lead_status =="Proposal" && opp_stage=="Cold"){
    probability =="20%";
  }
  else if (lead_status =="Proposal" && opp_stage=="Warm"){
    probability == "40%";
  }
  else if(lead_status =="Proposal" && opp_stage=="Hot"){
    probability =="50%";
  }
  else if(lead_status =="Negotiation" && opp_stage=="Cold"){
    probability =="20%";
  }
  else if (lead_status =="Negotiation" && opp_stage=="Warm"){
    probability == "60%";
  }
  else if(lead_status =="Negotiation" && opp_stage=="Hot"){
    probability =="80%";
  }
  else if(lead_status =="Won" && opp_stage=="Cold"){
    probability =="100%";
  }
  else if (lead_status =="Won" && opp_stage=="Warm"){
    probability == "100%";
  }
  else if(lead_status =="Won" && opp_stage=="Hot"){
    probability =="100%";
  }
  else if(lead_status =="PO" && opp_stage=="Cold"){
    probability =="100%";
  }
  else if (lead_status =="PO" && opp_stage=="Warm"){
    probability == "100%";
  }
  else if(lead_status =="PO" && opp_stage=="Hot"){
    probability =="100%";
  }
  else if(lead_status =="Lost" && opp_stage=="Cold"){
    probability =="0%%";
  }
  else if (lead_status =="Lost" && opp_stage=="Warm"){
    probability == "0%";
  }
  else if(lead_status =="Lost" && opp_stage=="Hot"){
    probability =="0%";
  }
  else if(lead_status =="Delivery" && opp_stage=="Cold"){
    probability =="100%";
  }
  else if (lead_status =="Delivery" && opp_stage=="Warm"){
    probability == "100%";
  }
  else if(lead_status =="Delivery" && opp_stage=="Hot"){
    probability =="100%";
  }
  */
}


function addRow(tableID, key, value) {
  var tableRef = document.getElementById(tableID);
  var newRow = tableRef.insertRow(-1);

  var cellOne = newRow.insertCell(0);
  cellOne.classList.add('bold');
  var cellOneText = document.createTextNode(key);
  cellOne.appendChild(cellOneText);

  var cellTwo = newRow.insertCell(1);
  var cellTwoText = document.createTextNode(value);
  cellTwo.appendChild(cellTwoText);
}

