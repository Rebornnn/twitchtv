function getCard(){
    var users=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

    function setCard(data){
        //console.log(data);
        var m_card=$('<a></a>');
        m_card.attr({'class':'m-card','target':'blank'});

        var html='';
        var status='';


        
        if(data.status===null){
            data.status='';
        }else if(data.status.length>42){
            data.status=data.status.slice(0,43)+'...';
        }

        m_card.attr('href',data.url);
        html='<li class="card"><img src="';
        html+=data.logo;
        html+='"><span class="username">';
        html+=data.display_name;
        html+='</span><span class="status ';
        html+=data.name;
        html+='"></span><span class="description">';
        html+=data.status;
        html+='</span></li>';

        m_card.html(html);
        $('.u-cards').append(m_card);

        //判别在线状态
        $.ajax({
            dataType:'jsonp',
            url:'https://wind-bow.gomix.me/twitch-api/streams/'+encodeURIComponent(data.name)+'?callback=?',
            success:function(result){
                if(result.stream){
                    $('.'+data.name).text('on').closest('.m-card').addClass('online'); //做标记方便筛选
                }else{
                    $('.'+data.name).text('off').closest('.m-card').addClass('offline'); //做标记方便筛选
                }
            }
        });
    }


    for(var i=0;i<users.length;i++){
        $.ajax({
            dataType:'jsonp',
            url:'https://wind-bow.gomix.me/twitch-api/channels/'+encodeURIComponent(users[i])+'?callback=?',
            success:setCard
        });
    }

}

function triangle(){
    $('.u-tabs').on('click',function(){
        $('.u-tabs div').removeClass('triangle');
        $(event.target).addClass('triangle');
    });
}

function select(){
    $('.tabs-all').on('click',function(){
        $('.m-card').removeClass("hide");
    });
    $('.tabs-online').on('click',function(){
        $('.online').removeClass('hide');
        $('.offline').addClass('hide');
    });
    $('.tabs-offline').on('click',function(){
        $('.offline').removeClass('hide');
        $('.online').addClass('hide');
    });

}

function filter(){
    var filterText=$('.filter').val();
    var pattern=new RegExp(filterText,'i');
    $('.username').text(function(index,text){
        if(pattern.test(text)){
            $(this).closest('.m-card').removeClass('hide');
        }else{
            $(this).closest('.m-card').addClass('hide');
        }
    });
}

$(document).ready(function(){
    getCard();
    triangle();
    select();
    $('.u-filter').on('keyup',filter);
});

