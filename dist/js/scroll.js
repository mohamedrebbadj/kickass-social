var EPPZScrollTo={documentVerticalScrollPosition:function(){return self.pageYOffset||(document.documentElement&&document.documentElement.scrollTop?document.documentElement.scrollTop:document.body.scrollTop||0)},viewportHeight:function(){return("CSS1Compat"===document.compatMode?document.documentElement:document.body).clientHeight},documentHeight:function(){return void 0!==document.height?document.height:document.body.offsetHeight},documentMaximumScrollPosition:function(){return this.documentHeight()-this.viewportHeight()},elementVerticalClientPositionById:function(t){return document.getElementById(t).getBoundingClientRect().top},scrollVerticalTickToPosition:function(t,o){var e=parseFloat(o)-parseFloat(t);Math.abs(e)<=.5?scrollTo(0,o):(t=.8*parseFloat(t)+.2*parseFloat(o),scrollTo(0,Math.round(t)),setTimeout("EPPZScrollTo.scrollVerticalTickToPosition("+t+", "+o+")",1e3/60))},scrollVerticalToElementById:function(t,o){var e,n;null!=document.getElementById(t)?(e=this.documentVerticalScrollPosition()+this.elementVerticalClientPositionById(t)-o,n=this.documentVerticalScrollPosition(),(o=this.documentMaximumScrollPosition())<e&&(e=o),this.scrollVerticalTickToPosition(n,e)):console.warn("Cannot find element with id '"+t+"'.")}};