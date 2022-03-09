__NUXT_JSONP__("/posts/western-digital-advanced-format-vs-linux-woes", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return {data:[{post:{slug:"western-digital-advanced-format-vs-linux-woes",description:"How to partition a Western Digital Advanced Format drive in Linux",title:"Western Digital Advanced Format vs. Linux Woes",imagesource:h,imagecredit:h,image:"2013.01.23T15:00:00_western-digital-advanced-format-vs-linux-woes.png",createdAt:i,updatedAt:i,toc:[{depth:j,text:k},{depth:j,text:l}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"Hi folks,"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I've been using WD's Advanced Format disks recently, and have to say that I'm particularly unimpressed with WD for how they've dealt with Linux support, but never fear - I'm here to help!"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The problem was, when I used fdisk to create the partitions, it moaned like a blocked drain about the fact that the logical and physical sectors were misaligned, and told me that this would seriously negatively affect the access speeds. After a little reading up on it, the actual process for creating the disk is a lot simpler than many people were willing to admit. Anyway, here's a mini-howto:"}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:k}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You start fdisk by using the following command:"}]},{type:a,value:c},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-bash","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:b,tag:e,props:{className:[f,"function"]},children:[{type:a,value:"fdisk"}]},{type:a,value:" -c"},{type:b,tag:e,props:{className:[f,n]},children:[{type:a,value:o}]},{type:a,value:"nondos -u"},{type:b,tag:e,props:{className:[f,n]},children:[{type:a,value:o}]},{type:a,value:"sectors \u002Fdev\u002Fsd"},{type:b,tag:e,props:{className:[f,p]},children:[{type:a,value:"["}]},{type:a,value:"x"},{type:b,tag:e,props:{className:[f,p]},children:[{type:a,value:"]"}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Just replace the [x] with the letter of the drive you want to edit. In my case, this was \u002Fdev\u002Fsdb"}]},{type:a,value:c},{type:b,tag:m,props:{},children:[{type:a,value:l}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Press \"n\" -\u003E [Enter] to create a new partition."},{type:b,tag:g,props:{},children:[]},{type:a,value:"\nPress \"1\" -\u003E [Enter] to make it partition #1."},{type:b,tag:g,props:{},children:[]},{type:a,value:"\nType \"2048\" to make it start on a sector which matches up with the WD Advanced Format sector boundary."},{type:b,tag:g,props:{},children:[]},{type:a,value:"\nTo enter a size, use the \"+size{M,G}\" format. This will ensure that your partitions have boundaries which work with the  WD Advanced Format drive sector sizes."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This logic extends for all partitions you create. Make sure the starting sector for the partition is divisible by 2048. Why WD have chosen to make it extra-complicated to use their HDDs in Linux is anybody's guess, but thankfully there are enough talented Linux gurus out there to put paid to their dastardly schemes!"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"As always, if anybody has any questions, leave them in the comments. I'll do my best to answer every single one!"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"n00b"}]}]},dir:"\u002Fposts",path:"\u002Fposts\u002Fwestern-digital-advanced-format-vs-linux-woes",extension:".md",readingStats:{text:"2 min read",minutes:1.445,time:86700,words:289}}}],fetch:{},mutations:void 0}}("text","element","\n","p","span","token","br",null,"2013-01-23T15:00:00.000Z",2,"Step 1 - Start fdisk","Step 2 - Create a partition","h2","operator","=","punctuation")));