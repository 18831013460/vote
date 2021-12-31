pragma solidity ^0.5.16;

contract Split
{
    bytes   item;

    function split(string memory items,uint number)  public returns(string memory,uint)

    {

        bytes memory aItem=bytes(items);
        bytes memory sign1="[";
        bytes memory sign2="]";
        for(uint i=number;i<bytes(items).length;i++)
        {
            delete item;
            if(aItem[i]==sign1[0])
            {
                for(uint j=0;i<bytes(items).length;j++)
                {
                    i++;
                    if(i>=bytes(items).length) break;
                    if(aItem[i]==sign2[0])
                        return(string(item),i+1);
                    item.push(aItem[i]);
                }
            }
            if(i>=bytes(items).length) break;

        }
        return("",uint(-1));
    }


}
