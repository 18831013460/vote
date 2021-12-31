function fourth(str) {

    layui.use('table', function () {
        var table = layui.table;
        table.render({
            elem: "#fourthTable"
            , id: "fourthTableId"

            , data: str
            ,limit:30
            , cols: [[ //表头
                {field: 'id', title: 'ID', sort: true, fixed: 'left'}
                ,{field: 'activityId', title: '活动Id',edit:'text'}
                ,{field: 'activityContent', title: '活动内容',edit:'text'}

                , {field: 'send', title: '申请人'}
                ,{field: 'state', title: '状态'}
                ,{field: 'grant', title: '授权', toolbar:"#fourthButton" }

            ]]
        });

       table.on('tool(fourthFilter)', function(obj){

            switch(obj.event){

                case 'fourthGrantEvent': {

                    if(obj.data.state=="已处理(同意)") alert("已处理");
                    else fourthgrant(obj.data.id,obj.data.send,obj.data.activityId,"同意");

                    break;

                }

            };

        });


    })
}
async function fourthgrant(id,send,activityId,message){
    await grantController(id,send,activityId,message);
}
