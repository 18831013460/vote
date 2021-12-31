function third(str) {

    layui.use('table', function () {
        var table = layui.table;
        table.render({
            elem: "#thirdTable"
            , id: "thirdTableId"

            ,toolbar:'#thirdButton'
            , data: str
           ,limit:30
            , cols: [[ //表头
                {field: 'id', title: 'ID', sort: true, fixed: 'left'}
                , {field: 'content', title: '内容',edit:'text'}
                , {field: 'number', title: '票数', sort: true}

            ]]
        });
        table.on('toolbar(thirdFilter)', function(obj){
            switch(obj.event){
                case 'thirdAddEvent':
                    add();
                    break;
                case 'thirdSubmitEvent':
                    createController();
                    break;

            };

        });


    })
}

function get(){
    var data;
    layui.use('table',function (){
        var table=layui.table;
         data = table.cache["thirdTableId"]

    })

    return data;
}
function add()
{
    var data=get();

  data.push({id:data.length,content:"",number:0});
  third(data);
}

