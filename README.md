# vue-easyui

Vue directives for easyui.

## Compatibility
* vuejs 2.0 +
* easyui 1.5 +

## Documentation


### v-e-datagrid
    ```html
    <div id='grid'>
       <table v-e-datagrid:grid1="options">
       </table>
    </div>   
    <script>
        new Vue({
            el:'#grid',
            data:{
                options:{
                    title:'vueasyui grid'
                }
            }
        })
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