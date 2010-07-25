Ext.tree.HorizontalTreeLoader = Ext.extend(Ext.tree.TreeLoader, {
	createNode : function(attr) {
		if (!attr.uiProvider) {
			attr.uiProvider = Ext.tree.SelectNodeUI;
		}
		attr.singleClickExpand = true;
        return Ext.tree.TreeLoader.prototype.createNode.call(this, attr);
    }
});


//Ext.reg('Ext.tree.HorizontalTreeLoader', Ext.ux.TreeLoader);


Ext.onReady(function(){

	//var tree = new Ext.tree.TreePanel({
	var tree = new Tx.TreePanel({
		renderTo: Ext.getBody(),
		singleExpand: 1,
		//useArrows: true,
		//autoScroll: true,
		//unstyled: true,
		animate: true,
		enableDD: false,
		containerScroll: true,
		border: false,
//		loader: new Ext.tree.TreeLoader({
//			//loader: new Ext.ux.TreeLoader({
//			uiProviders: {
//				select: Ext.tree.SelectNodeUI
//			}
//		}),
		loader: new Ext.tree.HorizontalTreeLoader(),
		rootVisible: false,
		//root: new Ext.tree.AsyncTreeNode({
		root: new Tx.AsyncTreeNode({
			expanded:true,
			leaf:false,
			text:'Tree Root',
			uiProvider: Tx.RootTreeNodeUI,
			children:children
		})
	});

	tree.getRootNode().expand();
});3