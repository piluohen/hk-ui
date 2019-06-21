<template lang="pug">
  .hk-upload()
    el-upload(
      ref="upload"
      :action="action"
      :headers="headers"
      :disabled="disabled"
      :limit="options.limitNum"
      :accept="options.limitType"
      :show-file-list="typeConfig.showFileList"
      :list-type="typeConfig.listType"
      :file-list="fileList"
      :on-exceed="handleExceed"
      :before-upload="handleBeforeUpload"
      :on-preview="handlePictureCardPreview"
      :on-progress="handleProgress"
      :on-success="handleSuccess"
      :on-remove="handleRemove"
      :on-error="handleError"
    )
      slot
        template(v-if="type === 'picture'")
          i.el-icon-plus
        template(v-else)
          el-button.hekr-btn(
            :size="btnConfig.size"
            :type="btnConfig.type"
            :icon="btnConfig.icon"
            :round="btnConfig.round"
            :loading="loading"
            :disabled="disabled"
          ) {{ options.btnName }}
    hk-preview(v-model="showPreview" :list="fileList" :index="imgIndex")
</template>

<script>
export default {
  name: 'hk-upload',
  props: {
    value: {
      type: Array,
      default: () => {
        return []
      }
    },
    type: {
      type: String,
      default: 'picture'
    },
    action: {
      type: String,
      default: ''
    },
    headers: {
      type: Object,
      default: () => {}
    },
    configs: {
      required: false,
      type: Object,
      default () {
        return {}
      }
    },
    btnConfig: {
      type: Object,
      default: () => {
        return {
          type: 'primary',
          size: 'small',
          icon: '',
          round: false
        }
      }
    }
  },
  data () {
    return {
      disabled: false,
      loading: false,
      percentage: 0,
      showPreview: false,
      imgIndex: 0,
      typeConfigMap: {
        'picture': {
          listType: 'picture-card',
          showFileList: true
        },
        'file': {
          listType: 'text',
          showFileList: true
        },
        'button': {
          listType: 'text',
          showFileList: false
        }
      }
    }
  },
  computed: {
    fileList: {
      get () {
        return this.value
      },
      set (val) {
        this.$emit('input', val)
      }
    },
    typeConfig () {
      return this.typeConfigMap[this.type]
    },
    options () {
      let self = this
      let util = function (key, val) {
        return self.configs[key] === undefined ? val : self.configs[key]
      }
      // 上传配置项
      return {
        limitNum: util('limitNum', 10),
        limitSize: util('limitSize', 10),
        limitType: util('limitType', 'image/png,image/jpeg,image/gif'),
        btnName: util('btnName', '点击上传'),
        fileTypeName: util('fileTypeName', '文件')
      }
    }
  },
  methods: {
    handleExceed (files, fileList) {
      this.$message.warning(`最多上传${this.options.limitNum}个${this.options.fileTypeName}`)
    },
    handlePictureCardPreview (file, index) {
      if (this.type !== 'picture') {
        return false
      }
      this.showPreview = true
      this.fileList.forEach((item, i) => {
        if (item.url === file.url) {
          this.imgIndex = i
        }
      })
    },
    handleBeforeUpload (file) {
      this.disabled = true
      this.loading = true
      this.$emit('complate', false)
      this.percentage = 0
      const isLimitSize = file.size / 1024 / 1024 < this.options.limitSize
      let fileTypeArr = this.options.limitType.split(',') || []
      let fileType = file.type || ''
      let canUpload = fileTypeArr.includes(fileType)
      if (!canUpload) {
        this.$message.error(`${this.options.fileTypeName}格式错误`)
        this.resetUpload()
      }
      if (!isLimitSize) {
        this.$message.error(`上传${this.options.fileTypeName}大小不能超过${this.options.limitSize}MB！`)
        this.resetUpload()
      }
      return isLimitSize && canUpload
    },
    handleProgress (event, file, fileList) {
      if (event.percent !== 100) {
        this.percentage = event.percent || 0
      } else {
        this.percentage = 99
      }
    },
    handleRemove (file, fileList) {
      this.$emit('input', fileList)
    },
    handleSuccess (response, file) {
      this.resetUpload()
      this.$emit('complate', true)
      this.percentage = 100
      this.fileList.push({
        name: response.filename,
        url: response.url,
        uploadTime: Number(new Date())
      })
      this.$emit('input', this.fileList)
    },
    handleError () {
      this.$message.error('上传失败，请稍后重试')
      this.resetUpload()
      this.percentage = 0
    },
    resetUpload () {
      this.disabled = false
      this.loading = false
    }
  }
}
</script>

<style lang="scss">
.hk-upload {
  .el-upload-list--picture-card .el-upload-list__item {
    width: 100px;
    height: 100px;
  }
  .el-upload--picture-card {
    width: 100px;
    height: 100px;
    line-height: 100px;
  }
}
</style>
