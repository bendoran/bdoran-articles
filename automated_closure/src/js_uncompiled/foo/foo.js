goog.provide('automatedclosure.foo.Foo');
goog.require('goog.dom');

/**
 * @constructor
 */
automatedclosure.foo.Foo = function( parent ){
	this.parent = parent;
}		

automatedclosure.foo.Foo.prototype.showContent = function(){
	var element = goog.dom.createDom( 'div', {'style':'background:#FF00FF'}, "This was created in the Foo class" );
	goog.dom.appendChild( this.parent, element );
}