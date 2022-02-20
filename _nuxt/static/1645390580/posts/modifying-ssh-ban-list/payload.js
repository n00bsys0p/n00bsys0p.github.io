__NUXT_JSONP__("/posts/modifying-ssh-ban-list", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x){return {data:[{post:{slug:"modifying-ssh-ban-list",description:"How to manually edit the IPTables SSH ban list",title:"Modifying the SSH ban list.",imagesource:"https:\u002F\u002Fcommons.wikimedia.org\u002Fwiki\u002FFile:Digicode.JPG",imagecredit:"D4m1en",image:"2009.04.06T14:00:00_modifying-ssh-ban-list.jpg",createdAt:x,updatedAt:x,toc:[],body:{type:"root",children:[{type:b,tag:f,props:{},children:[{type:a,value:"Hi everybody!"}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"How many times have you locked yourself out of your remote server by being too quick for your own good? My servers are all set to ban an IP after 3 connection attempts within a minute, so it happens quite regularly that I lock myself out."}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"The list of banned IPs is stored in "},{type:b,tag:"strong",props:{},children:[{type:a,value:"\u002Fproc\u002Fnet\u002Fipt_recent"}]},{type:a,value:". There are a couple of commands this 'file' understands..."}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"To see what IPs are currently banned, use:"}]},{type:a,value:e},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,m]},children:[{type:b,tag:n,props:{},children:[{type:b,tag:c,props:{className:[d,"function"]},children:[{type:a,value:"cat"}]},{type:a,value:" \u002Fproc\u002Fnet\u002Fipt_recent\u002FBAN_LIST_NAME"},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:")"}]},{type:a,value:".\n"}]}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"To remove an IP from the list use:"}]},{type:a,value:e},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,m]},children:[{type:b,tag:n,props:{},children:[{type:b,tag:c,props:{className:[d,p,q]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"\"-xxx.xxx.xxx.xxx\""}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:u}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:o}]},{type:a,value:w}]}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"To add a suspicious or known bad IP:"}]},{type:a,value:e},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,m]},children:[{type:b,tag:n,props:{},children:[{type:b,tag:c,props:{className:[d,p,q]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"\"+xxx.xxx.xxx.xxx\""}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:u}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:o}]},{type:a,value:w}]}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"To remove all entries (not really a very good idea):"}]},{type:a,value:e},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,m]},children:[{type:b,tag:n,props:{},children:[{type:b,tag:c,props:{className:[d,p,q]},children:[{type:a,value:r}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,s]},children:[{type:a,value:"\"clear\""}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,t]},children:[{type:a,value:u}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:o}]},{type:a,value:w}]}]}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"That's all for now."}]},{type:a,value:e},{type:b,tag:f,props:{},children:[{type:a,value:"n00b"}]}]},dir:"\u002Fposts",path:"\u002Fposts\u002Fmodifying-ssh-ban-list",extension:".md",readingStats:{text:"1 min read",minutes:.655,time:39300,words:131},postedAgo:"13 years ago"}}],fetch:{},mutations:void 0}}("text","element","span","token","\n","p"," ","punctuation","div","nuxt-content-highlight","pre","language-bash","line-numbers","code",";","builtin","class-name","echo","string","operator","&","gt"," \u002Fproc\u002Fnet\u002Fipt_recent\u002FBAN_LIST_NAME\n","2009-04-06T14:00:00.000Z")));