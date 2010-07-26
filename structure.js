var children = [{
	text:'Model',
	iconCls: 'settings',
	children:[{
		text:'Object 1',
		iconCls: 'audio',
		children:[{
			text: 'Properties',
			iconCls: 'open',
			leaf: true

		}, {
			text: 'TCA',
			leaf: true,
			iconCls: 'edit'
		}, {
			text: 'Localization',
			leaf: true,
			iconCls: 'delete'
		}]
	}, {
		text:'Object 2',
		iconCls: 'font',
		children:[{
			text: 'Properties',
			leaf: true,
			iconCls: 'open'
		}, {
			text: 'TCA',
			leaf: true,
			iconCls: 'edit'
		}, {
			text: 'Localization',
			leaf: true,
			iconCls: 'delete'
		}]
	}]
}, {
	text: 'Controllers',
	iconCls: 'development',
	children: [{
		text: 'IndexController',
		leaf: true,
		iconCls: 'contact'
	}, {
		text: 'ObjectController',
		leaf: true,
		iconCls: 'italic'
	}]
},{
	text:'Frontend Plugins',	
	iconCls: 'games',
	children:[{
		text:'Plugin 1',
		leaf:true,
		iconCls: 'bold'
	}, {
		text:'Plugin 2',
		leaf:true,
		iconCls: 'underline'
	}]
}, {
	text: 'Backend Modules',
	iconCls: 'accessories',
	children:[{
		text: 'Module 1',
		leaf: true,
		iconCls: 'text'
	}]
}, {
	text: 'Scheduler tasks',
	iconCls: 'graphics',
	children:[{
		text: 'Task 1',
		leaf: true,
		iconCls: 'video'
	}]
}];