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

	_collapseSubNodes: function (node, scope) {
		Ext.each(
			node.childNodes,
			function(node) {

				var icon = Ext.get(node.ui.iconNode);

				icon.setStyle({padding: '0px', margin: '0px', height: 45});
				
				icon.shift({
					width: 0,
					display: 'none',
					height: 45,
					opacity: 0,
					duration: .25
				});

				Ext.get(node.ui.ecNode).removeClass('f3-breadcrumb-elbow-expanded');
//				icon.slideOut();
				
//				console.log(icon);

				if (node.childNodes && node.childNodes.length > 0) {
					scope._collapseSubNodes(node, scope);
				}
			}
		);

	},

	/**
	 * @param {Object} ct
	 * @param {Function} callback
	 * @param {Object} scope
	 * @return {void}
	 * @public
	 */
	collapseNode: function (ct, callback, scope) {

		this._collapseSubNodes(scope.node, this);
		Ext.get(scope.node.ui.getEl()).removeClass('f3-breadcrumb-node-expanded');
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

		Ext.get(scope.node.ui.getEl()).addClass('f3-breadcrumb-node-expanded');
		Ext.get(scope.node.ui.getEl()).setStyle({width: 'auto'});

		Ext.each(
			scope.node.childNodes, 
			function(node) {
				var icon = Ext.get(node.ui.iconNode);

				icon.shift({
					width: 47,
					display: 'inline',
					opacity: 1,
					duration: .25
				});
			}
		);

		ct.setStyle({display:'inline'});

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
		var label = Ext.get(scope.node.ui.textNode);
		label.setStyle({display:'inline'});
		
	},

	/**
	 * @param {Object} scope
	 * @param {Object} e
	 * @return {void}
	 * @public
	 */
	nodeOnOut: function (scope, e) {
		var label = Ext.get(scope.node.ui.textNode);
		label.setStyle({display:'none'});
	}
};

// Register class as xtype
Ext.reg('F3.TYPO3.UserInterface.Breadcrumb.AnimationHandler', F3.TYPO3.UserInterface.Breadcrumb.AnimationHandler);