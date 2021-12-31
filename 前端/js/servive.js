async function createController(){
    var y=0;
   bulider=getContent("thirdBuilderLabel");
    mode=getContent("thirdmodeselect");
    if(mode=="0") {y=0}
    else y=1;
   content=getContent("thirdInput");
    item=get();
    var itemdata="";
   for(var i=0;i<item.length;i++){
      itemdata+="["+item[i]["content"]+"] "

   }
     await createActivity({content:content,mode:y,item:itemdata});
   /* data=await searchActivity(2);//此处需要设置send函数
    alert(data[0]);*/
}
async function voteController(activityId,itemId){
  await vote(activityId,itemId);
}

function allVoteController(){
    data=searchAllActivity();
    return data;
}
async function canVoteController(){

    account=await web3p.eth.getAccounts();
    var data=[],temp;
    var length=await con.methods.getActivitylength().call({from: account[0]});

    var i;
    var activityClass=0;
    for(i=0;i<length;i++) {

        activityClass=await searchClass(i,account);

        if(activityClass==2) {
            temp = await searchActivity(i, account);
            data.push({
                "id": temp[0],
                "content": temp[1],
                "builder": temp[2],
                "mode": getmodeText(temp[3]),
                "class": getClassText(activityClass)
            });
        }
    }

    return data;
}
async function buildVoteController(){
    account=await web3p.eth.getAccounts();
    var data=[],temp;
    var length=await con.methods.getActivitylength().call({from: account[0]});

    var i;
    var activityClass=0;
    for(i=0;i<length;i++) {

        activityClass=await searchClass(i,account);
        if(activityClass==0) {
            temp = await searchActivity(i, account);
            data.push({
                "id": temp[0],
                "content": temp[1],
                "builder": temp[2],
                "mode": getmodeText(temp[3]),
                "class": getClassText(activityClass)
            });
        }
    }

    return data;
}
async function haveVoteController(){
    account=await web3p.eth.getAccounts();
    var data=[],temp;
    var length=await con.methods.getActivitylength().call({from: account[0]});

    var i;
    var activityClass=0;
    for(i=0;i<length;i++) {

        activityClass=await searchClass(i,account);
        if(activityClass==1) {
            temp = await searchActivity(i, account);
            data.push({
                "id": temp[0],
                "content": temp[1],
                "builder": temp[2],
                "mode": getmodeText(temp[3]),
                "class": getClassText(activityClass)
            });
        }
    }

    return data;
}
function applyController(builder,activityId,content){
createMessage(builder,activityId);

}
//index为消息索引
function grantController(index,userId,activityId,message){
setMessage(index,message);
grantPower(userId,activityId,message);
}
async function see(){
   // [{id:0,activityContent:"1+1",messageContent:"我想申请投票"},{id:1,activityContent:"2+2",messageContent:"我想申请投票"}]
    account=await getAccount();
    var length=await messagecon.methods.getMessageLength().call({from: account[0]});
    var data=[],temp;
    var i;
    for(i=0;i<length;i++) {

        // return(le[i].send,le[i].receive,le[i].contractID,le[i].content,le[i].state);
        var temp=await getMessage(i);
        var h=await searchActivity(temp[2],account);
        if(temp[1]==account[0]) {
            data.push({"id": i, "activityContent": h[1],"activityId":temp[2],"state":temp[4],"send":temp[0]});
        }
    }

    return data;
}