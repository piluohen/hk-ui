<template lang="pug">
  .hk-upload(:class="`hk-upload-${type}`")
    .hk-upload-item(
      v-if="type === 'picture'"
      v-for="(item, index) in value"
      :key="index"
    )
      el-image(:src="item.url" fit="cover")
      .delete(
        v-if="!isUploading"
      )
        i.el-icon-view(@click="handlePictureCardPreview(index)")
        i.el-icon-delete(v-if="!disabled" @click="handleDelete(index)")
    el-upload(
      v-if="(type !== 'picture' || fileList.length < options.limitNum) && !disabled"
      ref="upload"
      :action="action"
      :headers="headers"
      :disabled="isUploading"
      :limit="options.limitNum"
      :accept="options.limitType"
      :show-file-list="typeConfig.showFileList"
      :list-type="typeConfig.listType"
      :file-list= "fileList"
      :on-exceed="handleExceed"
      :before-upload="handleBeforeUpload"
      :on-progress="handleProgress"
      :on-success="handleSuccess"
      :on-remove="handleRemove"
      :on-error="handleError"
      v-bind="$attrs"
    )
      slot
        template(v-if="type === 'picture'")
          i(class="el-icon-plus" v-show="!isUploading")
          .progress(v-show="isUploading", title="上传中...")
            img(:src="progressImgUrl")
            el-progress(type="circle" :width="60" :percentage="percentage")
        template(v-else)
          el-button.hekr-btn(
            :size="btnConfig.size"
            :type="btnConfig.type"
            :icon="btnConfig.icon"
            :round="btnConfig.round"
            :loading="isUploading"
            :disabled="isUploading"
          ) {{ options.btnName }}
    hk-preview(v-model="showPreview" :list="fileList" :index.sync="imgIndex")
</template>

<script>
export default {
  name: 'hk-upload',
  props: {
    value: {},
    type: {
      type: String,
      default: ''
    },
    action: {
      type: String,
      default: ''
    },
    headers: {
      type: Object,
      default: () => {}
    },
    showFileList: {
      type: Boolean,
      default: true
    },
    listType: {
      type: String,
      default: 'text'
    },
    disabled: {
      type: Boolean,
      default: false
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
      isUploading: false,
      percentage: 0,
      showPreview: false,
      progressImgUrl: '',
      imgIndex: 0
    }
  },
  computed: {
    isSimple () {
      return typeof this.value === 'string'
    },
    fileList: {
      get () {
        if (this.isSimple) {
          return []
        } else {
          return this.value
        }
      },
      set (val) {
        this.$emit('input', val)
      }
    },
    typeConfigMap () {
      return {
        'picture': {
          listType: 'picture-card',
          showFileList: false
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
    },
    fileTypeName () {
      return this.type === 'picture' ? '图片' : '文件'
    },
    typeConfig () {
      return this.type ? this.typeConfigMap[this.type] : {
        listType: this.listType,
        showFileList: this.showFileList
      }
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
        btnName: util('btnName', '点击上传')
      }
    }
  },
  methods: {
    handleExceed (files, fileList) {
      this.$message.warning(`最多上传${this.options.limitNum}个${this.fileTypeName}`)
    },
    handlePictureCardPreview (index) {
      if (this.type !== 'picture') {
        return false
      }
      this.showPreview = true
      this.imgIndex = index
    },
    handleBeforeUpload (file) {
      this.isUploading = true
      this.$emit('complate', false)
      this.percentage = 0
      const isLimitSize = file.size / 1024 / 1024 < this.options.limitSize
      if (!isLimitSize) {
        this.$message.error(`上传${this.fileTypeName}大小不能超过${this.options.limitSize}MB！`)
        this.resetUpload()
      }

      let fileTypeArr = this.options.limitType.split(',') || []
      let fileType = file.type || ''
      let canUpload = fileTypeArr.includes(fileType)
      if (!canUpload) {
        this.$message.error(`${this.fileTypeName}格式错误`)
        this.resetUpload()
      }
      return isLimitSize && canUpload
    },
    handleProgress (event, file, fileList) {
      if (!this.progressImgUrl) {
        this.progressImgUrl = file.url
      }
      if (event.percent !== 100) {
        this.percentage = parseFloat(event.percent.toFixed(2)) || 0
      } else {
        this.percentage = 99
      }
    },
    handleDelete (index) {
      this.$delete(this.value, index)
      this.$emit('input', this.value)
    },
    handleRemove (file, fileList) {
      this.$emit('input', fileList)
    },
    handleSuccess (response, file) {
      this.resetUpload()
      this.percentage = 100
      if (this.isSimple) {
        this.$emit('input', response.url)
      } else {
        this.fileList.push({
          name: response.filename,
          url: response.url,
          uploadTime: Number(new Date())
        })
        this.$emit('input', this.fileList)
      }
    },
    handleError () {
      this.$message.error('上传失败，请稍后重试')
      this.resetUpload()
      this.percentage = 0
    },
    resetUpload () {
      this.isUploading = false
      this.progressImgUrl = ''
      this.$emit('complate', true)
    }
  }
}
</script>

<style lang="scss">
.hk-upload-picture {
  width: 100%;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
  .hk-upload-item {
    margin: 5px;
    width: 100px;
    height: 100px;
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    .el-image {
      width: 100%;
      height: 100%;
    }
    .delete {
      display: none;
      justify-content: center;
      align-items: center;
      background: rgba(0, 0, 0, 0.5);
      position: absolute;
      left: 0;
      top: 0;
      right: 0;
      bottom: 0;
      font-size: 18px;
      i {
        cursor: pointer;
        color: #ffffff;
      }
      i + i {
        margin-left: 10px;
      }
    }
    &:hover {
      .delete {
        display: flex;
      }
    }
  }
  .el-upload--picture-card {
    display: flex;
    justify-content: center;
    align-items: center;
    margin: 5px;
    width: 98px;
    height: 98px;
    line-height: 98px;
    position: relative;
    .progress {
      display: flex;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
      position: absolute;
      top: 0;
      left: 0;
      img {
        max-width: 100%;
        max-height: 100%;
      }
      .el-progress--circle {
        position: absolute;
        .el-progress__text {
          color: #ffffff;
        }
      }
    }
  }
}
</style>
