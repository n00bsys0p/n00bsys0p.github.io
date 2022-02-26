__NUXT_JSONP__("/posts/drupal-views-3-menu-tab-visibilty", (function(a,b,c,d,e,f,g,h){return {data:[{post:{slug:"drupal-views-3-menu-tab-visibilty",description:"How to restrict Views menu tab visibility to certain content-types using Views 3 on Drupal 7.",title:"Drupal - Views 3 menu tab visibilty",imagesource:f,imagecredit:f,image:"2012.08.23T14:00:00_drupal-views-3-menu-tab-visibilty.png",createdAt:g,updatedAt:g,toc:[],body:{type:"root",children:[{type:b,tag:d,props:{},children:[{type:a,value:"Hi guys,"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Another Drupal 7\u002FViews 3 howto for you this time. If you use a tab for your view's menu item (and have the path set to something like 'node\u002F%\u002Fmy_tab_name'), the default is for this tab to appear for all content types which come under the \"node\" bundle. This has rarely been what I want, so I'm going to show you how to restrict the visibility of the tab to certain content types."}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"It's done via the contextual filter settings. If you aren't using contextual filters, you can add a \"Global: Null\" filter, with the following setting:"}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"WHEN THE FILTER VALUE IS "},{type:b,tag:"em",props:{},children:[{type:a,value:"NOT"}]},{type:a,value:" IN THE URL: Display all results for the specified field"}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"To set the menu restriction, use the following settings:"}]},{type:a,value:c},{type:b,tag:h,props:{},children:[{type:b,tag:e,props:{},children:[{type:a,value:"Specify Validation Criteria: Yes"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Validator: Content"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Content Type: Tick the content type(s) on which you'd like the tab to appear"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Filter Value Format: Node ID"}]},{type:a,value:c},{type:b,tag:e,props:{},children:[{type:a,value:"Action to take if filter value does not validate: Show \"Page not found\""}]},{type:a,value:c}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"Now apply your settings, and your tab should only appear on the relevant content types! I'm working fairly extensively with Drupal at the moment, so expect a few more posts of this ilk in the near future!"}]},{type:a,value:c},{type:b,tag:d,props:{},children:[{type:a,value:"n00b"}]}]},dir:"\u002Fposts",path:"\u002Fposts\u002Fdrupal-views-3-menu-tab-visibilty",extension:".md",readingStats:{text:"1 min read",minutes:1,time:60000,words:200},postedAgo:"10 years ago"}}],fetch:{},mutations:void 0}}("text","element","\n","p","li",null,"2012-08-23T14:00:00.000Z","ul")));