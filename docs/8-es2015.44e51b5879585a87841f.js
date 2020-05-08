(window.webpackJsonp=window.webpackJsonp||[]).push([[8],{o3Rf:function(t,i,e){var n,a;!function(s){t.exports?(s.default=s,t.exports=s):(n=[e("6n/F")],void 0===(a=(function(t){return s(t),s.Highcharts=t,s}).apply(i,n))||(t.exports=a))}((function(t){function i(t,i,e,n){t.hasOwnProperty(i)||(t[i]=n.apply(null,e))}i(t=t?t._modules:{},"modules/timeline.src.js",[t["parts/Globals.js"],t["parts/Utilities.js"]],(function(t,i){var e=i.arrayMax,n=i.arrayMin,a=i.defined,s=i.isNumber,o=i.objectEach,r=i.pick,l=t.addEvent,h=t.merge,p=t.Point,c=t.Series,d=t.seriesTypes;(i=t.seriesType)("timeline","line",{colorByPoint:!0,stickyTracking:!1,ignoreHiddenPoint:!0,legendType:"point",lineWidth:4,tooltip:{headerFormat:'<span style="color:{point.color}">\u25cf</span> <span style="font-size: 10px"> {point.key}</span><br/>',pointFormat:"{point.description}"},states:{hover:{lineWidthPlus:0}},dataLabels:{enabled:!0,allowOverlap:!0,connectorWidth:1,backgroundColor:"#ffffff",formatter:function(){return(this.series.chart.styledMode?"<span>\u25cf </span>":'<span style="color:'+this.point.color+'">\u25cf </span>')+'<span class="highcharts-strong">'+(this.key||"")+"</span><br/>"+(this.point.label||"")},borderWidth:1,borderColor:"#999999",borderRadius:3,distance:100,alternate:!0,verticalAlign:"middle",color:"#333333",style:{textOutline:"none",fontWeight:"normal",fontSize:"12px"},shadow:!1},marker:{enabledThreshold:0,symbol:"square",radius:6,lineWidth:2,height:15},showInLegend:!1,colorKey:"x"},{trackerGroups:["markerGroup","dataLabelsGroup"],drawLegendSymbol:t.LegendSymbolMixin.drawRectangle,drawTracker:t.TrackerMixin.drawTrackerPoint,init:function(){var i=this;c.prototype.init.apply(i,arguments),l(i,"afterTranslate",(function(){var t,e=Number.MAX_VALUE;i.points.forEach((function(i){i.isInside=i.isInside&&i.visible,i.visible&&!i.isNull&&(a(t)&&(e=Math.min(e,Math.abs(i.plotX-t))),t=i.plotX)})),i.closestPointRangePx=e})),l(i,"drawDataLabels",(function(){i.distributeDL()})),l(i,"afterDrawDataLabels",(function(){var e;i.points.forEach((function(i){if(e=i.dataLabel)return e.animate=function(i){return this.targetPosition&&(this.targetPosition=i),t.SVGElement.prototype.animate.apply(this,arguments)},e.targetPosition||(e.targetPosition={}),i.drawConnector()}))})),l(i.chart,"afterHideOverlappingLabels",(function(){i.points.forEach((function(t){t.connector&&t.dataLabel&&t.dataLabel.oldOpacity!==t.dataLabel.newOpacity&&t.alignConnector()}))}))},alignDataLabel:function(t,i,e,n){var a=this.chart.inverted,s=this.visibilityMap.filter((function(t){return t})),o=this.visiblePointsCount,r=s.indexOf(t),l=t.userDLOptions||{};r=(s=this.options.dataLabels).alternate?r&&r!==o-1?2:1.5:1,o=Math.floor(this.xAxis.len/o);var h=i.padding;if(t.visible){var p=Math.abs(l.x||t.options.dataLabels.x);a=a?{width:a=2*(p-h)-t.itemHeight/2,textOverflow:i.width/a*i.height/2>o*r?"ellipsis":"none"}:{width:l.width||s.width||o*r-2*h},i.css(a),this.chart.styledMode||i.shadow(s.shadow)}c.prototype.alignDataLabel.apply(this,arguments)},processData:function(){var t,i=0;for(this.visibilityMap=this.getVisibilityMap(),this.visibilityMap.forEach((function(t){t&&i++})),this.visiblePointsCount=i,t=0;t<this.xData.length;t++)this.yData[t]=1;c.prototype.processData.call(this,arguments)},getXExtremes:function(t){var i=this;return t=t.filter((function(t,e){return i.points[e].isValid()&&i.points[e].visible})),{min:n(t),max:e(t)}},generatePoints:function(){var t=this;c.prototype.generatePoints.apply(t),t.points.forEach((function(i,e){i.applyOptions({x:t.xData[e]},t.xData[e])}))},getVisibilityMap:function(){return(this.data.length?this.data:this.userOptions.data).map((function(t){return!(!t||!1===t.visible||t.isNull)&&t}))},distributeDL:function(){var t,i,e=this,n=e.options.dataLabels,a={},s=1,o=n.distance;e.points.forEach((function(r){r.visible&&!r.isNull&&(t=r.options,i=r.options.dataLabels,e.hasRendered||(r.userDLOptions=h({},i)),a[e.chart.inverted?"x":"y"]=n.alternate&&s%2?-o:o,t.dataLabels=h(a,r.userDLOptions),s++)}))},markerAttribs:function(t,i){var e=this.options.marker,n=t.marker||{},a=n.symbol||e.symbol,s=r(n.width,e.width,this.closestPointRangePx),o=r(n.height,e.height),l=0;return this.xAxis.isDatetimeAxis?d.line.prototype.markerAttribs.call(this,t,i):(i&&(e=e.states[i]||{},l=r((i=n.states&&n.states[i]||{}).radius,e.radius,l+(e.radiusPlus||0))),t.hasImage=a&&0===a.indexOf("url"),{x:Math.floor(t.plotX)-s/2-l/2,y:t.plotY-o/2-l/2,width:s+l,height:o+l})},bindAxes:function(){var t=this;c.prototype.bindAxes.call(t),["xAxis","yAxis"].forEach((function(i){"xAxis"!==i||t[i].userOptions.type||(t[i].categories=t[i].hasNames=!0)}))}},{init:function(){var t=p.prototype.init.apply(this,arguments);return t.name=r(t.name,"Event"),t.y=1,t},isValid:function(){return null!==this.options.y},setVisible:function(t,i){var e=this.series;i=r(i,e.options.ignoreHiddenPoint),d.pie.prototype.pointClass.prototype.setVisible.call(this,t,!1),e.processData(),i&&e.chart.redraw()},setState:function(){var t=c.prototype.pointClass.prototype.setState;this.isNull||t.apply(this,arguments)},getConnectorPath:function(){var t=this.series.chart,i=this.series.xAxis.len,e=t.inverted,n=e?"x2":"y2",a=this.dataLabel,r=a.targetPosition,l={x1:this.plotX,y1:this.plotY,x2:this.plotX,y2:s(r.y)?r.y:a.y};return e&&(l={x1:this.plotY,y1:i-this.plotX,x2:r.x||a.x,y2:i-this.plotX}),(a.alignAttr||a)[n[0]]<this.series.yAxis.len/2&&(l[n]+=a[e?"width":"height"]),o(l,(function(t,i){l[i]-=(a.alignAttr||a)[i[0]]})),t.renderer.crispLine(["M",l.x1,l.y1,"L",l.x2,l.y2],a.options.connectorWidth)},drawConnector:function(){this.connector||(this.connector=this.series.chart.renderer.path(this.getConnectorPath()).attr({zIndex:-1}).add(this.dataLabel)),this.series.chart.isInsidePlot(this.dataLabel.x,this.dataLabel.y)&&this.alignConnector()},alignConnector:function(){var t=this.series,i=this.connector,e=this.dataLabel,n=this.dataLabel.options=h(t.options.dataLabels,this.options.dataLabels),s=this.series.chart,o=i.getBBox(),r=o.x+e.translateX;o=o.y+e.translateY,s.inverted?o-=e.options.connectorWidth/2:r+=e.options.connectorWidth/2,i[(s=s.isInsidePlot(r,o))?"animate":"attr"]({d:this.getConnectorPath()}),t.chart.styledMode||i.attr({stroke:n.connectorColor||this.color,"stroke-width":n.connectorWidth,opacity:e[a(e.newOpacity)?"newOpacity":"opacity"]})}})})),i(t,"masters/modules/timeline.src.js",[],(function(){}))}))}}]);