/*! pace 0.4.17 */
window.paceOptions = {
  ajax: true,
  document: false,
  eventLag: false,
  elements: false,
  startOnPageLoad: false
};
(function(){var a,b,c,d,e,f,g,h,i,j,k,l,m,n,o,p,q,r,s,t,u,v,w,x,y,z,A,B,C,D,E,F,G,H,I,J,K,L,M,N,O,P,Q,R,S,T,U,V=[].slice,W={}.hasOwnProperty,X=function(a,b){function c(){this.constructor=a}for(var d in b)W.call(b,d)&&(a[d]=b[d]);return c.prototype=b.prototype,a.prototype=new c,a.__super__=b.prototype,a},Y=[].indexOf||function(a){for(var b=0,c=this.length;c>b;b++)if(b in this&&this[b]===a)return b;return-1};for(t={catchupTime:500,initialRate:.03,minTime:500,ghostTime:500,maxProgressPerFrame:10,easeFactor:1.25,startOnPageLoad:!0,restartOnPushState:!0,restartOnRequestAfter:500,target:"body",elements:{checkInterval:100,selectors:["body"]},eventLag:{minSamples:10,sampleCount:3,lagThreshold:3},ajax:{trackMethods:["GET"],trackWebSockets:!1}},B=function(){var a;return null!=(a="undefined"!=typeof performance&&null!==performance?"function"==typeof performance.now?performance.now():void 0:void 0)?a:+new Date},D=window.requestAnimationFrame||window.mozRequestAnimationFrame||window.webkitRequestAnimationFrame||window.msRequestAnimationFrame,s=window.cancelAnimationFrame||window.mozCancelAnimationFrame,null==D&&(D=function(a){return setTimeout(a,50)},s=function(a){return clearTimeout(a)}),F=function(a){var b,c;return b=B(),(c=function(){var d;return d=B()-b,d>=33?(b=B(),a(d,function(){return D(c)})):setTimeout(c,33-d)})()},E=function(){var a,b,c;return c=arguments[0],b=arguments[1],a=3<=arguments.length?V.call(arguments,2):[],"function"==typeof c[b]?c[b].apply(c,a):c[b]},u=function(){var a,b,c,d,e,f,g;for(b=arguments[0],d=2<=arguments.length?V.call(arguments,1):[],f=0,g=d.length;g>f;f++)if(c=d[f])for(a in c)W.call(c,a)&&(e=c[a],null!=b[a]&&"object"==typeof b[a]&&null!=e&&"object"==typeof e?u(b[a],e):b[a]=e);return b},p=function(a){var b,c,d,e,f;for(c=b=0,e=0,f=a.length;f>e;e++)d=a[e],c+=Math.abs(d),b++;return c/b},w=function(a,b){var c,d,e;if(null==a&&(a="options"),null==b&&(b=!0),e=document.querySelector("[data-pace-"+a+"]")){if(c=e.getAttribute("data-pace-"+a),!b)return c;try{return JSON.parse(c)}catch(f){return d=f,"undefined"!=typeof console&&null!==console?console.error("Error parsing inline pace options",d):void 0}}},g=function(){function a(){}return a.prototype.on=function(a,b,c,d){var e;return null==d&&(d=!1),null==this.bindings&&(this.bindings={}),null==(e=this.bindings)[a]&&(e[a]=[]),this.bindings[a].push({handler:b,ctx:c,once:d})},a.prototype.once=function(a,b,c){return this.on(a,b,c,!0)},a.prototype.off=function(a,b){var c,d,e;if(null!=(null!=(d=this.bindings)?d[a]:void 0)){if(null==b)return delete this.bindings[a];for(c=0,e=[];c<this.bindings[a].length;)this.bindings[a][c].handler===b?e.push(this.bindings[a].splice(c,1)):e.push(c++);return e}},a.prototype.trigger=function(){var a,b,c,d,e,f,g,h,i;if(c=arguments[0],a=2<=arguments.length?V.call(arguments,1):[],null!=(g=this.bindings)?g[c]:void 0){for(e=0,i=[];e<this.bindings[c].length;)h=this.bindings[c][e],d=h.handler,b=h.ctx,f=h.once,d.apply(null!=b?b:this,a),f?i.push(this.bindings[c].splice(e,1)):i.push(e++);return i}},a}(),null==window.Pace&&(window.Pace={}),u(Pace,g.prototype),C=Pace.options=u({},t,window.paceOptions,w()),S=["ajax","document","eventLag","elements"],O=0,Q=S.length;Q>O;O++)I=S[O],C[I]===!0&&(C[I]=t[I]);i=function(a){function b(){return T=b.__super__.constructor.apply(this,arguments)}return X(b,a),b}(Error),b=function(){function a(){this.progress=0}return a.prototype.getElement=function(){var a;if(null==this.el){if(a=document.querySelector(C.target),!a)throw new i;this.el=document.createElement("div"),this.el.className="pace pace-active",document.body.className=document.body.className.replace("pace-done",""),document.body.className+=" pace-running",this.el.innerHTML='<div class="pace-progress">\n  <div class="pace-progress-inner"></div>\n</div>\n<div class="pace-activity"></div>',null!=a.firstChild?a.insertBefore(this.el,a.firstChild):a.appendChild(this.el)}return this.el},a.prototype.finish=function(){var a;return a=this.getElement(),a.className=a.className.replace("pace-active",""),a.className+=" pace-inactive",document.body.className=document.body.className.replace("pace-running",""),document.body.className+=" pace-done"},a.prototype.update=function(a){return this.progress=a,this.render()},a.prototype.destroy=function(){try{this.getElement().parentNode.removeChild(this.getElement())}catch(a){i=a}return this.el=void 0},a.prototype.render=function(){var a,b;return null==document.querySelector(C.target)?!1:(a=this.getElement(),a.children[0].style.width=""+this.progress+"%",(!this.lastRenderedProgress||this.lastRenderedProgress|0!==this.progress|0)&&(a.children[0].setAttribute("data-progress-text",""+(0|this.progress)+"%"),this.progress>=100?b="99":(b=this.progress<10?"0":"",b+=0|this.progress),a.children[0].setAttribute("data-progress",""+b)),this.lastRenderedProgress=this.progress)},a.prototype.done=function(){return this.progress>=100},a}(),h=function(){function a(){this.bindings={}}return a.prototype.trigger=function(a,b){var c,d,e,f,g;if(null!=this.bindings[a]){for(f=this.bindings[a],g=[],d=0,e=f.length;e>d;d++)c=f[d],g.push(c.call(this,b));return g}},a.prototype.on=function(a,b){var c;return null==(c=this.bindings)[a]&&(c[a]=[]),this.bindings[a].push(b)},a}(),N=window.XMLHttpRequest,M=window.XDomainRequest,L=window.WebSocket,v=function(a,b){var c,d,e,f;f=[];for(d in b.prototype)try{e=b.prototype[d],null==a[d]&&"function"!=typeof e?f.push(a[d]=e):f.push(void 0)}catch(g){c=g}return f},z=[],Pace.ignore=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?V.call(arguments,1):[],z.unshift("ignore"),c=b.apply(null,a),z.shift(),c},Pace.track=function(){var a,b,c;return b=arguments[0],a=2<=arguments.length?V.call(arguments,1):[],z.unshift("track"),c=b.apply(null,a),z.shift(),c},H=function(a){var b;if(null==a&&(a="GET"),"track"===z[0])return"force";if(!z.length&&C.ajax){if("socket"===a&&C.ajax.trackWebSockets)return!0;if(b=a.toUpperCase(),Y.call(C.ajax.trackMethods,b)>=0)return!0}return!1},j=function(a){function b(){var a,c=this;b.__super__.constructor.apply(this,arguments),a=function(a){var b;return b=a.open,a.open=function(d,e){return H(d)&&c.trigger("request",{type:d,url:e,request:a}),b.apply(a,arguments)}},window.XMLHttpRequest=function(b){var c;return c=new N(b),a(c),c},v(window.XMLHttpRequest,N),null!=M&&(window.XDomainRequest=function(){var b;return b=new M,a(b),b},v(window.XDomainRequest,M)),null!=L&&C.ajax.trackWebSockets&&(window.WebSocket=function(a,b){var d;return d=new L(a,b),H("socket")&&c.trigger("request",{type:"socket",url:a,protocols:b,request:d}),d},v(window.WebSocket,L))}return X(b,a),b}(h),P=null,x=function(){return null==P&&(P=new j),P},x().on("request",function(b){var c,d,e,f;return f=b.type,e=b.request,Pace.running||C.restartOnRequestAfter===!1&&"force"!==H(f)?void 0:(d=arguments,c=C.restartOnRequestAfter||0,"boolean"==typeof c&&(c=0),setTimeout(function(){var b,c,g,h,i,j;if(b="socket"===f?e.readyState<2:0<(h=e.readyState)&&4>h){for(Pace.restart(),i=Pace.sources,j=[],c=0,g=i.length;g>c;c++){if(I=i[c],I instanceof a){I.watch.apply(I,d);break}j.push(void 0)}return j}},c))}),a=function(){function a(){var a=this;this.elements=[],x().on("request",function(){return a.watch.apply(a,arguments)})}return a.prototype.watch=function(a){var b,c,d;return d=a.type,b=a.request,c="socket"===d?new m(b):new n(b),this.elements.push(c)},a}(),n=function(){function a(a){var b,c,d,e,f,g,h=this;if(this.progress=0,null!=window.ProgressEvent)for(c=null,a.addEventListener("progress",function(a){return h.progress=a.lengthComputable?100*a.loaded/a.total:h.progress+(100-h.progress)/2}),g=["load","abort","timeout","error"],d=0,e=g.length;e>d;d++)b=g[d],a.addEventListener(b,function(){return h.progress=100});else f=a.onreadystatechange,a.onreadystatechange=function(){var b;return 0===(b=a.readyState)||4===b?h.progress=100:3===a.readyState&&(h.progress=50),"function"==typeof f?f.apply(null,arguments):void 0}}return a}(),m=function(){function a(a){var b,c,d,e,f=this;for(this.progress=0,e=["error","open"],c=0,d=e.length;d>c;c++)b=e[c],a.addEventListener(b,function(){return f.progress=100})}return a}(),d=function(){function a(a){var b,c,d,f;for(null==a&&(a={}),this.elements=[],null==a.selectors&&(a.selectors=[]),f=a.selectors,c=0,d=f.length;d>c;c++)b=f[c],this.elements.push(new e(b))}return a}(),e=function(){function a(a){this.selector=a,this.progress=0,this.check()}return a.prototype.check=function(){var a=this;return document.querySelector(this.selector)?this.done():setTimeout(function(){return a.check()},C.elements.checkInterval)},a.prototype.done=function(){return this.progress=100},a}(),c=function(){function a(){var a,b,c=this;this.progress=null!=(b=this.states[document.readyState])?b:100,a=document.onreadystatechange,document.onreadystatechange=function(){return null!=c.states[document.readyState]&&(c.progress=c.states[document.readyState]),"function"==typeof a?a.apply(null,arguments):void 0}}return a.prototype.states={loading:0,interactive:50,complete:100},a}(),f=function(){function a(){var a,b,c,d,e,f=this;this.progress=0,a=0,e=[],d=0,c=B(),b=setInterval(function(){var g;return g=B()-c-50,c=B(),e.push(g),e.length>C.eventLag.sampleCount&&e.shift(),a=p(e),++d>=C.eventLag.minSamples&&a<C.eventLag.lagThreshold?(f.progress=100,clearInterval(b)):f.progress=100*(3/(a+3))},50)}return a}(),l=function(){function a(a){this.source=a,this.last=this.sinceLastUpdate=0,this.rate=C.initialRate,this.catchup=0,this.progress=this.lastProgress=0,null!=this.source&&(this.progress=E(this.source,"progress"))}return a.prototype.tick=function(a,b){var c;return null==b&&(b=E(this.source,"progress")),b>=100&&(this.done=!0),b===this.last?this.sinceLastUpdate+=a:(this.sinceLastUpdate&&(this.rate=(b-this.last)/this.sinceLastUpdate),this.catchup=(b-this.progress)/C.catchupTime,this.sinceLastUpdate=0,this.last=b),b>this.progress&&(this.progress+=this.catchup*a),c=1-Math.pow(this.progress/100,C.easeFactor),this.progress+=c*this.rate*a,this.progress=Math.min(this.lastProgress+C.maxProgressPerFrame,this.progress),this.progress=Math.max(0,this.progress),this.progress=Math.min(100,this.progress),this.lastProgress=this.progress,this.progress},a}(),J=null,G=null,q=null,K=null,o=null,r=null,Pace.running=!1,y=function(){return C.restartOnPushState?Pace.restart():void 0},null!=window.history.pushState&&(R=window.history.pushState,window.history.pushState=function(){return y(),R.apply(window.history,arguments)}),null!=window.history.replaceState&&(U=window.history.replaceState,window.history.replaceState=function(){return y(),U.apply(window.history,arguments)}),k={ajax:a,elements:d,document:c,eventLag:f},(A=function(){var a,c,d,e,f,g,h,i;for(Pace.sources=J=[],g=["ajax","elements","document","eventLag"],c=0,e=g.length;e>c;c++)a=g[c],C[a]!==!1&&J.push(new k[a](C[a]));for(i=null!=(h=C.extraSources)?h:[],d=0,f=i.length;f>d;d++)I=i[d],J.push(new I(C));return Pace.bar=q=new b,G=[],K=new l})(),Pace.stop=function(){return Pace.trigger("stop"),Pace.running=!1,q.destroy(),r=!0,null!=o&&("function"==typeof s&&s(o),o=null),A()},Pace.restart=function(){return Pace.trigger("restart"),Pace.stop(),Pace.start()},Pace.go=function(){return Pace.running=!0,q.render(),r=!1,o=F(function(a,b){var c,d,e,f,g,h,i,j,k,m,n,o,p,s,t,u,v;for(j=100-q.progress,d=o=0,e=!0,h=p=0,t=J.length;t>p;h=++p)for(I=J[h],m=null!=G[h]?G[h]:G[h]=[],g=null!=(v=I.elements)?v:[I],i=s=0,u=g.length;u>s;i=++s)f=g[i],k=null!=m[i]?m[i]:m[i]=new l(f),e&=k.done,k.done||(d++,o+=k.tick(a));return c=o/d,q.update(K.tick(a,c)),n=B(),q.done()||e||r?(q.update(100),Pace.trigger("done"),setTimeout(function(){return q.finish(),Pace.running=!1,Pace.trigger("hide")},Math.max(C.ghostTime,Math.min(C.minTime,B()-n)))):b()})},Pace.start=function(a){u(C,a),Pace.running=!0;try{q.render()}catch(b){i=b}return document.querySelector(".pace")?(Pace.trigger("start"),Pace.go()):setTimeout(Pace.start,50)},"function"==typeof define&&define.amd?define(function(){return Pace}):"object"==typeof exports?module.exports=Pace:C.startOnPageLoad&&Pace.start()}).call(this);

/*! .isOnScreen() returns bool */
jQuery.fn.isOnScreen = function(){
	if ( this.length < 1 ) return;
	
	var win = jQuery(window);

	var viewport = {
		top : win.scrollTop(),
		left : win.scrollLeft()
	};
	viewport.right = viewport.left + win.width();
	viewport.bottom = viewport.top + win.height();

	var bounds = this.offset();
	bounds.right = bounds.left + this.outerWidth();
	bounds.bottom = bounds.top + this.outerHeight();

	return (!(viewport.right < bounds.left || viewport.left > bounds.right || viewport.bottom < bounds.top || viewport.top > bounds.bottom));

};

jQuery(document).ready(function($) {
	if (typeof mts_ajax_loadposts !== 'undefined') {
		var History = window.History;
		
		var pageNum = parseInt(mts_ajax_loadposts.startPage) + 1;
		var max = parseInt(mts_ajax_loadposts.maxPages);
		var nextLink = mts_ajax_loadposts.nextLink;
		var autoLoad = mts_ajax_loadposts.autoLoad;
		
		if (!autoLoad) {
			// Insert the "Load More Posts" link.
			$('.pagination')
				.before('<div class="more-page more-page-'+ pageNum +'"></div>')
				.after('<div id="load-posts"><a href="#"><i class="fa fa-refresh"></i>' + mts_ajax_loadposts.i18n_loadmore + '</a></div>');
			if (pageNum == max+1) {
				$('#load-posts a').html('<i class="fa fa-ban"></i>'+mts_ajax_loadposts.i18n_nomore).addClass('disabled');
			}
			$('#load-posts a').click(function() {
				if(pageNum <= max && !$(this).hasClass('loading')) {
					$(this).html('<i class="fa fa-refresh fa-spin"></i>'+mts_ajax_loadposts.i18n_loading).addClass('loading');

					$('.more-page-'+ pageNum).load(nextLink + ' .excerpt', function() {
						// Update page number and nextLink.
						pageNum++;
						var new_url = nextLink;
						History.replaceState(null, window.document.title, new_url);
						nextLink = nextLink.replace(/(\/?)page(\/|d=)[0-9]+/, '$1page$2'+ pageNum);

						// Add a new placeholder, for when user clicks again.
						$('#load-posts').before('<div class="more-page-'+ pageNum +'"></div>');

						if(pageNum <= max) {
							$('#load-posts a').html('<i class="fa fa-refresh"></i>'+mts_ajax_loadposts.i18n_loadmore).removeClass('loading');
						} else {
							$('#load-posts a').html('<i class="fa fa-ban"></i>'+mts_ajax_loadposts.i18n_nomore).addClass('disabled').removeClass('loading');
						}
					});
					
				} else {
					// no more posts
				}

				return false;
			});
		} else {
			// autoload
			
			// Placeholder
			$('.pagination').before('<div class="more-page-'+ pageNum +' ajax-more-page"></div>');
				
			var loading_posts = false;
			var last_post = false;
			$(window).scroll(function() {
				if (!loading_posts && !last_post) {
					var lastPostVisible = $('.latestPost').last().isOnScreen();
					if (lastPostVisible) {
						if(pageNum <= max) {
							loading_posts = true;

							$('.more-page-'+ pageNum).after('<div class="ball-pulse"><div></div><div></div><div></div></div>');
		
							$('.more-page-'+ pageNum).load(nextLink + ' .excerpt', function() {
								// Update page number and nextLink.
								pageNum++;
								var new_url = nextLink;
								History.replaceState(null, window.document.title, new_url);
								
								loading_posts = false;
								$('.ball-pulse').remove();
								nextLink = nextLink.replace(/(\/?)page(\/|d=)[0-9]+/, '$1page$2'+ pageNum); 
								
								// Add a new placeholder
								$('.ajax-more-page').last().after('<div class="more-page-'+ pageNum +' ajax-more-page"></div>');  
							});
							
						} else {
							// no more posts
							last_post = true;
						}
					}
				}
			});
			
		}
		$('.pagination').remove();
	}
	
	if (typeof mts_ajax_search !== 'undefined') {
		var last_query = '';
		var search_xhr = null;
		function loadSearchResults(query, $container) {
			var search_query = query;
			if (!$container.hasClass('ajax-search-results-container')) {
				$container = $container.find('.ajax-search-results-container');
			}
			if (search_query == last_query) {
				var $results_container = $container.closest('.search-form').find('.ajax-search-results-container');
				if (!$results_container.is(':empty')) {
					$results_container.show().closest('.search-form').addClass('ajax-search-box-open');
					return false;
				}
			}
			last_query = search_query;
			
			if (search_xhr) {
				search_xhr.abort();
			}
			search_xhr = jQuery.ajax({
				url: mts_ajax_search.url, 
				data: {  'action' : 'mts_search', 'q' : search_query },
				beforeSend: function() {
					$container.addClass('loading');
				},
				success: function(data) {
					$container.html(data).show().closest('.search-form').addClass('ajax-search-box-open');
				}
			}).done(function() {
				$container.removeClass('loading');
			});
		}
		$('.search-form').each(function() {
			var $this = $(this);
			// add search results box
			$this.addClass('ajax-search').append('<div class="ajax-search-results-container"></div>')
				 .find('#s').on('input propertychange', function() { // IE<9 support with 'onpropertychange'
					if ($(window).width() > 865) {
						var s = jQuery(this).val();
						if (s.length > 2) { 
							fnDelay(function() {
								loadSearchResults(s, $this);
							}, 400);
						} else {
							$this.removeClass('ajax-search-box-open').find('.ajax-search-results-container').hide();
						}
					}
				 }).focus(function() {
					var $cont = $this.find('.ajax-search-results-container');
					if ( !$cont.is(':empty') && $(this).val().length > 2 ) {
						$this.addClass('ajax-search-box-open');						
						$cont.show();
					}
				 });
			  $this.find('.ajax-search-results-container').hide();
		}).click(function(e) { // $('.search-form').click
			e.stopPropagation();
		});

		$(document).on('keydown', '.ajax-search-box-open', function(e) {

			var $this = $(this),
				focused = $this.find(':focus');

			switch(e.which) {
				case 38: // up
					if ( focused.is("input") ) {
						$this.find('li:last a').focus();
					} else {
						if (focused.closest('li').prev('li').length) {
							focused.closest('li').prev('li').find('a:first').focus();
						} else {
							$this.find('input#s').focus();
						}
					}
				break;
				case 40: // down
					if ( focused.is("input") ) {
						$this.find('li:first a').focus();
					} else {
						if (focused.closest('li').next('li').length) {
							focused.closest('li').next('li').find('a:first').focus();
						} else {
							$this.find('input#s').focus();
						}
					}
				break;
				default: return; // exit this handler for other keys
			}
			e.preventDefault(); // prevent the default action
		});
	}
	
}).click(function() { // (document).click
	if (typeof mts_ajax_search !== 'undefined') { 
		jQuery('.ajax-search-results-container').fadeOut(200); jQuery('.search-form').removeClass('ajax-search-box-open'); 
	} 
});

var fnDelay = (function(){
  var timer = 0;
  return function(callback, ms){
	clearTimeout (timer);
	timer = setTimeout(callback, ms);
  };
})();
