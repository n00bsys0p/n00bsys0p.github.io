__NUXT_JSONP__("/posts/madwifi-ng-and-injection-slackware-120", (function(a,b,c,d,e){return {data:[{post:{slug:"madwifi-ng-and-injection-slackware-120",description:"How to get Madwifi into promiscuous mode on Slack 12",title:"Madwifi-ng and injection on Slackware 12.0",imagesource:"https:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FFile:EBWifi.JPG",imagecredit:"Ravenperch",image:"2008.03.19T14:00:00_madwifi-ng-and-injection-slackware-120.png",createdAt:e,updatedAt:e,toc:[],body:{type:"root",children:[{type:b,tag:c,props:{},children:[{type:a,value:"Hi guys. Thought I'd pass on some info on getting the Madwifi-ng drivers working with my Atheros 5212 internal wireless card. When I installed them on a base setup (no mods made to Slack), I kept getting a weird error which I couldn't find anybody else getting."}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"This was that  for Managed mode it worked absolutely without fault, but when I used airmon-ng or wlanconfig to put my card into Monitor mode, it gave me a bunch of errors which said such things as no such device and other blatant lies."}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"A bit more digging led me to it being a problem with udev. In the meantime, I had upgraded my kernel to 2.6.24.3, but when I recompiled the drivers against my new kernel, it still gave me the same whole bunch of errors. I then went and downloaded udev 118 from "},{type:b,tag:"a",props:{href:"http:\u002F\u002Fpackages.slackware.it"},children:[{type:a,value:"here"}]},{type:a,value:" and used upgradepkg to update it."}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"After a quick reboot (not a fan of doing this but I was really tired!), I loaded up Kismet. Not a single error. I then ran airmon-ng start wifi0. No errors! Next - aireplay-ng --test -b $AP ath0. 30\u002F30! 100%! Awesome and win."}]}]},dir:"\u002Fposts",path:"\u002Fposts\u002Fmadwifi-ng-and-injection-slackware-120",extension:".md",readingStats:{text:"1 min read",minutes:.965,time:57900,words:193},postedAgo:"14 years ago"}}],fetch:{},mutations:void 0}}("text","element","p","\n","2008-03-19T14:00:00.000Z")));