/** 外部引入方法 */
import echarts from 'echarts'
export {drawChart}

/** 获取父组件元素 */
var chart
// 基于准备好的dom，初始化echarts实例
var myChart

/** 全局变量 */
var dataInput //输入数据
var option //全局Option配置
var legend //图标
var node //节点
var relation //线段
var category //类别样式

/** 核心方法 */
var drawChart = function(data) {
	dataInput = data;
	//dataInput数据处理
	handle_dataInput()
	//初始化option
	initOption()
	//初始化折线图
	initChart()
	// 绘制图表
	setTimeout(() => {
		myChart.setOption(option);
	},300)
}

/** 数据处理 */
var handle_dataInput = function() {
    legend = {
        x: "center",
        show: true,
        data: dataInput.legend
    }
    node = dataInput.node

    //关系
    relation = dataInput.relation
    for (var i in relation) {
    	for (var j in dataInput.relation_category) {
	    	if (relation[i].value == j) {
	    		relation[i].lineStyle = dataInput.relation_category[j].lineStyle
	    		break
	    	}
	    }
    }

    category = dataInput.node_category
}

/** 初始化option */
var initOption = function() {
	option = {
	    title: {
	        text: ''
	    },
	    tooltip: {
	    	show: true
	    },
	    animationDurationUpdate: 1500,
	    animationEasingUpdate: 'quinticInOut',
	    label: {
	        normal: {
	            show: true,
	            textStyle: {
	                fontSize: 12
	            },
	        }
	    },
	    legend: legend,
	    series: [
	        {
	            type: 'graph',
	            layout: 'force',
	            symbolSize: 45,
	            categories: category, //类别样式
	            force: {
	                repulsion: 1000
	            },
	            data: node,  //点
	            links: relation,  //边
	            draggable: true, //默认是否可拖动
	            label: {  //默认节点样式
	                normal: {
	                    show: true,
	                    textStyle: {
	                        fontSize: 12
	                    }
	                }
	            },
	            edgeSymbol:['none','none'],
	            edgeSymbolSize: [20, 20],//边两端的标记大小
	            edgeLabel: {
	                normal: {
	                    show: true,
	                    textStyle: {
	                        fontSize: 10
	                    },
	                    formatter: "{c}"
	                }
	            },
	            lineStyle: {
	                normal: {
	                    opacity: 0.9,
	                    width: 1,
	                    curveness: 0
	                }
	            },
	            force:{
	            	repulsion: 800,//节点之间的斥力因子
		            gravity: 0.4,//节点受到中心的引力因子
		            edgeLength: 300,//节点之间的距离
		            // layoutAnimation:true,//迭代动画
	            },
	            focusNodeAdjacency: true,//是否在鼠标移到节点上的时候突出显示节点以及节点的边和邻接节点。
	            roam: true,//如果只想要开启缩放或者平移，可以设置成 'scale' 或者 'move'。设置成 true 为都开启
	            nodeScaleRatio: 0.6//鼠标缩放比例
	        }
	    ],
	    animation: false,
	    animationThreshold: 2000,//是否开启动画的阈值，当单个系列显示的图形数量大于这个阈值时会关闭动画。
	    animationDuration: 1000, //初始动画的时长，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的初始动画效果
	    animationEasing: 'cubicOut', //初始动画的缓动效果。
	    animationDelay: 0, //初始动画的延迟，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的初始动画效果
	    animationDurationUpdate: 1500,//数据更新动画的时长。
	    animationEasingUpdate: 'quinticInOut',//数据更新动画的缓动效果。
	    animationDelayUpdate: 0 //数据更新动画的延迟，支持回调函数，可以通过每个数据返回不同的 delay 时间实现更戏剧的更新动画效果。
	}
}

/** 初始化折线图 */
var initChart = function() {
	var height = dataInput.style.height
	document.getElementById('echarts').innerHTML =
		'<div id="myChart" style="width:100%;height:'
		+ height +'px;"></div>'
	chart = document.getElementById('myChart')
	myChart = echarts.init(chart)
	chart.style.height = height + 'px'
}



