__NUXT_JSONP__("/posts/disabling-xorg-screen-blanking", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s){return {data:[{post:{slug:"disabling-xorg-screen-blanking",description:k,title:k,imagesource:"https:\u002F\u002Fcommons.wikimedia.org\u002Fwiki\u002FFile:Xo-1-screen-color.jpg",imagecredit:"Hustvedt",image:"2009.02.13T15:00:00_disabling-xorg-screen-blanking.jpg",createdAt:l,updatedAt:l,toc:[],body:{type:"root",children:[{type:b,tag:g,props:{},children:[{type:a,value:"Hello! Just a quickie... I've always had trouble stopping Xorg from blanking the screen when not running a window manager... Recently found out how to do it:"}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"First up enter the following line into the Monitor section of \u002Fetc\u002FX11\u002Fxorg.conf:"}]},{type:a,value:f},{type:b,tag:m,props:{className:[n]},children:[{type:b,tag:o,props:{className:[p,q]},children:[{type:b,tag:r,props:{},children:[{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"DPMS\""}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"Now enter the following into the ServerLayout section:"}]},{type:a,value:f},{type:b,tag:m,props:{className:[n]},children:[{type:b,tag:o,props:{className:[p,q]},children:[{type:b,tag:r,props:{},children:[{type:a,value:s},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"blank time\""}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"standby time\""}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"suspend time\""}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:j},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"\"off time\""}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:i}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"That should keep your screen awake no matter what."}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"n00b"}]}]},dir:"\u002Fposts",path:"\u002Fposts\u002Fdisabling-xorg-screen-blanking",extension:".md",readingStats:{text:"1 min read",minutes:.405,time:24300,words:81},postedAgo:"14 years ago"}}],fetch:{},mutations:void 0}}("text","element","span","token","string","\n","p"," ","\"0\"","\nOption ","How to stop Xorg switching off your LCD screen's backlight.","2009-02-13T15:00:00.000Z","div","nuxt-content-highlight","pre","language-bash","line-numbers","code","Option ")));