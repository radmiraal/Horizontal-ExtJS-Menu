Ext.ns('F3.TYPO3.UserInterface.Breadcrumb');

F3.TYPO3.UserInterface.Breadcrumb.AsyncNode = Ext.extend(Ext.tree.AsyncTreeNode, {
	initComponent: function() {

		var config = {
		};
		Ext.apply(this, config);

		F3.TYPO3.UserInterface.Breadcrumb.AsyncNode.superclass.initComponent.call(this);
	}

});

Ext.reg('F3.TYPO3.UserInterface.Breadcrumb.AsyncNode', F3.TYPO3.UserInterface.Breadcrumb.AsyncNode);