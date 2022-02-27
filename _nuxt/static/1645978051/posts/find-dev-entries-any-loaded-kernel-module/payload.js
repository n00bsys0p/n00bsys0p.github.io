__NUXT_JSONP__("/posts/find-dev-entries-any-loaded-kernel-module", (function(a,b,c,d,e,f,g,h,i){return {data:[{post:{slug:"find-dev-entries-any-loaded-kernel-module",description:"Access the correct raw device for your hardware",title:"Find \u002Fdev entries for any loaded kernel module.",imagesource:g,imagecredit:g,image:"2011.07.11T14:00:00_find-dev-entries-any-loaded-kernel-module.jpg",createdAt:h,updatedAt:h,toc:[],body:{type:"root",children:[{type:b,tag:c,props:{},children:[{type:a,value:"Hey folks, just got a quick one for you."}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"Recently, I needed to find out to which \u002Fdev entries a particular driver was attached. For this, I did the following."}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"First, navigate to \u002Fsys. This is where kernel information is stored about devices and drivers. Under here, you'll notice folders like \"block\" (for storage devices) and \"bus\" for pluggable items such as USB devices and PCI cards."}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"We are going to be looking in \"bus\", as the device I am looking for is connected via USB. From \u002Fsys\u002Fbus, navigate to usb\u002Fdrivers, and you will see a list of all drivers currently attached to devices connected via USB."}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"From here, I needed the ftdi_sio driver, so I cd'd into the folder, and had a look around. Nothing which makes much sense so far, but bear with me. There will be one or multiple symlinks in this folder, which consists of numbers, hyphens, colons and dots. These link to each device's sysfs folder. Run the command:"}]},{type:a,value:d},{type:b,tag:"div",props:{className:["nuxt-content-highlight"]},children:[{type:b,tag:"pre",props:{className:["language-bash","line-numbers"]},children:[{type:b,tag:"code",props:{},children:[{type:b,tag:e,props:{className:[f,"function"]},children:[{type:a,value:"ls"}]},{type:a,value:" "},{type:b,tag:e,props:{className:[f,i]},children:[{type:a,value:"["}]},{type:b,tag:e,props:{className:[f,"number"]},children:[{type:a,value:"0"}]},{type:a,value:"-9"},{type:b,tag:e,props:{className:[f,i]},children:[{type:a,value:"]"}]},{type:a,value:"*\u002F\n"}]}]}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"This will look in any folder which starts with a number (in this case our two device folders). Within these folders should be your information. In my case, there was a folder in each of them called ttyUSB? (where the ? was a number)."}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"Now I knew that I just had to connect my program to \u002Fdev\u002FttyUSB? to communicate with the devices."}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"If there's anything anybody doesn't understand about this, feels that I could explain better, or simply wants to know more about, then feel free to let me know via the comments."}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"Have a great day!"}]},{type:a,value:d},{type:b,tag:c,props:{},children:[{type:a,value:"n00b"}]}]},dir:"\u002Fposts",path:"\u002Fposts\u002Ffind-dev-entries-any-loaded-kernel-module",extension:".md",readingStats:{text:"2 min read",minutes:1.335,time:80100,words:267},postedAgo:"11 years ago"}}],fetch:{},mutations:void 0}}("text","element","p","\n","span","token",null,"2011-07-11T14:00:00.000Z","punctuation")));