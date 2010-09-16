var useExtTree = false;
//useExtTree = true;

Ext.onReady(function() {

	var rootNodeConfig = {
		expanded		: true,
		leaf			: false,
		text			: 'Tree Root',
		children		: children
	};

	var treeConfig = {
		renderTo		: Ext.get('menu'),
		singleExpand	: 1,
		animate			: true,
		enableDD		: false,
		containerScroll	: true,
		border			: false,
		rootVisible		: false
	};

	if (useExtTree == false) {
		rootNodeConfig.uiProvider = F3.TYPO3.UserInterface.Breadcrumb.RootNodeUI;
		treeConfig.loader = new F3.TYPO3.UserInterface.Breadcrumb.Loader();
		treeConfig.root = new F3.TYPO3.UserInterface.Breadcrumb.AsyncNode(rootNodeConfig);
		var tree = new F3.TYPO3.UserInterface.Breadcrumb(treeConfig);
	} else {
//		Ext.util.CSS.addStyleSheet('extjs_style.css', 'extjs_style');
		Ext.util.CSS.swapStyleSheet('extjs_style.css', 'extjs_style');
		treeConfig.root = new Ext.tree.AsyncTreeNode(rootNodeConfig);
		treeConfig.singleExpand = 0;
		var tree = new Ext.tree.TreePanel(treeConfig);
	}

	tree.getRootNode().expand();

	Ext.get('debug');
});