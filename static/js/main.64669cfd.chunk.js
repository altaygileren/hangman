(this.webpackJsonphangman_game=this.webpackJsonphangman_game||[]).push([[0],{26:function(e,t,n){e.exports=n(53)},31:function(e,t,n){},33:function(e,t,n){},51:function(e,t,n){},52:function(e,t,n){},53:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(19),l=n.n(o),u=(n(31),n(7)),s=n(20),i=n(9),d=n.n(i),c=n(21),m=n(22),v=n(23),h=n(25),f=n(24),g=(n(33),n(8)),S=n.n(g),p=n(54);n(51);function W(){return r.a.createElement("div",{className:"spinner-loading-div"},r.a.createElement(p.a,{className:"spinnerLoading",animation:"border",role:"status"},r.a.createElement("span",{className:"sr-only"},"Loading...")))}var E=n(57);function b(e){var t=e.userName,n=(e.userInput,e.handleChange),a=e.userNameSubmitted,o=e.userSubmittedInfo;return r.a.createElement("div",null,r.a.createElement("h1",null,"What is your name?"),r.a.createElement("input",{value:t,name:"userName",onChange:n,placeholder:"Please type your name"}),r.a.createElement("br",null),r.a.createElement(E.a,{disabled:o,onClick:a,variant:"primary"},"Hi there"))}function w(e){var t=e.userName;return r.a.createElement("div",null,r.a.createElement("h1",null,"Let's get ready to play, ",t,"!"))}var O=n(55),N=n(56);n(52);function k(e){var t=e.alphabet,n=e.letterClicked;e.amountOfTries;return r.a.createElement("div",null,r.a.createElement(O.a,null,t.map((function(e){return r.a.createElement(N.a,{lg:1},r.a.createElement("button",{className:"letterBtn",onClick:function(){return n(e)}},e))}))))}function I(e){var t=e.wrongSelected;return r.a.createElement("div",null,r.a.createElement("h1",null,"Wrong selected letters"),r.a.createElement(O.a,null,t.map((function(e){return r.a.createElement(N.a,{lg:1},e)}))))}function y(e){var t=e.previousWords;return r.a.createElement("div",null,r.a.createElement("h1",null,"Solved words"),null!==t&&t.length>0?r.a.createElement("div",null,t.map((function(e,t){return r.a.createElement("div",{key:t},e)}))):null)}function C(e){e.hiddenWord;var t=e.amountOfTries;return r.a.createElement("div",null,r.a.createElement("h3",null,"You have ",t," tries"))}function T(e){var t=e.unsolvedWords;return r.a.createElement("div",null,r.a.createElement("h1",null,"Unsolved words"),t.map((function(e){return r.a.createElement("div",null,e)})))}function j(e){var t=e.userName,n=e.handleChange,a=e.userNameSubmitted,o=e.userSubmittedInfo,l=e.randomWord,u=e.hiddenWord,s=e.alphabet,i=e.letterClicked,d=e.wrongSelected,c=e.previousWords,m=e.unsolvedWords,v=e.amountOfTries;return o?r.a.createElement("div",null,r.a.createElement(w,{userName:t}),l,r.a.createElement("br",null),r.a.createElement(C,{hiddenWord:u,amountOfTries:v}),r.a.createElement(k,{alphabet:s,letterClicked:i,amountOfTries:v}),d.length>0?r.a.createElement(I,{wrongSelected:d}):null,r.a.createElement(O.a,null,r.a.createElement(N.a,{lg:6},r.a.createElement(y,{previousWords:c})),r.a.createElement(N.a,{lg:6},r.a.createElement(T,{unsolvedWords:m}))),r.a.createElement("br",null)):r.a.createElement(b,{userName:t,handleChange:n,userNameSubmitted:a})}var G=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"username";return localStorage&&localStorage.getItem(e)?JSON.parse(localStorage.getItem(e)):null},J=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"words";if(localStorage&&localStorage.getItem(e))return JSON.parse(localStorage.getItem(e))},_=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"unsolved_words";if(localStorage&&localStorage.getItem(e))return JSON.parse(localStorage.getItem(e))},L=function(e){Object(h.a)(n,e);var t=Object(f.a)(n);function n(){var e;return Object(m.a)(this,n),(e=t.call(this)).startGame=Object(c.a)(d.a.mark((function t(){var n;return d.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,S.a.get("https://random-word-api.herokuapp.com//word?number=1").catch((function(e){return console.log(e)}));case 2:n=t.sent,e.dashInput(n.data[0]),setTimeout((function(){var t=G()?G():"",a=J()?J():null,r=_()?_():null;e.setState({loading:!1,userName:t,userSubmittedInfo:!!t,randomWord:n.data[0],previousWords:a||[],unsolvedWords:r||[],amountOfTries:n.data[0].length})}),100);case 5:case"end":return t.stop()}}),t)}))),e.componentDidMount=function(){e.startGame()},e.handleChange=function(t){var n=t.target,a=n.name,r=n.value;e.setState(Object(s.a)({},a,r))},e.letterClicked=function(t){e.state.randomWord.includes(t)?e.fillLetter(t):e.wrongSelection(t)},e.wrongSelection=function(t){var n=e.state,a=n.wrongSelected,r=n.amountOfTries;e.setState({wrongSelected:[].concat(Object(u.a)(a),[t]),amountOfTries:r-1},(function(){return e.checkGame()}))},e.fillLetter=function(t){for(var n=e.state,a=n.randomWord,r=n.hiddenWord,o=0;o<a.length;o++)a[o]===t&&(r[o]=t,e.setState({hiddenWord:r}));e.checkGame()},e.checkGame=function(){e.state.amountOfTries<1?e.gameOver():e.state.hiddenWord.includes("_")||e.winGame()},e.winGame=function(){var t=e.state.randomWord;setTimeout((function(){e.setState({previousWords:[].concat(Object(u.a)(e.state.previousWords),[t]),hiddenWord:[]},(function(){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"words";localStorage&&localStorage.setItem(t,JSON.stringify(e))}(e.state.previousWords)}))}),1e3),e.startGame()},e.gameOver=function(){var t=e.state,n=t.unsolvedWords,a=t.randomWord;n.includes(a)||(alert("Game over you lost"),setTimeout((function(){e.setState({unsolvedWords:[].concat(Object(u.a)(n),[a]),amountOfTries:0,hiddenWord:[],wrongSelected:[]},(function(){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"unsolved_words";localStorage&&localStorage.setItem(t,JSON.stringify(e))}(e.state.unsolvedWords)}))}),100),e.startGame())},e.dashInput=function(t){e.state.hiddenWord.length<0&&e.setState({hiddenWord:[]});for(var n=0;n<t.length;n++)e.state.hiddenWord.push("_")},e.userNameSubmitted=function(){var t=e.state.userName;e.setState({userSubmittedInfo:!0,userName:t},(function(){return function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"username";localStorage&&localStorage.setItem(t,JSON.stringify(e))}(t)}))},e.state={userName:"",loading:!0,userSubmittedInfo:!1,randomWord:"",wordsSolved:[],hiddenWord:[],wrongSelected:[],alphabet:["a","b","c","d","e","f","g","h","i","j","k","l","m","n","o","p","q","r","s","t","u","v","w","x","y","z"],previousWords:[],unsolvedWords:[],amountOfTries:0},e}return Object(v.a)(n,[{key:"render",value:function(){var e=this.state,t=e.userName,n=e.alphabet,a=e.hiddenWord,o=e.userSubmittedInfo,l=e.randomWord,u=e.wrongSelected,s=e.previousWords,i=e.unsolvedWords,d=e.amountOfTries;return r.a.createElement("div",{className:"App"},this.state.loading?r.a.createElement(W,null):r.a.createElement(j,{userNameSubmitted:this.userNameSubmitted,handleChange:this.handleChange,userName:t,userSubmittedInfo:o,randomWord:l,hiddenWord:a,alphabet:n,letterClicked:this.letterClicked,wrongSelected:u,previousWords:s,unsolvedWords:i,amountOfTries:d}))}}]),n}(a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));l.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(L,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}},[[26,1,2]]]);
//# sourceMappingURL=main.64669cfd.chunk.js.map