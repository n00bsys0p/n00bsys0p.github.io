__NUXT_JSONP__("/posts/optimising-slackware-boot-time-part-2", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y,Z,_,$,aa,ab){return {data:[{post:{slug:"optimising-slackware-boot-time-part-2",description:"Part 2 of Optimising Slackware Boot Time",title:"Optimising Slackware Boot Time (part 2).",imagesource:"https:\u002F\u002Fcommons.wikimedia.org\u002Fwiki\u002FFile:Kernel-panic.jpg",imagecredit:"Kevin Collins",image:"2009.02.21T15:00:00_optimising-slackware-boot-time-part-2.jpg",createdAt:I,updatedAt:I,toc:[],body:{type:"root",children:[{type:b,tag:k,props:{},children:[{type:a,value:"Welcome to part two of my in depth guide to speeding up the Slackware boot time. Time to install the OS..."}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"Installing the OS"}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"I'm not going to walk you through this, as there are enough resources online for doing this (try "},{type:b,tag:J,props:{href:"http:\u002F\u002Fwww.howtoforge.com\u002Fthe_perfect_desktop_slackware12"},children:[{type:a,value:K}]},{type:a,value:"). Basically, I use the verbose mode, and carefully decide what I will and what I won't need. Slackware comes with about 15 of everything by default, so just limit it to one text editor, no office suite, ignore all X Windows based networking components etc... I tend to include everything in the \u002Fl folder, because it adds up to very little usage of space, but allows the addition of packages without too much hassle if necessary. Like I say... If you don't NEED it, don't install it. If you are a newbie to Slackware be particularly careful with the x\u002F folder, as you can b0rk it extremely easily... If in doubt, say yes (that's my motto, anyway!)."}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"The interesting bit begins"}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"Once you've booted your new system and logged in as root, the first step is to download a kernel, or at least reconfigure the existing source. Yet again, a full description of the process involved here is way beyond the scope of this article. Check out Alien Bob's wiki page on it "},{type:b,tag:J,props:{href:"http:\u002F\u002Falien.slackbook.org\u002Fdokuwiki\u002Fdoku.php?id=linux:kernelbuilding&s%5B%5D=kernel"},children:[{type:a,value:K}]},{type:a,value:" if you're not sure what you're doing."}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"Ok... The key with building your kernel is ONLY compiling into the kernel things your system requires. The default kernel has support for almost everything - hence it's name being vmlinuz-huge-smp. This may take a few attempts to get it spot on (for few attempts read BLOODY AGES), so make sure you leave the previous kernel selection in your lilo.conf. Generally, I'm happy when the kernel's no bigger than about 1.5-2Mb, as the time LILO will take to load a kernel of this size is negligible."}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"InitRD\u002FInitRAMFS"}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"If you use such things as the bootsplash patch, you will require an InitRD or InitRAMFS. These are just as hackable as the rest of the operating system. The file you will want to look at in your InitRD is the file called simply \"init\". This is the script which is run on loading of the initrd."}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"The idea with hacking apart your init script is to remove any lines in the script which you do not need. If you don't need RAID support on boot take out the mdadm clause, if you're not loading any kernel modules then delete the \u002Flib\u002Fmodules clause... All of these modifications will make a small difference... It may only be a tiny difference for each removal, but that's all we need."}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"Also, when leaving sections in, try to avoid leaving sections within conditional clauses. As an example, if you require LUKS filesystem encryption in your initrd, then it is quite likely that the cryptsetup executable will be executable, and that you know that your enrypted volume is valid. The original section looks like this:"}]},{type:a,value:f},{type:b,tag:L,props:{className:[M]},children:[{type:b,tag:N,props:{className:[O,P]},children:[{type:b,tag:Q,props:{},children:[{type:a,value:"  "},{type:b,tag:c,props:{className:[d,r,e]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\"\""}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:y}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:z}]},{type:a,value:" -x \u002Fsbin\u002Fcryptsetup "},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:B}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:"# If we find a LUKS device now, it is on a real block device:"}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:y}]},{type:a,value:" \u002Fsbin\u002Fcryptsetup isLuks "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:E}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:o}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:o}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:B}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,r,e]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,V]},children:[{type:a,value:W}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Y}]}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,"builtin","class-name"]},children:[{type:a,value:"echo"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\"Unlocking LUKS crypt volume '"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:"' on device '"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"$LUKSDEV"}]},{type:a,value:"':\""}]},{type:a,value:"\n      \u002Fsbin\u002Fcryptsetup luksOpen "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:o}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:o}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:E}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:y}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:z}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:l},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:_}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:l},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:$}]},{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:A}]},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:B}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,S]},children:[{type:a,value:"# scenario 1"}]},{type:a,value:"\n        "},{type:b,tag:c,props:{className:[d,r,e]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:ab},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:l}]},{type:a,value:v},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:H}]},{type:a,value:C},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:H}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:H}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"This can be happily hacked to pieces in the following manner:"}]},{type:a,value:f},{type:b,tag:L,props:{className:[M]},children:[{type:b,tag:N,props:{className:[O,P]},children:[{type:b,tag:Q,props:{},children:[{type:b,tag:c,props:{className:[d,r,e]},children:[{type:a,value:x}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,V]},children:[{type:a,value:W}]},{type:a,value:X},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Y}]}]},{type:a,value:"\n\u002Fsbin\u002Fcryptsetup luksOpen "},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:D}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:Z},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:o}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:o}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:E}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:z}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:l},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:w}]},{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:_}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:l},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:$}]},{type:a,value:l}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:A}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:o}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:o}]},{type:a,value:p},{type:b,tag:c,props:{className:[d,g]},children:[{type:a,value:j}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,r,e]},children:[{type:a,value:aa}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:ab},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:l}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"Notice how a simple if conditional can be cropped right down. There is only a need to use the full clause if there are a number commands of or a single complex command to run on validation of the conditional. This is only an example, of course, and your system may well not use this exact version, but if you apply this kind of logic right through the file, you'll end up with a very compact InitRD."}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"It may sort of go without saying, but once you've finalised your InitRD and added it to your LILO configuration, reboot and check that it works."}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"This section of the guide may appear quite small and self explanatory, but it may well take you a lot of trial and error before you've got a usable system."}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"See you tomorrow!"}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"I'm going to call it a night at this point in the guide and post the last section of it tomorrow where we'll look at hacking your rc scripts into tiny little pieces."}]},{type:a,value:f},{type:b,tag:k,props:{},children:[{type:a,value:"n00b"}]}]},dir:"\u002Fposts",path:"\u002Fposts\u002Foptimising-slackware-boot-time-part-2",extension:".md",readingStats:{text:"4 min read",minutes:3.78,time:226800,words:756},postedAgo:"14 years ago"}}],fetch:{},mutations:void 0}}("text","element","span","token","variable","\n","punctuation"," ","operator",";","p","\"","keyword","string","&","amp","number","assign-left","=","h1","gt","\n      ","$CRYPTDEV","CRYPTDEV","if","[","]","then","\n    ","${LUKSDEV}","1","2","${CRYPTDEV}","fi","2009-02-21T15:00:00.000Z","a","here","div","nuxt-content-highlight","pre","language-bash","line-numbers","code","\n  ","comment","\u002Fdev\u002Fnull ","$(","function","basename"," $ROOTDEV",")"," \u002Fdev\u002Fsystty ","==","$ROOTDEV","ROOTDEV","\"\u002Fdev\u002Fmapper\u002F")));