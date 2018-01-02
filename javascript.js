function getCard(){
    var users=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

    function setCard(data){
        console.log(data);
        var m_card=$('<a></a>');
        m_card.attr({'class':'m-card','target':'blank'});

        //var result=data.stream.channel;
        var html='';
        var status='';

        if(data.stream){
            status='on';
        }else{
            status='off';
        }

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

$(document).ready(function(){
    getCard();
    triangle();
});

