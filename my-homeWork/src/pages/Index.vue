<template>
  <Layout>
    <!-- Learn how to use images here: https://gridsome.org/docs/images -->
    <div class="row-center size2">
      <div>Simplicity. Aesthetics.</div>
      <div>Value.</div>
    </div>
    <div class="row-center mt10">
      <div>Hi there, I'm an independent Digital Designer & Art</div>
      <div>Director focused on digital design for brands that like to</div>
      <div>have fun.</div>
    </div>

    <!-- 图片列表 -->
    <div class="mt40">
      <div v-for="(item,index) in imgList" :key="index" class="mt40 cusour" @click="imgDetail(item.title)">
        <div class="row-center img">
          <img :src="item.url" alt />
        </div>
        <div class="row-center">
          <div class="mt10">{{item.title}}</div>
          <div class="mt10">{{item.des}}</div>
        </div>
      </div>
    </div>

    <!-- 方格列表 -->
    <div class="mt40">
      <div class="grid">
        <div class="gridItem cusour" v-for="edges in $page.journal.edges" :key="edges.node.id">
            <span>
                {{
                    edges.node.title
                }}
            </span>
        </div>
      </div>
    </div>

    <div class="mt40 mb40">
        Copyright © 2021
    </div>
  </Layout>
</template>

<page-query>
query{
    journal:allJournal{
    edges{
      node{
        id,
        title
      }
    }
 }
}
</page-query>

<script>
export default {
  metaInfo: {
    title: "Home"
  },
  data() {
    return {
      imgList: [
        {
          url: require("../../static/1.jpg"),
          title: "Banana",
          des: "pink photo"
        },
        {
          url: require("../../static/2.jpg"),
          title: "Pineapple",
          des: "pink photo"
        },
        {
          url: require("../../static/3.jpg"),
          title: "Ice Ceeam",
          des: "pink photo"
        },
        {
          url: require("../../static/1.jpg"),
          title: "Porta400",
          des: "pink photo"
        }
      ]
    };
  },
  methods: {
      imgDetail(title){
        console.log(title)  
        this.$router.push({
            path:'/detail/' + title,
        })
      }
  }
};
</script>

<style>
.home-links a {
  margin-right: 1rem;
}
.size2 {
  font-size: 2rem;
}
.row-center {
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
}
.mt10 {
  margin-top: 2rem;
}
.img img {
  width: 50rem;
  height: 30rem;
}
.mt40 {
  margin-top: 4rem;
}
.mt10 {
  margin-top: 1rem;
}
.grid{
    display: flex;
}
.gridItem{
    flex: 1;   
    border: .1rem solid #efefef;
    width: 30rem;
    padding: 2rem 0;
    text-align: center;
}
.mb40{
    margin-bottom: 4rem;
}
.cusour{
    cursor: pointer;
}
</style>
