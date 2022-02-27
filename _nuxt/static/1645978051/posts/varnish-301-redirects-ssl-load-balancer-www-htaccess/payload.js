__NUXT_JSONP__("/posts/varnish-301-redirects-ssl-load-balancer-www-htaccess", (function(a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q){return {data:[{post:{slug:"varnish-301-redirects-ssl-load-balancer-www-htaccess",description:"How to get SSL-only sites working behind load balancers and Varnish",title:"301s, Drupal, Varnish, and SSL Load Balancers",imagesource:"https:\u002F\u002Fcommons.wikimedia.org\u002Fwiki\u002FFile:22_ft_Spencer_Runabout.jpg",imagecredit:"Mwanner",image:"2015.10.04T06:00:00_varnish-301-redirects-ssl-load-balancer-www-htaccess.png",createdAt:i,updatedAt:i,toc:[],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"Hi all,"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Today I'm just going to provide a snippet that I used when trying to handle Varnish caching, when a client required a Drupal install in front of a platform that had Varnish over Apache, all behind a cloud SSL load balancer. The client needed not only to redirect all raw domain requests requests to \"www\", but also to redirect all non-https to their HTTPS equivalent."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This seemed to work pretty well straight out of the box, by just setting the $base_url variable in the Drupal settings file to point to the HTTPS domain and setting up a Rewrite in the .htaccess. It was only when we cleared the cache that things started to go awry."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The www redirect was exactly as you'd expect, uncommented character for character in the default Drupal .htaccess file. The SSL redirect was a custom entry implemented as follows:"}]},{type:a,value:c},{type:b,tag:j,props:{className:[k]},children:[{type:b,tag:l,props:{className:[m,n]},children:[{type:b,tag:g,props:{},children:[{type:b,tag:e,props:{className:[f,o,p]},children:[{type:a,value:"RewriteCond"}]},{type:a,value:" "},{type:b,tag:e,props:{className:[f,h]},children:[{type:a,value:"%{HTTP:X-Forwarded-Proto}"}]},{type:a,value:" !=https\n"},{type:b,tag:e,props:{className:[f,o,p]},children:[{type:a,value:"RewriteRule"}]},{type:a,value:" .* https:\u002F\u002F"},{type:b,tag:e,props:{className:[f,h]},children:[{type:a,value:"%{HTTP_HOST}"}]},{type:a,value:"\u002F"},{type:b,tag:e,props:{className:[f,h]},children:[{type:a,value:"%{REQUEST_URI}"}]},{type:a,value:" [R=301, L]\n\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"X-Forwarded-Proto is the de-facto standard header forwarded by SSL-compatible load balancers. There's no RFC that states it, but it's been adopted by all the major providers, so you're generally going to be pretty safe assuming it's there."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"The problem was, when we cleared the Varnish cache (which happened automatically on an unattended deploy), "},{type:b,tag:"em",props:{},children:[{type:a,value:"and"}]},{type:a,value:" the first view to the page was accessed via HTTP, which it would be for any clients who just typed the URL into their browser, Varnish hashed the content of the page as being nothing but a redirect. Needless to say this completely broke everything! The site just went into a redirect loop."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This could have been resolved with complex iptables rules, or any number of other smart but unnecessary solutions. Instead, we chose to add the X-Forwarded-Proto header to the Varnish hash. To do this, just a couple of lines needed adding to our "},{type:b,tag:g,props:{},children:[{type:a,value:"\u002Fetc\u002Fvarnish\u002Fdefault.vcl"}]},{type:a,value:". Because it's a shared hosting server with various sites and configurations on it, we elected to restrict this modification to JUST the site in question, and came up with the something resembling the following:"}]},{type:a,value:c},{type:b,tag:j,props:{className:[k]},children:[{type:b,tag:l,props:{className:[m,n]},children:[{type:b,tag:g,props:{},children:[{type:a,value:"sub vcl_hash {\n    hash_data(req.url);\n\n    "},{type:b,tag:e,props:{className:[f,q]},children:[{type:a,value:"# Begin SSL load balancer config"}]},{type:a,value:"\n    if (req.url ~ "},{type:b,tag:e,props:{className:[f,"string"]},children:[{type:a,value:"\"www.mydomain.url\""}]},{type:a,value:" &amp;&amp; req.http.X-Forwarded-For) {\n        hash_data(req.http.X-Forwarded-For);\n    }\n    "},{type:b,tag:e,props:{className:[f,q]},children:[{type:a,value:"# End SSL load balancer config"}]},{type:a,value:"\n\n    if (req.http.host) {\n        hash_data(req.http.host);\n    } else {\n        hash_data(server.ip);\n    }\n\n    return (lookup);\n}\n"}]}]}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"This means that Varnish will store two different caches. One for requests which came in via HTTP, and another via HTTPS. In this case, the only thing that would be cached for the HTTP side of things is the redirect to the secure site. Always consider the impact this will have on your cached data storage before making changes like this, particularly if the server hosts more than one site."}]}]},dir:"\u002Fposts",path:"\u002Fposts\u002Fvarnish-301-redirects-ssl-load-balancer-www-htaccess",extension:".md",readingStats:{text:"3 min read",minutes:2.25,time:135000,words:450},postedAgo:"7 years ago"}}],fetch:{},mutations:void 0}}("text","element","\n","p","span","token","code","variable","2015-10-04T06:00:00.000Z","div","nuxt-content-highlight","pre","language-apacheconf","line-numbers","directive-inline","property","comment")));