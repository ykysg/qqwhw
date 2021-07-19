var lang=document.getElementById('lang');
    document.getElementById('btn').onclick=function(){
        var cont=document.createElement('div');
        cont.innerHTML='<p>'+lang.value+'</p><hr>';
        document.getElementById('div1').appendChild(cont);
        lang.value='';
    }
