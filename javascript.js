<<<<<<< HEAD
$(document).ready(function(){
    $.getJSON('https://wind-bow.gomix.me/twitch-api/streams/freecodecamp?callback=?',function(data){
        console.log(data);
    });
});


["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"]
=======
function getCard(){
    var users=["ESL_SC2", "OgamingSC2", "cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];

    function setCard(data){
        var card=$('<div></div>');
        card.attr('class','card');

        //var result=data.stream.channel;
        var html='';
        var status='';

        if(data.stream){
            status='on';
        }else{
            status='off';
        }

        html='<a href="';
        html+=data.url;
        html+='" target="blank"><img src="';
        html+=data.logo;
        html+='"><div class="content"><p class="username">';
        html+=data.display_name;
        html+='</p><p class="description">';
        html+=data.status;
        html+='</p></div><div class="status">';
        html+=status;
        html+='</div></a>';

        card.html(html);
        $('.u-cards').append(card);
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
>>>>>>> 56b6ebc9389a4a4dba91bc87bc7b5e63adb9e86b
