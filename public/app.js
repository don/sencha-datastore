Ext.setup({
    onReady: function() {
        Ext.regModel('Person', {
            fields: [
                {name: 'id', type: 'string'},    
                {name: 'name', type: 'string'}
            ]
        });

        var itemTemplate = new Ext.XTemplate(
            '<tpl for=".">',
            	'{name}',
            '</tpl>');

        var xmlStore = new Ext.data.Store({
            model: "Person",
            proxy: {
                type: 'ajax',
                url: 'data.xml',
                reader: {
                    type: 'xml',
                    record: 'person'
                }               
            },
            root: 'people',
            autoLoad: true
        });
        
        var xmlPanel = {
            title: "xml",
            items: [
                {
                    xtype: 'list',
                    store: xmlStore,
                    itemTpl:itemTemplate,
                    singleSelect: true
                }
            ]
        };

        var jsonStore = new Ext.data.Store({
            model: "Person",
            proxy: {
                type: 'ajax',
                url: 'data.json',
                reader: {
                    type: 'json'
                }               
            },
            autoLoad: true
        });

        var jsonPanel = {
            title: "json",
            items: [
                {
                    xtype: 'list',
                    store: jsonStore,
                    itemTpl:itemTemplate,
                    singleSelect: true
                }
            ]           
        };
        
        var panel = new Ext.TabPanel({
           tabBar: {
               layout: {
                   pack: 'center'
               }
           },
           fullscreen: true,
           cardSwitchAnimation: 'slide',
           items: [ xmlPanel, jsonPanel] 
        });
    }
});