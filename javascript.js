function getCard(){
    var users=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

    function setCard(data){
        console.log(data);
        var m_card=$('<a></a>');
        m_card.attr({'class':'m-card','target':'blank'});

        var html='';
        //var status='';



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
        html+='</span><span class="status">';
        html+=status;
        html+='</span><span class="description">';
        html+=data.status;
        html+='</span></li>';

        m_card.html(html);
        $('.u-cards').append(m_card);

        //判别在线状态
/*        $.ajax({
            dataType:'jsonp',
            url:'https://wind-bow.gomix.me/twitch-api/streams/'+encodeURIComponent(data.name)+'?callback=?',
            success:function(result){
                    if(result.stream){
                        status='on';
                        $('.status').val(status);
                    }else{
                        status='off';
                        $('.status').val(status);
                    }
                }
        });*/
    }


    for(var i=0;i<users.length;i++){
        $.ajax({
            dataType:'jsonp',
            url:'https://wind-bow.gomix.me/twitch-api/channels/'+encodeURIComponent(users[i])+'?callback=?',
            success:setCard
        });
        $.ajax({
            dataType:'jsonp',
            url:'https://wind-bow.gomix.me/twitch-api/users/'+encodeURIComponent(users[i])+'?callback=?',
            success:function(result){
                if(result.stream){
                    $('.status').val('on');
                    console.log($('.status').val());
                }else{
                    $('.status').val('off');
                    console.log($('.status').val());
                }
            }
        });
    }

}

function triangle(){
    $('.u-tabs').on('click',function(){
        $('.u-tabs div').removeClass('triangle');
        $(event.target).addClass('triangle');
    });
}

$(document).ready(function(){
    getCard();
    triangle();
});

