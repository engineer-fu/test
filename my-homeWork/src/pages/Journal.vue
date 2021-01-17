<template>
  <Layout>
    <div class="h1">a wise person once said...</div>
    <div>
        <div class="gridItem cusour" v-for="edges in $page.journal.edges" :key="edges.node.id">
            <div>
                {{
                    edges.node.title
                }}
            </div>
            <div>
                {{
                    edges.node.excerpt
                }}
            </div>
        </div>
    </div>
    <div class="m40">
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
        title,
        excerpt
      }
    }
 }
}
</page-query>
<script>
export default {
  metaInfo: {
    title: 'Journal'
  }
}
</script>
<style scoped>
.h1{
    font-size: 3rem;
    color: #efefef;
    text-align: center;
}
.gridItem{
    width: 80%;
    text-align: left;
    border: none;
    height: 4rem;
    padding: 3rem 2rem;
}
.gridItem:hover{
    background: #cfcfcf;
}
.m40{
    margin-top: 4rem;
    margin-bottom: 4rem;
}
</style>