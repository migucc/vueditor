<template>
  <input ref="file" type="file" name="image" @change="changeHandler" style="position: absolute;top: 0;left: 0;opacity: 0;z-index: -10;">
</template>

<script>
  import { getLang } from '../config/lang.js'

  export default {
    data () {
      return {
        url: '',
        lang: getLang('picture'),
      }
    },
    computed: {
      showPopup: function () {
        return this.$store.state.toolbar.picture.showPopup
      }
    },
    watch: {
      'showPopup': function (val) {
        if(val) this.$refs.file.click();
      }
    },
    methods: {
      hideDialog () {
        this.$store.dispatch('updatePopupDisplay')
        this.url = ''
        this.$refs.file.value = ''
      },
      changeHandler () {
        let obj = this.$refs.file
        if (this.$parent.upload) {
          this.$parent.upload(obj, function (href) {
            this.$store.dispatch('execCommand', {name: 'insertHTML', value: `<img src="${href}">`})
            this.hideDialog()
          }.bind(this))
        }
      },
    }
  }
</script>