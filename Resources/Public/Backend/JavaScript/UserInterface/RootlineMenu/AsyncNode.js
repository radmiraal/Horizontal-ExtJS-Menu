Ext.ns('F3.TYPO3.UserInterface.RootlineMenu');

F3.TYPO3.UserInterface.RootlineMenu.AsyncNode = Ext.extend(Ext.tree.AsyncTreeNode, {
	initComponent: function() {

		var config = {
		};
		Ext.apply(this, config);

		F3.TYPO3.UserInterface.RootlineMenu.AsyncNode.superclass.initComponent.call(this);
	}

});

Ext.reg('F3.TYPO3.UserInterface.RootlineMenu.AsyncNode', F3.TYPO3.UserInterface.RootlineMenu.AsyncNode);