Ext.ns('F3.TYPO3.UserInterface.Breadcrumb');

F3.TYPO3.UserInterface.Breadcrumb.NodeUI = function() {
    F3.TYPO3.UserInterface.Breadcrumb.NodeUI.superclass.constructor.apply(this, arguments);
};

Ext.extend(F3.TYPO3.UserInterface.Breadcrumb.NodeUI, Ext.tree.TreeNodeUI, {

	_nodeHeight: 0,

	renderElements: function(n, a, targetNode, bulkRender) {
		this._nodeHeight = Ext.get(Ext.query('.f3-breadcrumb')[0]).getHeight();
		
		var href = a.href ? a.href : Ext.isGecko ? "" : "#";

		var buf = [
			'<span class="f3-breadcrumb-node">',
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
		this.textNode	= cs[1];
		this.iconNode	= cs[0];
		var index		= 3;

		this.anchor		= cs[index];
		this.textNode	= cs[1];
	},

	onOver : function(e){
//		if (this.animating == true) {
//			return;
//		}
//		this.animating = true;
//
//		var tn = Ext.get(this.textNode);
//
//		var res = Ext.query('.f3-breadcrumb-node-el-label', this.textNode);
//		var childTextNode = Ext.get(res[0]);
//
//		var textNodes = Ext.query('.f3-breadcrumb-node-anchor');
//		Ext.each(textNodes, function (node, i) {
//			var n = Ext.get(node);
//			if (n == tn) {
//				return;
//			}
//			n.animating = false;
//			n.shift({
//				width:0,
//				duration:.1,
//				callback: function() {
//					n.setStyle({display:'none'});
//				}
//			});
//		});
//
//		tn.setStyle({
//			height: 45,
//			display: 'inline-block',
//			width: 1
//		});
//
//		tn.shift({
//			callback : function() {
//				this.animating = false;
//			},
//			easing: 'easeOut',
//			height: 45,
//			scope: this,
//			width: childTextNode.getTextWidth(),
//			duration: this.node.ownerTree.duration || .25
//		});
    },

    onOut : function(e){
//		if (this.animating == true) {
//			return;
//		}
//        this.animating = true;
//
//		var tn = Ext.get(this.textNode);
//
//		tn.shift({
//			callback : function() {
//				this.animating = false;
//				tn.setStyle({display: 'none'});
//			},
//			easing: 'easeOut',
//			height: 45,
//			scope: this,
//			width: 1,
//			duration: this.node.ownerTree.duration || .25
//		});
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

		var hiddenStyle = {
			height: this._nodeHeight,
			display: 'inline-block',
			width: 0
		};

		ct.setStyle(hiddenStyle);
		ct.child('.f3-breadcrumb-node-ct').setStyle(hiddenStyle);

		var newIconStyle = {
			opacity: 1,
			easing: 'easeOut',
			height: 45,
			width: 45,
			duration: this.node.ownerTree.duration || .25
		};
//		newIconStyle.callback = function() {
//			this.animating = false;
//			Ext.callback(callback);
//		};
//		newIconStyle.scope = this;

		ct.select('.f3-breadcrumb-node-icon').shift(newIconStyle);
		ct.select('*').setStyle({height:45,opacity:1});

		var newContainerStyle = newIconStyle;
		newContainerStyle.width = this.node.childNodes.length * this._nodeHeight;
		newContainerStyle.callback = function() {
			this.animating = false;
			Ext.callback(callback);
		};
		newContainerStyle.scope = this;

		ct.shift(newContainerStyle);
		

//		this.siblings({'display':'none'});
    },

	siblings: function(newStyle) {
//		var ct = Ext.get(this.ctNode);
//		var parent = ct.parent();
//
//		var siblings = [];
//
//		var counter = 0;
//		var read = true;
//		do {
//			var sibling = parent.next();
//			console.log(sibling);
//			if (sibling == null) {
//				read = false;
//			} else if (sibling !== ct) {
//				siblings.push(sibling);
//				if (newStyle) {
//					console.log('set new style');
//					sibling.setStyle(newStyle);
//				}
//			}
//			counter ++;
//		} while (read == true || counter < 1000);
//
//		return siblings;
	},

	// private
    animCollapse : function(callback){
        var ct = Ext.get(this.ctNode);
        ct.stopFx();

        this.animating = true;
        this.updateExpandIcon();

		var newStyle = {
			width: 0,
			opacity: 0,
			easing: 'easeOut',
			height: 45,
			duration: this.node.ownerTree.duration || .25
		};
		
		ct.select('*').shift(newStyle);
		newStyle.callback = function() {
			this.animating = false;
			Ext.callback(callback);
			ct.setStyle({'display': 'none'});
		};
		newStyle.scope = this;
		ct.shift(newStyle);
    },

	    // private
    renderIndent : function(){
        if(this.rendered){
            this.updateExpandIcon();
        }
    }
});

Ext.reg('F3.TYPO3.UserInterface.Breadcrumb', F3.TYPO3.UserInterface.Breadcrumb);