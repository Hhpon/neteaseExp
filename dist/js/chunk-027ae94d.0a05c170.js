(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-027ae94d"],{"170e":function(t,s,e){},5362:function(t,s,e){"use strict";var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("div",{staticClass:"music-list"},[e("div",{staticClass:"back",on:{click:t.back}},[e("svg",{staticClass:"icon icon-right",attrs:{"aria-hidden":"true"}},[e("use",{attrs:{"xlink:href":"#icon-right"}})]),e("h1",{ref:"title",staticClass:"header-title"},[t._v(t._s(t.headerTitle))])]),e("div",{ref:"bgImage",staticClass:"bg-image",style:t.bgStyle},[e("div",{ref:"filter",staticClass:"filter"})]),e("div",{ref:"layer",staticClass:"bg-layer"}),e("div",{ref:"list",staticClass:"list"},[e("cube-scroll",{ref:"scrollList",staticClass:"scroll-list",attrs:{"scroll-events":t.scrollEvents,options:t.options,data:t.songs},on:{scroll:t.scroll}},[e("song-list",{attrs:{songs:t.songs},on:{select:t.selectItem,random:t.random}})],1)],1)])},n=[],a=e("3f47"),c=e("99f1"),r=e("3e2c"),l=e("52c1"),o=e("510f"),h=40,g=10,f=Object(r["a"])("transform"),u=Object(r["a"])("backdrop-filter"),d={mixins:[o["b"]],props:{songs:{type:Array,default:function(){return[]}},bgImage:{type:String,default:""},title:{type:String,default:""}},data:function(){return{scrollY:0,headerTitle:""}},computed:{bgStyle:function(){return"background-image: url(".concat(this.bgImage,")")}},created:function(){this.options={probeType:3},this.scrollEvents=["scroll"]},mounted:function(){this.imageHeight=this.$refs.bgImage.clientHeight-g,this.minTranslateY=-this.imageHeight+h,this.$refs.list.style.top="".concat(this.imageHeight,"px")},methods:Object(a["a"])({handlePlaylist:function(t){var s=t.length>0?"60px":"";this.$refs.list.style.bottom=s,this.$refs.scrollList.refresh()},selectItem:function(t,s){this.selectPlay({list:this.songs,index:s})},back:function(){this.$router.back()},scroll:function(t){this.scrollY=t.y},random:function(){this.randomPlay({list:this.songs})}},Object(l["b"])(["selectPlay","randomPlay"])),watch:{scrollY:function(t){var s=Math.max(this.minTranslateY,t),e=0,i=1,n=0;this.$refs.layer.style["transform"]="translate3d(0,".concat(s,"px,0)");var a=Math.abs(t/this.imageHeight);t>0?i=1+a:n=Math.min(20*a,20),this.$refs.filter.style[u]="blur(".concat(n,"px)"),t<this.minTranslateY?(e=10,this.$refs.bgImage.style.paddingTop=0,this.$refs.bgImage.style.height="".concat(h,"px"),this.headerTitle=this.title):(e=0,this.$refs.bgImage.style.paddingTop="70%",this.$refs.bgImage.style.height=0,this.headerTitle=""),this.$refs.bgImage.style.zIndex=e,this.$refs.bgImage.style[f]="scale(".concat(i,")")}},components:{songList:c["a"]}},m=d,b=(e("686b"),e("17cc")),p=Object(b["a"])(m,i,n,!1,null,"339323bd",null);s["a"]=p.exports},"67d2":function(t,s,e){"use strict";var i=e("170e"),n=e.n(i);n.a},"686b":function(t,s,e){"use strict";var i=e("9ce3"),n=e.n(i);n.a},"9ce3":function(t,s,e){},f5be:function(t,s,e){"use strict";e.r(s);var i=function(){var t=this,s=t.$createElement,e=t._self._c||s;return e("transition",{attrs:{name:"slide"}},[e("music-list",{attrs:{songs:t.songs,title:t.title,bgImage:t.bgImage}})],1)},n=[],a=(e("612f"),e("3f47")),c=e("5362"),r=e("52c1"),l=e("d73f"),o=e("f5de"),h={data:function(){return{songs:[]}},computed:Object(a["a"])({title:function(){return this.disc.name},bgImage:function(){return this.disc.picUrl||this.disc.coverImgUrl}},Object(r["c"])(["disc"])),components:{MusicList:c["a"]},created:function(){this._getDetail()},methods:{_getDetail:function(){var t=this;this.disc.id?Object(l["c"])(this.disc.id).then(function(s){t.songs=t._normalizeSongs(s)}):this.$router.push("/recommend")},_normalizeSongs:function(t){var s=[];return t.forEach(function(t){var e=t;e.id&&e.al.id&&s.push(Object(o["a"])(e))}),s}}},g=h,f=(e("67d2"),e("17cc")),u=Object(f["a"])(g,i,n,!1,null,"7ba0750b",null);s["default"]=u.exports}}]);
//# sourceMappingURL=chunk-027ae94d.0a05c170.js.map