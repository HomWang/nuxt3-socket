export default defineComponent({
  name: 'WButton',
  props: {
    // 父组件绑定的v-model
    modelValue: {
      type: String,
      default: ''
    },
    size: {
      type: String,
      default: ''
    },
  },
  setup(props, { emit, attrs, slots }) {
    let btnClass = 'box-border bg-primary-500 text-black border-0 outline-none '
    let btnHoverClass = 'hover:bg-primary-400 active:bg-primary-600'
    if (!props.size || props.size === 'default') {
      btnClass += 'px-5 h-10 leading-10 rounded cursor-pointer'
    }
    return () => {
      return (
        <button class={[btnClass, btnHoverClass]}>
          {slots?.default()}
        </button>
      )
    }
  }
})
