Ext.ns('F3.TYPO3.UserInterface.Breadcrumb');

F3.TYPO3.UserInterface.Breadcrumb.Loader = Ext.extend(Ext.tree.TreeLoader, {
	createNode : function(attr) {
		if (!attr.uiProvider) {
			attr.uiProvider = F3.TYPO3.UserInterface.Breadcrumb.NodeUI;
		}
		attr.singleClickExpand = true;
        return Ext.tree.TreeLoader.prototype.createNode.call(this, attr);
    }
});

Ext.reg('F3.TYPO3.UserInterface.Breadcrumb.Loader', F3.TYPO3.UserInterface.Breadcrumb.Loader);