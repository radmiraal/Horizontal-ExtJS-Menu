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

	/**
	 * @param {Object} ct
	 * @param {Function} callback
	 * @param {Object} scope
	 * @return {void}
	 * @public
	 */
	expandNode: function (ct, callback, scope) {
		var hiddenStyle = {
			height: 47,
			display: 'inline-block',
			width: 0
		};
		ct.setStyle({display:'inline-block'});

		// Now we calculate the new width of the container
		var newContainerWidth = scope.node.childNodes.length * 47;
		var newContainerStyle = {
			opacity: 1,
			easing: 'easeOut',
			height: 45,
			width: newContainerWidth,
			duration: scope.node.ownerTree.duration || .25
		};
		ct.shift(newContainerStyle);

		/**
		 * resize parent containers
		 */
		var currentParent = ct;

		do {
			currentParent = currentParent.findParentNode('.f3-breadcrumb-node-ct', 5, true);
			if (currentParent) {
				var width = currentParent.getWidth();

				var newParentContainerStyle = {
					width: width + newContainerWidth,
					easing: 'easeOut',
					duration: scope.node.ownerTree.duration || .25
				}
//				console.log(newParentContainerStyle);
				currentParent.shift(newParentContainerStyle);
				newParentContainerStyle.width = newParentContainerStyle.width + 45;
				currentParent.findParentNode('.f3-breadcrumb-node', 5, true).shift(newParentContainerStyle);

			}
		} while (currentParent);

		var newNodeStyle = newContainerStyle;
		newNodeStyle.width = newContainerStyle.width + 47;
		newNodeStyle.callback = function() {
			scope.animating = false;
			Ext.callback(callback);
		}
		newNodeStyle.scope = scope;

		Ext.get(scope.wrap).shift(newNodeStyle);
	},

	/**
	 * @param {Object} ct
	 * @param {Function} callback
	 * @param {Object} scope
	 * @return {void}
	 * @public
	 */
	collapseNode: function (ct, callback, scope) {
		var newStyle = {
			width: 0,
			opacity: 0,
			easing: 'easeOut',
			height: 45,
			duration: scope.node.ownerTree.duration || .25
		};

		//ct.select('*').shift(newStyle);
		ct.shift(newStyle);

		newStyle.callback = function() {
			scope.animating = false;
			Ext.callback(callback);
		};
		newStyle.width = 47;
		newStyle.opacity = 1;
		newStyle.scope = scope;

		Ext.get(scope.wrap).shift(newStyle);
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