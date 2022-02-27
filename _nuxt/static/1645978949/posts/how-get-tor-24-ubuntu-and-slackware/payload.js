__NUXT_JSONP__("/posts/how-get-tor-24-ubuntu-and-slackware", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C){return {data:[{post:{slug:"how-get-tor-24-ubuntu-and-slackware",description:"How and why to get the latest and safest version of anonymising software Tor on your Ubuntu or Slackware box.",title:"How to get Tor 2.4 on Ubuntu and Slackware.",imagesource:q,imagecredit:q,image:"2013.09.09T06:00:00_how-get-tor-24-ubuntu-and-slackware.png",createdAt:r,updatedAt:r,toc:[{depth:o,text:s},{depth:o,text:t},{depth:o,text:u}],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"With all the recent fuss about "},{type:b,tag:j,props:{href:"http:\u002F\u002Fgizmodo.com\u002Fthe-nsa-can-crack-almost-any-type-of-encryption-1258954266",target:k},children:[{type:a,value:"the NSA being able to decrypt pretty much anything they like"}]},{type:a,value:", it's more important than ever to focus on ensuring you're running up to date server software. I also came across "},{type:b,tag:j,props:{href:"http:\u002F\u002Farstechnica.com\u002Fsecurity\u002F2013\u002F09\u002Fmajority-of-tor-crypto-keys-could-be-broken-by-nsa-researcher-says\u002F",target:k},children:[{type:a,value:"an article detailing exactly how out of the loop Tor exit node providers are"}]},{type:a,value:". This I find concerning for far too many reasons to list, and hope here to provide some information on how to stay up to date. Version 2.4 of Tor is still in RC phase, but seems to be widely regarded "},{type:b,tag:j,props:{href:"https:\u002F\u002Flists.torproject.org\u002F",target:k},children:[{type:a,value:"on the mailing lists"}]},{type:a,value:" as stable enough for people to adopt officially."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The encryption techniques Tor 2.3 and previous used were RSA-1024\u002FDH-1024 with AES-128. These are some of the most popular cryptographic techniques currently employed, and thus are considered to be some of the most likely to have been broken by the NSA's crypto team. The RC edition uses ECC (Elliptic Curve Cryptography), which is generally considered to be far better - although "},{type:b,tag:j,props:{href:"https:\u002F\u002Fwww.schneier.com\u002Fblog\u002Farchives\u002F2013\u002F09\u002Fthe_nsas_crypto_1.html",target:k},children:[{type:a,value:"there are doubts from some experts"}]},{type:a,value:"."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"By far one of the most common Linux base distributions are Debian, and its various derivatives. The Tor Project have taken this into account, and "},{type:b,tag:j,props:{href:"https:\u002F\u002Fwww.torproject.org\u002Fdocs\u002Fdebian",target:k},children:[{type:a,value:"provide .deb packages for many of these"}]},{type:a,value:". To ensure you're using version 2.4, you must currently use the development branch - at least until the official release date."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Here's a simple set of instructions for getting the latest edition of Tor installed on your server..."}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:s}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Add the following lines to \u002Fetc\u002Fapt\u002Fsources.list.d\u002Ftor, or i that folder doesn't exist, \u002Fetc\u002Fapt\u002Fsources.list"}]},{type:a,value:c},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,z]},children:[{type:b,tag:A,props:{},children:[{type:a,value:"deb     http:\u002F\u002Fdeb.torproject.org\u002Ftorproject.org "},{type:b,tag:e,props:{className:[f,h]},children:[{type:a,value:l}]},{type:a,value:m},{type:b,tag:e,props:{className:[f,h]},children:[{type:a,value:n}]},{type:a,value:" main\ndeb     http:\u002F\u002Fdeb.torproject.org\u002Ftorproject.org experimental-"},{type:b,tag:e,props:{className:[f,h]},children:[{type:a,value:l}]},{type:a,value:m},{type:b,tag:e,props:{className:[f,h]},children:[{type:a,value:n}]},{type:a,value:" main"},{type:b,tag:e,props:{className:[f,h]},children:[{type:a,value:l}]},{type:a,value:B},{type:b,tag:e,props:{className:[f,h]},children:[{type:a,value:n}]},{type:b,tag:e,props:{className:[f,h]},children:[{type:a,value:l}]},{type:a,value:B},{type:b,tag:e,props:{className:[f,h]},children:[{type:a,value:n}]},{type:a,value:c}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Just replace "},{type:b,tag:m,props:{},children:[{type:a,value:" with one of:"}]}]},{type:a,value:c},{type:b,tag:"ul",props:{},children:[{type:b,tag:i,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"sid"}]},{type:a,value:" - Debian Sid"}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"wheezy"}]},{type:a,value:" - Debian Wheezy"}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"squeeze"}]},{type:a,value:" - Debian Squeeze"}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"raring"}]},{type:a,value:" - Ubuntu Raring Ringtail (13.04)"}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"quantal"}]},{type:a,value:" - Ubuntu Quantal Quetzal (12.10)"}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"precise"}]},{type:a,value:" - Ubuntu Precise Pangolin (12.04 LTS)"}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"oneiric"}]},{type:a,value:" - Ubuntu Oneiric Ocelot (11.10)"}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"natty"}]},{type:a,value:" - Ubuntu Natty Narwhal (11.04)"}]},{type:a,value:c},{type:b,tag:i,props:{},children:[{type:a,value:c},{type:b,tag:g,props:{},children:[{type:a,value:"lucid"}]},{type:a,value:" - Ubuntu Lucid Lynx (10.04 LTS)"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:t}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"You need to run the following commands in Ubuntu's terminal to get the Torproject GPG keys:"}]},{type:a,value:c},{type:b,tag:v,props:{className:[w]},children:[{type:b,tag:x,props:{className:[y,z]},children:[{type:b,tag:A,props:{},children:[{type:a,value:"gpg --keyserver keys.gnupg.net --recv 886DDD89\ngpg --export A3C4F0F979CAA22CDBA8F512EE8CBC9E886DDD89 "},{type:b,tag:e,props:{className:[f,h]},children:[{type:a,value:"|"}]},{type:a,value:" "},{type:b,tag:e,props:{className:[f,C]},children:[{type:a,value:"sudo"}]},{type:a,value:" apt-key "},{type:b,tag:e,props:{className:[f,C]},children:[{type:a,value:"add"}]},{type:a,value:" -\n"}]}]}]},{type:a,value:c},{type:b,tag:p,props:{},children:[{type:a,value:u}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Simply run "},{type:b,tag:g,props:{},children:[{type:a,value:"sudo apt-get update && apt-get install tor deb.torproject.org-keyring"}]},{type:a,value:" to install everything you need!"}]},{type:a,value:c},{type:b,tag:"h1",props:{},children:[{type:a,value:"Addendum:"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Do bear in mind, however, that this "},{type:b,tag:"em",props:{},children:[{type:a,value:"IS"}]},{type:a,value:" the development version - when Tor 2.4 is released in its final form, you may want to remove the experimental-"},{type:b,tag:m,props:{},children:[{type:a,value:" from your sources, and apt-get update && apt-get upgrade. If you don't, you may end up with a future, unstable version installed."}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"I have also built a package for Slackwares 13.37 and 12.2, for which you will need "},{type:b,tag:j,props:{href:"http:\u002F\u002Fslackbuilds.org\u002Frepository\u002F14.0\u002Flibraries\u002Flibevent\u002F",target:k},children:[{type:a,value:"libevent"}]},{type:a,value:". This version for 14.0 will compile fine on both versions I have provided packages for. You can find "},{type:b,tag:j,props:{href:"#",target:k},children:[{type:a,value:"those packages here"}]},{type:a,value:". (links to be updated when uploaded - sorry for the delay guys)"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"As always, questions, corrections and anything constructive are more than welcome. If you'd like me to build a tor package for your favourite (and free) distribution, please feel free to ask away - I'll do what I can."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"n00b"}]}]},dir:"\u002Fposts",path:"\u002Fposts\u002Fhow-get-tor-24-ubuntu-and-slackware",extension:".md",readingStats:{text:"3 min read",minutes:2.72,time:163200,words:544},postedAgo:"9 years ago"}}],fetch:{},mutations:void 0}}("text","element","\n","p","span","token","strong","operator","li","a","_blank","\u003C","distribution","\u003E",2,"h2",null,"2013-09-09T06:00:00.000Z","Step 1: Add apt repository","Step 2: Install GPG keys","Step 3: Install","div","nuxt-content-highlight","pre","language-bash","line-numbers","code","\u002Fdistribution","function")));