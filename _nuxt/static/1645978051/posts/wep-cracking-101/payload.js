__NUXT_JSONP__("/posts/wep-cracking-101", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p){return {data:[{post:{slug:"wep-cracking-101",description:"WEP is awful... Here's why.",title:"WEP cracking 101",imagesource:"https:\u002F\u002Fcommons.wikimedia.org\u002Fwiki\u002FFile:Erdfunkstelle_Raisting_2.jpg",imagecredit:"Richard Bartz",image:"2008.03.08T15:00:00_wep-cracking-101.png",createdAt:n,updatedAt:n,toc:[],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"Hi everyone. Yet another post today. Being a sysadmin for an internet-related company, it is important to understand the various weaknesses which are inherent in the systems we use. One of these systems is Wi-Fi connectivity. This all being the case, I thought I'd look into Wi-Fi vulnerabilities. This is what I found:"},{type:b,tag:o,props:{},children:[]},{type:a,value:"\nWEP SUCKS! LIKE, REALLY!"},{type:b,tag:o,props:{},children:[]},{type:a,value:"\nIt really is no feat of genius cracking WEP. It took me, having never used the programs involved and understanding very little about what I was doing, about ten minutes. No more. Over this post I'll write a transcript of the video which I'm going to make and embed tomorrow."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The program I am going to use is the SVN release of the "},{type:b,tag:"a",props:{href:"http:\u002F\u002Fwww.aircrack-ng.org"},children:[{type:a,value:"Aircrack-ng suite"}]},{type:a,value:" on Back|Track 2 on a laptop with an Atheros internal wireless NIC and the SVN release of the Madwifi-ng drivers to allow packet injection."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Righto..."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Next I switch off my Managed mode interface ath0 by using the following command:"}]},{type:a,value:c},{type:b,tag:e,props:{className:[f]},children:[{type:b,tag:g,props:{className:[h,i]},children:[{type:b,tag:j,props:{},children:[{type:a,value:"wlanconfig ath0 destroy\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Now I bring up the Monitor mode interface (replaces ath0) with airmon-ng. You will need to know the channel which the AP runs on to allow this to work."}]},{type:a,value:c},{type:b,tag:e,props:{className:[f]},children:[{type:b,tag:g,props:{className:[h,i]},children:[{type:b,tag:j,props:{},children:[{type:a,value:"airmon-ng start wifi0 "},{type:b,tag:k,props:{className:[l,m]},children:[{type:a,value:p}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Replace the '6' with the channel of your AP. It locks the channel of the interface to that and stops you 'channel hopping', which can screw things right up."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The next step is to start airodump-ng to find any clients which are connected:"}]},{type:a,value:c},{type:b,tag:e,props:{className:[f]},children:[{type:b,tag:g,props:{className:[h,i]},children:[{type:b,tag:j,props:{},children:[{type:a,value:"airodump-ng -c "},{type:b,tag:k,props:{className:[l,m]},children:[{type:a,value:p}]},{type:a,value:" --bssid 00:11:22:33:44:55 ath0\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This will start up the airodump-ng console app which will show the BSSID, ESSID, channel, any associated clients and all sorts of other info which we'll get into later."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"RIght. Now you can ^ C out of that window and start it again with a couple more options."}]},{type:a,value:c},{type:b,tag:e,props:{className:[f]},children:[{type:b,tag:g,props:{className:[h,i]},children:[{type:b,tag:j,props:{},children:[{type:a,value:"airodump-ng -w outputfile --ivs --bssid 00:11:22:33:44:55 ath0\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This will start airodump capturing all Initialisation Vectors transmitted by the AP or the"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I left that running and opened a new terminal. There, I ran a deuthentication attack on the wireless client with this command:"}]},{type:a,value:c},{type:b,tag:e,props:{className:[f]},children:[{type:b,tag:g,props:{className:[h,i]},children:[{type:b,tag:j,props:{},children:[{type:a,value:"aireplay-ng -0 "},{type:b,tag:k,props:{className:[l,m]},children:[{type:a,value:"10"}]},{type:a,value:" -a 00:11:22:33:44:55 -c "},{type:b,tag:k,props:{className:[l,m]},children:[{type:a,value:"55"}]},{type:a,value:":44:33:22:11 ath0\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You should see the repercussions of this on the airodump terminal. Now you need to get aireplay to find an ARP packet which has caused the sending of lots of IVs. This is done in a few different ways. The method I used was just the ARP packet replay mode. It's slower than some of the others, but almost always works."}]},{type:a,value:c},{type:b,tag:e,props:{className:[f]},children:[{type:b,tag:g,props:{className:[h,i]},children:[{type:b,tag:j,props:{},children:[{type:a,value:"aireplay-ng -3 -a 00:11:22:33:44:55 ath0\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"When it finds a packet which can be used it will come up and ask you if you want to use it.Say yes. It will then replay this packet to generate loads of IVs. You will see this in the airmon window. The data packets will go through the roof."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Now you need to start aircrack-ng working on the captured IVs."}]},{type:a,value:c},{type:b,tag:e,props:{className:[f]},children:[{type:b,tag:g,props:{className:[h,i]},children:[{type:b,tag:j,props:{},children:[{type:a,value:"aircrack-ng -z -b 00:11:22:33:44:55 outputfile*.ivs\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Done. If aircrack acts up then just try again when you have more IVs."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"If this ain't enough to switch you over to WPA, then you're a lost cause."}]}]},dir:"\u002Fposts",path:"\u002Fposts\u002Fwep-cracking-101",extension:".md",readingStats:{text:"3 min read",minutes:2.64,time:158400,words:528},postedAgo:"14 years ago"}}],fetch:{},mutations:void 0}}("text","element","\n","p","div","nuxt-content-highlight","pre","language-bash","line-numbers","code","span","token","number","2008-03-08T15:00:00.000Z","br","6")));