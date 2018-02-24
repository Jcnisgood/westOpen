window.onload=function () {
    var image=document.getElementById('image');
    var oImg=image.getElementsByTagName('img');
    for(var i=0;i<oImg.length;i++)
    {
        oImg[i].index=(i+1);
        oImg[i].onmouseover=function () {
            this.src='./images/h-'+(this.index)+'-over.png'
        };
        oImg[i].onmouseout=function () {
            this.src='./images/h-'+(this.index)+'.png'
        }
    }
  //新闻
    var oTab=document.getElementsByClassName('slide')[1];
    var oBtn=oTab.getElementsByTagName('button');
    var oJumb=oTab.getElementsByClassName('content');
    for(var k=0;k<oBtn.length;k++)
    {
        oBtn[k].index=k;
        oBtn[k].onclick=function () {
            for(var k=0;k<oJumb.length;k++)
            {
                oJumb[k].style.display="none";
                oBtn[k].className='btn'
            }
            oJumb[this.index].style.display='block';
            this.className='btn actives';
        }
    }
//回到顶部
    $(window).scroll(function () {
        var s=$(window).scrollTop();
        var y=document.documentElement.clientHeight/2;
        if(s>y)
        {
            $('#deemo').fadeIn();
        }
        else{
            $('#deemo').fadeOut();
        }
    });
    $('#totop').click(function () {
        $(window).scrollTop(0);
    })
};