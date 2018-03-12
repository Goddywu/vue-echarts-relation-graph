<template>
<div>
  <div id="echarts" />
</div>
</template>

<script>
import { drawChart } from '@/assets/js/RelationGraph'
export default {
  name: 'RelationGraph',
  data () {
    return {
        dataInput: {
            style: {
              height: 800
            },
            node: [
                {
                    name: '徐贱云',
                    category: '男性'
                }, {
                    name: '冯可梁',
                    category: '女性',
                }, {
                    name: '邓志荣',
                    category: '未知',
                    draggable: false  //可特殊添加
                }
            ],
            relation: [
                {
                    source: 0,
                    target: 1,
                    value: '丈夫'
                }, {
                    source: 1,
                    target: 0,
                    value: '妻子'
                }, {
                    source: 1,
                    target: 2,
                    value: '朋友'
                }, {
                    source: 0,
                    target: 2,
                    value: '同学'
                }
            ], 
            node_category: [
                {
                    name: '男性',
                    itemStyle: {
                        normal: {
                            color: "blue",
                        }
                    }
                }, {
                    name: '女性',
                    itemStyle: {
                        normal: {
                            color: "pink",
                        }
                    }
                }, {
                    name: '未知',
                    itemStyle: {
                        normal: {
                            color: "#FFA500",
                        }
                    }
                }
            ],
            relation_category: {
                "朋友": {
                    lineStyle: {
                        normal: {
                            opacity: 0.9,
                            width: 2,
                            curveness: 0,
                            type:'solid', //'solid''dashed''dotted'
                            color: 'rgba(0,0,0,0.6)'
                        },
                        emphasis:{
                            color:'rgba(0,0,0,1)'
                        }
                    }
                    //TODO:可添加 隐藏的hideLineStyle ...
                }, 
                "丈夫": {
                    lineStyle: {
                        normal: { curveness: 0.4 } //可设置为负值
                    }
                }, 
                "妻子": {
                    lineStyle: {
                        normal: { curveness: 0.4 }
                    }
                }
                //"同学": {}  不添加则是默认
            },
            legend: ["男性", "女性", '未知']
        }
    }
  },
  mounted () {
    setTimeout( () => {
      drawChart(this.dataInput)
    }, 300)
  },
  methods: {

  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
</style>
