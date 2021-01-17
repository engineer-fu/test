// Server API makes it possible to hook into various parts of Gridsome
// on server-side and add custom data to the GraphQL data layer.
// Learn more: https://gridsome.org/docs/server-api/

// Changes here require a server restart.
// To restart press CTRL + C in terminal and run `gridsome develop`

const axios = require('axios');

module.exports = function (api) {
    api.loadSource(async ({
        addCollection
    }) => {
        const collection = addCollection('Journal')

        //获取 Journal 列表
        const journalData = await axios.get('https://gridsome-forestry.netlify.app/assets/data/journal/index.json')
        let journalList = journalData.data.data.posts.edges
        journalList.forEach((item,index) => {
            collection.addNode({
                id: (index+1),
                title: item.node.title,
                excerpt:item.node.excerpt,
            })
        });

        const collectionBanana = addCollection('banana')    
        const banana = await axios.get('https://gridsome-forestry.netlify.app/assets/data/projects/chelsea-landmark/index.json')
        let bananadetail = banana.data.data.post
        collectionBanana.addNode({
            categories: bananadetail.categories,
            title: bananadetail.title,
            date:bananadetail.date,
        })

        const collectionSunk = addCollection('sunk')      
        const sunk = await axios.get('https://gridsome-forestry.netlify.app/assets/data/projects/sunk/index.json')
        let sunkdetail = sunk.data.data.post
        collectionSunk.addNode({
            categories: sunkdetail.categories,
            title: sunkdetail.title,
            date:sunkdetail.date,
        })

        const collectionDgraff = addCollection('dgraff')
        const dgraff = await axios.get('https://gridsome-forestry.netlify.app/assets/data/projects/3d-graff/index.json')
        let dgraffdetail = dgraff.data.data.post
        collectionDgraff.addNode({
            categories: dgraffdetail.categories,
            title: dgraffdetail.title,
            date:dgraffdetail.date,
        })

        const collectionIosconcept = addCollection('iosconcept')  
        const iosconcept = await axios.get('https://gridsome-forestry.netlify.app/assets/data/projects/ios-concept/index.json')
        let iosconceptdetail = iosconcept.data.data.post
        collectionIosconcept.addNode({
            categories: iosconceptdetail.categories,
            title: iosconceptdetail.title,
            date:iosconceptdetail.date,
        })

    })

    api.createPages(({
        createPage
    }) => {
        // Use the Pages API here: https://gridsome.org/docs/pages-api/
    })
}