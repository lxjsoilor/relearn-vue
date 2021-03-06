### tree 组件实现，`tree.vue`：

```html
<template>
  <div class="tree">
    <!-- 遍历显示一级节点 -->
    <tree-node v-for="item in data" :key="item.title" :model="item"></tree-node>
  </div>
</template>
```

```js
import node from './tree-node'
export default {
  components: {
    'tree-node': node
  },
  props: {
    // 数据
    data: {
      type: Array,
      required: true
    }
  }
}
```

### `tree-node` 组件实现，`tree-node.vue`：

```html
<template>
  <div class="tree-node-container">
    <!-- 展示当前节点信息 -->
    <div @click="toggle" :style="{paddingLeft: (level - 1) * 15 + 'px'}">
      <label>{{model.title}}</label>
      <span v-if="isFolder" style="margin-left: 20px;"
        >{{open ? '-' : '+'}}</span
      >
    </div>
    <!-- 如果有孩子元素，遍历，递归显示，自己显示自己 -->
    <div v-if="isFolder" v-show="open">
      <tree-node
        class="item"
        v-for="item in model.children"
        :model="item"
        :key="item.title"
        :level="level + 1"
      ></tree-node>
    </div>
  </div>
</template>
```

```js
export default {
  // name必须设置
  name: 'TreeNode',
  props: {
    // 当前节点数据
    model: Object,
    // 当前节点层级，用于缩进样式控制
    level: {
      type: Number,
      default: 1
    }
  },
  data() {
    return {
      // 如果是父级节点，控制是否展开
      open: false
    }
  },
  computed: {
    // 父级节点判断标识，有children，且children长度大于0
    isFolder() {
      return this.model.children && this.model.children.length
    }
  },
  methods: {
    // 展开、收起方法
    toggle() {
      if (this.isFolder) {
        this.open = !this.open
      }
    }
  }
}
```
