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

Ext.namespace('F3.TYPO3.UserInterface');

/**
 * @class F3.TYPO3.UserInterface.Breadcrumb
 *
 *
 *
 * @namespace F3.TYPO3.UserInterface
 * @extends Ext.tree.TreePanel
 * @author Rens Admiraal <rens@rensnel.nl>
 * @version $Id $
 * @license http://www.gnu.org/licenses/lgpl.html GNU Lesser General Public License, version 3 or later
 * @demo http://phoenix.demo.typo3.org/
 */

F3.TYPO3.UserInterface.Breadcrumb = function() {
    F3.TYPO3.UserInterface.Breadcrumb.superclass.constructor.apply(this, arguments);
};

Ext.extend(F3.TYPO3.UserInterface.Breadcrumb, Ext.tree.TreePanel, {

	/**
	 * @return {void}
	 * @public
	 */
	initComponent: function() {
		var config = {
		};
		Ext.apply(this, config);

		if(!this.eventModel){
            this.eventModel = new F3.TYPO3.UserInterface.Breadcrumb.EventModel(this);
        }

		F3.TYPO3.UserInterface.Breadcrumb.superclass.initComponent.call(this);
	},

	/**
	 * @return {void}
	 * @public
	 */
    onRender : function(ct, position){
        Ext.tree.TreePanel.superclass.onRender.call(this, ct, position);
        this.el.addClass('f3-breadcrumb');
		this.el.addClass('f3-breadcrumb');
        this.innerCt = this.body.createChild({tag:'div',
               cls:'f3-breadcrumb-root-ct ' +
               (this.useArrows ? 'f3-breadcrumb-arrows' : this.lines ? 'f3-breadcrumb-lines' : 'f3-breadcrumb-no-lines')});

	   this.on('click',function(node, e){

//		   console.log(arguments);
//		   node.isClickedNode = true;
	   });
    }
});

// Register class as xtype
Ext.reg('F3.TYPO3.UserInterface.Breadcrumb', F3.TYPO3.UserInterface.Breadcrumb);