Ext.ns('Ext.ux');

Ext.ux.CSS = function(config) {
	Ext.ux.CSS.superclass.constructor.call(this, config);
}

Ext.extend(Ext.ux.CSS, Ext.util.CSS, {
	swapStyleSheet: function(id, url){
		this.removeStyleSheet(id);
		this.addStyleSheet(id, url);
	},
	addStyleSheet: function(id, url) {
		var ss = doc.createElement("link");
		ss.setAttribute("rel", "stylesheet");
		ss.setAttribute("type", "text/css");
		ss.setAttribute("id", id);
		ss.setAttribute("href", url);
		doc.getElementsByTagName("head")[0].appendChild(ss);
	}
});

Ext.reg('Ext.ux.CSS', Ext.ux.CSS);