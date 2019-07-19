<template>
  <div class="header">
    <div class="header-wrap header-wrap--pc">
      <div class="header-wrap-logo">
        <div class="line"></div>
        <div class="logo-name">CodeBear</div>
        <div class="line"></div>
      </div>
      <div class="header-wrap-nav">
        <ul class="nav-ul">
          <li class="nav-li" v-for="(item, index) in nav" 
            @click="changeNav(item.path, index)"
            :key="index">
            <i :class="`icon ${item.icon} `"></i>
            <span>{{item.name}}</span> 
          </li>
        </ul>
      </div>
    </div>

    <div class="header-wrap header-wrap-mob"></div>

  </div>
</template>

<script>
import {mapActions} from 'vuex';

export default {
  data () {
    return {
      nav: [
        {name: '文章', path: '/', icon: 'el-icon-house'},
        {name: '关于', path: '/about', icon: 'el-icon-chat-round'}
      ]
    }
  },
  mounted() {

  },
  methods: {
    ...mapActions({
      getArticleList: 'article/getArticleList'
    }),
    changeNav(path) {
      this.toPath(path);
    },
    toPath(path) {
        this.$router.push(path);
        this.getArticle();
    },
    async getArticle() {
      // let page, desc, category_id, keyword;
      // if(this.$router.query) {
      //   page = this.$router.query.page;
      //   desc = this.$router.query.desc;
      //   category_id = this.$router.query.category_id;
      //   keyword = this.$router.query.keyword;
      // }
      // console.log(page)
      await this.getArticleList();
      // await this.getArticleList({
      //   page,
      //   desc,
      //   category_id,
      //   keyword
      // })
    }
  }
}
</script>

<style lang="scss">
.header{
  position: relative;
  width: 100%;
  height: 90px;
  background-color: $color-white;
  box-shadow: 0 0 10px rgba(0,0,0,.03);

  &-wrap--pc{
    width: 1000px;
    height: 100%;
    display: flex;
    justify-content: space-between;
  }

  &-wrap{
    margin: 0 auto;
    &-logo{
      padding: 25px;

      .line{
        width: 70px;
        height: 2px;
        background-color: $el-color-primary;
      }
      .logo-name{
        width: 70px;
        text-align: center;
        padding: 5px 0;
      }
    }
    &-nav{
      padding: 25px;
      .nav-ul{
        width: 100%;
        display: flex;
        justify-content: space-between;
      }
      .nav-li{
        padding: 5px 10px;
        cursor: pointer;
        &:hover {
            color: #409EFF;
        }
        span{
          padding: 0 5px;
        }
      }
    }
  }
}
</style>
