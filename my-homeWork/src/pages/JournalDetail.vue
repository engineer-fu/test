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
<script>



export default {
    data() {
        return {
            infor: {
                title:'',
                date:"",
                excerpt:[]
            },
            url:"",
        }
    },
    mounted () {
        let id = this.$router.query.id || 0;
        let arr = this.$page.journal.edges;
        arr.forEach(element => {
            if(element == id){

            }
        });
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