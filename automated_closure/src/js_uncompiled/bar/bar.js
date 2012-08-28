goog.provide('automatedclosure.bar.Bar');
goog.require('goog.dom');

/**
 * @constructor
 */
automatedclosure.bar.Bar = function( parent ){
	this.parent = parent;
}		

automatedclosure.bar.Bar.prototype.showContent = function(){
	var element = goog.dom.createDom( 'div', {'style':'background:#FFFF00'}, "This was created in the Bar class" );
	goog.dom.appendChild( this.parent, element );
}