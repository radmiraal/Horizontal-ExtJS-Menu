Ext.ns('F3.TYPO3.UserInterface.Breadcrumb');

F3.TYPO3.UserInterface.Breadcrumb.NodeUI = function() {
    F3.TYPO3.UserInterface.Breadcrumb.NodeUI.superclass.constructor.apply(this, arguments);
};

Ext.extend(F3.TYPO3.UserInterface.Breadcrumb.NodeUI, Ext.tree.TreeNodeUI, {

	renderElements: function(n, a, targetNode, bulkRender) {
		var href = a.href ? a.href : Ext.isGecko ? "" : "#";

		var buf = [
			'<span class="x-rootline-node">',
				'<span ext:tree-node-id="', n.id,
				'" class="f3-breadcrumb-node-el f3-breadcrumb-node-leaf x-unselectable ', a.cls,
				'" unselectable="on">',
					// Icon
					'<img src="', a.icon || this.emptyIcon, '" class="f3-breadcrumb-node-icon',
					(a.icon ? " f3-breadcrumb-node-inline-icon" : ""), (a.iconCls ? " "+a.iconCls : ""),
					'" unselectable="on" />',
					// Link / label
					'<a hidefocus="on" class="f3-breadcrumb-node-anchor" href="', href, '" tabIndex="1" ',
					a.hrefTarget ? ' target="' + a.hrefTarget+'"' : "", '><span class="f3-breadcrumb-node-el-label" unselectable="on">',
					n.text,"</span></a>",
					// 'spacer'
					'<img src="', this.emptyIcon, '" class="f3-breadcrumb-ec-icon f3-breadcrumb-elbow" />',

				"</span>",
				'<span class="f3-breadcrumb-node-ct" style="display:none;"></span>',
			"</span>"
		].join('');

		var nel;

		if (bulkRender !== true && n.nextSibling && (nel = n.nextSibling.ui.getEl())) {
			this.wrap = Ext.DomHelper.insertHtml("beforeBegin", nel, buf);
		} else {
			this.wrap = Ext.DomHelper.insertHtml("beforeEnd", targetNode, buf);
		}

		this.elNode		= this.wrap.childNodes[0];
		this.ctNode		= this.wrap.childNodes[1];
		var cs			= this.elNode.childNodes;
		this.ecNode		= cs[2];
		this.iconNode	= cs[0];
		var index		= 3;

		this.anchor		= cs[index];
		this.textNode	= cs[1];
	},

	    // private
    onClick : function(e){
        if(this.dropping){
            e.stopEvent();
            return;
        }
        if(this.fireEvent("beforeclick", this.node, e) !== false){
            var a = e.getTarget('a');
            if(!this.disabled && this.node.attributes.href && a){
                this.fireEvent("click", this.node, e);
                return;
            }else if(a && e.ctrlKey){
                e.stopEvent();
            }
            e.preventDefault();
            if(this.disabled){
                return;
            }

            if(this.node.attributes.singleClickExpand && !this.animating && this.node.isExpandable()){
                this.node.toggle();
            }

            this.fireEvent("click", this.node, e);
        }else{
            e.stopEvent();
        }
    },


	onSelectedChange: function(state) {
	
		if (state) {
			this.addClass("f3-breadcrumb-selected");
		} else {
			this.removeClass("f3-breadcrumb-selected");
		}
	},
	
	
	// private
    animExpand : function(callback){
        var ct = Ext.get(this.ctNode);
        ct.stopFx();
		
        if(!this.node.isExpandable()){
            this.updateExpandIcon();
            this.ctNode.style.display = "";
            Ext.callback(callback);
            return;
        }
        this.animating = true;
        this.updateExpandIcon();
		
		ct.setStyle({
			overflow: 'hidden',
			width: 20,
			height: 30,
			display: 'inline-block'
		});

		ct.shift({
			callback : function() {
				this.animating = false;
				Ext.callback(callback);
			},
			scope: this,
			width: 100,
			height: ct.getHeight(),
			duration: this.node.ownerTree.duration || .25
		});
    },

	// private
    animCollapse : function(callback){
        var ct = Ext.get(this.ctNode);
        ct.stopFx();

        this.animating = true;
        this.updateExpandIcon();

		ct.shift({
			callback : function() {
				this.animating = false;
				Ext.callback(callback);
			},
			scope: this,
			width: 0,
			duration: this.node.ownerTree.duration || .25
		});
    },

	    // private
    renderIndent : function(){
        if(this.rendered){
            this.updateExpandIcon();
        }
    }
});

Ext.reg('F3.TYPO3.UserInterface.Breadcrumb', F3.TYPO3.UserInterface.Breadcrumb);