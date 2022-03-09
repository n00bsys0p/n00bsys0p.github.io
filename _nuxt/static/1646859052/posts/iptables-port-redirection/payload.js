__NUXT_JSONP__("/posts/iptables-port-redirection", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n){return {data:[{post:{slug:"iptables-port-redirection",description:"The simple process of forwarding ports between different machines using Linux's IPTables.",title:"IPTables port redirection",imagesource:l,imagecredit:l,image:"2013.04.04T14:00:00_iptables-port-redirection.png",createdAt:m,updatedAt:m,toc:[],body:{type:"root",children:[{type:b,tag:g,props:{},children:[{type:a,value:"Hi guys, I was trying to find a way to route connections from my Slackware Internet gateway to a VPS I have running elsewhere on my network, and it took me a little while to work it out, so here's my solution:"}]},{type:a,value:f},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-bash","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:b,tag:c,props:{className:[d,h,e]},children:[{type:a,value:"PROTOCOL"}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"\"tcp\""}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h,e]},children:[{type:a,value:"DPORT"}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"\"8080\""}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h,e]},children:[{type:a,value:"DESTADDR"}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"\"10.0.0.7\""}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h,e]},children:[{type:a,value:"DESTPORT"}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"\"80\""}]},{type:a,value:"\niptables -t nat -A PREROUTING -p "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"$PROTOCOL"}]},{type:a,value:" --dport "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"$DPORT"}]},{type:a,value:" -j DNAT --to-destination "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"$DESTADDR"}]},{type:b,tag:c,props:{className:[d,"builtin","class-name"]},children:[{type:a,value:":"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:"\niptables -t nat -A POSTROUTING -p tcp --dport "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:n}]},{type:a,value:" -j MASQUERADE\n"}]}]}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"This basically just sets up a simple nat rule to forward anything coming in to the gateway on port 8080 to the machine with IP address 10.0.0.7 on port 80."}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"Simples!"}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"Feel free to leave any questions, corrections or comments!"}]},{type:a,value:f},{type:b,tag:g,props:{},children:[{type:a,value:"n00b"}]}]},dir:"\u002Fposts",path:"\u002Fposts\u002Fiptables-port-redirection",extension:".md",readingStats:{text:"1 min read",minutes:.57,time:34200,words:114}}}],fetch:{},mutations:void 0}}("text","element","span","token","variable","\n","p","assign-left","operator","=","string",null,"2013-04-04T14:00:00.000Z","$DESTPORT")));