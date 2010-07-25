Ext.tree.SelectRootNodeUI = function() {
    Ext.tree.SelectRootNodeUI.superclass.constructor.apply(this, arguments);
};

Ext.extend(Ext.tree.SelectRootNodeUI, Ext.tree.AsyncTreeNodeUI, {

	renderElements: function(n, a, targetNode, bulkRender) {
		var href = a.href ? a.href : Ext.isGecko ? "" : "#";

		var buf = [
			'<div class="x-rootline-node"><div ext:tree-node-id="', n.id,
			'" class="x-tree-node-el x-tree-node-leaf x-unselectable ', a.cls,
			'" unselectable="on">',	'<span class="x-tree-node-indent"></span>',

			// Icon
			'<img src="', a.icon || this.emptyIcon, '" class="x-tree-node-icon',
			(a.icon ? " x-tree-node-inline-icon" : ""), (a.iconCls ? " "+a.iconCls : ""),
			'" unselectable="on" />',

			// Link / label
			'<a hidefocus="on" class="x-tree-node-anchor" href="', href, '" tabIndex="1" ',
			a.hrefTarget ? ' target="' + a.hrefTarget+'"' : "", '><span unselectable="on">',
			n.text,"</span></a>",

			// 'spacer'
			'<img src="', this.emptyIcon, '" class="x-tree-ec-icon x-tree-elbow" />',

			"</div>",
			'<div class="x-tree-node-ct" style="display:none;"></div>',
			"</div>"
		].join('');

		var nel;

		if (bulkRender !== true && n.nextSibling && (nel = n.nextSibling.ui.getEl())) {
			this.wrap = Ext.DomHelper.insertHtml("beforeBegin", nel, buf);
		} else {
			this.wrap = Ext.DomHelper.insertHtml("beforeEnd", targetNode, buf);
		}

		this.elNode		= this.wrap.childNodes[0];
		this.ctNode		= this.wrap.childNodes[1];
		var cs			= this.elNode.childNodes;
		this.indentNode	= cs[0];
		this.ecNode		= cs[1];
		this.iconNode	= cs[2];
		var index		= 3;

		this.anchor		= cs[index];
		this.textNode	= cs[index].firstChild;
	},

	onSelectedChange: function(state) {

		if (state) {
			this.addClass("x-tree-selected");
		} else {
			this.removeClass("x-tree-selected");
		}
	}
});