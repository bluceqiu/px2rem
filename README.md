<!--
 * @Author: xiaolong.qiu
 * @Date: 2019-12-22 11:59:12
 * @LastEditTime: 2020-03-05 16:14:59
 -->
### what can px2rem do?

- the instruction for the extension "px2rem". u can use it to transfer px to rem in a css or scss or less file.

- You can change the conversion ratio according to your needs. You just need to add the following configuration in setting.json. the default value is 100. the unit is px.

```
    "px2rem.config": {
        "transferRatio": 100 // 1rem = 100px;
    },
```

- supported file suffixes: .scss, .css, .vue, .less, .html, .jsx