// pages/history/history.js
import { getdays, } from '../../request/index.js'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        today: [],
        todaytime: "",
        historical_event: [],
        scrollTop: 0
    },
    requestparmas: {
        pagenum: "1",
        pagesize: "10",
        sort: "rand",
        appkey: "d89a3e9af0d8e97c"
    },
    // 获取历史上的今天
    async gettoday() {
        var myDate = new Date();
        let todaytime = myDate.toLocaleDateString();
        let month = myDate.getMonth() + 1;
        let day = myDate.getDate()
        let moday = myDate.getFullYear() + "/" + (myDate.getMonth() + 1) + "/" + myDate.getDate();
        moday = moday.substring(5, moday.length)
        console.log(month, day)
        this.requestparmas.month = month
        this.requestparmas.day = day
        let historical_event = await getdays(this.requestparmas);
        // let historical_event = wx.getStorageSync("historical_event", historical_event);
        historical_event = historical_event.data.result
        wx.setStorageSync("historical_event", historical_event);
        console.log(historical_event)
        this.setData({
                todaytime,
                historical_event
            })
            // console.log(this.data.historical_event)

    },
    // 一键回顶
    ChangscrollTop(e) {
        console.log(e)
        let scrollTop = e.detail.scrollTop;
        this.setData({
            scrollTop
        })
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {
        this.gettoday()
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