__NUXT_JSONP__("/posts/charlieplexing-leds-arduino", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V,W,X,Y){return {data:[{post:{slug:"charlieplexing-leds-arduino",description:"How to charlieplex 6 LEDs, with PWM using only 3 pins on the Arduino.",title:"Charlieplexing LEDs on the Arduino",imagesource:K,imagecredit:K,image:"2012.01.15T15:00:00_charlieplexing-leds-arduino.png",createdAt:L,updatedAt:L,toc:[],body:{type:"root",children:[{type:b,tag:h,props:{},children:[{type:a,value:"Another Arduino tutorial today - Charlieplexing!"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:b,tag:y,props:{href:"http:\u002F\u002Fen.wikipedia.org\u002Fwiki\u002FCharlieplexing",target:z},children:[{type:a,value:"Wikipedia says:"}]}]},{type:a,value:f},{type:b,tag:"blockquote",props:{},children:[{type:b,tag:h,props:{},children:[{type:a,value:"Charlieplexing is a technique proposed in early 1995 by Charlie Allen at Maxim Integrated Products for driving a multiplexed display in which relatively few I\u002FO pins on a microcontroller are used to drive an array of LEDs."}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Basically, it allows you to take a number of pins "},{type:b,tag:"em",props:{},children:[{type:a,value:"n"}]},{type:a,value:", and drive n(n-1) LEDs from them. Using this formula, you can see that as the number of pins increases, the number of LEDs also increases, but exponentially. For example:"}]},{type:a,value:f},{type:b,tag:M,props:{},children:[{type:b,tag:o,props:{},children:[{type:a,value:"2 pins will drive 2(2-1) pins (2)"}]},{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"3 pins will drive 3(3-1) pins (6)"}]},{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"4 pins will drive 4(4-1) pins (12)"}]},{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"5 pins will drive 5(5-1) pins (20)"}]},{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"6 pins will drive 6(6-1) pins (30)"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"In more detail, the way charlieplexing works is thanks to a microcontroller's ability to put its pins into high impedance mode (on the Arduino, this is INPUT mode), effectively detaching that pin from the circuit completely. Other than the pin(s) set to INPUT mode, there will be two others, both set to OUTPUT. One of these will be set to LOW (the current sink), and the other will either be set to HIGH or a PWM value (the current source). Each combination of two different pins will cause one of two LEDs in the matrix to be lit, depending on which is the source and which is the sink. Today, I'm going to explain in explicit detail how to charlieplex 6 LEDs via 3 pins, as this is the point at which charlieplexing becomes useful, and before it gets horribly complicated."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"To start with, you will need:"}]},{type:a,value:f},{type:b,tag:M,props:{},children:[{type:b,tag:o,props:{},children:[{type:a,value:"6 LEDs"}]},{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"3 220Ohm resistors"}]},{type:a,value:f},{type:b,tag:o,props:{},children:[{type:a,value:"A bunch of jumper wires"}]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"First of all, here's a schematic for the circuit we are going to create:"},{type:b,tag:B,props:{},children:[]},{type:b,tag:y,props:{href:N,target:z},children:[{type:b,tag:C,props:{src:N,width:O,height:D},children:[]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"And here's one for another circuit, to show you how it can be implemented in a much larger fashion."},{type:b,tag:B,props:{},children:[]},{type:b,tag:y,props:{href:P,target:z},children:[{type:b,tag:C,props:{src:P,height:D,width:O},children:[]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Here's a picture of my circuit, made in "},{type:b,tag:y,props:{href:"http:\u002F\u002Ffritzing.org\u002F"},children:[{type:a,value:"Fritzing"}]},{type:a,value:". I've done my best to simplify the wiring as much as I can, by using a bunch of different colours. I've also used SVG format, so you can zoom as close as you like."},{type:b,tag:B,props:{},children:[]},{type:b,tag:"nuxt-link",props:{target:z,to:Q},children:[{type:b,tag:C,props:{src:Q,width:320,height:D},children:[]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Once you have your hardware set up, you will want to start thinking about the code. This is, needless to say, quite a lot more complex than the wiring. I've written a basic charlieplexing program, which should be usable on any size of charlieplexed matrix, as long as it fits within the driving device's specifications."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"The essence of the code is permutation theory. The details are outside the scope of this article, but there are many resources online to get to grips with it."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"Here's my code:"}]},{type:a,value:f},{type:b,tag:R,props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-java","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"\u002F*\n * Arrays containing the pin numbers used in\n * each charlieplexed matrix. In this case, both\n * matrices are the same size, and this code will\n * not work properly if this is not the case.\n *\u002F"}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:p}]},{type:a,value:" charlie1"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"3"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"9"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"10"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:"11"}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:p}]},{type:a,value:" numPins "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"charlie1"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:"\u002F"}]},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:S}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:p}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"\u002F\u002F Basic LED control functions"}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:T}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:p}]},{type:a,value:" pinArray"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:p}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"\u002F*\n   * Turn off all LEDs in the array\n   * pinArray = Array of pins to turn off\n   * del = Delay before next action\n   *\u002F"}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:p}]},{type:a,value:" pin "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:" pin  "},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:p}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:V},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"analogWrite"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:F}]},{type:a,value:"source"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:G}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:W},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:Y},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"delayMicroseconds"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:"del"},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:E},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:T}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"setup"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,A]},children:[{type:a,value:"\u002F\u002F Set all pins to output-"}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:I}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:b,tag:c,props:{className:[d,i]},children:[{type:a,value:p}]},{type:a,value:" i "},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:s}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:" i  "},{type:b,tag:c,props:{className:[d,m]},children:[{type:a,value:r}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:a,value:g},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:t}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:"allOn"}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:x},{type:b,tag:c,props:{className:[d,q]},children:[{type:a,value:U}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:k}]},{type:a,value:J},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:u}]},{type:a,value:H},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:l}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:"\n    reps"},{type:b,tag:c,props:{className:[d,n]},children:[{type:a,value:X}]},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:j}]},{type:a,value:w},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:f},{type:b,tag:c,props:{className:[d,e]},children:[{type:a,value:v}]},{type:a,value:f}]}]}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"This code is easily extensible to allow it to control multiple matrices, just by adding a new pin array at the top. The Arduino has 6 PWM capable pins, so you could theoretically have up to 30 LEDs driven by it. Whether the Arduino would be up to the task is another matter, as even on this example, when all LEDs appear to be lit, the duty cycle is sufficiently reduced for them to be significantly less bright."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"To close, here's a video of the code above being used on a charlieplexed matrix from 4 pins on the Arduino. As I just mentioned, all which needs changing is the pin array at the top. All I did to make it work was add pin 6 to its initialisers, and changed the array size to 4. Other than that I messed with some of the timings, but that's unrelated."}]},{type:a,value:f},{type:b,tag:R,props:{className:["text-center"]},children:[{type:a,value:x},{type:b,tag:"iframe",props:{width:420,height:315,src:"http:\u002F\u002Fwww.youtube.com\u002Fembed\u002FxjXNM__euyU",frameBorder:r,allowFullScreen:true},children:[]},{type:a,value:f}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"I look forward to finding out how my imminently due TLC5940 PWM capable LED driver ICs respond to charlieplexing next week, so expect a post on my findings!"}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"If you'd like any help with your own charlieplexed circuits, feel free to give me a shout either in the comments or personally, via the contact form."}]},{type:a,value:f},{type:b,tag:h,props:{},children:[{type:a,value:"n00b"}]}]},dir:"\u002Fposts",path:"\u002Fposts\u002Fcharlieplexing-leds-arduino",extension:".md",readingStats:{text:"5 min read",minutes:4.04,time:242400,words:808}}}],fetch:{},mutations:void 0}}("text","element","span","token","punctuation","\n"," ","p","keyword",";","(",")","number","operator","li","int","function","0","=","{",",","}","\n  ","\n    ","a","_blank","comment","br","img",240,"\n\n","[","]"," del","for","pinArray",null,"2012-01-15T15:00:00.000Z","ul","http:\u002F\u002Fpcbheaven.com\u002Fwikipages\u002Fimages\u002Fcharlieplexing_1302102231.jpg",360,"http:\u002F\u002Fwww.instructables.com\u002Fimage\u002FF42RGDGF1A4XY2A\u002FThe-circuit.jpg","\u002Fsites\u002Fdefault\u002Ffiles\u002FCharlieplex_3pin_bb.svg","div","sizeof","void","allOff"," fadeVal "," fadeVal","--","\n      ")));