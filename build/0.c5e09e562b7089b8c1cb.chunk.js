webpackJsonp([0],{487:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),i=n(42),a=n(210),s=n(211),l=n(51),c=n(214),d=n(494),p=n(507),u=n(496),h=n(511),m=n(498),f=n(499),g=n(516),v=n(518),y=n(495),b=n(523),C=function(){function DemosModule(){}return DemosModule=o([r.NgModule({declarations:[d.BlockchainDemoComponent,p.D3GraphComponent,u.DragDemoComponent,h.Dragula,m.EditorDemoComponent,f.GraphDemoComponent,g.ModalDemoComponent],imports:[b.CKEditorModule,i.CommonModule,a.HttpModule,s.FormsModule,l.RouterModule,c.SharedModule,v.routing],providers:[y.BlockchainService]})],DemosModule)}();t.DemosModule=C},490:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(8),r=function(){function CKButtonDirective(){this.click=new o.EventEmitter}return CKButtonDirective.prototype.initialize=function(e){var t=this;e.instance.addCommand(this.command,{exec:function(e){t.click.emit(e)}}),e.instance.ui.addButton(this.name,{label:this.label,command:this.command,toolbar:this.toolbar,icon:this.icon})},CKButtonDirective.prototype.ngOnInit=function(){if(!this.name)throw new Error("Attribute 'name' is required on <ckbutton>");if(!this.command)throw new Error("Attribute 'command' is required on <ckbutton>")},CKButtonDirective}();r.decorators=[{type:o.Directive,args:[{selector:"ckbutton"}]}],r.ctorParameters=function(){return[]},r.propDecorators={click:[{type:o.Output}],label:[{type:o.Input}],command:[{type:o.Input}],toolbar:[{type:o.Input}],name:[{type:o.Input}],icon:[{type:o.Input}]},t.CKButtonDirective=r},491:function(e,t,n){"use strict";var o=n(7),r=n(213);o.Observable.of=r.of},492:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(8),r=n(490),i=function(){function CKGroupDirective(){}return CKGroupDirective.prototype.ngAfterContentInit=function(){var e=this;this.toolbarButtons.forEach(function(t){return t.toolbar=e.name})},CKGroupDirective.prototype.initialize=function(e){e.instance.ui.addToolbarGroup(this.name,this.previous,this.subgroupOf),this.toolbarButtons.forEach(function(t){t.initialize(e)})},CKGroupDirective}();i.decorators=[{type:o.Directive,args:[{selector:"ckgroup"}]}],i.ctorParameters=function(){return[]},i.propDecorators={name:[{type:o.Input}],previous:[{type:o.Input}],subgroupOf:[{type:o.Input}],toolbarButtons:[{type:o.ContentChildren,args:[r.CKButtonDirective]}]},t.CKGroupDirective=i},494:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(8),a=n(495),s=function(){function BlockchainDemoComponent(e){this._blockchainService=e,this._address="1MEXc2kArQxrXzJSkWBK5T9CpGLP4UiS8R",this._receivedBitcoins=0,this._usdExchangeRate=0}return BlockchainDemoComponent.prototype.ngOnInit=function(){var e=this;e._blockchainService.getUsdExchangeRate().subscribe(function(t){e._usdExchangeRate=t});var t=new WebSocket("wss://ws.blockchain.info/inv");t.onopen=function(){t.send(JSON.stringify({op:"addr_sub",addr:e._address}))},t.onmessage=function(t){for(var n=JSON.parse(t.data),o=n.x.out,r=o.length,i=0;i<r;i++){if(n.x.out[i].addr==e._address){var a=n.x.out[i].value;e._receivedBitcoins=a/1e8}}}},BlockchainDemoComponent=o([i.Component({moduleId:e.i.toString(),selector:"blockchain-demo",styles:[n(505)],template:n(506)}),r("design:paramtypes",[a.BlockchainService])],BlockchainDemoComponent)}();t.BlockchainDemoComponent=s},495:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(8),a=n(210),s=n(7);n(491),n(217),n(218),n(219);var l=function(){function BlockchainService(e){this._http=e,this._tickerUrl="https://blockchain.info/ticker?cors=true"}return BlockchainService.prototype.getUsdExchangeRate=function(){return this._http.get(this._tickerUrl).map(function(e){return e.json().USD.last}).catch(this.handleError)},BlockchainService.prototype.handleError=function(e){return console.error(e),s.Observable.throw(e.json().error||"Server error")},BlockchainService=o([i.Injectable(),r("design:paramtypes",[a.Http])],BlockchainService)}();t.BlockchainService=l},496:function(e,t,n){"use strict";(function(o,r){var i=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},a=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var s=n(8),l=n(497),c=function(){function DragDemoComponent(e){this.dragulaService=e,this.many=["The","possibilities","are","endless!"],this.many2=["Explore","them"],this.list1=[{id:0,text:"You can drag and drop these elements between these two containers",allowMove:!0},{id:1,text:"There's also the possibility of moving elements around in the same container, changing their position",allowMove:!0},{id:2,text:"A drop event is fired whenever an element is dropped anywhere other than its origin",allowMove:!0},{id:3,text:"The over event fires when you drag something over a container, and out fires when you drag it away from the container",allowMove:!0}],this.list2=[{id:4,text:"There are also events such as cancel, cloned, drag, dragend, remove, shadow, dropModel, and removeModel",allowMove:!0},{id:5,text:"Make sure to check out the dragula and ng2-dragula documentation on GitHub!",allowMove:!0},{id:6,text:"Don't move me!!!",allowMove:!1}]}return DragDemoComponent.prototype.ngOnInit=function(){var e=this;window.appInsights.trackPageView("demos-module/drag-demo.component");var t=this;this.dragulaService.setOptions("dragContainer",{isContainer:function(e){return!1},moves:function(e,t,n,o){return!0},accepts:function(e,n,i,a){var s=parseInt(o(e).attr("id"),10);return!!(r.findWhere(t.list1,{id:s})||r.findWhere(t.list2,{id:s})).allowMove},invalid:function(e,t){return!1},direction:"vertical",copy:!1,copySortSource:!0,revertOnSpill:!0,removeOnSpill:!1,mirrorContainer:document.body,ignoreInputTextSelection:!0}),this.dragulaService.over.subscribe(function(t){e.onOver(t.slice(1))}),this.dragulaService.out.subscribe(function(t){e.onOut(t.slice(1))})},DragDemoComponent.prototype.onOver=function(e){var t=e[0],n=e[1],i=e[2],a=parseInt(o(t).attr("id"),10),s=r.findWhere(this.list1,{id:a})||r.findWhere(this.list2,{id:a});n!==i&&(s.allowMove?o(n).addClass("drag-success"):o(n).addClass("drag-error"))},DragDemoComponent.prototype.onOut=function(e){var t=(e[0],e[1]);e[2];o(t).removeClass("drag-success drag-error")},DragDemoComponent.prototype.removeObject=function(e,t){for(var n=0;n<e.length;n++)if(e[n].id===t.id){e.splice(n,1);break}},DragDemoComponent=i([s.Component({moduleId:e.i.toString(),selector:"drag-demo",styles:[n(509)],viewProviders:[l.DragulaService],template:n(510)}),a("design:paramtypes",[l.DragulaService])],DragDemoComponent)}();t.DragDemoComponent=c}).call(t,n(64),n(212))},497:function(e,t,n){"use strict";(function(e){var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),i=function(){function DragulaService(){this.cancel=new r.EventEmitter,this.cloned=new r.EventEmitter,this.drag=new r.EventEmitter,this.dragend=new r.EventEmitter,this.drop=new r.EventEmitter,this.out=new r.EventEmitter,this.over=new r.EventEmitter,this.remove=new r.EventEmitter,this.shadow=new r.EventEmitter,this.dropModel=new r.EventEmitter,this.removeModel=new r.EventEmitter,this.events=["cancel","cloned","drag","dragend","drop","out","over","remove","shadow","dropModel","removeModel"],this.bags=[]}return DragulaService.prototype.add=function(e,t){var n=this.find(e);if(n)throw new Error('Bag named: "'+e+'" already exists.');return n={name:e,drake:t},this.bags.push(n),t.models&&this.handleModels(e,t),n.initEvents||this.setupEvents(n),n},DragulaService.prototype.find=function(e){for(var t=0;t<this.bags.length;t++)if(this.bags[t].name===e)return this.bags[t]},DragulaService.prototype.destroy=function(e){var t=this.find(e),n=this.bags.indexOf(t);this.bags.splice(n,1),t.drake.destroy()},DragulaService.prototype.setOptions=function(t,n){var o=this.add(t,e(n));this.handleModels(t,o.drake)},DragulaService.prototype.handleModels=function(e,t){var n,o,r,i,a=this;t.on("remove",function(n,r){t.models&&(i=t.models[t.containers.indexOf(r)],i.splice(o,1),a.removeModel.emit([e,n,r]))}),t.on("drag",function(e,t){n=e,o=a.domIndexOf(e,t)}),t.on("drop",function(s,l,c){if(t.models&&l){if(r=a.domIndexOf(s,l),i=t.models[t.containers.indexOf(c)],l===c)i.splice(r,0,i.splice(o,1)[0]);else{var d=n===s,p=t.models[t.containers.indexOf(l)],u=d?i[o]:JSON.parse(JSON.stringify(i[o]));d&&i.splice(o,1),p.splice(r,0,u),l.removeChild(s)}a.dropModel.emit([e,s,l,c])}})},DragulaService.prototype.setupEvents=function(e){e.initEvents=!0;var t=this,n=function(n){function replicate(){var o=Array.prototype.slice.call(arguments);t[n].emit([e.name].concat(o))}e.drake.on(n,replicate)};this.events.forEach(n)},DragulaService.prototype.domIndexOf=function(e,t){return Array.prototype.indexOf.call(t.children,e)},DragulaService=o([r.Injectable()],DragulaService)}();t.DragulaService=i}).call(t,n(216))},498:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a};Object.defineProperty(t,"__esModule",{value:!0});var r=n(8),i=function(){function EditorDemoComponent(){this.data=[{name:"[CustomerName]",value:"John Smith"},{name:"[DeveloperName]",value:"Paul Gilchrist"},{name:"[DateToday]",value:(new Date).toDateString()}]}return EditorDemoComponent.prototype.ngOnInit=function(){window.appInsights.trackPageView("demos-module/editor-demo.component"),this.content="\n            <h1><strong>WYSIWYG Data Merge Demo</strong></h1>\n            <p>&nbsp;</p>\n            <h3>[CustomerName],</h3>\n            <p>Welcome to this editor demo supporting data merge variable support, last modified on [DateToday].</p>\n            <p>&nbsp;</p>\n            <p>Thanks,</p>\n            <p>[DeveloperName]</p>\n        ",this.updateMergedContent()},EditorDemoComponent.prototype.onChange=function(e){this.updateMergedContent()},EditorDemoComponent.prototype.onReady=function(e){},EditorDemoComponent.prototype.updateMergedContent=function(){var e=this;this.mergedContent=this.content,this.data.forEach(function(t,n){return e.mergedContent=e.mergedContent.split(t.name).join(t.value)})},EditorDemoComponent=o([r.Component({moduleId:e.i.toString(),selector:"editor-demo",styles:[n(512)],template:n(513)})],EditorDemoComponent)}();t.EditorDemoComponent=i},499:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(8),a=n(51),s=function(){function GraphDemoComponent(e,t){this._route=e,this._router=t,this.data=[{month:"2015-01",sales:100},{month:"2015-02",sales:130},{month:"2015-03",sales:170},{month:"2015-04",sales:220},{month:"2015-05",sales:280},{month:"2015-06",sales:300},{month:"2015-07",sales:270},{month:"2015-08",sales:230},{month:"2015-09",sales:180},{month:"2015-10",sales:140},{month:"2015-11",sales:120},{month:"2015-12",sales:130}],this.height=300,this.labels=["none","all","minmax"],this.label="minmax",this.warningLevel=250,this.width=350}return GraphDemoComponent.prototype.ngOnInit=function(){var e=this;window.appInsights.trackPageView("demos-module/graph-demo.component"),this.sub=this._route.params.subscribe(function(t){var n=+t.height;n&&(e.height=n);var o=+t.width;o&&(e.width=o);var r=t.label;r&&(e.label=r);var i=+t.warningLevel;i&&(e.warningLevel=i)})},GraphDemoComponent.prototype.ngOnDestroy=function(){this.sub.unsubscribe()},GraphDemoComponent.prototype.onUpdateLabel=function(e){this.label=e.target.value},GraphDemoComponent=o([i.Component({moduleId:e.i.toString(),selector:"graph-demo",styles:[n(514)],template:n(515)}),r("design:paramtypes",[a.ActivatedRoute,a.Router])],GraphDemoComponent)}();t.GraphDemoComponent=s},501:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(8),r=n(211),i=n(490),a=n(492),s=function(){function CKEditorComponent(e){this.change=new o.EventEmitter,this.ready=new o.EventEmitter,this.blur=new o.EventEmitter,this.focus=new o.EventEmitter,this._value="",this.zone=e}return Object.defineProperty(CKEditorComponent.prototype,"value",{get:function(){return this._value},set:function(e){e!==this._value&&(this._value=e,this.onChange(e))},enumerable:!0,configurable:!0}),CKEditorComponent.prototype.ngOnChanges=function(e){e.readonly&&this.instance&&this.instance.setReadOnly(e.readonly.currentValue)},CKEditorComponent.prototype.ngOnDestroy=function(){var e=this;this.instance&&setTimeout(function(){e.instance.removeAllListeners(),CKEDITOR.instances[e.instance.name].destroy(),e.instance.destroy(),e.instance=null})},CKEditorComponent.prototype.ngAfterViewInit=function(){this.ckeditorInit(this.config||{})},CKEditorComponent.prototype.updateValue=function(e){var t=this;this.zone.run(function(){t.value=e,t.onChange(e),t.onTouched(),t.change.emit(e)})},CKEditorComponent.prototype.ckeditorInit=function(e){var t=this;"undefined"==typeof CKEDITOR?console.warn("CKEditor 4.x is missing (http://ckeditor.com/)"):(this.readonly&&(e.readOnly=this.readonly),this.instance=CKEDITOR.replace(this.host.nativeElement,e),this.instance.setData(this.value),this.instance.on("instanceReady",function(e){t.ready.emit(e)}),this.instance.on("change",function(){t.onTouched();var e=t.instance.getData();t.debounce?(t.debounceTimeout&&clearTimeout(t.debounceTimeout),t.debounceTimeout=setTimeout(function(){t.updateValue(e),t.debounceTimeout=null},parseInt(t.debounce))):t.updateValue(e)}),this.instance.on("blur",function(e){t.blur.emit(e)}),this.instance.on("focus",function(e){t.focus.emit(e)}),this.toolbarGroups.forEach(function(e){e.initialize(t)}),this.toolbarButtons.forEach(function(e){e.initialize(t)}))},CKEditorComponent.prototype.writeValue=function(e){this._value=e,this.instance&&this.instance.setData(e)},CKEditorComponent.prototype.onChange=function(e){},CKEditorComponent.prototype.onTouched=function(){},CKEditorComponent.prototype.registerOnChange=function(e){this.onChange=e},CKEditorComponent.prototype.registerOnTouched=function(e){this.onTouched=e},CKEditorComponent}();s.decorators=[{type:o.Component,args:[{selector:"ckeditor",providers:[{provide:r.NG_VALUE_ACCESSOR,useExisting:o.forwardRef(function(){return s}),multi:!0}],template:"<textarea #host></textarea>"}]}],s.ctorParameters=function(){return[{type:o.NgZone}]},s.propDecorators={config:[{type:o.Input}],readonly:[{type:o.Input}],debounce:[{type:o.Input}],change:[{type:o.Output}],ready:[{type:o.Output}],blur:[{type:o.Output}],focus:[{type:o.Output}],host:[{type:o.ViewChild,args:["host"]}],toolbarButtons:[{type:o.ContentChildren,args:[i.CKButtonDirective]}],toolbarGroups:[{type:o.ContentChildren,args:[a.CKGroupDirective]}],value:[{type:o.Input}]},t.CKEditorComponent=s},505:function(e,t){e.exports=""},506:function(e,t){e.exports="<div>\r\n    Donations to this project can be sent to the below blockchain address<br/>\r\n    <img [src]=\"'https://chart.googleapis.com/chart?chs=150x150&cht=qr&chl=' + _address\">\r\n    <div>\r\n        Received: ${{_receivedBitcoins * _usdExchangeRate}}<br/>\r\n        <br/>\r\n        USD Exchange Rate: ${{_usdExchangeRate}} per Bitcoin<br/>\r\n    </div>\r\n</div>"},507:function(e,t,n){"use strict";(function(o){var r=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},i=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var a=n(8),s=function(){function D3GraphComponent(e){this.el=e,this.isReady=!1,this.data=null,this.height=300,this.labels="all",this.warningLevel=1/0,this.width=350,this.type="bar",this.xKey="x",this.yKey="y",this.xType="number"}return D3GraphComponent.prototype.ngOnInit=function(){this.isReady=!0,this._tooltip=o.select("body").append("div").attr("class","d3-tooltip").style({opacity:0,"pointer-events":"none",position:"absolute"}),this.draw()},D3GraphComponent.prototype.ngOnChanges=function(){this.isReady&&this.draw()},D3GraphComponent.prototype.createBarGraph=function(){var e=this,t=e.height/o.max(e.data,function(t){return t[e.yKey]}),n=e.width/e.data.length,r=o.select(e.el.nativeElement).append("svg").attr({width:e.width,height:e.height});r.selectAll("rect").data(e.data).enter().append("rect").attr({x:function(e,t){return t*n},y:function(n){return e.height-n[e.yKey]*t},width:n-2,height:function(n){return n[e.yKey]*t},class:function(t){return e.classPicker(t[e.yKey],e.warningLevel)}}).on("mouseover",function(t){e._tooltip.transition().duration(500).style("opacity",.9);var n="<strong>"+e.xKey+":</strong> "+t[e.xKey]+"<br/>";n+="<strong>"+e.yKey+":</strong> "+t[e.yKey]+"<br/>",e._tooltip.html(n).style("left",o.event.pageX+"px").style("top",o.event.pageY-28+"px"),r.append("text").text(t[e.yKey]).attr({x:parseFloat(o.select(this).attr("x"))+parseFloat(o.select(this).attr("width"))/2,y:parseFloat(o.select(this).attr("y"))+14,"text-anchor":"middle",id:"hoverLabel_"+t[e.yKey]})}).on("mouseout",function(t){e._tooltip.transition().duration(500).style("opacity",0),o.select("#hoverLabel_"+t[e.yKey]).remove()}),r.selectAll("text").data(e.data).enter().append("text").text(function(t){return e.showLabels(e.yKey,t[e.yKey],e.labels,!0)}).attr({x:function(e,t){return t*n+(n-2)/2},y:function(n){return e.height-n[e.yKey]*t+14},"text-anchor":"middle"})},D3GraphComponent.prototype.createLineChart=function(){var e=this,t="date"===this.xType,n=this.scale(e.xKey,[31,e.width-10],!0),r=this.scale(e.yKey,[e.height-26,10],!1),i=o.svg.axis().scale(n).orient("bottom");t&&i.tickFormat(o.time.format("%b"));var a=o.svg.axis().scale(r).orient("left"),s=o.svg.line().x(function(o){return n(t?new Date(o[e.xKey]):o[e.xKey])}).y(function(t){return r(t[e.yKey])}).interpolate("linear"),l=o.select(e.el.nativeElement).append("svg").attr({width:e.width,height:e.height});l.append("path").attr("class","d3-path").attr({d:s(e.data),fill:"none"}),l.selectAll("circle").data(e.data).enter().append("circle").attr({cx:function(o){return n(t?new Date(o[e.xKey]):o[e.xKey])},cy:function(t){return r(t[e.yKey])},r:3,class:function(t){return e.classPicker(t[e.yKey],e.warningLevel)}}).on("mouseover",function(t){e._tooltip.transition().duration(500).style("opacity",.9);var n="<strong>"+e.xKey+":</strong> "+t[e.xKey]+"<br/>";n+="<strong>"+e.yKey+":</strong> "+t[e.yKey]+"<br/>",e._tooltip.html(n).style("left",o.event.pageX+"px").style("top",o.event.pageY-28+"px")}).on("mouseout",function(t){e._tooltip.transition().duration(500).style("opacity",0)}),l.selectAll("text").data(e.data).enter().append("text").text(function(t){return e.showLabels(e.yKey,t[e.yKey],e.labels,!0)}).attr({x:function(o){return n(t?new Date(o[e.xKey]):o[e.xKey])},y:function(t){return r(t[e.yKey])},"text-anchor":"start",class:function(t){return e.classPicker(t[e.yKey],e.warningLevel)}}),l.append("g").call(i).attr({class:"d3-axis",transform:"translate(0, "+(e.height-26)+")"}),l.append("g").call(a).attr({class:"d3-axis",transform:"translate(26, 0)"})},D3GraphComponent.prototype.createPieChart=function(){var e=this,t="date"===this.xType,n=o.time.format("%b"),r=e.width/2,i=o.scale.category20c(),a=o.select(e.el.nativeElement).append("svg:svg").data([e.data]).attr({width:2*r,height:2*r}).append("svg:g").attr("transform","translate("+r+","+r+")"),s=o.layout.pie().value(function(t){return t[e.yKey]}),l=o.svg.arc().outerRadius(r),c=a.selectAll("g.slice").data(s).enter().append("svg:g").attr("class","slice");c.append("svg:path").attr({fill:function(e,t){return i(t)},d:function(e){return l(e)}}).on("mouseover",function(t,n){e._tooltip.transition().duration(500).style("opacity",.9);var r="<strong>"+e.xKey+":</strong> "+e.data[n][e.xKey]+"<br/>";r+="<strong>"+e.yKey+":</strong> "+e.data[n][e.yKey]+"<br/>",e._tooltip.html(r).style("left",o.event.pageX+"px").style("top",o.event.pageY-28+"px")}).on("mouseout",function(t){e._tooltip.transition().duration(500).style("opacity",0)}),c.append("svg:text").attr({class:"d3-axis",transform:function(e){e.innerRadius=0,e.outerRadius=r;var t=.9*r,n=l.centroid(e),o=n[0],i=n[1],a=Math.sqrt(o*o+i*i);return"translate("+o/a*t+","+i/a*t+")"},"text-anchor":"middle"}).text(function(r,i){var a=o.max(e.data,function(t){return t[e.yKey]}),s=o.min(e.data,function(t){return t[e.yKey]}),l=e.data[i][e.xKey],c=e.data[i][e.yKey];if("none"!==e.labels&&("minmax"===e.labels&&(c===a||c===s)||"all"===e.labels))return t?n(new Date(l)):l})},D3GraphComponent.prototype.createScatterPlot=function(){var e=this,t="date"===this.xType,n=this.scale(e.xKey,[31,e.width-10],!0),r=this.scale(e.yKey,[e.height-26,10],!1),i=o.svg.axis().scale(n).orient("bottom");t&&i.tickFormat(o.time.format("%b"));var a=o.svg.axis().scale(r).orient("left"),s=o.select(e.el.nativeElement).append("svg").attr({width:e.width,height:e.height});s.selectAll("circle").data(e.data).enter().append("circle").attr({cx:function(o){return n(t?new Date(o[e.xKey]):o[e.xKey])},cy:function(t){return r(t[e.yKey])},r:5,class:function(t){return e.classPicker(t[e.yKey],e.warningLevel)}}).on("mouseover",function(t){e._tooltip.transition().duration(500).style("opacity",.9);var n="<strong>"+e.xKey+":</strong> "+t[e.xKey]+"<br/>";n+="<strong>"+e.yKey+":</strong> "+t[e.yKey]+"<br/>",e._tooltip.html(n).style("left",o.event.pageX+"px").style("top",o.event.pageY-28+"px")}).on("mouseout",function(t){e._tooltip.transition().duration(500).style("opacity",0)}),s.selectAll("text").data(e.data).enter().append("text").text(function(t){return e.showLabels(e.yKey,t[e.yKey],e.labels,!0)}).attr({x:function(o){return n(t?new Date(o[e.xKey]):o[e.xKey])},y:function(t){return r(t[e.yKey])},"text-anchor":"start",class:function(t){return e.classPicker(t[e.yKey],e.warningLevel)}}),s.append("g").call(i).attr({class:"d3-axis",transform:"translate(0, "+(e.height-26)+")"}),s.append("g").call(a).attr({class:"d3-axis",transform:"translate(26, 0)"})},D3GraphComponent.prototype.classPicker=function(e,t){return e>=t?"d3-warning":"d3-default"},D3GraphComponent.prototype.draw=function(){switch(o.select(this.el.nativeElement).selectAll("*").remove(),this.type){case"bar":this.createBarGraph();break;case"line":this.createLineChart();break;case"pie":this.createPieChart();break;case"scatter":this.createScatterPlot()}},D3GraphComponent.prototype.scale=function(e,t,n){void 0===n&&(n=!1);var r,i,a,s=this;return"date"===this.xType?(r=new Date(o.min(s.data,function(t){return t[e]})),i=new Date(o.max(s.data,function(t){return t[e]})),a=o.time.scale()):(r=n?o.min(s.data,function(t){return t[e]}):0,i=o.max(s.data,function(t){return t[e]}),a=o.scale.linear()),a.domain([r,i]).range(t)},D3GraphComponent.prototype.showLabels=function(e,t,n,r){void 0===r&&(r=!0);var i=this,a=o.max(i.data,function(t){return t[e]}),s=0;if(r&&(s=o.min(i.data,function(t){return t[e]})),"none"!==n&&("minmax"===n&&(t===a||t===s)||"all"===n))return t},r([a.Input(),i("design:type",Array)],D3GraphComponent.prototype,"data",void 0),r([a.Input(),i("design:type",Number)],D3GraphComponent.prototype,"height",void 0),r([a.Input(),i("design:type",String)],D3GraphComponent.prototype,"labels",void 0),r([a.Input(),i("design:type",Number)],D3GraphComponent.prototype,"warningLevel",void 0),r([a.Input(),i("design:type",Number)],D3GraphComponent.prototype,"width",void 0),r([a.Input(),i("design:type",String)],D3GraphComponent.prototype,"type",void 0),r([a.Input(),i("design:type",String)],D3GraphComponent.prototype,"xKey",void 0),r([a.Input(),i("design:type",String)],D3GraphComponent.prototype,"yKey",void 0),r([a.Input(),i("design:type",String)],D3GraphComponent.prototype,"xType",void 0),D3GraphComponent=r([a.Component({encapsulation:a.ViewEncapsulation.None,moduleId:e.i.toString(),selector:"d3-graph",styles:[n(508)],template:""}),i("design:paramtypes",[a.ElementRef])],D3GraphComponent)}();t.D3GraphComponent=s}).call(t,n(215))},508:function(e,t){e.exports=".d3-default {\r\n    fill: #337ab7; /* Bootstrap success=#5cb85c, info=#5bc0de */\r\n}\r\n.d3-warning {\r\n    fill: #f0ad4e; /* Bootstrap warning=#f0ad4e, danger=#d9534f */\r\n}\r\n.d3-path {\r\n    stroke: #337ab7;\r\n    stroke-width: 2;\r\n}\r\n.d3-tooltip {\r\n    /* Only used by d3-graph directive */\r\n    background-color: #ffffff;\r\n    border-radius: 5px;\r\n    box-shadow: 4px 4px 10px rgba(0,0,0,0.5);\r\n    padding: 5px;\r\n}\r\n.d3-axis path, .d3-axis line {\r\n    fill: none;\r\n    stroke: #337ab7;\r\n}\r\n.d3-axis text {\r\n    font-family: sans-serif;\r\n    font-size: 10px;\r\n}"},509:function(e,t){e.exports=".dragContainer {\r\n    background-color: #f5f6f7;\r\n    border: 1px solid #8BC34A;\r\n    border-radius: 4px;\r\n    padding: 10px;\r\n}\r\n.dragContainer > div {\r\n    cursor: grab;\r\n    cursor: -moz-grab;\r\n    cursor: -webkit-grab;\r\n}\r\n.drag-error {\r\n    background-color: #d9534f;\r\n}\r\n.drag-success {\r\n    background-color: #5cb85c;\r\n}\r\n"},510:function(e,t){e.exports="<div>\r\n    <div class='wrapper row'>\r\n        <div id='list1' class='dragContainer col-md-5' [dragula]='\"dragContainer\"' [dragulaModel]='list1'>\r\n            <div *ngFor='let item of list1' [id]='item.id' [innerHtml]='item.text' class='well'></div>\r\n        </div>\r\n        <div id='list2' class='dragContainer col-md-5 col-md-offset-2' [dragula]='\"dragContainer\"' [dragulaModel]='list2'>\r\n            <div *ngFor='let item of list2' [id]='item.id' [innerHtml]='item.text' class='well'></div>\r\n        </div>\r\n    </div>\r\n    <br/>\r\n    {{list1.length}} + {{list2.length}} = {{list1.length + list2.length}}\r\n</div>"},511:function(e,t,n){"use strict";(function(e){var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(8),a=n(497),s=function(){function Dragula(e,t){this.el=e,this.dragulaService=t,this.container=e.nativeElement}return Dragula.prototype.ngOnInit=function(){var t=this,n=this.dragulaService.find(this.bag),o=function(){t.dragulaModel&&(t.drake.models?t.drake.models.push(t.dragulaModel):t.drake.models=[t.dragulaModel])};n?(this.drake=n.drake,o(),this.drake.containers.push(this.container)):(this.drake=e({containers:[this.container]}),o(),this.dragulaService.add(this.bag,this.drake))},Dragula.prototype.ngOnChanges=function(e){if(e&&e.dragulaModel&&this.drake)if(this.drake.models){var t=this.drake.models.indexOf(e.dragulaModel.previousValue);this.drake.models.splice(t,1,e.dragulaModel.currentValue)}else this.drake.models=[e.dragulaModel.currentValue]},o([i.Input("dragula"),r("design:type",String)],Dragula.prototype,"bag",void 0),o([i.Input(),r("design:type",Object)],Dragula.prototype,"dragulaModel",void 0),Dragula=o([i.Directive({selector:"[dragula]"}),r("design:paramtypes",[i.ElementRef,a.DragulaService])],Dragula)}();t.Dragula=s}).call(t,n(216))},512:function(e,t){e.exports=""},513:function(e,t){e.exports='<div>\r\n    <div class="row">\r\n        <div class="col-md-3 well">\r\n            <h4>Supported Variables</h4>\r\n            <div *ngFor="let item of data | sortObjects:\'name\'">\r\n                {{item.name}}\r\n            </div>\r\n        </div>\r\n        <div class="col-md-9">\r\n            <ckeditor\r\n                [(ngModel)]="content"\r\n                [config]="{\r\n                    extraPlugins: \'divarea\',\r\n                    height: 400,\r\n                    scayt_autoStartup: true,\r\n                    tabSpaces: 4,\r\n                    uiColor: \'#9AB8F3\'\r\n                }"\r\n                (change)="onChange($event)"\r\n                (ready)="onReady($event)"\r\n                debounce="500">\r\n            </ckeditor>\r\n            <br/>\r\n            <div id=\'mergedContent\' [innerHTML]="mergedContent"></div>\r\n        </div>\r\n    </div>\r\n</div>\r\n'},514:function(e,t){e.exports=".graph-inline {\r\n    display: inline-block;\r\n    padding: 13px;\r\n}\r\n\r\n"},515:function(e,t){e.exports='<div class="row">\r\n    <div class="col-sm-6">\r\n        <div class="form-group">\r\n            <label for="widthControl">Width</label>\r\n            <input class="form-control" type="number" required min="100" max="1024" [(ngModel)]="width" placeholder="width (#)" pattern="[0-9]+">\r\n        </div>\r\n        <div class="form-group">\r\n            <label for="heightControl">Height</label>\r\n            <input class="form-control" type="number" required min="100" max="768" [(ngModel)]="height" placeholder="height (#)" pattern="[0-9]+">\r\n        </div>\r\n    </div>\r\n    <div class="col-sm-6">\r\n        <div class="form-group">\r\n            <label for="labelControl">Label</label>\r\n            <select class="form-control" [ngModel]="label" (change)="onUpdateLabel($event)">\r\n                <option *ngFor="let l of labels" [value]="l">{{l}}</option>\r\n            </select>\r\n        </div>\r\n        <div class="form-group">\r\n            <label for="warningLevelControl">Warning Level</label>\r\n            <input class="form-control" type="number" required min="0" [(ngModel)]="warningLevel" placeholder="Warning Level (#)" pattern="[0-9]+">\r\n        </div>\r\n    </div>\r\n</div>\r\n<div>\r\n    <div class="graph-inline">\r\n        <h1>Bar Graph</h1>\r\n        <d3-graph type="bar" [data]="data" xKey="month" yKey="sales" [width]="width" [height]="height" [labels]=\'label\' [warningLevel]="warningLevel"></d3-graph>\r\n    </div>\r\n    <div class="graph-inline">\r\n        <h1>Line Chart</h1>\r\n        <d3-graph type="line" [data]="data" xType="date" xKey="month" yKey="sales" [width]="width" [height]="height" [labels]=\'label\' [warningLevel]="warningLevel"></d3-graph>\r\n    </div>\r\n    <div class="graph-inline">\r\n        <h1>Scatter Plot</h1>\r\n        <d3-graph type="scatter" [data]="data" xType="date" xKey="month" yKey="sales" [width]="width" [height]="height" [labels]=\'label\' [warningLevel]="warningLevel"></d3-graph>\r\n    </div>\r\n    <div class="graph-inline">\r\n        <h1>Pie Chart</h1>\r\n        <d3-graph type="pie" [data]="data" xType="date" xKey="month" yKey="sales" [width]="width" [labels]=\'label\' [warningLevel]="warningLevel"></d3-graph>\r\n    </div>\r\n</div>\r\n'},516:function(e,t,n){"use strict";var o=this&&this.__decorate||function(e,t,n,o){var r,i=arguments.length,a=i<3?t:null===o?o=Object.getOwnPropertyDescriptor(t,n):o;if("object"==typeof Reflect&&"function"==typeof Reflect.decorate)a=Reflect.decorate(e,t,n,o);else for(var s=e.length-1;s>=0;s--)(r=e[s])&&(a=(i<3?r(a):i>3?r(t,n,a):r(t,n))||a);return i>3&&a&&Object.defineProperty(t,n,a),a},r=this&&this.__metadata||function(e,t){if("object"==typeof Reflect&&"function"==typeof Reflect.metadata)return Reflect.metadata(e,t)};Object.defineProperty(t,"__esModule",{value:!0});var i=n(8),a=function(){function ModalDemoComponent(){this.id="",this.active=!1}return ModalDemoComponent.prototype.close=function(){this.active=!1},o([i.Input(),r("design:type",String)],ModalDemoComponent.prototype,"id",void 0),o([i.Input(),r("design:type",Boolean)],ModalDemoComponent.prototype,"active",void 0),ModalDemoComponent=o([i.Component({moduleId:e.i.toString(),selector:"modal-demo",template:n(517)})],ModalDemoComponent)}();t.ModalDemoComponent=a},517:function(e,t){e.exports='<div [id]="id" class="modal fade" role="dialog">\r\n    <div class="modal-dialog modal-lg" *ngIf="active">\r\n        <div class="modal-content">\r\n            <div class="modal-header">\r\n                <button type="button" class="close" data-dismiss="modal">&times;</button>\r\n                <h4 class="modal-title">Modal Title</h4>\r\n            </div>\r\n            <div class="modal-body">\r\n                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et sodales risus. Nullam ultrices, justo quis fringilla bibendum, turpis velit lobortis quam, eget interdum eros nisi vitae elit. Fusce lobortis sodales varius. Cras eget mauris nisi. Ut in magna id tortor imperdiet lobortis.  Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam et sodales risus. Nullam ultrices, justo quis fringilla bibendum, turpis velit lobortis quam, eget interdum eros nisi vitae elit. Fusce lobortis sodales varius. Cras eget mauris nisi. Ut in magna id tortor imperdiet lobortis.<br/>\r\n            </div>\r\n            <div class="modal-footer">\r\n                <input type="button" class="btn btn-default" value="Close" data-dismiss="modal">\r\n            </div>\r\n        </div>\r\n    </div>\r\n</div>\r\n'},518:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(51),r=n(494),i=n(496),a=n(498),s=n(499);t.routing=o.RouterModule.forChild([{path:"blockchain",component:r.BlockchainDemoComponent},{path:"drag",component:i.DragDemoComponent},{path:"editor",component:a.EditorDemoComponent},{path:"graph",component:s.GraphDemoComponent},{path:"floor",loadChildren:function(){return new Promise(function(e){n.e(5).then(function(t){e(n(519).FloorModule)}.bind(null,n)).catch(n.oe)})}}])},523:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(524);t.CKEditorModule=o.CKEditorModule;var r=n(501);t.CKEditorComponent=r.CKEditorComponent;var i=n(490);t.CKButtonDirective=i.CKButtonDirective;var a=n(492);t.CKGroupDirective=a.CKGroupDirective},524:function(e,t,n){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var o=n(8),r=n(42),i=n(501),a=n(490),s=n(492),l=function(){function CKEditorModule(){}return CKEditorModule}();l.decorators=[{type:o.NgModule,args:[{imports:[r.CommonModule],declarations:[i.CKEditorComponent,a.CKButtonDirective,s.CKGroupDirective],exports:[i.CKEditorComponent,a.CKButtonDirective,s.CKGroupDirective]}]}],l.ctorParameters=function(){return[]},t.CKEditorModule=l}});