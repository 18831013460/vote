
window.onload=async function(){
  init();

}

async function init (){

    await initContract();
    //需要对data进行封装

    // data=await searchActivity(0);//此处需要设置send函数
    // alert(data[1]);
    data=await allVoteController();

    first(data);//初始化界面

}

function first(str)//完成table初始化
 {
    layui.use('table', function () {
        table = layui.table;
        table.render({
            elem: '#firstTable'
            , id: "firstTableId"

            , data: str
            , page: true //开启分页
            , cols: [[ //表头
                {field: 'id', title: '序号', sort: true, fixed: 'left'}
                , {field: 'content', title: '内容'}
                , {field: 'builder', title: '创建者'}
                , {field: 'mode', title: '模式'}
                ,{field: 'class', title:  '权限'}
                , {field: 'view', title: '查看详情', toolbar:'#firstButton'}
            ]]
        })

        table.on('tool(firstFilter)',function (obj){

        /*设置函数，
        第一个函数，设置div是否显示
        * 第二个函数查找数据 最难
        第三个函数 second（）初始化table*/
            setNotShow("firstDiv");

            setShow("secondDiv");

            secondIndex(obj.data)

        })

    });

}
async function secondIndex(index){
    let temp;
    temp=await searchActivity(index.id,account);

    setContent("secondId",index.id);
    setContent("secondBuilder",index.builder);
    setContent("secondMode",index.mode);
    setContent("secondState",index.class);
    setContent("secondContent",index.content);



    second( await searchItem(index.id));
}
async function firstAddButton(){
    setNotShow("firstDiv");

    setShow("thirdDiv");
    builder=await web3p.eth.getAccounts();
    setContent("thirdBuilderLabel",builder[0]);
    third([]);

}
async function secondviewButton(){
data=await buildVoteController();
first(data);
}
async function thirdviewButton(){
    data=await haveVoteController();
    first(data);
}
async function fourthviewButton(){

    data=await canVoteController();
    first(data);
}
function fifthMessageButton(){
  fifthMessage();
}
async function fifthMessage()
{
    setNotShow("firstDiv");
    setShow("fourthDiv");

    data=await see();
    fourth(data);//此处需要联立消息记录和活动信息

}