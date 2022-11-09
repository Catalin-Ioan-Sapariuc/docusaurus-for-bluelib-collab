"use strict";(self.webpackChunkbluelib_collab_models=self.webpackChunkbluelib_collab_models||[]).push([[910],{3905:(e,a,t)=>{t.d(a,{Zo:()=>l,kt:()=>d});var s=t(7294);function r(e,a,t){return a in e?Object.defineProperty(e,a,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[a]=t,e}function c(e,a){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);a&&(s=s.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),t.push.apply(t,s)}return t}function p(e){for(var a=1;a<arguments.length;a++){var t=null!=arguments[a]?arguments[a]:{};a%2?c(Object(t),!0).forEach((function(a){r(e,a,t[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):c(Object(t)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(t,a))}))}return e}function i(e,a){if(null==e)return{};var t,s,r=function(e,a){if(null==e)return{};var t,s,r={},c=Object.keys(e);for(s=0;s<c.length;s++)t=c[s],a.indexOf(t)>=0||(r[t]=e[t]);return r}(e,a);if(Object.getOwnPropertySymbols){var c=Object.getOwnPropertySymbols(e);for(s=0;s<c.length;s++)t=c[s],a.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var o=s.createContext({}),n=function(e){var a=s.useContext(o),t=a;return e&&(t="function"==typeof e?e(a):p(p({},a),e)),t},l=function(e){var a=n(e.components);return s.createElement(o.Provider,{value:a},e.children)},m={inlineCode:"code",wrapper:function(e){var a=e.children;return s.createElement(s.Fragment,{},a)}},u=s.forwardRef((function(e,a){var t=e.components,r=e.mdxType,c=e.originalType,o=e.parentName,l=i(e,["components","mdxType","originalType","parentName"]),u=n(t),d=r,C=u["".concat(o,".").concat(d)]||u[d]||m[d]||c;return t?s.createElement(C,p(p({ref:a},l),{},{components:t})):s.createElement(C,p({ref:a},l))}));function d(e,a){var t=arguments,r=a&&a.mdxType;if("string"==typeof e||r){var c=t.length,p=new Array(c);p[0]=u;var i={};for(var o in a)hasOwnProperty.call(a,o)&&(i[o]=a[o]);i.originalType=e,i.mdxType="string"==typeof e?e:r,p[1]=i;for(var n=2;n<c;n++)p[n]=t[n];return s.createElement.apply(null,p)}return s.createElement.apply(null,t)}u.displayName="MDXCreateElement"},4218:(e,a,t)=>{t.r(a),t.d(a,{assets:()=>o,contentTitle:()=>p,default:()=>m,frontMatter:()=>c,metadata:()=>i,toc:()=>n});var s=t(7462),r=(t(7294),t(3905));const c={sidebar_position:3},p=void 0,i={unversionedId:"Collaborative-item-based-recommender",id:"Collaborative-item-based-recommender",title:"Collaborative-item-based-recommender",description:"Collaborative item based recommender",source:"@site/docs/Collaborative-item-based-recommender.md",sourceDirName:".",slug:"/Collaborative-item-based-recommender",permalink:"/docs/Collaborative-item-based-recommender",draft:!1,editUrl:"https://github.com/facebook/docusaurus/tree/main/packages/create-docusaurus/templates/shared/docs/Collaborative-item-based-recommender.md",tags:[],version:"current",sidebarPosition:3,frontMatter:{sidebar_position:3},sidebar:"tutorialSidebar",previous:{title:"Collaborative-user-based-recommender",permalink:"/docs/Collaborative-user-based-recommender"},next:{title:"Tests-and-Results",permalink:"/docs/Tests-and-Results"}},o={},n=[{value:"Collaborative item based recommender",id:"collaborative-item-based-recommender",level:2}],l={toc:n};function m(e){let{components:a,...t}=e;return(0,r.kt)("wrapper",(0,s.Z)({},l,t,{components:a,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"collaborative-item-based-recommender"},"Collaborative item based recommender"),(0,r.kt)("p",null,"The item based collaborative filtering is theoretically very similar to the user-based collaborative filtering method b1. "),(0,r.kt)("p",null,"In practice, however, this method is preferable because it is less computationally intensive and it tends to produce lower RMSE\u2019s. "),(0,r.kt)("p",null,"It comprises the same steps as b1, but it views the items as \u201emain objects\u201d now, therefore:"),(0,r.kt)("p",null,"--   first, we find a similarity measure ",(0,r.kt)("img",{parentName:"p",src:"https://latex.codecogs.com/svg.image?S=%5Cleft(s_%7B%7B%5Crm&space;i%5C;&space;j%7D%7D&space;%5Cright)",alt:"equation"})," between items (a similarity matrix) using the formula:"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre"},"(4)\n")),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://latex.codecogs.com/svg.image?s_%7B%7B%5Crm&space;i%5C;&space;j%7D%7D&space;=%5Cfrac%7B%5Csum%5Climits_%7Bu%5Cin&space;%5CPsi&space;_%7B%7B%5Crm&space;i%5C;&space;j%7D%7D&space;%7D%5Cleft(r_%7Bu%7B%5Crm&space;%5C;&space;i%7D%7D&space;-%5Cbar%7Br%7D_%7Bi%7D&space;%5Cright)%5Cleft(r_%7B%7B%5Crm&space;u%5C;&space;j%7D%7D&space;-%5Cbar%7Br%7D_%7Bj%7D&space;%5Cright)&space;%7D%7B%5Csqrt%7B%5Csum%5Climits_%7Bu%5Cin&space;%5CPsi&space;_%7B%7B%5Crm&space;i%5C;&space;j%7D%7D&space;%7D%5Cleft(r_%7Bu%7B%5Crm&space;%5C;&space;i%7D%7D&space;-%5Cbar%7Br%7D_%7Bi%7D&space;%5Cright)%5E%7B2%7D&space;&space;%7D&space;%5Csqrt%7B%5Csum%5Climits_%7Bu%5Cin&space;%5CPsi&space;_%7B%7B%5Crm&space;i%5C;&space;j%7D%7D&space;%7D%5Cleft(r_%7B%7B%5Crm&space;u%5C;&space;j%7D%7D&space;-%5Cbar%7Br%7D_%7Bj%7D&space;%5Cright)%5E%7B2%7D&space;&space;%7D&space;%7D&space;&space;&space;&space;&space;&space;&space;",alt:"equation"}),"\nwhere "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://latex.codecogs.com/svg.image?%5Cpsi_%7B%7B%5Crm&space;i%5C;&space;j%7D%7D&space;=&space;%5Ctext%7Bset&space;of&space;users&space;that&space;rated&space;both&space;items&space;%7D&space;i&space;%5Ctext%7B&space;and&space;%7D&space;j&space;&space;&space;&space;&space;",alt:"equation"})),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://latex.codecogs.com/svg.image?%5Cbar%7Br%7D_%7Bi%7D&space;%5Ctext%7B&space;and&space;%7D&space;%5Cbar%7Br%7D_%7Bj%7D&space;=&space;%5Ctext%7B&space;average&space;of&space;all&space;ratings&space;for&space;items&space;i&space;and&space;j,&space;respectively%7D",alt:"equation"})," "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://latex.codecogs.com/svg.image?r_%7Bu%7B%5Crm&space;%5C;&space;i%5C;&space;%7D%7D&space;=&space;%5Ctext%7Brating&space;of&space;item&space;i&space;by&space;user&space;u%7D",alt:"equation"})," "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://latex.codecogs.com/svg.image?r_%7Bu%7B%5Crm&space;%5C;&space;j%5C;&space;%7D%7D&space;=&space;%5Ctext%7Brating&space;of&space;item&space;j&space;by&space;user&space;u%7D",alt:"equation"})," "),(0,r.kt)("p",null,"--  based on this similarity matrix we calculate ",(0,r.kt)("img",{parentName:"p",src:"https://latex.codecogs.com/svg.image?R_%7Bu%7B%5Crm&space;%5C;&space;%7Di%7D",alt:"equation"}),"  = a predicted rating for user u and item i, using the formula: "),(0,r.kt)("p",null,"(5)\n",(0,r.kt)("img",{parentName:"p",src:"https://latex.codecogs.com/svg.image?R_%7Bu%7B%5Crm&space;%5C;&space;i%7D%7D&space;=&space;%5Cbar%7Br%7D_%7Bi%7D&space;+%5Cfrac%7B%5Csum%5Climits_%7Bj%5Cin&space;%5Cpsi&space;_%7Bi%7D&space;%7D%5E%7B%7Ds_%7B%7B%5Crm&space;j%5C;&space;i%5C;&space;%7D%7D&space;%5Cleft(r_%7B%7B%5Crm&space;u%5C;&space;j%7D%7D&space;-%5Cbar%7Br%7D_%7Bj%7D&space;%5Cright)&space;%7D%7B%5Csum%5Climits_%7Bj%5Cin&space;%5Cpsi&space;_%7Bi%7D&space;%7D%5E%7B%7D%5Cleft%7Cs_%7B%7B%5Crm&space;j%5C;&space;i%5C;&space;%7D%7D&space;%5Cright%7C&space;%7D&space;&space;",alt:"equation"})," "),(0,r.kt)("p",null,"(item based prediction formula) ,\nwhere  "),(0,r.kt)("p",null,(0,r.kt)("img",{parentName:"p",src:"https://latex.codecogs.com/svg.image?%5Cpsi&space;_%7Bi%7D&space;=&space;%5Ctext%7Bset&space;of&space;all&space;items&space;that&space;user&space;u&space;has&space;rated&space;(except&space;item&space;j)%7D&space;",alt:"equation"})),(0,r.kt)("p",null,"and the meanings of the other quantities are similar with those from formula (3). "),(0,r.kt)("p",null,"Once again, we make a further refinement of formula (5) by considering only the top (K) most similar items with the target item i. In our runs we considered K=25."),(0,r.kt)("p",null,"Similar with the user-based algorithm, after the predicted ratings are calculated, we sort descendingly the ratings for each user, and provide the top ",(0,r.kt)("em",{parentName:"p"},"limit")," recommendations of those items not already rated by user u."))}m.isMDXComponent=!0}}]);