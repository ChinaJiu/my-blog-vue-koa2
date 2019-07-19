<template>
  <div class="list">
    <div class="list-wrap">
      <ul class="ul">
        <li class="li" v-for="(item, index) in list" 
        :key="index">
          <div class="left">
            <h1 class="title">{{item.title}}</h1>
            <div class="content">
              <p class="tag">{{item.tag}}</p>
              <p class="author"><i class="el-icon-user"></i><span>{{item.author}}</span></p>
              <p class="watchers"><i class="el-icon-view"></i><span>{{item.watchers}}</span></p>
              <p class="comments"><i class="el-icon-chat-dot-round"></i><span>{{item.comments}}</span></p>
              <p class="time"><i class="el-icon-time"></i><span>{{item.time}}</span></p>
            </div>
          </div>
          <div class="right">
            <img :src="item.imgPath" alt="">
          </div>
        </li>
      </ul>
    </div>
  </div>
</template>

<script>
import {mapState, mapActions} from 'vuex';

export default {
  data() {
    return {
      list2: [
        {
          title: 'es6',
          author: 'xiaojiu',
          tag: 'javascript',
          watchers: 2,
          comments: 2,
          time: '123',
          imgPath: require('../../assets/logo.png')
        }
      ]
    }
  },
  created() {
    this.getArticle();
    console.log(process.env.NODE_ENV)
  },
  computed: {
    ...mapState({
      list: state => state.article.articleList
    })
  },
  methods: {
    ...mapActions({
      getArticleList: 'article/getArticleList'
    }),
    async getArticle () {
      this.getArticleList()
    }
  }
}
</script>

<style lang='scss'>
.list{
  &-wrap{
    .ul{
      position: relative;
      .li{
        position: relative;
        background-color: $color-white;
        border-radius: 5px;
        margin-top: 5px;
        padding: 30px;
        display: flex;
        justify-content: space-between;
        .left{
          width: 400px;
          .title{
            padding: 0 0 10px 0;
          }
          .content{
            display: flex;
            justify-content: flex-start;
            align-items: center;
            span{
              padding: 0 5px;
            }
            p{
              margin-left: 10px;
              &:first-child{
                margin-left: 0;
              }
            }
            .tag{
              padding: 0 15px;
              text-align: center;
              line-height: 30px;
              height: 30px;
              border-radius: 50px;
              background-color: $border-color-light;
            }
          }
        }
        .right{
          img{
            max-width: 70px;
          }
        }
      }
    }
  }
}

</style>
