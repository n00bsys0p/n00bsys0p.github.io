__NUXT_JSONP__("/posts/sending-receiving-sms-3g-device-linux", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K){return {data:[{post:{slug:"sending-receiving-sms-3g-device-linux",description:"How to manually send and receive SMS via a 3G\u002FGSM dongle on Linux",title:"Sending & Receiving SMS with a 3G device in linux",imagesource:"https:\u002F\u002Fcommons.wikimedia.org\u002Fwiki\u002FFile:Telstra_Elite_Mobile_Broadband.jpg",imagecredit:"Beau Giles",image:"2009.08.26T14:00:00_sending-receiving-sms-3g-device-linux.jpg",createdAt:C,updatedAt:C,toc:[{depth:D,text:E},{depth:D,text:F}],body:{type:"root",children:[{type:b,tag:g,props:{},children:[{type:a,value:"Hi all!"}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Got something quite interesting (or at least I thought so!) for you today: Sending and recieving SMS with a 3G USB dongle and I also assume this will work with a PCMCIA\u002FExpress card, if possibly in a slightly different manner. If I get the chance to try it out I'll update this post with info for them too."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"It's actually pretty simple. The only prerequisites are that you have the correct driver for your 3G device loaded, ie you have access to your 3G dongle via \u002Fdev entries, and that you have the ppp package installed, as this contains the chat program. I'd imagine if you're already successfully using the 3G dongle, then you've already got this installed, though."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"When you plug your 3G device into a USB slot, use the command "},{type:b,tag:G,props:{},children:[{type:a,value:"dmesg"}]},{type:a,value:" to find out which \u002Fdev\u002FttyUSB slots have been used for the device. This information can be seen on lines which will read something along the lines of:"}]},{type:a,value:e},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,m]},children:[{type:b,tag:n,props:{},children:[{type:a,value:"usb "},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"3"}]},{type:a,value:"-2: GSM modem "},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:"("}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:t}]},{type:a,value:"-port"},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:")"}]},{type:a,value:" converter now attached to ttyUSB2\n"}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Then you need to work out which of the ports is the command port. You can do this by using the command cat \u002Fdev\u002Ftts\u002FUSBn, where n is the number of the port you want to check. On the command port, but not the other(s), you will see messages coming through on regular intervals. They will read something like:"}]},{type:a,value:e},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,m]},children:[{type:b,tag:n,props:{},children:[{type:a,value:"^BOOT:28385139,0,0,0,72\n"}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"You may as well leave the terminal open watching the USB device as you attempt communication, as you will be able to see the data scroll past as you pass it to the device this way."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Something important to at least know, if not understand regarding SMS itself, is the "},{type:b,tag:"a",props:{href:"http:\u002F\u002Fwww.dreamfabric.com\u002Fsms\u002F"},children:[{type:a,value:"difference between PDU and text mode"}]},{type:a,value:", as this article will not go into the depth of all the encoding issues you'll come across trying to deal with SMS in PDU mode."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"The messages you will send to the device will all be in the same format. They are just basically a modem chat script all filled out into one command line. They will follow the format:"}]},{type:a,value:e},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,m]},children:[{type:b,tag:n,props:{},children:[{type:a,value:"chat TIMEOUT x "},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"\"Info to send to device\""}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:r}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:s}]},{type:a,value:" \u002Fdev\u002Ftts\u002FUSBn\n"}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"The USB device is referred to as \u002Fdev\u002Ftts\u002FUSB"},{type:b,tag:z,props:{},children:[{type:a,value:A}]},{type:a,value:", as \u002Fdev\u002FttyUSB"},{type:b,tag:z,props:{},children:[{type:a,value:A}]},{type:a,value:" is just a symlink to \u002Fdev\u002Ftts\u002FUSB"},{type:b,tag:z,props:{},children:[{type:a,value:A}]},{type:a,value:"."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"For the ins and outs of the chat command, check out the man page, as it's not particularly relevant to this article's sphere of interest. I'm concentrating more on the specific AT commands used to control the device, as that's what's important, not the method of communication. You could just as well use a terminal emulator like minicom to achieve exactly the same result."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"The only difference may be replacing "},{type:b,tag:z,props:{},children:[{type:a,value:"x"}]},{type:a,value:" with a timeout value, "},{type:b,tag:z,props:{},children:[{type:a,value:A}]},{type:a,value:" with the USB device number and the info to send to the device. For this example, I will use a standard TIMEOUT of 1 and I will assume your USB device is USB2."}]},{type:a,value:e},{type:b,tag:H,props:{},children:[{type:a,value:E}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"First of all, the simplest option is to put the device into text mode. This is done with the following command:"}]},{type:a,value:e},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,m]},children:[{type:b,tag:n,props:{},children:[{type:a,value:x},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:I}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:r}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:s}]},{type:a,value:y}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"The terminal on which you are running cat should come back wtih the result:"}]},{type:a,value:e},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,m]},children:[{type:b,tag:n,props:{},children:[{type:a,value:"AT+CMGF"},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:t}]},{type:a,value:"\nOK\n"}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"If it doesn't, then either you are not watching the correct device, or your USB dongle's firmware does not support SMS."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"The next step is to tell the modem what number to send the text message to. Note the escaped quotes in the following command. When nesting similar quotes in such a manner, we must tell the terminal to treat the inner quotes as plain text to avoid the command trying to process them as part of the command line. Replace the xxxxxxxxxxx with the telephone number you wish to send the SMS to."}]},{type:a,value:e},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,m]},children:[{type:b,tag:n,props:{},children:[{type:a,value:x},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"\"AT+CMGS="},{type:b,tag:c,props:{className:[d,K],title:B},children:[{type:a,value:B}]},{type:a,value:"xxxxxxxxxxx"},{type:b,tag:c,props:{className:[d,K],title:B},children:[{type:a,value:B}]},{type:a,value:"\""}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:r}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:s}]},{type:a,value:y}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"On your second terminal, you should see the response:"}]},{type:a,value:e},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,m]},children:[{type:b,tag:n,props:{},children:[{type:a,value:"AT+CMGS"},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:J}]},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"\"xxxxxxxxxxx\""}]},{type:a,value:e},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:r}]},{type:a,value:"amp"},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:r}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:s}]},{type:a,value:e}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"This is a prompt to enter the SMS's text in plaintext format. The command is simply:"}]},{type:a,value:e},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,m]},children:[{type:b,tag:n,props:{},children:[{type:a,value:x},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"\"Message text goes here\""}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:r}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:s}]},{type:a,value:y}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"To insert a new line of text, just repeat this command."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"To finalise the message, normally you would press "},{type:b,tag:G,props:{},children:[]},{type:a,value:". To emulate this, we use the ^ character. This will cause the terminal to treat it as if you have pressed the CTRL key followed by the next character. The command reads as follows:"}]},{type:a,value:e},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,m]},children:[{type:b,tag:n,props:{},children:[{type:a,value:x},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"\"^Z\""}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:r}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:s}]},{type:a,value:y}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"After a couple of seconds, your watching terminal should respond with:"}]},{type:a,value:e},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,m]},children:[{type:b,tag:n,props:{},children:[{type:a,value:"+CMGS: n\n"}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:b,tag:z,props:{},children:[{type:a,value:A}]},{type:a,value:" will be a number corresponding to the number of sent messages from the device."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"You should now have the text message arrive at the destination telephone number."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Simples."}]},{type:a,value:e},{type:b,tag:H,props:{},children:[{type:a,value:F}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"First step, as with sending SMS, is to put the device into text mode. This is exactly the same command used before:"}]},{type:a,value:e},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,m]},children:[{type:b,tag:n,props:{},children:[{type:a,value:x},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:I}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:r}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:s}]},{type:a,value:y}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"As an optional step, you can list all of the SMS stored on the SIM like so:"}]},{type:a,value:e},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,m]},children:[{type:b,tag:n,props:{},children:[{type:a,value:x},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"\"AT+CMGL\""}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:r}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:s}]},{type:a,value:y}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"The only real requirement for reading SMS, however, is to choose the index number of the SMS you wish to read. This is done with this command:"}]},{type:a,value:e},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,m]},children:[{type:b,tag:n,props:{},children:[{type:a,value:x},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"\"AT+CMGR=n\""}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:r}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:s}]},{type:a,value:y}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"In order to delete a SMS, should you so wish, it is done via a very similar command:"}]},{type:a,value:e},{type:b,tag:i,props:{className:[j]},children:[{type:b,tag:k,props:{className:[l,m]},children:[{type:b,tag:n,props:{},children:[{type:a,value:x},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:t}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:"\"AT+CMGD=n\""}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,h]},children:[{type:a,value:w}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:r}]},{type:a,value:u},{type:b,tag:c,props:{className:[d,o]},children:[{type:a,value:s}]},{type:a,value:y}]}]}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"That's all I'm gonna talk you through, but there are countless resources online for finding out what some other AT commands are, and it's quite interesting just firing them at the device to see what the response is, and I encourage you to have a mess about... Be careful when messing around with the SIM PIN codes, though, and it's not my fault if you lock yourself out of your kit!"}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"Hope I've been of use!"}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"As always... Any questions\u002Fmistakes I've made, just leave a comment."}]},{type:a,value:e},{type:b,tag:g,props:{},children:[{type:a,value:"n00b"}]}]},dir:"\u002Fposts",path:"\u002Fposts\u002Fsending-receiving-sms-3g-device-linux",extension:".md",readingStats:{text:"6 min read",minutes:5.115,time:306900,words:1023},postedAgo:"13 years ago"}}],fetch:{},mutations:void 0}}("text","element","span","token","\n"," ","p","string","div","nuxt-content-highlight","pre","language-bash","line-numbers","code","punctuation","operator","number","&",";","1","gt","\"\"","\"OK\"","chat TIMEOUT "," \u002Fdev\u002Ftts\u002FUSB2\n","em","n","\\\"","2009-08-26T14:00:00.000Z",2,"Sending SMS","Receiving SMS","strong","h2","\"AT+CMGF=1\"","=","entity")));