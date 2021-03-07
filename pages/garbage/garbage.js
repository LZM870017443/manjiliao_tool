// pages/garbage/garbage.js
import {
    getRefuse_classification,
} from '../../request/index.js'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        classifications: "此处显示查询结果",
    },
    requestparmas: {
        keyword: ""
    },
    getname(e) {
        console.log(e)
        let keyword = e.detail.value;
        this.requestparmas.keyword = keyword;
    },
    // 获取垃圾分类
    async getRefuse_classifications() {
        let classifications = await getRefuse_classification(this.requestparmas);
        console.log(classifications.data)
        if (classifications.data.code === 200) {
            classifications = classifications.data.data
        } else {
            classifications = classifications.data.msg
        }
        // classifications = classifications.data
        this.setData({
            classifications
        })
    },
    // 点击查询垃圾
    getClassifications() {
        this.getRefuse_classifications()
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

    },

    /**
     * 生命周期函数--监听页面初次渲染完成
     */
    onReady: function() {

    },

    /**
     * 生命周期函数--监听页面显示
     */
    onShow: function() {

    },

    /**
     * 生命周期函数--监听页面隐藏
     */
    onHide: function() {

    },

    /**
     * 生命周期函数--监听页面卸载
     */
    onUnload: function() {

    },

    /**
     * 页面相关事件处理函数--监听用户下拉动作
     */
    onPullDownRefresh: function() {

    },

    /**
     * 页面上拉触底事件的处理函数
     */
    onReachBottom: function() {

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})