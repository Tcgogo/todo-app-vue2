(function(t){function e(e){for(var n,a,c=e[0],r=e[1],u=e[2],l=0,p=[];l<c.length;l++)a=c[l],Object.prototype.hasOwnProperty.call(i,a)&&i[a]&&p.push(i[a][0]),i[a]=0;for(n in r)Object.prototype.hasOwnProperty.call(r,n)&&(t[n]=r[n]);d&&d(e);while(p.length)p.shift()();return s.push.apply(s,u||[]),o()}function o(){for(var t,e=0;e<s.length;e++){for(var o=s[e],n=!0,c=1;c<o.length;c++){var r=o[c];0!==i[r]&&(n=!1)}n&&(s.splice(e--,1),t=a(a.s=o[0]))}return t}var n={},i={app:0},s=[];function a(e){if(n[e])return n[e].exports;var o=n[e]={i:e,l:!1,exports:{}};return t[e].call(o.exports,o,o.exports,a),o.l=!0,o.exports}a.m=t,a.c=n,a.d=function(t,e,o){a.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:o})},a.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},a.t=function(t,e){if(1&e&&(t=a(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var o=Object.create(null);if(a.r(o),Object.defineProperty(o,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var n in t)a.d(o,n,function(e){return t[e]}.bind(null,n));return o},a.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return a.d(e,"a",e),e},a.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},a.p="";var c=window["webpackJsonp"]=window["webpackJsonp"]||[],r=c.push.bind(c);c.push=e,c=c.slice();for(var u=0;u<c.length;u++)e(c[u]);var d=r;s.push([0,"chunk-vendors"]),o()})({0:function(t,e,o){t.exports=o("56d7")},"077e":function(t,e,o){"use strict";o("94da")},"0e93":function(t,e,o){},3518:function(t,e,o){"use strict";o("f449")},4993:function(t,e,o){"use strict";o("d026")},"56d7":function(t,e,o){"use strict";o.r(e);o("e260"),o("e6cf"),o("cca6"),o("a79d");var n=o("2b0e"),i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("main",[o("div",{staticClass:"container"},[o("h1",[t._v("欢迎使用Tcgogo代办事项")]),o("todo-add",{attrs:{tid:t.tid},on:{appendTodo:t.appendTodo}}),o("todo-list"),o("todo-content",{attrs:{todos:t.todos}})],1)])},s=[],a=(o("4160"),o("a434"),o("159b"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{ref:"addInput",staticClass:"input-add animate__animated",class:{animate__shakeX:t.isEmpty}},[o("input",{directives:[{name:"model",rawName:"v-model",value:t.todoValue,expression:"todoValue"}],attrs:{type:"text"},domProps:{value:t.todoValue},on:{keyup:function(e){return!e.type.indexOf("key")&&t._k(e.keyCode,"enter",13,e.key,"Enter")?null:t.appendTodo(e)},input:function(e){e.target.composing||(t.todoValue=e.target.value)}}}),o("transition",{attrs:{"enter-active-class":"animate__animated animate__bounceIn","leave-active-class":"animate__animated animate__bounceIn"}},[o("span",{directives:[{name:"show",rawName:"v-show",value:t.isEmpty,expression:"isEmpty"}],staticClass:"warn"},[t._v("请输入代办事项!")])]),o("button",{on:{click:t.appendTodo}},[o("i",{staticClass:"plus"})])],1)}),c=[],r=(o("a9e3"),{data:function(){return{todoValue:"",isEmpty:!1}},props:{tid:{type:Number}},methods:{appendTodo:function(){if(""!=this.todoValue){this.isEmpty=!1;var t={id:this.tid,value:this.todoValue,complete:!1};this.$emit("appendTodo",t),this.todoValue=""}else this.isEmpty=!0}},mounted:function(){var t=this;this.$refs.addInput.addEventListener("animationend",(function(){t.$nextTick((function(){t.isEmpty=!1}))}))}}),u=r,d=(o("b88f"),o("2877")),l=Object(d["a"])(u,a,c,!1,null,"75ae981a",null),p=l.exports,f=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-list"},[o("ul",t._l(t.titleList,(function(e){return o("li",{key:e.msg,class:{active:t.isAciveId===e.msg},on:{click:function(o){return t.changeActive(e.msg)}}},[t._v(" "+t._s(e.value)+" ")])})),0)])},m=[],h=new n["a"],v=h,g={data:function(){return{titleList:[{value:"全部",msg:"all"},{value:"已完成",msg:"done"},{value:"未完成",msg:"todo"}],isAciveId:"all"}},methods:{changeActive:function(t){this.isAciveId=t,v.$emit("changeList",t)}}},y=g,_=(o("4993"),Object(d["a"])(y,f,m,!1,null,"1124628a",null)),b=_.exports,O=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"todo-content"},t._l(t.newTodo,(function(t){return o("todo-content-item",{key:t.id,attrs:{todo:t}})})),1)},T=[],w=(o("4de4"),function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("div",{staticClass:"content-item"},[o("label",{class:{label:t.complete}},[o("input",{attrs:{type:"checkbox"},domProps:{checked:t.complete},on:{click:t.changeComplete}}),t._v(" "+t._s(t.todo.value)+" "),o("span",{staticClass:"dot"})]),o("button",{staticClass:"iconfont icon-shanchu delete",on:{click:t.deleteTodo}})])}),k=[],x={data:function(){return{complete:this.todo.complete}},props:{todo:{type:Object,default:function(){return{}}}},methods:{changeComplete:function(){v.$emit("changeComplete",this.todo.id),this.complete=!this.complete},deleteTodo:function(){v.$emit("deleteTodo",this.todo.id)}}},C=x,E=(o("3518"),Object(d["a"])(C,w,k,!1,null,"147e7c86",null)),j=E.exports,$={data:function(){return{isCheck:!1,msg:"all"}},props:{todos:{type:Array,default:function(){return[]}}},components:{TodoContentItem:j},computed:{newTodo:function(){switch(this.msg){case"all":return this.todos;case"done":return this.todos.filter((function(t){return t.complete}));case"todo":return this.todos.filter((function(t){return!t.complete}))}}},mounted:function(){var t=this;v.$on("changeList",(function(e){t.msg=e}))}},S=$,I=(o("077e"),Object(d["a"])(S,O,T,!1,null,"9940a498",null)),P=I.exports,A={name:"App",data:function(){return{todos:[]}},methods:{appendTodo:function(t){this.todos.push(t)}},computed:{tid:function(){return this.todos[this.todos.length-1]?this.todos[this.todos.length-1].id+1:1}},components:{TodoAdd:p,TodoList:b,TodoContent:P},created:function(){localStorage.getItem("todos")&&(this.todos=JSON.parse(localStorage.getItem("todos")))},mounted:function(){var t=this;v.$on("changeComplete",(function(e){t.todos.forEach((function(t){e===t.id&&(t.complete=!t.complete)})),localStorage.setItem("todos",JSON.stringify(t.todos))})),v.$on("deleteTodo",(function(e){t.todos.forEach((function(o,n){e===o.id&&t.todos.splice(n,1)})),localStorage.setItem("todos",JSON.stringify(t.todos))}))},updated:function(){localStorage.setItem("todos",JSON.stringify(this.todos))}},V=A,N=(o("7c55"),Object(d["a"])(V,i,s,!1,null,null,null)),J=N.exports,L=o("a1c5"),M=o.n(L);n["a"].use(M.a),n["a"].config.productionTip=!1,new n["a"]({render:function(t){return t(J)}}).$mount("#app")},"7c55":function(t,e,o){"use strict";o("0e93")},"90ee":function(t,e,o){},"94da":function(t,e,o){},b88f:function(t,e,o){"use strict";o("90ee")},d026:function(t,e,o){},f449:function(t,e,o){}});
//# sourceMappingURL=app.ac5bc615.js.map