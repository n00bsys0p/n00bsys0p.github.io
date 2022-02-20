__NUXT_JSONP__("/posts/linux-ftp-file-transfer-failed-problems", (function(a,b,c,d,e,f,g){return {data:[{post:{slug:"linux-ftp-file-transfer-failed-problems",description:"FTP connection tracking fix for Linux",title:"Linux FTP file transfer failed problems",imagesource:e,imagecredit:e,image:"2010.10.28T14:00:00_linux-ftp-file-transfer-failed-problems.jpg",createdAt:f,updatedAt:f,toc:[],body:{type:"root",children:[{type:b,tag:c,props:{},children:[{type:a,value:"Hey all!"}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"Really quick post this time. I was having problems FTPing out to a corporate FTP site. I could log on, but I couldn't list, put or get anything. I called our FTP host, and they could see no problems on their end until they ran a packet capture, filtered for our IP address."}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"What was happening was the outbound connection from our office to the FTP server was succeeding in making a connection, but the inbound connection from the FTP site to us was blocked. I tried connecting via FTP from three machines on the same network, and two out of the three could connect. A windows machine and a different Slackware Linux machine."}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"After a little exploration on the subject, it turned out that the answer was a simple module loading problem. The module "},{type:b,tag:g,props:{},children:[{type:a,value:"ip_conntrack_ftp"}]},{type:a,value:" wasn't loaded. All it took was editing \u002Fetc\u002Frc.d\u002Frc.modules, searching for the line which contained "},{type:b,tag:g,props:{},children:[{type:a,value:"modprobe ip_conntrack_ftp"}]},{type:a,value:", and taking the hash from the beginning of the line, then manually running the command, to avoid having to reboot."}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"Simples!"}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"n00b"}]}]},dir:"\u002Fposts",path:"\u002Fposts\u002Flinux-ftp-file-transfer-failed-problems",extension:".md",readingStats:{text:"1 min read",minutes:.88,time:52800,words:176},postedAgo:"12 years ago"}}],fetch:{},mutations:void 0}}("text","element","p","\n",null,"2010-10-28T14:00:00.000Z","strong")));