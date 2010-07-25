Ext.ns('F3.TYPO3.UserInterface.RootlineMenu');


F3.TYPO3.UserInterface.RootlineMenu.RootNodeUI = Ext.extend(Ext.tree.RootTreeNodeUI, {
    // private
    render : function(){
        if(!this.rendered){
            var targetNode = this.node.ownerTree.innerCt.dom;
            this.node.expanded = true;
            targetNode.innerHTML = '<div class="f3-rootline-root-node"></div>';
            this.wrap = this.ctNode = targetNode.firstChild;
        }
    },
    collapse : Ext.emptyFn,
    expand : Ext.emptyFn
});

Ext.reg('F3.TYPO3.UserInterface.RootlineMenu.RootNodeUI', F3.TYPO3.UserInterface.RootlineMenu.RootNodeUI);