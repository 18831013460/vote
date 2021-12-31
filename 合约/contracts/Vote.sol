
pragma solidity ^0.5.16;
import "./Split.sol";
import "./Message.sol";

contract Vote
{

    struct activityItem
    {
        uint id;
        string content;
        uint number;
    }
    struct activity
    {
        uint id;//与自己在数组中顺序相同。
        string content;
        address builder;
        mapping(uint =>activityItem)item;
        uint itemlength;
        int mode;//活动授权：0：全部授权；1：申请权利，投票时先判断授权模式
    }
    struct power//创建时自动授权
    {
        address userID;//与自己在数组中顺序相同。
        uint activityID;
    }
    struct voteRecord//投票记录
    {
        address userID;
        uint activityID;//与自己在数组中顺序相同。
        uint voteItem;//-1时没有投票。
    }
    activity[] voteActivity;
    power[] votePower;
    voteRecord[] record;
    Message m;
    constructor() public{
    m=new Message();
}
    function getActivitylength()public view returns(uint)
    {
        return voteActivity.length;

    }
    function getActivityItemlength(uint id) public view returns(uint)
    {
        return voteActivity[id].itemlength;

    }
    function createActivityItem(uint id,string memory content) private
    {
        activityItem memory temp;
        temp.id=voteActivity[id].itemlength;
        temp.content=content;
        temp.number=0;
        voteActivity[id].item[voteActivity[id].itemlength]=temp;
        voteActivity[id].itemlength++;
    }
    function grantPower(address userID,uint activityID) public  returns(int sign) //申请投票权
    {


        if(voteActivity[activityID].builder==msg.sender)
        {
            if(searchclass(activityID,userID)==3)
            {
                power memory temp;
                temp.activityID=activityID;
                temp.userID=userID;
                votePower.push(temp);
                sign=1;

            }
        }
        sign=0;
    }
    function createRecord(address userID,uint activityID,uint number) private //投票后进行记录
    {
        voteRecord  memory temp;
        temp.activityID=activityID;
        temp.userID=userID;
        temp.voteItem=number;
        record.push(temp);

    }
    function createActivity(string  memory content,int mode,string memory items) public  returns(uint) //创建活动
    {

        Split s=new Split();
        activity  memory temp;
        string memory  item1;
        uint number=0;
        temp.id=voteActivity.length;
        temp.builder=msg.sender;
        temp.content=content;
        temp.mode=mode;
        temp.itemlength=0;
        voteActivity.push(temp);
        while(number!=uint(-1))
        {

            (item1,number) =s.split(items,number);
            if(number==uint(-1)) break;
            createActivityItem(temp.id,item1);

        }
        return temp.id;
    }
    function vote(uint activityID,uint item) public//只有class=2时，才可以投票,前端自己负责判断能不能投票。
    {
        //if(searchclass(activityID,msg.sender)==2)
        //{
            voteActivity[activityID].item[item].number++;
            createRecord(msg.sender,activityID,item);
           // sign=1;
       // }
        //sign=0;
    }
    function searchclass(uint activityID,address userID) public view returns(int)//用于判断能不能投票，和searchAll同步调用，可以在界面增加状态
    {
        int class=-1;
        if(activityID<voteActivity.length)
        {
            //class=0时为创建者，class=1时,为已投票，class=2时，为可以投票，class=3时需要申请投票权。
            if(voteActivity[activityID].builder==userID)  {class=0;}
            else
            {
                if(searchRecordID(activityID,userID)==1)  {class=1;}
                else
                {
                    if(searchPoweID(activityID,userID)==1) {class=2;}
                    else {class=3;}

                }


            }
        }
        return class;
    }
    function searchAll(uint activityID) public view returns(uint,string memory,address,int)//activityID需要存储在前端，用来遍历活动
    {//给定活动id,搜索投票活动

        if(activityID<voteActivity.length)
        {
            return(voteActivity[activityID].id,voteActivity[activityID].content,voteActivity[activityID].builder,voteActivity[activityID].mode);
        }
        //无活动返回"",有前端界面判断是否继续
        return (1,"",msg.sender,0);

    }
    function searchItem(uint activityID,uint xu) public view returns(uint,string memory,uint)//返回内容和票数，在查看详情时进行调用
    {//可用于前端搜索投票项
        if(activityID<voteActivity.length)
        {
            return(voteActivity[activityID].item[xu].id,voteActivity[activityID].item[xu].content,voteActivity[activityID].item[xu].number);
        }
      return(0,"",0);
    }

    function searchPoweID(uint activityID,address userID) private  view returns(uint)//查询是否已经授权
    {
        if(voteActivity[activityID].mode==0) return 1;
        for(uint i=0;i<votePower.length;i++)
        {
            if(votePower[i].activityID==activityID&&votePower[i].userID==userID)
            {
                return 1;
            }
        }
        return 0;//未授权
    }
    function searchRecordID(uint activityID,address userID) private view returns(uint)//查询是否已经投票，返回投票项id
    {
        for(uint i=0;i<record.length;i++)
        {
            if(record[i].activityID==activityID&&record[i].userID==userID)
            {
                return 1;
            }
        }
        return 0;//未投票
    }

    function create(address re,address sender,uint  contractID,string  memory content,string  memory class) public
{
return m.create(re,sender,contractID,content,class);
}
function getMessage(uint i) public view returns(address,address,uint,string memory,string memory  )
{
return m.getMessage(i);
}

function getMessageLength() public view returns(uint)
{
    return m.getMessageLength();
}
function setMessage(uint number,int sign) public
{
    return m.setMessage(number,sign);
}

    /* *
        function searchBuilder(uint number) public view returns(uint,uint)//查询创建的活动
        {
            //无活动返回-1,有前端界面判断是否继续
            for(uint i=number;i<record.length;i++)
            {
                if(record[i].userID==msg.sender)
                {
                    number=i+1;
                    return (record[i].voteItem,number);//返回投票id,以及记录位置
                }
            }
            return (uint(-1),uint(-1));//未创建
        }
        function searchRecords(uint number) public view returns(uint,uint)//查询已投票的活动
        {//s
            //无活动返回空,有前端界面判断是否继续

            for(uint i=number;i<record.length;i++)
            {
                if(record[i].userID==msg.sender)
                {
                    number=i+1;
                    return (record[i].voteItem,number);//返回投票id,以及记录位置
                }
            }
            return (uint(-1),uint(-1));//未投票
        }

    * */







}
