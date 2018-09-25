import Vue from 'vue'
export default Vue.extend({
  name: 'QToolbarTitle',

  props: {
    shrink: Boolean
  },

  render (h) {
    return h('div', {
      staticClass: 'q-toolbar__title ellipsis',
      'class': this.shrink ? 'col-auto' : null
    }, [
      this.$slots.default,
      this.$slots.subtitle
        ? h('div', { staticClass: 'q-toolbar__subtitle ellipsis' }, this.$slots.subtitle)
        : null
    ])
  }
})
