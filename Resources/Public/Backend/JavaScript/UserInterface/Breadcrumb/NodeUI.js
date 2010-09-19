/*                                                                        *
 * This script belongs to the TYPO3 project.                              *
 *                                                                        *
 * It is free software; you can redistribute it and/or modify it under    *
 * the terms of the GNU Lesser General Public License as published by the *
 * Free Software Foundation, either version 3 of the License, or (at your *
 * option) any later version.                                             *
 *                                                                        *
 * This script is distributed in the hope that it will be useful, but     *
 * WITHOUT ANY WARRANTY; without even the implied warranty of MERCHAN-    *
 * TABILITY or FITNESS FOR A PARTICULAR PURPOSE. See the GNU Lesser       *
 * General Public License for more details.                               *
 *                                                                        *
 * You should have received a copy of the GNU Lesser General Public       *
 * License along with the script.                                         *
 * If not, see http://www.gnu.org/licenses/lgpl.html                      *
 *                                                                        *
 * The TYPO3 project - inspiring people to share!                         *
 *                                                                        */

Ext.namespace('F3.TYPO3.UserInterface.Breadcrumb');

/**
 * @class F3.TYPO3.UserInterface.Breadcrumb.NodeUI
 *
 *
 *
 * @namespace F3.TYPO3.UserInterface.Breadcrumb
 * @extends Ext.tree.TreeNodeUI
 * @author Rens Admiraal <rens@rensnel.nl>
 * @version $Id $
 * @license http://www.gnu.org/licenses/lgpl.html GNU Lesser General Public License, version 3 or later
 * @demo http://phoenix.demo.typo3.org/
 */

F3.TYPO3.UserInterface.Breadcrumb.NodeUI = function() {
    F3.TYPO3.UserInterface.Breadcrumb.NodeUI.superclass.constructor.apply(this, arguments);
};

Ext.extend(F3.TYPO3.UserInterface.Breadcrumb.NodeUI, Ext.tree.TreeNodeUI, {

	_nodeHeight: 0,

	/**
	 * @param {Object} n
	 * @param {Object} a
	 * @param {Object} targetNode
	 * @param {Boolean} bulkRender
	 * @return {void}
	 * @private
	 */
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

	/**
	 * @param {Object} e
	 * @return {void}
	 * @private
	 */
	onOver : function(e) {
		F3.TYPO3.UserInterface.Breadcrumb.AnimationHandler.nodeOnOver(this, e);
    },

	/**
	 * @param {Object} e
	 * @return {void}
	 * @private
	 */
    onOut : function(e) {
		F3.TYPO3.UserInterface.Breadcrumb.AnimationHandler.nodeOnOut(this, e);
    },


	/**
	 * @param {Boolean} state
	 * @return {void}
	 * @private
	 */
	onSelectedChange: function(state) {
	
		if (state) {
			this.addClass("f3-breadcrumb-selected");
		} else {
			this.removeClass("f3-breadcrumb-selected");
		}
	},
	
	
	/**
	 * @param {Function} callback
	 * @return {void}
	 * @private
	 */
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

		F3.TYPO3.UserInterface.Breadcrumb.AnimationHandler.expandNode(ct, callback, this);
    },

	/**
	 * @param {Function}
	 * @return {void}
	 * @private
	 */
    animCollapse : function(callback){
        var ct = Ext.get(this.ctNode);
        ct.stopFx();

        this.animating = true;
        this.updateExpandIcon();

		F3.TYPO3.UserInterface.Breadcrumb.AnimationHandler.collapseNode(ct, callback, this);
    },

	/**
	 * @return {void}
	 * @private
	 */
    renderIndent : function(){
        if(this.rendered){
            this.updateExpandIcon();
        }
    }
});

// Register class as xtype
Ext.reg('F3.TYPO3.UserInterface.Breadcrumb', F3.TYPO3.UserInterface.Breadcrumb);