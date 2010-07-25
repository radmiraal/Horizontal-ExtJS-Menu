Ext.ns('F3.TYPO3.UserInterface');

F3.TYPO3.UserInterface.RootlineMenu = function() {
    F3.TYPO3.UserInterface.RootlineMenu.superclass.constructor.apply(this, arguments);
};

Ext.extend(F3.TYPO3.UserInterface.RootlineMenu, Ext.tree.TreePanel, {

	initComponent: function() {
		var config = {
		};
		Ext.apply(this, config);

		if(!this.eventModel){
            this.eventModel = new F3.TYPO3.UserInterface.RootlineMenu.EventModel(this);
        }

		F3.TYPO3.UserInterface.RootlineMenu.superclass.initComponent.call(this);
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

Ext.reg('F3.TYPO3.UserInterface.RootlineMenu', F3.TYPO3.UserInterface.RootlineMenu);