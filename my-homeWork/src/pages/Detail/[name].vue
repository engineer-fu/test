<template>
  <Layout>
      <!-- 标题 -->
      <div class="title">
          {{infor.node.title}}
      </div>
      <!-- 简介 -->
      <div class="introductionToThe">
          <div>
              <div>
                  <span class="label">Categories</span>
              </div>
              <div>
                  <span>{{infor.node.categories.join(',')}}</span>
              </div>
          </div>
          <div>
              <div>
                  <span class="label">Year</span>
              </div>
              <div>
                  <span>{{infor.node.date}}</span>
              </div>
          </div>
      </div>

      <!-- 图片 -->
      <div class="detailImg">
          <img :src="url" alt="">
      </div>

      <div class="m40">
        Copyright © 2021
      </div>
  </Layout>
</template>


<page-query>
query{
    allBanana{
    edges{
      node{
        title,
        date,
        categories
      }
    }
  }

    allSunk{
    edges{
      node{
        title,
        date,
        categories
      }
    }
  }

  allDgraff{
    edges{
      node{
        title,
        date,
        categories
      }
    }
  }

  allIosconcept{
    edges{
      node{
        title,
        date,
        categories
      }
    }
  }
}
</page-query>

<script>



export default {
    data() {
        return {
            infor: {
                title:'',
                date:"",
                categories:[]
            },
            url:"",
        }
    },
    mounted () {
        let title = this.$route.params.name;
        if(title == "Banana"){
            this.infor = this.$page.allBanana.edges[0]
            this.url = require("../../../static/1.jpg")
        }else if(title == "Pineapple"){
            this.infor = this.$page.allSunk.edges[0]
            this.url = require("../../../static/2.jpg")
        }else if(title == "Porta400"){
            this.infor = this.$page.allIosconcept.edges[0]
            this.url = require("../../../static/1.jpg")
        }else{
            this.infor = this.$page.allDgraff.edges[0]
            this.url = require("../../../static/3.jpg")
        }
    },
}
</script>

<style>
.detail{
    padding: 4rem;
}
.title{
    color: orange;
    font-size: 4rem;
}
.introductionToThe{
    display: flex;
    justify-content: space-between;
    width: 20rem;
    margin-top: 4rem;
    margin-bottom: 4rem;
    color: orange;
}
.label{
    font-weight: bold;
}
.m40{
    margin-top: 4rem;
    margin-bottom: 4rem;
}
.detailImg img{
    width: 40rem;
}
</style>