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
 * @class F3.TYPO3.UserInterface.Breadcrumb.AsyncNode
 *
 *
 *
 * @namespace F3.TYPO3.UserInterface.Breadcrumb
 * @extends Ext.tree.AsyncTreeNode
 * @author Rens Admiraal <rens@rensnel.nl>
 * @version $Id $
 * @license http://www.gnu.org/licenses/lgpl.html GNU Lesser General Public License, version 3 or later
 * @demo http://phoenix.demo.typo3.org/
 */

F3.TYPO3.UserInterface.Breadcrumb.AsyncNode = Ext.extend(Ext.tree.AsyncTreeNode, {

	/**
	 * @return {void}
	 * @public
	 */
	initComponent: function() {

		var config = {
		};
		Ext.apply(this, config);

		F3.TYPO3.UserInterface.Breadcrumb.AsyncNode.superclass.initComponent.call(this);
	}

});

// Register class as xtype
Ext.reg('F3.TYPO3.UserInterface.Breadcrumb.AsyncNode', F3.TYPO3.UserInterface.Breadcrumb.AsyncNode);