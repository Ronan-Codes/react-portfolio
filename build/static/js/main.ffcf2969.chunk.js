(this["webpackJsonpreact-portfolio"]=this["webpackJsonpreact-portfolio"]||[]).push([[0],[,,,,,,function(e,t,a){e.exports=a.p+"static/media/temp-portrait.28302ec1.jpeg"},function(e,t,a){e.exports=a.p+"static/media/ronanGalvezResume.6f7c959e.pdf"},function(e,t,a){e.exports=a(28)},,,,,function(e,t,a){},function(e,t,a){var n={"./portfolio/0.jpg":15,"./portfolio/1.jpg":16,"./portfolio/2.jpg":17,"./portfolio/3.jpg":18,"./portfolio/4.jpg":19,"./portfolio/5.jpg":20};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=14},function(e,t,a){e.exports=a.p+"static/media/0.e0147254.jpg"},function(e,t,a){e.exports=a.p+"static/media/1.4252e23b.jpg"},function(e,t,a){e.exports=a.p+"static/media/2.301f2e9a.jpg"},function(e,t,a){e.exports=a.p+"static/media/3.af8a0972.jpg"},function(e,t,a){e.exports=a.p+"static/media/4.9205849c.jpg"},function(e,t,a){e.exports=a.p+"static/media/5.5d7bb602.jpg"},function(e,t,a){var n={"./portfolio/0.jpg":22,"./portfolio/1.jpg":23,"./portfolio/2.jpg":24,"./portfolio/3.jpg":25,"./portfolio/4.jpg":26,"./portfolio/5.jpg":27};function r(e){var t=o(e);return a(t)}function o(e){if(!a.o(n,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return n[e]}r.keys=function(){return Object.keys(n)},r.resolve=o,e.exports=r,r.id=21},function(e,t,a){e.exports=a.p+"static/media/0.e0147254.jpg"},function(e,t,a){e.exports=a.p+"static/media/1.4252e23b.jpg"},function(e,t,a){e.exports=a.p+"static/media/2.301f2e9a.jpg"},function(e,t,a){e.exports=a.p+"static/media/3.af8a0972.jpg"},function(e,t,a){e.exports=a.p+"static/media/4.9205849c.jpg"},function(e,t,a){e.exports=a.p+"static/media/5.5d7bb602.jpg"},function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(5),i=a.n(o),c=(a(13),a(1));function l(e){return e.charAt(0).toUpperCase()+e.slice(1)}var s=function(e){var t=e.categories,a=void 0===t?[]:t,o=e.setCurrentCategory,i=e.contactSelected,c=e.currentCategory,s=e.setContactSelected;return Object(n.useEffect)((function(){document.title=l(c.name)}),[c]),r.a.createElement("header",{className:"flex-row px-1",id:"headerStyle"},r.a.createElement("h2",null,r.a.createElement("a",{"data-testid":"link",href:"/"},r.a.createElement("span",{role:"img","aria-label":"camera"},"\ud83e\uddd1\ud83c\udffb\u200d\ud83d\udcbb")," Ronan Galvez")),r.a.createElement("nav",null,r.a.createElement("ul",{className:"flex-row"},r.a.createElement("li",{className:"mx-2"},r.a.createElement("a",{"data-testid":"about",href:"#about",onClick:function(){return s(!1)}},"About me")),r.a.createElement("li",{className:"mx-2 ".concat(i&&"navActive")},r.a.createElement("span",{onClick:function(){return s(!0)}},"Contact")),a.map((function(e){return r.a.createElement("li",{className:"mx-1 ".concat(c.name===e.name&&!i&&"navActive"),key:e.name},r.a.createElement("a",{href:"#portfolio",onClick:function(){o(e),s(!1)}},l(e.name)))})),r.a.createElement("li",{className:"mx-2"},r.a.createElement("a",{"data-testid":"resume",href:"#resume",onClick:function(){return s(!1)}},"Resume")))))},u=a(6),m=a.n(u);var d=function(){return r.a.createElement("section",{className:"my-5 sectionSpacing"},r.a.createElement("h1",{id:"about"},"Ronan Galvez"),r.a.createElement("p",null,"Full-Stack Web Developer"),r.a.createElement("img",{src:m.a,className:"my-2",style:{width:"10%"},alt:"cover"}),r.a.createElement("div",{className:"my-2"},r.a.createElement("p",null,"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec bibendum turpis sed ex condimentum molestie. Mauris condimentum lectus ut ornare dignissim. Mauris faucibus urna mi, ac feugiat metus aliquam maximus. Proin aliquam justo nec diam vulputate vestibulum. Aenean sollicitudin nulla at nisi ornare, nec suscipit massa eleifend. Morbi tristique justo vel turpis sollicitudin, et tristique velit convallis. In hac habitasse platea dictumst. Phasellus mattis nunc sed orci consequat laoreet. Praesent id nisl nibh. Curabitur imperdiet ultricies mollis. In hac habitasse platea dictumst.")))},p=a(2),f=function(e){var t=e.onClose,n=e.currentPhoto,o=n.name,i=n.description,c=n.liveUrl,l=n.github,s=n.category,u=n.index;return r.a.createElement("div",{className:"modalBackdrop"},r.a.createElement("div",{className:"modalContainer"},r.a.createElement("h3",{className:"modalTitle"},o," "),r.a.createElement("img",{src:a(14)("./".concat(s,"/").concat(u,".jpg")),alt:"current category"}),r.a.createElement("p",null,i),r.a.createElement("p",null,r.a.createElement("a",{href:c},"Deployed Site")," ",r.a.createElement("a",{href:l},"GitHub")),r.a.createElement("button",{type:"button",onClick:t},"Close this modal")))},g=function(e){var t=e.category,o=Object(n.useState)(!1),i=Object(c.a)(o,2),l=i[0],s=i[1],u=Object(n.useState)(),m=Object(c.a)(u,2),d=m[0],g=m[1],h=Object(n.useState)([{name:"Budget Tracker",category:"portfolio",description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc ultricie",liveUrl:"https://ronan-budget-tracker.herokuapp.com/",github:"https://github.com/Ronan-Codes/budget-tracker.git"},{name:"Self-Care",category:"portfolio",description:"Self-Care is a simple and convenient journaling app. It utilizes a third-party datepicker app (Zebra Datepicker) to seemlessly keep record of daily journal entries. Future developments may include a workout-log portion, and other self-care related features (Ex. daily motivational quotes).",liveUrl:"https://ronan-codes-self-care.herokuapp.com/",github:"https://github.com/Ronan-Codes/self-care.git"},{name:"DateNite",category:"portfolio",description:"DateNite simplifies the process of deciding what to do for date night. Simply provide a primary ingredients, and DateNite provides easy-to-make recipes for your ideal date night, dine-in meal and cocktail.",liveUrl:"https://justpuzey.github.io/DateNite/",github:"https://github.com/justpuzey/DateNite"},{name:"Note Taker",category:"portfolio",description:"Note Taker is your standard note-taking application that allows to you create, save, and delete notes. To create a note, add a Title and Description. For example: you can create a Task titled Homework, and include a description for the steps of your task at hand. This application utilizes Express.js to retrieve, create, and delete data from a JSON.file. Note Taker is deployed through Heroku.",liveUrl:"https://ronan-note-taker.herokuapp.com/",github:"https://ronan-codes.github.io/run-buddy/"},{name:"Run Buddy",category:"portfolio",description:"Run Buddy is a mock website for a fitness service company. Plain HTML and CSS is utilized to create the layout and various form elements.",liveUrl:"https://ronan-codes.github.io/run-buddy/",github:"https://github.com/Ronan-Codes/run-buddy.git"},{name:"Weather Dashboard",category:"portfolio",description:"Weather Dashboard is an interactive weather application that allows a user to search a city name and the application will return various weather information. Weather Dashboard utilizes OpenWeatherMap API for acquiring weather information data. Local Storage is utilized to save pase searched cities.",liveUrl:"https://ronan-codes.github.io/weather-dashboard/",github:"https://github.com/Ronan-Codes/weather-dashboard.git"}]),b=Object(c.a)(h,1)[0].filter((function(e){return e.category===t})),v=function(e,t){g(Object(p.a)(Object(p.a)({},e),{},{index:t})),s(!l)};return r.a.createElement("div",null,l&&r.a.createElement(f,{onClose:v,currentPhoto:d}),r.a.createElement("div",{className:"flex-row"},b.map((function(e,n){return r.a.createElement("img",{src:a(21)("./".concat(t,"/").concat(n,".jpg")),alt:e.name,className:"img-thumbnail mx-1",onClick:function(){return v(e,n)},key:e.name})}))))};var h=function(e){var t=e.currentCategory;return r.a.createElement("section",{className:"sectionSpacing"},r.a.createElement("h1",{id:"portfolio","data-testid":"h1tag"},l(t.name)),r.a.createElement("p",null,t.description),r.a.createElement(g,{category:t.name}))},b=a(3);var v=function(){var e=Object(n.useState)({name:"",email:"",message:""}),t=Object(c.a)(e,2),a=t[0],o=t[1],i=Object(n.useState)(""),l=Object(c.a)(i,2),s=l[0],u=l[1],m=a.name,d=a.email,f=a.message,g=function(e){if("email"===e.target.name){var t=function(e){return/^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(String(e).toLowerCase())}(e.target.value);u(t?"":"Your email is invalid.")}else e.target.value.length?u(""):u("".concat(e.target.name," is required."));s||(o(Object(p.a)(Object(p.a)({},a),{},Object(b.a)({},e.target.name,e.target.value))),console.log("Handle Form",a))};return r.a.createElement("section",null,r.a.createElement("h1",{"data-testid":"h1tag",id:"contactTop"},"Contact me"),r.a.createElement("form",{id:"contact-form",onSubmit:function(e){e.preventDefault(),s||console.log("Submit Form",a)}},r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"name"},"Name:"),r.a.createElement("input",{type:"text",name:"name",defaultValue:m,onBlur:g})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"email"},"Email address:"),r.a.createElement("input",{type:"email",name:"email",defaultValue:d,onBlur:g})),r.a.createElement("div",null,r.a.createElement("label",{htmlFor:"message"},"Message:"),r.a.createElement("textarea",{name:"message",rows:"5",defaultValue:f,onBlur:g})),s&&r.a.createElement("div",null,r.a.createElement("p",{className:"error-text"},s)),r.a.createElement("button",{"data-testid":"button",type:"submit"},"Submit")))},E=a(7),y=a.n(E);var j=function(){return r.a.createElement("section",{id:"resume"},r.a.createElement("h1",{id:"about"},"Resume"),r.a.createElement("iframe",{src:y.a,allow:"fullscreen",height:"950px",width:"80%",frameBorder:"0",title:"Ronan Galvez"}))};var k=function(){var e=Object(n.useState)([{name:"portfolio"}]),t=Object(c.a)(e,1)[0],a=Object(n.useState)(t[0]),o=Object(c.a)(a,2),i=o[0],l=o[1],u=Object(n.useState)(!1),m=Object(c.a)(u,2),p=m[0],f=m[1];return r.a.createElement("div",null,r.a.createElement(s,{categories:t,setCurrentCategory:l,currentCategory:i,contactSelected:p,setContactSelected:f}),r.a.createElement("main",null,p?r.a.createElement(v,null):r.a.createElement(r.a.Fragment,null,r.a.createElement(d,null),r.a.createElement(h,{currentCategory:i}),r.a.createElement(j,null))),r.a.createElement("footer",null,r.a.createElement("div",{className:"icons"},r.a.createElement("a",{href:"https://github.com/Ronan-Codes",targer:"_blank",rel:"noreferrer",title:"GitHub"},"GitHub"),r.a.createElement("a",{href:"https://www.linkedin.com/in/ronan-galvez-08aaa81a8",targer:"_blank",rel:"noreferrer",title:"GitHub"},"LinkedIn"),r.a.createElement("a",{href:"https://stackoverflow.com/users/16479419/ronan-codes",targer:"_blank",rel:"noreferrer",title:"GitHub"},"Stack"))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[8,1,2]]]);
//# sourceMappingURL=main.ffcf2969.chunk.js.map