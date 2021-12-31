function second(str) {


    layui.use('table', function () {
        var table = layui.table;
        table.render({
            elem: "#secondTable"
            , id: "secondTableId"

            , data: str
            , limit:30 //开启分页
            , cols: [[ //表头
                {field: 'id', title: 'ID', sort: true, fixed: 'left'}
                , {field: 'content', title: '内容'}
                , {field: 'number', title: '票数', sort: true}
                , {field: 'vote', title: '投票', toolbar: "#voteDiv"}
            ]]
        });

        table.on('tool(secondFilter)', function (obj) {
            switch(obj.event){
                case "secondVote"://投票需要判断class是否满足条件
                {

                    if (getTextContent("secondState") == "可以进行投票")
                    {

                        var t=getTextContent("secondId");
                        var r=parseInt(t);
                        voteController(r,obj.data.id);
                    }
                    else alert("当前不能投票，请查看投票要求");
                    break;
                }
                case "secondRequire":
                    alert(table.cache["secondTableId"][0].content);
                    break;
            }
            alert(table.cache["secondTableId"][0].id);//此时可以利用原有的json数据判断能否投票进行提示
        })

    })
}
 function require()
 {
    re();

 }
 async function re(){
     var t1=getTextContent("secondId");
     var r=parseInt(t1);
     var t2=getTextContent("secondBuilder");

     var e=await searchClass(r,await getAccount());
     if(e==3)
     {applyController(t2,r);}
     else alert("已有投票权，不能重复申请");
 }

