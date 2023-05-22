import { initMixin } from './init'
import { stateMixin } from './state'
import { renderMixin } from './render'
import { eventsMixin } from './events'
import { lifecycleMixin } from './lifecycle'
import { warn } from '../util/index'

/**
 * 通过 ES5 Function 构造函数 Vue
 * 原型挂载方法： _init
 */
function Vue (options) {
  if (process.env.NODE_ENV !== 'production' &&
    !(this instanceof Vue)
  ) {
    warn('Vue is a constructor and should be called with the `new` keyword')
  }
  this._init(options)
}

/**
 * Vue 原型挂载方法： _init
 */
initMixin(Vue)
/**
 * Vue 原型挂载方法：$delete, $set, $watch,
 *     挂载属性：$data, $props
 */
stateMixin(Vue)
/**
 * Vue 原型挂载方法：$on, $once, $off, $emit
 */
eventsMixin(Vue)
/**
 * Vue 原型挂载方法：_update, $forceUpdate, $destroy
 */
lifecycleMixin(Vue)
/**
 * Vue 原型挂载方法：$nextTick, _render, 一些渲染辅助方法 _b, _d 等
 */
renderMixin(Vue)

export default Vue
