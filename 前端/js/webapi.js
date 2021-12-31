

var abi;
var messageabi;
var con;
var messagecon;
var web3p;
abi=   [
 {
  "inputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "constructor"
 },
 {
  "constant": true,
  "inputs": [],
  "name": "getActivitylength",
  "outputs": [
   {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
   }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
 },
 {
  "constant": true,
  "inputs": [
   {
    "internalType": "uint256",
    "name": "id",
    "type": "uint256"
   }
  ],
  "name": "getActivityItemlength",
  "outputs": [
   {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
   }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
 },
 {
  "constant": false,
  "inputs": [
   {
    "internalType": "address",
    "name": "userID",
    "type": "address"
   },
   {
    "internalType": "uint256",
    "name": "activityID",
    "type": "uint256"
   }
  ],
  "name": "grantPower",
  "outputs": [
   {
    "internalType": "int256",
    "name": "sign",
    "type": "int256"
   }
  ],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "constant": false,
  "inputs": [
   {
    "internalType": "string",
    "name": "content",
    "type": "string"
   },
   {
    "internalType": "int256",
    "name": "mode",
    "type": "int256"
   },
   {
    "internalType": "string",
    "name": "items",
    "type": "string"
   }
  ],
  "name": "createActivity",
  "outputs": [
   {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
   }
  ],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "constant": false,
  "inputs": [
   {
    "internalType": "uint256",
    "name": "activityID",
    "type": "uint256"
   },
   {
    "internalType": "uint256",
    "name": "item",
    "type": "uint256"
   }
  ],
  "name": "vote",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "constant": true,
  "inputs": [
   {
    "internalType": "uint256",
    "name": "activityID",
    "type": "uint256"
   },
   {
    "internalType": "address",
    "name": "userID",
    "type": "address"
   }
  ],
  "name": "searchclass",
  "outputs": [
   {
    "internalType": "int256",
    "name": "",
    "type": "int256"
   }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
 },
 {
  "constant": true,
  "inputs": [
   {
    "internalType": "uint256",
    "name": "activityID",
    "type": "uint256"
   }
  ],
  "name": "searchAll",
  "outputs": [
   {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
   },
   {
    "internalType": "string",
    "name": "",
    "type": "string"
   },
   {
    "internalType": "address",
    "name": "",
    "type": "address"
   },
   {
    "internalType": "int256",
    "name": "",
    "type": "int256"
   }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
 },
 {
  "constant": true,
  "inputs": [
   {
    "internalType": "uint256",
    "name": "activityID",
    "type": "uint256"
   },
   {
    "internalType": "uint256",
    "name": "xu",
    "type": "uint256"
   }
  ],
  "name": "searchItem",
  "outputs": [
   {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
   },
   {
    "internalType": "string",
    "name": "",
    "type": "string"
   },
   {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
   }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
 },
 {
  "constant": false,
  "inputs": [
   {
    "internalType": "address",
    "name": "re",
    "type": "address"
   },
   {
    "internalType": "address",
    "name": "sender",
    "type": "address"
   },
   {
    "internalType": "uint256",
    "name": "contractID",
    "type": "uint256"
   },
   {
    "internalType": "string",
    "name": "content",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "class",
    "type": "string"
   }
  ],
  "name": "create",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
 },
 {
  "constant": true,
  "inputs": [
   {
    "internalType": "uint256",
    "name": "i",
    "type": "uint256"
   }
  ],
  "name": "getMessage",
  "outputs": [
   {
    "internalType": "address",
    "name": "",
    "type": "address"
   },
   {
    "internalType": "address",
    "name": "",
    "type": "address"
   },
   {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
   },
   {
    "internalType": "string",
    "name": "",
    "type": "string"
   },
   {
    "internalType": "string",
    "name": "",
    "type": "string"
   }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
 },
 {
  "constant": true,
  "inputs": [],
  "name": "getMessageLength",
  "outputs": [
   {
    "internalType": "uint256",
    "name": "",
    "type": "uint256"
   }
  ],
  "payable": false,
  "stateMutability": "view",
  "type": "function"
 },
 {
  "constant": false,
  "inputs": [
   {
    "internalType": "uint256",
    "name": "number",
    "type": "uint256"
   },
   {
    "internalType": "int256",
    "name": "sign",
    "type": "int256"
   }
  ],
  "name": "setMessage",
  "outputs": [],
  "payable": false,
  "stateMutability": "nonpayable",
  "type": "function"
 }
];
address="0x3B2153db35484f52b6af8694Fa39bAF1CC01A392";


loadWeb3= async function()
    {
        let web3Provider;
        if (window.ethereum) {

            web3Provider = window.ethereum;
            try {
                // Request account access
                await window.ethereum.enable();


            } catch (error) {
                // User denied account access...
                console.error("User denied account access")
            }
        }
// Legacy dapp browsers...
        else if (window.web3) {

            web3Provider = window.web3.currentProvider;//connected时metamask钱包会注入本窗口

        }
// If no injected web3 instance is detected, fall back to Ganache
        else {

            web3Provider = new Web3.providers.HttpProvider('http://localhost:8545');

        }


        web3p= new Web3(web3Provider);

        /* var accounts =  temp.eth.accounts;
         temp.eth.defaultAccount=accounts[0];*/


        return web3p;

    },
    initContract=async function()
    {

        web3p= await loadWeb3();

        con = new web3p.eth.Contract(abi,address);
        messagecon= con;
     //0x9773126f72a25D661b4C2B1b433626C249651341   消息合约
    },
    getWeb=function (){
        return web3p;
    },
    getAccount=async function ()
    {
     account=await web3p.eth.getAccounts();
     return account;
    }
    getContract=function (){
        return con;
    },
    createActivity=async  function (data){
         account=await web3p.eth.getAccounts();

        await con.methods.createActivity(data["content"],data["mode"],data["item"]).send({from: account[0]});

        },
    searchActivity=async  function (index,account){

        data=await con.methods.searchAll(index).call({from: account[0]});//call参数(options,callback)
        //需要对data进行封装
        return data;
    },
    searchItem=async function (index){
     account=await web3p.eth.getAccounts();
     var length=await con.methods.getActivityItemlength(index).call({from: account[0]});
     //需要对data进行封装
     var data=[];
     var temp;
     for(i=0;i<length;i++){
      temp=await con.methods.searchItem(index,i).call({from: account[0]});//call参数(options,callback)
      data.push( {id:temp[0],content:temp[1],number:temp[2]});//call参数(options,callback));
     }
     return data;
    },

    vote=async function (activityId,itemId) {
     account=await web3p.eth.getAccounts();
     await con.methods.vote(activityId,itemId).send({from: account[0]});//call参数(options,callback)
    },
    searchAllActivity=async function (){ //无条件查询
     account=await web3p.eth.getAccounts();
     var data=[],temp;
     var length=await con.methods.getActivitylength().call({from: account[0]});

     var i;
     var activityClass=0;
     for(i=0;i<length;i++) {
      temp=await searchActivity(i,account);
      activityClass=await searchClass(i,account);
      data.push({"id":temp[0],"content":temp[1],"builder":temp[2],"mode":getmodeText(temp[3]),"class":getClassText(activityClass)});
     }

     return data;
    }
    function getmodeText(data)
    {
     var text="";
     if(data==0)  text="授权所有";
     else text="申请投票";
     return text;
    }
    function getClassText(data)
    {
     var text="";
     if(data==0)  text="创建者";
     else if(data==1) text="已投票";
     else if(data==2) text="可以进行投票";
     else text="无投票权";
     return text;
    }
    async function searchClass(index,account)
    {
     data=await con.methods.searchclass(index,account[0]).call({from: account[0]});
     return data;
    }
async function createMessage(builder,activityId)
{
 account=await web3p.eth.getAccounts();
 await messagecon.methods.create(builder,account[0],activityId,"申请投票","申请").send({from: account[0]});//call参数(options,callback)

}
async function getMessage(number)
{
account=await getAccount();
 data=await messagecon.methods.getMessage(number).call({from: account[0]});//call参数(options,callback)
 return data;
}

async function setMessage(number,message)
{
 var sign=1;
 account=await getAccount();
 if(message="同意") sign=1;
 else sign=0;
 data=await messagecon.methods.setMessage(number,sign).send({from: account[0]});//call参数(options,callback)
 return data;
}

async function grantPower(userID,activityId,message)
{
 if(message=="同意")
 {
  account=await getAccount();


  await con.methods.grantPower(userID,parseInt(activityId)).send({from: account[0]});
 }
}




  /*  async function  hello()
    {







        //con.createActivity("1",0,"[95],[100],[101]",function(err,ref){alert(ref);});
        // con.grantPower("0x816C44F47aBB8572113b5412Db91F66d4c050748",1,function(err,ref) {alert(ref);});
        //con.get(function(err,ref) {alert(ref);});

        con.createActivity("2",0,"[95],[100][,,,,,",function(err,ref){alert(ref);});
        //con.createActivity("3",0,"[95]",function(err,ref){alert(ref);});
        //con.searchItem(1,3,function(err,ref){alert(ref);});
        con.getActivitylength(function(err,ref){alert(ref);});
        //con.getActivityItemlength(0,function(err,ref){alert(ref);});
        //con.getActivityItemlength(1,function(err,ref){alert(ref);});
        //con.getActivityItemlength(2,function(err,ref){alert(ref);});
    }
   */


