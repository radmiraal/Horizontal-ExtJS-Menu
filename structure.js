var children = [{
	text:'Model',
	iconCls: 'data',
	children:[{
		text:'Object 1',
		iconCls: 'data',
		children:[{
			text: 'Properties',
			iconCls: 'data',
			leaf: true

		}, {
			text: 'TCA',
			leaf: true
		}, {
			text: 'Localization',
			leaf: true
		}]
	}, {
		text:'Object 2',
		children:[{
			text: 'Properties',
			leaf: true
		}, {
			text: 'TCA',
			leaf: true
		}, {
			text: 'Localization',
			leaf: true
		}]
	}]
}, {
	text: 'Controllers',
	
	children: [{
		text: 'IndexController',
		leaf: true
	}, {
		text: 'ObjectController',
		leaf: true
	}]
},{
	text:'Frontend Plugins',
	
	children:[{
		text:'Plugin 1',
		leaf:true
	}, {
		text:'Plugin 2',
		leaf:true
	}]
}, {
	text: 'Backend Modules',
	
	children:[{
		text: 'Module 1',
		leaf: true
	}]
}, {
	text: 'Scheduler tasks',
	
	children:[{
		text: 'Task 1',
		leaf: true
	}]
}];