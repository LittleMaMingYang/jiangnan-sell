<template>
  <cube-scroll class="profile" :options="scrollOptions">
    <div class="profile-content">
       <div class="profile">
        <div class="profile-content">
            <div class="bulletin">
                <h1 class="title">关于江南配送</h1>
                <div class="content-wrapper border-bottom-1px">
                    <p class="content">{{profile.bulletin}}</p>
                </div>
             </div>
            <split></split>
            <div class="info">
              <h1 class="title border-bottom-1px">其他商家</h1>
              <ul>
                <li
                  class="info-item border-bottom-1px"
                  v-for="(info,index) in profile.infos"
                  :key="index"
                >
                  {{info}}
                </li>
              </ul>
            </div>
            <split></split>
             <div class="rules">
                <h1 class="title">规则详情</h1>
                <div class="content-wrapper border-bottom-1px">
                    <p class="content">{{profile.rules}}</p>
                </div>
             </div>
        </div>
       </div>
    </div>
  </cube-scroll>
</template>

<script>
import { getProfile } from 'api'
import Split from 'components/split/split'

export default {
    props: {
      data: {
        type: Object
      }
    },
    data() {
        return {
          profile: {},
          scrollOptions: {
          click: false,
          directionLockThreshold: 0
        }
        }
    },
    computed: {
      seller() {
        return this.data.seller || {}
      }
    },
    methods: {
      fetch() {
        if (!this.fetched) {
          this.fetched = true
          getProfile({
            id: this.seller.id
          }).then((profile) => {
            this.profile = profile
          })
        }
      }
    },
    components: {
        Split
    }
}
</script>

<style lang="stylus" scoped>
  @import "~common/stylus/variable"
  @import "~common/stylus/mixin"

  .profile
    height: 100%
    text-align: left
    .bulletin
      padding: 18px 18px 0 18px
      white-space: normal
      .title
        margin-bottom: 8px
        line-height: 14px
        color: $color-dark-grey
        font-size: $fontsize-medium
      .content-wrapper
        padding: 0 12px 16px 12px
        .content
          line-height: 24px
          font-size: $fontsize-small
          color: $color-blend
    .info
      padding: 18px 18px 0 18px
      color: $color-dark-grey
      .title
        padding-bottom: 12px
        line-height: 14px
        font-size: $fontsize-medium
      .info-item
        padding: 16px 12px
        line-height: 16px
        font-size: $fontsize-small
        &:last-child
          border-none()
    .rules
      padding: 18px 18px 0 18px
      white-space: normal
      .title
        margin-bottom: 8px
        line-height: 14px
        color: $color-dark-grey
        font-size: $fontsize-medium
      .content-wrapper
        padding: 0 12px 16px 12px
        .content
          line-height: 24px
          font-size: $fontsize-small
          color: $color-blend
</style>
