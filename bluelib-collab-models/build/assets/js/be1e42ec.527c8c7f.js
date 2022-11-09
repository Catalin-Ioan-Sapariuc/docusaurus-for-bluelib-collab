"use strict";(self.webpackChunkbluelib_collab_models=self.webpackChunkbluelib_collab_models||[]).push([[618],{3905:(e,a,s)=>{s.d(a,{Zo:()=>l,kt:()=>d});var t=s(7294);function r(e,a,s){return a in e?Object.defineProperty(e,a,{value:s,enumerable:!0,configurable:!0,writable:!0}):e[a]=s,e}function c(e,a){var s=Object.keys(e);if(Object.getOwnPropertySymbols){var t=Object.getOwnPropertySymbols(e);a&&(t=t.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),s.push.apply(s,t)}return s}function p(e){for(var a=1;a<arguments.length;a++){var s=null!=arguments[a]?arguments[a]:{};a%2?c(Object(s),!0).forEach((function(a){r(e,a,s[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(s)):c(Object(s)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(s,a))}))}return e}function i(e,a){if(null==e)return{};var s,t,r=function(e,a){if(null==e)return{};var s,t,r={},c=Object.keys(e);for(t=0;t<c.length;t++)s=c[t],a.indexOf(s)>=0||(r[s]=e[s]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(t=0;t<c.length;t++)s=c[t],a.indexOf(s)>=0||Object.prototype.propertyIsEnumerable.call(e,s)&&(r[s]=e[s])}return r}var o=t.createContext({}),n=function(e){var a=t.useContext(o),s=a;return e&&(s="function"==typeof e?e(a):p(p({},a),e)),s},l=function(e){var a=n(e.components);return t.createElement(o.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return t.createElement(t.Fragment,{},a)}},u=t.forwardRef((function(e,a){var s=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=n(s),d=r,C=u["".concat(o,".").concat(d)]||u[d]||m[d]||c;return s?t.createElement(C,p(p({ref:a},l),{},{components:s})):t.createElement(C,p({ref:a},l))}));function d(e,a){var s=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var c=s.length,p=new Array(c);p[0]=u;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var n=2;n<c;n++)p[n]=s[n];return t.createElement.apply(null,p)}return t.createElement.apply(null,s)}u.displayName="MDXCreateElement"},5948:(e,a,s)=>{s.r(a),s.d(a,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>n});var t=s(7462),r=(s(7294),s(3905));const c={sidebar_position:2},p=void 0,i={unversionedId:"Collaborative-user-based-recommender",id:"Collaborative-user-based-recommender",title:"Collaborative-user-based-recommender",description:"An user based (personalized) collaborative recommender is a \u201etrue-and-tried\u201d classical recommender system, still in use (although as part of more sophisticated systems) by sites such as Amazon, Netflix and Youtube.",source:"@site/docs/Collaborative-user-based-recommender.md",sourceDirName:".",slug:"/Collaborative-user-based-recommender",permalink:"/docs/Collaborative-user-based-recommender",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Collaborative-user-based-recommender.md",tags:[],version:"current",sidebarPosition:2,frontMatter:{sidebar_position:2},sidebar:"tutorialSidebar",previous:{title:"Non-personalized-recommender",permalink:"/docs/Non-personalized-recommender"},next:{title:"Collaborative-item-based-recommender",permalink:"/docs/Collaborative-item-based-recommender"}},o={},n=[],l={toc:n};function m(e){let{components:a,...s}=e;return(0,r.kt)("wrapper",(0,t.Z)({},l,s,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("p",null,"An user based (personalized) collaborative recommender is a \u201etrue-and-tried\u201d classical recommender system, still in use (although as part of more sophisticated systems) by sites such as Amazon, Netflix and Youtube.\nThis method has two steps:\n--  first, find a similarity measure ",(0,r.kt)("img",{parentName:"p",src:"https://latex.codecogs.com/svg.image?S=%5Cleft(s_%7Bu%7B%5Crm&space;%5C;&space;%7Dv%7D&space;%5Cright)",alt:"equation"})," between users (a similarity matrix)\n-- second, use this similarity matrix to predict the generic rating ",(0,r.kt)("img",{parentName:"p",src:"https://latex.codecogs.com/svg.image?R_%7Bu%7B%5Crm&space;%5C;&space;%7Di%7D",alt:"equation"}),"  for user u and item i.\nThe user similarity measure we use is a Pearson based similarity given by:  "),(0,r.kt)("p",null,"(2)\n",(0,r.kt)("img",{parentName:"p",src:"https://latex.codecogs.com/svg.image?s_%7Bu%7B%5Crm&space;%5C;&space;%7Dv%7D&space;=%5Cfrac%7B%5Csum%5Climits_%7Bj%5Cin&space;%5CPsi&space;_%7Bu%7B%5Crm&space;%5C;&space;%7Dv%7D&space;%7D%5Cleft(r_%7Bu%7B%5Crm&space;%5C;&space;j%7D%7D&space;-%5Cbar%7Br%7D_%7Bu%7D&space;%5Cright)%5Cleft(r_%7Bv%7B%5Crm&space;%5C;&space;j%7D%7D&space;-%5Cbar%7Br%7D_%7Bv%7D&space;%5Cright)&space;%7D%7B%5Csqrt%7B%5Csum%5Climits_%7Bj%5Cin&space;%5CPsi&space;_%7Bu%7B%5Crm&space;%5C;&space;%7Dv%7D&space;%7D%5Cleft(r_%7Bu%7B%5Crm&space;%5C;&space;j%7D%7D&space;-%5Cbar%7Br%7D_%7Bu%7D&space;%5Cright)%5E%7B2%7D&space;&space;%7D&space;%5Csqrt%7B%5Csum%5Climits_%7Bj%5Cin&space;%5CPsi&space;_%7Bu%7B%5Crm&space;%5C;&space;%7Dv%7D&space;%7D%5Cleft(r_%7B%7B%5Crm&space;v%5C;&space;j%7D%7D&space;-%5Cbar%7Br%7D_%7Bv%7D&space;%5Cright)%5E%7B2%7D&space;&space;%7D&space;%7D&space;",alt:"equation"})),(0,r.kt)("p",null,",\nwhere "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://latex.codecogs.com/svg.image?&space;%5Cpsi_%7Bu&space;v%7D&space;=&space;%5Ctext%7Bset&space;of&space;items&space;rated&space;by&space;both&space;users&space;u&space;and&space;v%7D",alt:"equation"}),"  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://latex.codecogs.com/svg.image?%5Cbar%7Br%7D_%7Bu%7D&space;%5Ctext%7B&space;and&space;%7D&space;%5Cbar%7Br%7D_%7Bv%7D&space;=&space;%5Ctext%7Baverage&space;of&space;all&space;ratings&space;for&space;user&space;u&space;and&space;user&space;v,&space;respectively%7D",alt:"equation"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://latex.codecogs.com/svg.image?%5Cbar%7Br%7D_%7Bu&space;j%7D&space;=&space;%5Ctext%7Brating&space;of&space;item&space;j&space;by&space;user&space;u%7D",alt:"equation"})," "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://latex.codecogs.com/svg.image?%5Cbar%7Br%7D_%7Bv&space;j%7D&space;=&space;%5Ctext%7Brating&space;of&space;item&space;j&space;by&space;user&space;v%7D",alt:"equation"})),(0,r.kt)("p",null,"Basically the similarity ",(0,r.kt)("img",{parentName:"p",src:"https://latex.codecogs.com/svg.image?s_%7Bu&space;v%7D",alt:"equation"}),"  measures the cosine of the angle between the \u201edeviations\u201d",(0,r.kt)("br",{parentName:"p"}),"\n",(0,r.kt)("img",{parentName:"p",src:"https://latex.codecogs.com/svg.image?r_%7Bu&space;:%7D-%5Cbar%7Br%7D",alt:"equation"})," and ",(0,r.kt)("img",{parentName:"p",src:"https://latex.codecogs.com/svg.image?r_%7Bv&space;:%7D-%5Cbar%7Br%7D",alt:"equation"}),"   over the set of rated items (which is also the correlation between these two datasets) . "),(0,r.kt)("p",null,"The prediction ",(0,r.kt)("img",{parentName:"p",src:"https://latex.codecogs.com/svg.image?R_%7Bu%7B%5Crm&space;%5C;&space;%7Di%7D",alt:"equation"})," is then calculated using the formula: "),(0,r.kt)("p",null,"(3)\n",(0,r.kt)("img",{parentName:"p",src:"https://latex.codecogs.com/svg.image?R_%7Bu%7B%5Crm&space;%5C;&space;i%7D%7D&space;=%5Cbar%7Br%7D_%7Bu%7D&space;+%5Cfrac%7B%5Csum%5Climits_%7Bv%5Cin&space;%5Cpsi&space;_%7Bi%7D&space;%7D%5E%7B%7Ds_%7Bu%7B%5Crm&space;%5C;&space;%7Dv%7B%5Crm&space;%5C;&space;%7D%7D&space;%5Cleft(r_%7Bv%7B%5Crm&space;%5C;&space;%7Di%7D&space;-%5Cbar%7Br%7D_%7Bv%7D&space;%5Cright)&space;%7D%7B%5Csum%5Climits_%7Bv%5Cin&space;%5Cpsi&space;_%7Bi%7D&space;%7D%5E%7B%7D%5Cleft%7Cs_%7Bu%7B%5Crm&space;%5C;&space;%7Dv%7B%5Crm&space;%5C;&space;%7D%7D&space;%5Cright%7C&space;%7D&space;",alt:"equation"}),"\n(user based prediction formula) "),(0,r.kt)("p",null,"where           "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://latex.codecogs.com/svg.image?&space;%5Cbar%7Br%7D_%7Bu%7D&space;%5Ctext%7B&space;and&space;%7D&space;%5Cbar%7Br%7D_%7Bv%7D&space;=&space;%5Ctext%7B&space;average&space;of&space;all&space;ratings&space;for&space;user&space;u&space;and&space;user&space;v&space;respectively%7D",alt:"equation"})," "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://latex.codecogs.com/svg.image?&space;%5Cpsi_%7Bi%7D&space;=%5Ctext%7Bset&space;of&space;all&space;users&space;that&space;have&space;rated&space;item&space;%7D&space;i&space;%5Ctext%7B&space;(except&space;user&space;%7D&space;u&space;)&space;&space;",alt:"equation"})," "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://latex.codecogs.com/svg.image?r_%7Bv%7B%5Crm&space;%5C;&space;%7Di%7B%5Crm&space;%5C;&space;%7D%7D&space;=&space;%5Ctext%7Brating&space;of&space;item&space;%7D&space;i&space;%5Ctext%7B&space;by&space;user&space;%7Dv&space;&space;",alt:"equation"})),(0,r.kt)("p",null,"We make a further refinement of formula (3) by considering only the top (K) most similar users to the target user u. In our runs we considered K=25. "),(0,r.kt)("p",null,"After the predicted ratings ",(0,r.kt)("img",{parentName:"p",src:"https://latex.codecogs.com/svg.image?R_%7Bu%7B%5Crm&space;%5C;&space;%7Di%7D",alt:"equation"}),"  are calculated, we sort descendingly the ratings for each user, and provide the top ",(0,r.kt)("em",{parentName:"p"},"limit")," recommendations of those items not already rated by user u."))}m.isMDXComponent=!0}}]);