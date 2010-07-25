Ext.ns('F3.TYPO3.UserInterface.RootlineMenu');

F3.TYPO3.UserInterface.RootlineMenu.Loader = Ext.extend(Ext.tree.TreeLoader, {
	createNode : function(attr) {
		if (!attr.uiProvider) {
			attr.uiProvider = F3.TYPO3.UserInterface.RootlineMenu.NodeUI;
		}
		attr.singleClickExpand = true;
        return Ext.tree.TreeLoader.prototype.createNode.call(this, attr);
    }
});

Ext.reg('F3.TYPO3.UserInterface.RootlineMenu.Loader', F3.TYPO3.UserInterface.RootlineMenu.Loader);