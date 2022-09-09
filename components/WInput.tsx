export default defineComponent({
  name: 'WInput',
  // emits已发送的事件  modelValue是默认的不可删除 可以更改（父组件的v-model===v-model:modelValue）
  emits: ['update:modelValue', 'change', 'input'],
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
  setup(props, { emit, attrs }) {
    let btnClass = 'box-border text-black border outline-none '
    let btnHoverClass = 'hover:border-primary-500 focus:border-primary-500 '
    if (!props.size || props.size === 'default') {
      btnClass += 'px-4 h-10 leading-10 rounded cursor-pointer'
    }
    const onInput = (event: Event) => {
      // 类型断言     断定event.target一定是html input标签   不然不能点value
      let input = (event.target as HTMLInputElement).value
      if (props.modelValue !== input) {
        // 发送事件 此时父组件会监听到
        emit('update:modelValue', input)
        emit('input', input)
        emit('change', input)
      }
    }
    return () => {
      return (
        <input type="text"
          class={[btnClass, btnHoverClass]}
          value={props.modelValue}
          onInput={onInput}
          onChange={onInput}
          placeholder={attrs.placeholder as string}
        />
      );
    }
  }
})
