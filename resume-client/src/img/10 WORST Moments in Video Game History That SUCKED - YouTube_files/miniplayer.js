(function(g){var window=this;'use strict';var Zgb=function(a,b){g.T.call(this,{G:"button",Ia:["ytp-miniplayer-expand-watch-page-button","ytp-button","ytp-miniplayer-button-top-left"],X:{title:"{{title}}","data-tooltip-target-id":"ytp-miniplayer-expand-watch-page-button","aria-keyshortcuts":"i","data-title-no-tooltip":"{{data-title-no-tooltip}}"},W:[{G:"svg",X:{height:"24px",version:"1.1",viewBox:"0 0 24 24",width:"24px"},W:[{G:"g",X:{fill:"none","fill-rule":"evenodd",stroke:"none","stroke-width":"1"},W:[{G:"g",X:{transform:"translate(12.000000, 12.000000) scale(-1, 1) translate(-12.000000, -12.000000) "},
W:[{G:"path",X:{d:"M19,19 L5,19 L5,5 L12,5 L12,3 L5,3 C3.89,3 3,3.9 3,5 L3,19 C3,20.1 3.89,21 5,21 L19,21 C20.1,21 21,20.1 21,19 L21,12 L19,12 L19,19 Z M14,3 L14,5 L17.59,5 L7.76,14.83 L9.17,16.24 L19,6.41 L19,10 L21,10 L21,3 L14,3 Z",fill:"#fff","fill-rule":"nonzero"}}]}]}]}]});this.F=a;this.Pa("click",this.onClick,this);this.updateValue("title",g.GS(a,"Expand","i"));this.update({"data-title-no-tooltip":"Expand"});g.ab(this,g.$S(b.Cc(),this.element))},$gb=function(a){g.T.call(this,{G:"div",
N:"ytp-miniplayer-ui"});this.Vf=!1;this.player=a;this.S(a,"minimized",this.Yh);this.S(a,"onStateChange",this.XO)},ahb=function(a){g.aS.call(this,a);
this.u=new g.ZF(this);this.j=new $gb(this.player);this.j.hide();g.hR(this.player,this.j.element,4);a.pg()&&(this.load(),g.Co(a.getRootNode(),"ytp-player-minimized",!0));this.player.K("web_rounded_containers")&&g.Co(a.getRootNode(),"ytp-rounded-miniplayer",!0)};
g.v(Zgb,g.T);Zgb.prototype.onClick=function(){this.F.Na("onExpandMiniplayer")};g.v($gb,g.T);g.k=$gb.prototype;
g.k.cM=function(){this.tooltip=new g.BV(this.player,this);g.D(this,this.tooltip);g.hR(this.player,this.tooltip.element,4);this.tooltip.scale=.6;this.Rc=new g.VS(this.player);g.D(this,this.Rc);this.Uj=new g.T({G:"div",N:"ytp-miniplayer-scrim"});g.D(this,this.Uj);this.Uj.Da(this.element);this.S(this.Uj.element,"click",this.PG);var a=new g.T({G:"button",Ia:["ytp-miniplayer-close-button","ytp-button"],X:{"aria-label":"Close"},W:[g.dO()]});g.D(this,a);a.Da(this.Uj.element);this.S(a.element,"click",this.ep);
a=new Zgb(this.player,this);g.D(this,a);a.Da(this.Uj.element);this.Eu=new g.T({G:"div",N:"ytp-miniplayer-controls"});g.D(this,this.Eu);this.Eu.Da(this.Uj.element);this.S(this.Eu.element,"click",this.PG);var b=new g.T({G:"div",N:"ytp-miniplayer-button-container"});g.D(this,b);b.Da(this.Eu.element);a=new g.T({G:"div",N:"ytp-miniplayer-play-button-container"});g.D(this,a);a.Da(this.Eu.element);var c=new g.T({G:"div",N:"ytp-miniplayer-button-container"});g.D(this,c);c.Da(this.Eu.element);this.xW=new g.CU(this.player,
this,!1);g.D(this,this.xW);this.xW.Da(b.element);b=new g.BU(this.player,this);g.D(this,b);b.Da(a.element);this.nextButton=new g.CU(this.player,this,!0);g.D(this,this.nextButton);this.nextButton.Da(c.element);this.tj=new g.uV(this.player,this);g.D(this,this.tj);this.tj.Da(this.Uj.element);this.Jc=new g.HU(this.player,this);g.D(this,this.Jc);g.hR(this.player,this.Jc.element,4);this.FG=new g.T({G:"div",N:"ytp-miniplayer-buttons"});g.D(this,this.FG);g.hR(this.player,this.FG.element,4);a=new g.T({G:"button",
Ia:["ytp-miniplayer-close-button","ytp-button"],X:{"aria-label":"Close"},W:[g.dO()]});g.D(this,a);a.Da(this.FG.element);this.S(a.element,"click",this.ep);a=new g.T({G:"button",Ia:["ytp-miniplayer-replay-button","ytp-button"],X:{"aria-label":"Close"},W:[g.kO()]});g.D(this,a);a.Da(this.FG.element);this.S(a.element,"click",this.B6);this.S(this.player,"presentingplayerstatechange",this.td);this.S(this.player,"appresize",this.Eb);this.S(this.player,"fullscreentoggled",this.Eb);this.Eb()};
g.k.show=function(){this.lf=new g.oo(this.Av,null,this);this.lf.start();this.Vf||(this.cM(),this.Vf=!0);0!==this.player.getPlayerState()&&g.T.prototype.show.call(this);this.Jc.show();this.player.unloadModule("annotations_module")};
g.k.hide=function(){this.lf&&(this.lf.dispose(),this.lf=void 0);g.T.prototype.hide.call(this);this.player.pg()||(this.Vf&&this.Jc.hide(),this.player.loadModule("annotations_module"))};
g.k.ra=function(){this.lf&&(this.lf.dispose(),this.lf=void 0);g.T.prototype.ra.call(this)};
g.k.ep=function(){this.player.stopVideo();this.player.Na("onCloseMiniplayer")};
g.k.B6=function(){this.player.playVideo()};
g.k.PG=function(a){if(a.target===this.Uj.element||a.target===this.Eu.element)g.LM(this.player.Gb())?this.player.pauseVideo():this.player.playVideo()};
g.k.Yh=function(){g.Co(this.player.getRootNode(),"ytp-player-minimized",this.player.pg())};
g.k.Ie=function(){this.Jc.xc();this.tj.xc()};
g.k.Av=function(){this.Ie();this.lf&&this.lf.start()};
g.k.td=function(a){g.S(a.state,32)&&this.tooltip.hide()};
g.k.Eb=function(){g.UU(this.Jc,0,this.player.ib().getPlayerSize().width,!1);g.IU(this.Jc)};
g.k.XO=function(a){this.player.pg()&&(0===a?this.hide():this.show())};
g.k.Cc=function(){return this.tooltip};
g.k.og=function(){return!1};
g.k.kh=function(){return!1};
g.k.Rb=function(){return!1};
g.k.Ll=function(){return!1};
g.k.FD=function(){};
g.k.Qp=function(){};
g.k.Ux=function(){};
g.k.Im=function(){return null};
g.k.CF=function(){return null};
g.k.FF=function(){return new g.je(0,0)};
g.k.NB=function(){return null};
g.k.Ak=function(){return new g.Gl(0,0,0,0)};
g.k.handleGlobalKeyDown=function(){return!1};
g.k.handleGlobalKeyUp=function(){return!1};
g.k.Lv=function(a,b,c,d,e){var f=0,h=d=0,l=g.$l(a);if(b){c=g.xo(b,"ytp-prev-button")||g.xo(b,"ytp-next-button");var m=g.xo(b,"ytp-play-button"),n=g.xo(b,"ytp-miniplayer-expand-watch-page-button");c?f=h=12:m?(b=g.Sl(b,this.element),h=b.x,f=b.y-12):n&&(h=g.xo(b,"ytp-miniplayer-button-top-left"),f=g.Sl(b,this.element),b=g.$l(b),h?(h=8,f=f.y+40):(h=f.x-l.width+b.width,f=f.y-20))}else h=c-l.width/2,d=25+(e||0);b=this.player.ib().getPlayerSize().width;e=f+(e||0);l=g.de(h,0,b-l.width);e?(a.style.top=e+"px",
a.style.bottom=""):(a.style.top="",a.style.bottom=d+"px");a.style.left=l+"px"};
g.k.showControls=function(){};
g.k.vp=function(){};
g.k.Fl=function(){return!1};
g.k.GD=function(){};
g.k.Gz=function(){};
g.k.Rq=function(){};
g.k.Qq=function(){};
g.k.KE=function(){};
g.k.Pr=function(){};g.v(ahb,g.aS);g.k=ahb.prototype;g.k.onVideoDataChange=function(){if(this.player.K("web_rounded_containers")&&this.player.getVideoData()){var a=this.player.getVideoAspectRatio(),b=16/9;a=a>b+.1||a<b-.1;g.Co(this.player.getRootNode(),"ytp-rounded-miniplayer-not-regular-wide-video",a)}};
g.k.create=function(){g.aS.prototype.create.call(this);this.u.S(this.player,"videodatachange",this.onVideoDataChange);this.onVideoDataChange()};
g.k.Tk=function(){return!1};
g.k.load=function(){this.player.hideControls();this.j.show()};
g.k.unload=function(){this.player.showControls();this.j.hide()};g.$R("miniplayer",ahb);})(_yt_player);
