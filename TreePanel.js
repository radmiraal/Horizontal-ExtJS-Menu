Ext.ns("Tx");

Tx.TreePanel = function() {
    Tx.TreePanel.superclass.constructor.apply(this, arguments);
};

Ext.extend(Tx.TreePanel, Ext.tree.TreePanel, {

	initComponent: function() {
		var config = {
		};
		Ext.apply(this, config);

		if(!this.eventModel){
            this.eventModel = new Tx.TreeEventModel(this);
        }

		Tx.TreePanel.superclass.initComponent.call(this);
	},
    onRender : function(ct, position){
        Ext.tree.TreePanel.superclass.onRender.call(this, ct, position);
        this.el.addClass('f3-rootline');
		this.el.addClass('f3-rootline');
        this.innerCt = this.body.createChild({tag:'div',
               cls:'f3-rootline-root-ct ' +
               (this.useArrows ? 'f3-rootline-arrows' : this.lines ? 'f3-rootline-lines' : 'f3-rootline-no-lines')});
    }
});


Ext.reg('Tx.TreePanel', Tx.TreePanel);


