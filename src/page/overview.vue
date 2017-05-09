<template>
	<div>
		<el-row>
		  <el-col :span="6" class="overview-item-padding">
		  	<el-row>
		  		<el-col :span="24" class="overview-item">
		  			<div class="chart-container">
		  				<charts :options="line"></charts>
		  			</div>
		  		</el-col>
		  		<el-col :span="24" class="overview-item">
		  			<div class="chart-container">
		  			<charts :options="bar"></charts>
		  			</div>
		  		</el-col>
		  		<el-col :span="24" class="overview-item">
		  			<div class="chart-container">
		  			<charts :options="pie"></charts>
		  			</div>
		  		</el-col>
		  		<el-col :span="24" class="overview-item">
		  			<div class="chart-container">
		  			<charts :options="pie_radius"></charts>
		  			</div>
		  		</el-col>
		  	</el-row>
		  </el-col>
		  <el-col :span="6" class="overview-item-padding">
		  	<el-row>
		  		<el-col :span="24" class="overview-item"></el-col>
		  		<el-col :span="24" class="overview-item"></el-col>
		  		<el-col :span="24" class="overview-item"></el-col>
		  		<el-col :span="24" class="overview-item"></el-col>
		  	</el-row>
		  </el-col>
		  <el-col :span="6" class="overview-item-padding">
		  	<el-row>
		  		<el-col :span="24" class="overview-item"></el-col>
		  		<el-col :span="24" class="overview-item"></el-col>
		  		<el-col :span="24" class="overview-item"></el-col>
		  		<el-col :span="24" class="overview-item"></el-col>
		  	</el-row>
		  </el-col>
		  <el-col :span="6" class="overview-item-padding">
		  	<el-row>
		  		<el-col :span="24" class="overview-item"></el-col>
		  		<el-col :span="24" class="overview-item"></el-col>
		  		<el-col :span="24" class="overview-item"></el-col>
		  		<el-col :span="24" class="overview-item"></el-col>
		  	</el-row>
		  </el-col>
		</el-row>
	</div>
</template>

<script>
	import SdsChart from 'vue-echarts/components/ECharts.vue'
	export default {
		data: function() {
			return {
				line: {
	                color:["#20a0ff","#13CE66","#F7BA2A","#FF4949"],
	                title: {
	                    text: '曲线图'
	                },
	                xAxis: {
	                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
	                },
	                yAxis:{},
	                series: [
	                    {
	                        name: "销量",
	                        type: "line",
	                        data: [5, 20, 36, 10, 10, 20]
	                    }
	                ]
	            },
	            bar: {
	                color:["#20a0ff","#13CE66","#F7BA2A","#FF4949"],
	                title: {
	                    text: '柱状图'
	                },
	                xAxis: {
	                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋", "袜子"]
	                },
	                yAxis:{},
	                series: [
	                    {
	                        name: "销量",
	                        type: "bar",
	                        data: [5, 20, 36, 10, 10, 20]
	                    }
	                ]
	            },
	            pie: {
	                color:["#20a0ff","#13CE66","#F7BA2A","#FF4949","#61a0a8"],
	                title : {
	                    text: '饼状图',
	                    x:'center'
	                },
	                tooltip : {
	                    trigger: 'item',
	                    formatter: "{a} <br/>{b} : {c} ({d}%)"
	                },
	                legend: {
	                    orient: 'vertical',
	                    left: 'left',
	                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋"]
	                },
	                series : [
	                    {
	                        name: '销量',
	                        type: 'pie',
	                        radius : '55%',
	                        center: ['50%', '50%'],
	                        data:[
	                            {value:335, name:'衬衫'},
	                            {value:310, name:'羊毛衫'},
	                            {value:234, name:'雪纺衫'},
	                            {value:135, name:'裤子'},
	                            {value:548, name:'高跟鞋'}
	                        ],
	                        itemStyle: {
	                            emphasis: {
	                                shadowBlur: 10,
	                                shadowOffsetX: 0,
	                                shadowColor: 'rgba(0, 0, 0, 0.5)'
	                            }
	                        }
	                    }
	                ]
	            },
	            pie_radius:{
	                color:["#20a0ff","#13CE66","#F7BA2A","#FF4949","#61a0a8"],
	                title : {
	                    text: '环形图',
	                    x:'center'
	                },
	                tooltip : {
	                    trigger: 'item',
	                    formatter: "{a} <br/>{b} : {c} ({d}%)"
	                },
	                legend: {
	                    orient: 'vertical',
	                    left: 'left',
	                    data: ["衬衫", "羊毛衫", "雪纺衫", "裤子", "高跟鞋"]
	                },
	                series : [
	                    {
	                        name: '销量',
	                        type: 'pie',
	                        radius : ['40%','60%'],
	                        data:[
	                            {value:335, name:'衬衫'},
	                            {value:310, name:'羊毛衫'},
	                            {value:234, name:'雪纺衫'},
	                            {value:135, name:'裤子'},
	                            {value:548, name:'高跟鞋'}
	                        ],
	                        itemStyle: {
	                            emphasis: {
	                                shadowBlur: 10,
	                                shadowOffsetX: 0,
	                                shadowColor: 'rgba(0, 0, 0, 0.5)'
	                            }
	                        }
	                    }
	                ]
	            }
			}
		    
		},
		components: {
			charts: SdsChart
		}
	}
</script>

<style>
	.overview-item{
		margin:5px 0;
		padding: 10px;
		height: 190px;
		background: #fff;
		border:1px solid #d9dada;
		border-radius: 5px;
	}
	.overview-item-padding{
		padding:0 5px;
	}
	.echarts, .chart-container {
	  height: 100% !important;
	  width: 100% !important;
	}
</style>