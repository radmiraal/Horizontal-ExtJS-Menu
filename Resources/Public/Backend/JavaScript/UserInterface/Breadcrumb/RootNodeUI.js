Ext.ns('F3.TYPO3.UserInterface.Breadcrumb');


F3.TYPO3.UserInterface.Breadcrumb.RootNodeUI = Ext.extend(Ext.tree.RootTreeNodeUI, {
    // private
    render : function(){
        if(!this.rendered){
            var targetNode = this.node.ownerTree.innerCt.dom;
            this.node.expanded = true;
            targetNode.innerHTML = '<div class="f3-breadcrumb-root-node"></div>';
            this.wrap = this.ctNode = targetNode.firstChild;
        }
    },
    collapse : Ext.emptyFn,
    expand : Ext.emptyFn
});

Ext.reg('F3.TYPO3.UserInterface.Breadcrumb.RootNodeUI', F3.TYPO3.UserInterface.Breadcrumb.RootNodeUI);