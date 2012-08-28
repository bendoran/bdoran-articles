goog.provide('automatedclosure.init');
goog.require('automatedclosure.foo.Foo');
goog.require('automatedclosure.bar.Bar');

goog.require('goog.dom');

automatedclosure.init = function( appTitle, parent ){
	var element = goog.dom.createDom( 'div', {'style':'background:#FF0000'}, "Application " + appTitle + " Starting" );
	goog.dom.appendChild( parent, element );
	
	var fooElement = new automatedclosure.foo.Foo( parent );
	fooElement.showContent();
	
	var barElement = new automatedclosure.bar.Bar( parent );
	barElement.showContent();
};

goog.exportSymbol('automatedclosure.init', automatedclosure.init);

