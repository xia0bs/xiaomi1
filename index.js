// 轮播图
let n=0;
let ban=document.querySelectorAll('.pic_box li');
let right=document.querySelector('.btn_r');
let left=document.querySelector('.btn_l');
let circles=document.querySelectorAll('.btn_box li');
let box=document.querySelector('.banner');
function move(){
	n++;
	if (n>=ban.length) {
		n=0;
	}
	ban.forEach(function(dom,index){
		animate(dom,{opacity:0},1000);
		circles[index].classList.remove('active');
	})
	animate(ban[n],{opacity:1},1000);
	circles[n].classList.add('active');
}
let t=setInterval(move,1500);
box.onmouseover=function(){
	clearInterval(t);
}
box.onmouseout=function(){
	t=setInterval(move,1500);
}
right.onclick=function(){
	move();
}
left.onclick=function(){
	n--;
	if (n<0) {
		n=ban.length-1;
	}
	ban.forEach(function(val,index){
		animate(val,{opacity:0},1000);
		circles[index].classList.remove('active');
	})
	animate(ban[n],{opacity:1},1000);
	circles[n].classList.add('active');
}
circles.forEach(function(val,index){
	val.onclick=function(){
		ban.forEach(function(dom,i){
			animate(dom,{opacity:0},1000);
			circles[i].classList.remove('active');
		})
		animate(ban[index],{opacity:1},1000);
		this.classList.add('active');
		n=index;
	}
})

// 侧导航
let nav=document.querySelectorAll('.aside li');
let list=document.querySelectorAll('.asider li');
nav.forEach(function(val,index){
	val.onmouseover=function(){
		list.forEach(function(val){
			val.classList.remove('active');
		});
		list[index].classList.add('active');
	}
	val.onmouseout=function(){
		list[index].classList.remove('active');
	}
	list[index].onmouseover=function(){
		list[index].classList.add('active');
	}
	list[index].onmouseout=function(){
		list[index].classList.remove('active');
	}
})



// 家电选项卡
let jiadian=document.querySelectorAll('.top_right_jd .top_right1 a');
let jiadianxia=document.querySelectorAll('.bottom_right_jd .bottom_right_bigbox')
jiadian.forEach(function(val,ind){
	val.onmouseover=function(){
		jiadian.forEach(function(val,ind){
			val.classList.remove('remen')
		})
		this.classList.add('remen')
		jiadianxia.forEach(function(val){
			val.classList.remove('brbigbox')
		})
		jiadianxia[ind].classList.add('brbigbox')
	}
})


// 家电选项卡封装函数
let xxkfz=function (aaa,bbb){
	let jiadian=document.querySelectorAll(aaa);
let jiadianxia=document.querySelectorAll(bbb)
jiadian.forEach(function(val,ind){
	val.onmouseover=function(){
		jiadian.forEach(function(val,ind){
			val.classList.remove('remen')
		})
		this.classList.add('remen')
		jiadianxia.forEach(function(val){
			val.classList.remove('brbigbox')
		})
		jiadianxia[ind].classList.add('brbigbox')
	}
})
}
xxkfz('.top_right_zn .top_right1 a','.bottom_right_zn .bottom_right_bigbox')
xxkfz('.top_right_dp .top_right1 a','.bottom_right_dp .bottom_right_bigbox')
xxkfz('.top_right_pj .top_right1 a','.bottom_right_pj .bottom_right_bigbox')
xxkfz('.top_right_zb .top_right1 a','.bottom_right_zb .bottom_right_bigbox')



// 明星单品轮播
let mxzj=document.querySelector('.zntop_right_left');
let mxyj=document.querySelector('.zntop_right_right');
let mxdp=document.querySelectorAll('.dpbigbox');
mxzj.onclick=function(){
	mxs--
	if(mxs<0){
		mxs=mxdp.length-1
	}
	mxdp.forEach(function(val,ind){
		val.classList.remove('dpact')
	})
	mxdp[mxs].classList.add('dpact')
}
mxyj.onclick=function(){
	dong()
}

let mxs=0
function dong (){
	mxs++
	if(mxs>2){
		mxs=0
	}
	mxdp.forEach(function(val,ind){
		val.classList.remove('dpact')
	})
	mxdp[mxs].classList.add('dpact')
}
let mxt=setInterval(dong,2500)
mxdp.forEach(function(val){
	val.onmouseover=function(){
		clearInterval(mxt)
	}
})
mxdp.forEach(function(val){
	val.onmouseout=function(){
		mxt=setInterval(dong,2500)
	}
})

