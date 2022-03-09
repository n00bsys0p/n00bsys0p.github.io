__NUXT_JSONP__("/posts/arduinomsgeq7-audio-spectrum-led-display", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U){return {data:[{post:{slug:"arduinomsgeq7-audio-spectrum-led-display",description:"Arduino\u002FMSGEQ7 Seven Band Graphic Equalizer Display Filter Tutorial",title:"Arduino\u002FMSGEQ7 Audio Spectrum LED Display",imagesource:F,imagecredit:F,image:"2012.01.13T15:00:00_arduinomsgeq7-audio-spectrum-led-display.png",createdAt:G,updatedAt:G,toc:[],body:{type:"root",children:[{type:b,tag:m,props:{},children:[{type:a,value:"Hi guys!"}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"Another Arduino-related post today. I've created a basic audio spectrum analysis circuit based around the "},{type:b,tag:w,props:{href:"http:\u002F\u002Fwww.mix-sig.com\u002Findex.php?option=com_content&view=article&id=145%3Amsgeq7-&catid=52&Itemid=55",target:u},children:[{type:a,value:"MSI MSGEQ7"}]},{type:a,value:", which is a 7-band Graphic Equaliser Display Filter. It basically takes an audio input, and spits out 7 logarithmic scale frequency amplitude values between 63Hz and 16KHz. While this can be done to a far more accurate scale by running a "},{type:b,tag:w,props:{href:"http:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FFast_Fourier_transform",target:u},children:[{type:a,value:"Fast Fourier Transform"}]},{type:a,value:" on an audio signal, the Arduino isn't greatly suited to this task. It's possible to do this on a computer, and transmit the constrained values to the Arduino, but why use all those processor cycles, when there's such a useful little IC which does it for you "},{type:b,tag:w,props:{href:"http:\u002F\u002Fproto-pic.co.uk\u002Fgraphic-equalizer-display-filter-msgeq7-1\u002F?gclid=CJ-y8uCJzq0CFbIhtAodshAikw",target:u},children:[{type:a,value:"for only a few quid"}]},{type:a,value:"?"}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"Connecting the MSGEQ7 to the Arduino is a fairly simple task, even for an electronics newbie like myself. I followed "},{type:b,tag:w,props:{href:H,target:u},children:[{type:a,value:"J. Skoba's guide"}]},{type:a,value:" for the most part, but substituted some of the parts for components I had lying around, and it worked just fine. The project requires:"}]},{type:a,value:f},{type:b,tag:"ul",props:{},children:[{type:b,tag:t,props:{},children:[{type:a,value:"4 x 0.1uF ceramic capacitors"}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"1 x 220K Ohm resistor"}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"6 x 250 Ohm resistor (current limiters for RGB LEDs)"}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"3 x TRS audio jacks"}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"1 x TRS audio plug"}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"1 x 3.5mm TRS to 3.5mm TRS audio cable"}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"A connector to attach a 3.5mm jack to an audio amplifier or powered speakers (I used a 3.5mm TRS to 2 x RCA lead)"}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"2 x common cathode RGB LEDs"}]},{type:a,value:f},{type:b,tag:t,props:{},children:[{type:a,value:"A whole mess of jumper wires"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:m,props:{align:I},children:[{type:b,tag:A,props:{target:u,to:J},children:[{type:b,tag:B,props:{src:J,height:480,width:640},children:[]}]}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:b,tag:"s",props:{},children:[{type:a,value:"Here's the schematic to see how to hook everything up. Sorry about the crappy resolution. If anybody wants a higher res version, just let me know, and I'll see what I can do."}]},{type:a,value:" Here's a breadboard diagram made in "},{type:b,tag:w,props:{href:"http:\u002F\u002Ffritzing.org\u002F"},children:[{type:a,value:"Fritzing"}]},{type:a,value:". Way better quality that the other pic I had, and the pins are right too, which helps :-P. If you want an SVG version, I've saved one in the same folder. Just change the filename in your address bar. I didn't include it in the article as it appears to have missed R1 for some reason."}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"Here's a couple of pictures of my breadboard to help you out if you're still having problems."}]},{type:a,value:f},{type:b,tag:m,props:{align:I},children:[{type:b,tag:A,props:{target:u,to:K},children:[{type:b,tag:B,props:{src:K,height:L,width:M},children:[]}]},{type:a,value:"     "},{type:b,tag:A,props:{target:u,to:N},children:[{type:b,tag:B,props:{src:N,height:L,width:M},children:[]}]}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"The code I used is a mixture of my own, and that of a few sources on the Internet; the most notable of these is "},{type:b,tag:w,props:{href:H,target:u},children:[{type:a,value:"J. Skoba's Arduino\u002FMSGEQ7 tutorial"}]},{type:a,value:". Here's the code for your perusal and use:"}]},{type:a,value:f},{type:b,tag:O,props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-java","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:b,tag:c,props:{className:[d,"doc-comment",i]},children:[{type:a,value:"\u002F**\n * Author: n00bsys0p (n00bATNOSPAMn00bsys0p.co.uk)\n * Date: 13\u002F01\u002F12\n * Arduino: Uno v3\n *\n * Arduino code for use with my MSGEQ7 schematics.\n * Find the schematics to go with this on my blog at:\n * http:\u002F\u002Fn00bsys0p.co.uk\n *\n * Most of this is sourced from J. Skoba's guide at:\n * http:\u002F\u002Fnuewire.com\u002Finfo-archive\u002Fmsgeq7-by-j-skoba\u002F\n *\n * Other parts sourced from various other places\n * online. If you recognise your code, THANK YOU!\n *\n * Massive thanks to the Arduino community for being\n * so open and so giving!\n *\n * I found his personal site at no-ip.org to be offline\n * a lot, so use this link if you have trouble.\n *\u002F"}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:n}]},{type:a,value:" analogPin "},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\u002F\u002F MSGEQ7 OUT"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:n}]},{type:a,value:" strobePin "},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"2"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\u002F\u002F MSGEQ7 STROBE"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:n}]},{type:a,value:" resetPin "},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"4"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\u002F\u002F MSGEQ7 RESET"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:n}]},{type:a,value:" spectrumValue"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"["}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"7"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"]"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\u002F\u002F MSGEQ7 OUT pin produces values around 50-80"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\u002F\u002F when there is no input, so use this value to"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\u002F\u002F filter out a lot of the chaff."}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:n}]},{type:a,value:" filterValue "},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"80"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\u002F\u002F LED pins. I used 2 common cathode RGB LEDs."}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\u002F\u002F They're connected to the PWM pins on the Arduino"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:n}]},{type:a,value:" ledPinR1 "},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"3"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:n}]},{type:a,value:" ledPinG1 "},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"5"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:n}]},{type:a,value:" ledPinB1 "},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"6"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:n}]},{type:a,value:" ledPinR2 "},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"9"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:n}]},{type:a,value:" ledPinG2 "},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"10"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:n}]},{type:a,value:" ledPinB2 "},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"11"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:P}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"setup"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Q}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,"class-name"]},children:[{type:a,value:"Serial"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"."}]},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"begin"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:"9600"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\u002F\u002F Read from MSGEQ7 OUT"}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"analogPin"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:" INPUT"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\u002F\u002F Write to MSGEQ7 STROBE and RESET"}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:D}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:S},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\u002F\u002F Set analogPin's reference voltage"}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"analogReference"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:"DEFAULT"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\u002F\u002F 5V"}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\u002F\u002F Set startup values for pins"}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:R},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:"}"}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:P}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:"loop"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:Q}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\u002F\u002F Set reset pin low to enable strobe"}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:U},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,r]},children:[{type:a,value:z}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:a,value:y},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:T},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:s}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:"\u002F\u002F Get all 7 spectrum values from the MSGEQ7"}]},{type:a,value:l},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:"for"}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:o}]},{type:b,tag:c,props:{className:[d,j]},children:[{type:a,value:n}]},{type:a,value:" i "},{type:b,tag:c,props:{className:[d,p]},children:[{type:a,value:q}]},{type:a,value:h},{type:b,tag:c,props:{className:[d,k]},children:[{type:a,value:C}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:g}]},{type:a,value:" i\n"}]}]}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"I split the audio from my laptop to an amplifier and the circuit by making a simple splitter with 3 TRS audio jacks, connecting the single end to my laptop, one of the double end to the circuit, and the other to my amplifier. I also used a TRS plug instead of a TRS socket on the circuit, as the schematic shows. I'll add some pictures shortly to show you how my breadboard is set up."}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"I don't think that there's much else to do, than include a video of the final build. Sorry about the terrible editing in the video, and the hurried nature of this post. I'll do my best to improve it at a later date."}]},{type:a,value:f},{type:b,tag:O,props:{className:["text-center"]},children:[{type:a,value:"\n    "},{type:b,tag:"iframe",props:{width:560,height:315,src:"http:\u002F\u002Fwww.youtube.com\u002Fembed\u002FBP5ZQEuXEAU",frameBorder:C,allowFullScreen:true},children:[]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"As always, direct any questions to the contact form or comments!"}]},{type:a,value:f},{type:b,tag:m,props:{},children:[{type:a,value:"n00b"}]}]},dir:"\u002Fposts",path:"\u002Fposts\u002Farduinomsgeq7-audio-spectrum-led-display",extension:".md",readingStats:{text:"5 min read",minutes:4.195,time:251700,words:839}}}],fetch:{},mutations:void 0}}("text","element","span","token","punctuation","\n",";"," ","comment","keyword","number","\n  ","p","int","(","operator","=","function",")","li","_blank",",","a","\n\n","resetPin","digitalWrite","nuxt-link","img","0","pinMode","\n\n  ",null,"2012-01-13T15:00:00.000Z","http:\u002F\u002Fnuewire.com\u002Finfo-archive\u002Fmsgeq7-by-j-skoba\u002F","center","\u002Fsites\u002Fdefault\u002Ffiles\u002FMSGEQ7_bb.png","\u002Fsites\u002Fdefault\u002Ffiles\u002FMSGEQ7-1.jpg",240,320,"\u002Fsites\u002Fdefault\u002Ffiles\u002FMSGEQ7-2.jpg","div","void","{","strobePin"," OUTPUT"," LOW"," HIGH")));