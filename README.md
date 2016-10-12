# vue-easyui

Vue directives for easyui.

## Compatibility
* vuejs 2.0 +
* easyui 1.5 +

## Documentation


### v-e-datagrid
```html
<div id='grid'>
    <table v-e-datagrid:a="options" ref='grid1' :title="title">
        <thead>
        <tr>
            <th data-options="field:'itemid',width:80">Item ID</th>
            <th data-options="field:'productid',width:100">Product</th>
            <th data-options="field:'listprice',width:80,align:'right'">List Price</th>
            <th data-options="field:'unitcost',width:80,align:'right'">Unit Cost</th>
            <th data-options="field:'attr1',width:250">Attribute</th>
            <th data-options="field:'status',width:60,align:'center'">Status</th>
        </tr>
        </thead>
    </table>
</div>
<script>
    
    var vm = new Vue({
        el: '#grid',
        data: {
            total: 0,
            deleted: 0,
            options: {
                toolbar: [{
                    text: 'reload',
                    handler: function () {
                        console.log(11);
                        vm.loadData()
                    }
                }],
                data: []
            }
        },
        computed: {
            title: function () {
                if (!this.options.data.length) {
                    return 'click reload button'
                }
                return 'total:' + this.options.data.length + 'deleted: ' + this.deleted
            }
        },
        created: function () {
            this.$on('a.onDblClickRow', this.deleteRow)
        },
        methods: {
            loadData:function(){
                this.options.data=[
                    {
                        "productid": "FI-SW-01",
                        "productname": "Koi",
                        "unitcost": 10.00,
                        "status": "P",
                        "listprice": 36.50,
                        "attr1": "Large",
                        "itemid": "EST-1"
                    },
                    {
                        "productid": "K9-DL-01",
                        "productname": "Dalmation",
                        "unitcost": 12.00,
                        "status": "P",
                        "listprice": 18.50,
                        "attr1": "Spotted Adult Female",
                        "itemid": "EST-10"
                    },
                    {
                        "productid": "RP-SN-01",
                        "productname": "Rattlesnake",
                        "unitcost": 12.00,
                        "status": "P",
                        "listprice": 38.50,
                        "attr1": "Venomless",
                        "itemid": "EST-11"
                    },
                    {
                        "productid": "RP-SN-01",
                        "productname": "Rattlesnake",
                        "unitcost": 12.00,
                        "status": "P",
                        "listprice": 26.50,
                        "attr1": "Rattleless",
                        "itemid": "EST-12"
                    },
                    {
                        "productid": "RP-LI-02",
                        "productname": "Iguana",
                        "unitcost": 12.00,
                        "status": "P",
                        "listprice": 35.50,
                        "attr1": "Green Adult",
                        "itemid": "EST-13"
                    },
                    {
                        "productid": "FL-DSH-01",
                        "productname": "Manx",
                        "unitcost": 12.00,
                        "status": "P",
                        "listprice": 158.50,
                        "attr1": "Tailless",
                        "itemid": "EST-14"
                    },
                    {
                        "productid": "FL-DSH-01",
                        "productname": "Manx",
                        "unitcost": 12.00,
                        "status": "P",
                        "listprice": 83.50,
                        "attr1": "With tail",
                        "itemid": "EST-15"
                    },
                    {
                        "productid": "FL-DLH-02",
                        "productname": "Persian",
                        "unitcost": 12.00,
                        "status": "P",
                        "listprice": 23.50,
                        "attr1": "Adult Female",
                        "itemid": "EST-16"
                    },
                    {
                        "productid": "FL-DLH-02",
                        "productname": "Persian",
                        "unitcost": 12.00,
                        "status": "P",
                        "listprice": 89.50,
                        "attr1": "Adult Male",
                        "itemid": "EST-17"
                    },
                    {
                        "productid": "AV-CB-01",
                        "productname": "Amazon Parrot",
                        "unitcost": 92.00,
                        "status": "P",
                        "listprice": 63.50,
                        "attr1": "Adult Male",
                        "itemid": "EST-18"
                    }
                ]
            },
            deleteRow: function (e) {
                var index = e.args[0];
                $(e.el).datagrid('deleteRow', index)
                this.deleted++
            }
        },
        watch: {
            'title': function (value) {
                $(this.$refs.grid1).datagrid('getPanel').panel('setTitle', value)
            },
            'options.data': function (value, oldValue) {
                $(this.$refs.grid1).datagrid('loadData', value)
            }
        }
    })

    setTimeout(function () {
        vm.loadData()
    }, 2000)
</script>
```

## Contributing
* Fork it !
* Create your top branch from 0.1.x: git branch my-new-topic origin/dev
* Commit your changes: git commit -am 'Add some topic'
* Push to the branch: git push origin my-new-topic
* Submit a pull request to 0.1.x branch of wujiming/vueasyui repository !

## Development Setup
```javascript
# install deps
npm install

# build dist files
npm run build

# dev
npm run dev
```


## Usage
```html
<script src="path/to/vue-easyui.js"></script>
```

 [查看更多](https://wujiming.github.io/vueasyui/)