Ext.ns('Tx');


Tx.AsyncTreeNode = Ext.extend(Ext.tree.AsyncTreeNode, {
	initComponent: function() {

		var config = {
		};
		Ext.apply(this, config);

		Tx.AsyncTreeNode.superclass.initComponent.call(this);
	}

});

Ext.reg('Tx.AsyncTreeNode', Tx.AsyncTreeNode);