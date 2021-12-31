pragma solidity ^0.5.16;

contract Message
{
    struct Letter
    {

        address send;
        address re;
        uint contractID;
        string content;
        string class;
        string state;
    }
    Letter[] le;
    function create(address re,address sender,uint   contractID,string  memory content,string  memory class) public
        {

            Letter  memory tempMessage;
            tempMessage.send=sender;
            tempMessage.re=re;
            tempMessage.contractID=contractID;
            tempMessage.content=content;
            tempMessage.class=class;
            tempMessage.state="待处理";
            le.push(tempMessage);

        }
    function getMessage(uint i) public view returns(address,address,uint,string memory,string memory  )
        {

            if(i<le.length)
               return(le[i].send,le[i].re,le[i].contractID,le[i].content,le[i].state);
            else return(msg.sender,msg.sender,0,"","");




        }
    function getMessageLength() public view returns(uint)
    {
    return le.length;
    }
    function setMessage(uint number,int sign) public
    {

        if(sign==1)
        {
        le[number].state="已处理(同意)";
        }
        else
        {
        le[number].state="已处理(拒绝)";
        }
    }


}
