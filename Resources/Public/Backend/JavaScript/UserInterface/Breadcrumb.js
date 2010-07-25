Ext.ns('F3.TYPO3.UserInterface');

F3.TYPO3.UserInterface.Breadcrumb = function() {
    F3.TYPO3.UserInterface.Breadcrumb.superclass.constructor.apply(this, arguments);
};

Ext.extend(F3.TYPO3.UserInterface.Breadcrumb, Ext.tree.TreePanel, {

	initComponent: function() {
		var config = {
		};
		Ext.apply(this, config);

		if(!this.eventModel){
            this.eventModel = new F3.TYPO3.UserInterface.Breadcrumb.EventModel(this);
        }

		F3.TYPO3.UserInterface.Breadcrumb.superclass.initComponent.call(this);
	},
    onRender : function(ct, position){
        Ext.tree.TreePanel.superclass.onRender.call(this, ct, position);
        this.el.addClass('f3-breadcrumb');
		this.el.addClass('f3-breadcrumb');
        this.innerCt = this.body.createChild({tag:'div',
               cls:'f3-breadcrumb-root-ct ' +
               (this.useArrows ? 'f3-breadcrumb-arrows' : this.lines ? 'f3-breadcrumb-lines' : 'f3-breadcrumb-no-lines')});
    }
});

Ext.reg('F3.TYPO3.UserInterface.Breadcrumb', F3.TYPO3.UserInterface.Breadcrumb);