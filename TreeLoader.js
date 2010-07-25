Ext.ns("Tx");

Tx.TreeLoader = Ext.extend(Ext.tree.TreeLoader, {

	initComponent: function() {

		var config = {
		};
		Ext.apply(this, config);

		Tx.TreeLoader.superclass.initComponent.call(this);
	},

	createNode : function(attr){
        // apply baseAttrs, nice idea Corey!
        if(this.baseAttrs){
            Ext.applyIf(attr, this.baseAttrs);
        }
        if(this.applyLoader !== false && !attr.loader){
            attr.loader = this;
        }

//        if(Ext.isString(attr.uiProvider)){
//           attr.uiProvider = this.uiProviders[attr.uiProvider] || eval(attr.uiProvider);
//        }

		attr.uiProvider = 'Ext.tree.SelectNodeUI';

        if(attr.nodeType){
            return new Ext.tree.TreePanel.nodeTypes[attr.nodeType](attr);
        }else{
            return attr.leaf ?
                        new Ext.tree.TreeNode(attr) :
                        new Ext.tree.AsyncTreeNode(attr);
        }
    }
});


Ext.reg('Tx.TreeLoader', Tx.TreeLoader);