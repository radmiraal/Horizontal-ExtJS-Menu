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
 * @class F3.TYPO3.UserInterface.Breadcrumb.AnimationHandler
 *
 *
 *
 * @namespace F3.TYPO3.UserInterface.Breadcrumb
 * @author Rens Admiraal <rens@rensnel.nl>
 * @version $Id $
 * @license http://www.gnu.org/licenses/lgpl.html GNU Lesser General Public License, version 3 or later
 * @demo http://phoenix.demo.typo3.org/
 */

F3.TYPO3.UserInterface.Breadcrumb.AnimationHandler = {


	_getVisibleChildNodesCount: function (node) {
		return Ext.get(node.ui.ctNode).select('.node-expanded').elements.length;
	},

	_setExpandedWidth: function(node) {
		var childNodes = this._getVisibleChildNodesCount(node)
		var ct = Ext.get(node.ui.ctNode);

		Ext.get(node.ui.getEl()).setStyle({display:'inline-block'});
		ct.setStyle({display:'inline-block'});

		this._setWidth(Ext.get(node.ui.getEl()), ct, childNodes * 47);
	},


	_setWidth: function(nodeElement, container, width) {
		nodeElement.setWidth(width + 47);
		container.setWidth(width);
	},

	/**
	 * @param {Object} ct
	 * @param {Function} callback
	 * @param {Object} scope
	 * @return {void}
	 * @public
	 */
	collapseNode: function (ct, callback, scope) {

		this._setWidth(Ext.get(scope.node.ui.getEl()), ct, 0);
		ct.setStyle({display:'none'});
		
		Ext.each(
			scope.node.childNodes, 
			function(node) {
				Ext.get(node.ui.getEl()).removeClass('node-expanded');
			}
		);

		if(!scope.node.parentNode.isRoot) {
			var currentNode = scope.node.parentNode;

			do {			
				Ext.get(currentNode.ui.getEl()).setWidth((currentNode.childNodes.length * 47) + 47 );
				Ext.get(currentNode.ui.ctNode).setWidth(currentNode.childNodes.length * 47);
				currentNode = currentNode.parentNode;
			} while (!currentNode.isRoot);
			
		};

		Ext.callback(callback);
		scope.animating = false;
	},

	/**
	 * @param {Object} ct
	 * @param {Function} callback
	 * @param {Object} scope
	 * @return {void}
	 * @public
	 */
	expandNode: function (ct, callback, scope) {

		Ext.each(
			scope.node.childNodes, 
			function(node) {
				Ext.get(node.ui.getEl()).addClass('node-expanded');
			}
		);
		this._setExpandedWidth(scope.node);

		if(!scope.node.parentNode.isRoot) {
			var currentNode = scope.node.parentNode;

			do {
				this._setExpandedWidth(currentNode);
				currentNode = currentNode.parentNode;
			} while (!currentNode.isRoot);
		};

		Ext.callback(callback);
		scope.animating = false;
	},

	

	/**
	 * @param {Object} scope
	 * @param {Object} e
	 * @return {void}
	 * @public
	 */
	nodeOnOver: function (scope, e) {
		
	},

	/**
	 * @param {Object} scope
	 * @param {Object} e
	 * @return {void}
	 * @public
	 */
	nodeOnOut: function (scope, e) {

	}
};

// Register class as xtype
Ext.reg('F3.TYPO3.UserInterface.Breadcrumb.AnimationHandler', F3.TYPO3.UserInterface.Breadcrumb.AnimationHandler);