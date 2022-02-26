__NUXT_JSONP__("/posts/mount-partitions-virtualbox-vdi-linux", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u){return {data:[{post:{slug:"mount-partitions-virtualbox-vdi-linux",description:"Mount your Virtualbox rig's partitions on the host machine",title:"Mount partitions from a VirtualBox VDI in Linux.",imagesource:p,imagecredit:p,image:"2011.07.07T14:00:00_mount-partitions-virtualbox-vdi-linux.jpg",createdAt:q,updatedAt:q,toc:[{depth:2,text:r}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"Hi, people!"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The title's pretty self explanatory, so I'll just dive right in..."}]},{type:a,value:c},{type:b,tag:"h2",props:{style:"color: red"},children:[{type:a,value:r}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"qemu-nbd is somewhat broken in Ubuntu Precise at the moment. Here's a new method (note: You will need quite a large amount of free HDD space to do this, as we make 2 separate copies of the original VDI). I've also written a "},{type:b,tag:"a",props:{href:"https:\u002F\u002Fgist.github.com\u002F3218617",target:"_blank"},children:[{type:a,value:"script, which should do the whole process for you"}]},{type:a,value:" (although you'll still need to install qemu-utils yourself)."}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,l]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:e,props:{className:[f,g]},children:[{type:a,value:n}]},{type:a,value:o},{type:b,tag:e,props:{className:[f,g]},children:[{type:a,value:s}]},{type:a,value:o},{type:b,tag:e,props:{className:[f,g]},children:[{type:a,value:t}]},{type:a,value:u}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You need qemu-utils for the command qemu-img. This command is for *buntu. Use your distribution's package manager to install the package."}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,l]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:e,props:{className:[f,g]},children:[{type:a,value:n}]},{type:a,value:o},{type:b,tag:e,props:{className:[f,g]},children:[{type:a,value:s}]},{type:a,value:o},{type:b,tag:e,props:{className:[f,g]},children:[{type:a,value:t}]},{type:a,value:u}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This will show you a list of all your VM VDIs. Note down the UUID for the VDI you want to mount."}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,l]},children:[{type:b,tag:m,props:{},children:[{type:a,value:"VBoxManage clonehd UUIDGOESHERE outputfilename.vmdk --format"},{type:b,tag:e,props:{className:[f,"operator"]},children:[{type:a,value:"="}]},{type:a,value:"VMDK\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This command converts the VDI to a VMDK using VirtualBox's CLI."}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,l]},children:[{type:b,tag:m,props:{},children:[{type:a,value:"qemu-img convert -f vmdk inputfilename.vmdk -O raw outputfilename.raw\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Here, we convert the HDD into a format readable by a generic Linux distribution."}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,l]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:e,props:{className:[f,g]},children:[{type:a,value:"parted"}]},{type:a,value:" rawfilename.raw unit b print\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Now, we list the partitions available in the raw disk image, to see their offsets. Note down the offset (remove the letter B from the end) of the partition you want to mount."}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,l]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:e,props:{className:[f,g]},children:[{type:a,value:n}]},{type:a,value:" losetup -f\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This will tell you the next free loopback device. It will be in the format \u002Fdev\u002Floop[n], where [n] is a number. On my machine, it's \u002Fdev\u002Floop0, so I'll use that in the next example."}]},{type:a,value:c},{type:b,tag:h,props:{className:[i]},children:[{type:b,tag:j,props:{className:[k,l]},children:[{type:b,tag:m,props:{},children:[{type:b,tag:e,props:{className:[f,g]},children:[{type:a,value:n}]},{type:a,value:" losetup -o OFFSETGOESHERE \u002Fdev\u002Floop0 rawfilename.raw\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Connect a loopback device to the file at the offset we noted down before."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[]},{type:b,tag:d,props:{},children:[{type:a,value:"Now you can mount the loopback device (\u002Fdev\u002Floop0 in my case) wherever you like."}]},{type:b,tag:d,props:{},children:[]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Any questions, just ask!"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"n00b"}]}]},dir:"\u002Fposts",path:"\u002Fposts\u002Fmount-partitions-virtualbox-vdi-linux",extension:".md",readingStats:{text:"2 min read",minutes:1.515,time:90900,words:303},postedAgo:"11 years ago"}}],fetch:{},mutations:void 0}}("text","element","\n","p","span","token","function","div","nuxt-content-highlight","pre","language-bash","line-numbers","code","sudo"," ",null,"2011-07-07T14:00:00.000Z","Update: 31-Jul-12","apt-get","install"," qemu-utils\n")));