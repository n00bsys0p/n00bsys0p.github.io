__NUXT_JSONP__("/posts/optimising-slackware-boot-time-part-1", (function(a,b,c,d,e,f,g,h,i){return {data:[{post:{slug:"optimising-slackware-boot-time-part-1",description:"The first part in a series of articles on optimising boot times in Slackware",title:"Optimising Slackware boot time (part 1).",imagesource:g,imagecredit:g,image:"2009.02.21T15:00:00_optimising-slackware-boot-time-part-1.jpg",createdAt:h,updatedAt:h,toc:[],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"Hi all! This is easily going to be my most in depth post so far, so buckle up..."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Introduction"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"As you may know, Slackware is widely regarded as one of the most lightning-fast Linux distros. Nevertheless, this isn't enough for some of us pedantic OS hackers."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"My aim was to boot the test system with all required services and a media centre system on top in under 1 minute. On previous Slackware installs this had taken up to 2.5 minutes from power-on to operational (Slack 10.1 and ReiserFS on a 160Gb IDE HDD). This is absolutely ridiculous. My aim has been to get it down to well under 1 minute, and this meant getting the initial bootup to around 20 seconds, as the software takes around 20 seconds to initialise, leaving up to 20 seconds for POST on a VIA EPIA EN15000G, which should be easily enough."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"While this may sound difficult, it's really not that bad. The Slackware boot process (in a much simplified form) works in the following sequence:"}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"1 - Kernel loaded"},{type:b,tag:e,props:{},children:[]},{type:a,value:"\n2 - Initrd\u002Finitramfs loaded"},{type:b,tag:e,props:{},children:[]},{type:a,value:"\n3 - rc.S executed (runlevel 1)"},{type:b,tag:e,props:{},children:[]},{type:a,value:"\n4 - rc.M executed (runlevel 2\u002F3)"},{type:b,tag:e,props:{},children:[]},{type:a,value:"\n5 - X started (runlevel 4)"}]}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Time to make a plan"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I knew that ReiserFS was out of the question for data partitions, as recovery of the journal takes an absurd amount of time. I eventually decided on Ext3 for system partitions and JFS for the media partition. The change from ReiserFS on the system partitions came given the uncertainty of it's future."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I chose Ext3 over Ext4 because I feel that Ext4 is still a little bit too recent to be trusting an entire system with, however give it a year or two and there will be no question. If you're interested in looking up Ext4, there's an in depth review of it "},{type:b,tag:"a",props:{href:"http:\u002F\u002Fwww.phoronix.com\u002Fscan.php?page=article&item=ext4_benchmarks&num=1"},children:[{type:a,value:"here"}]},{type:a,value:". It looks worlds better than even Ext3."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I chose JFS for the data partition as it's very fast and deals with large files really well, making it ideal for digital media. Also it's journal recovery speeds are really fast, allowing me to keep boot time to a minimum."}]},{type:a,value:c},{type:b,tag:f,props:{},children:[{type:a,value:"Ok... On with the hack!"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Right... Now we've got a plan we can start the implementation."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The first stage is to install Slackware from the DVD. I'm using 12.2, as it's the latest and greatest, and will STILL more than happily run on a 1.5GHz machine."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If you've ever installed Slackware before, you'll know that you've got to do all of your partitioning beforehand. I tend to use CFDisk after booting from the DVD, but if that all looks a bit daunting, a nice easy way to partition is to download the GParted LiveCD, which lets you do it all through a graphical interface."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"My partitions run as follows:"}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:b,tag:d,props:{},children:[{type:a,value:"hda1 - 500Mb - \u002Fboot"},{type:b,tag:e,props:{},children:[]},{type:a,value:"\nhda2 - the rest - extended partition to contain others"},{type:b,tag:e,props:{},children:[]},{type:a,value:"\nhda5 - 1Gb - SWAP"},{type:b,tag:e,props:{},children:[]},{type:a,value:"\nhda6 - 500Mb - \u002Fhome"},{type:b,tag:e,props:{},children:[]},{type:a,value:"\nhda7 - 2Gb - \u002F"},{type:b,tag:e,props:{},children:[]},{type:a,value:"\nhda8 - 5Gb - \u002Fusr"},{type:b,tag:e,props:{},children:[]},{type:a,value:"\nhda9 - 1Gb - \u002Fvar"},{type:b,tag:e,props:{},children:[]},{type:a,value:"\nhda10 - Whatever's left - \u002Fhome\u002Fmedia"}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I'll post the next section later today. Don't want to put it all into one post, as it'll be hugely too long. Don't want to cause a case of tl;dr."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"n00b"}]}]},dir:"\u002Fposts",path:"\u002Fposts\u002Foptimising-slackware-boot-time-part-1",extension:".md",readingStats:{text:"3 min read",minutes:2.705,time:162300,words:541},postedAgo:"14 years ago"}}],fetch:{},mutations:void 0}}("text","element","\n","p","br","h1",null,"2009-02-21T15:00:00.000Z","blockquote")));