// pages/index/index.js
import { getjoke, getdays, } from '../../request/index.js'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        // tabs: [{
        //         id: 0,
        //         name: "笑话大全",
        //         isActive: true
        //     },
        //     {
        //         id: 2,
        //         name: "随机一言",
        //         isActive: false
        //     },
        //     {
        //         id: 3,
        //         name: "历史上的今天",
        //         isActive: false
        //     },

        // ],
        joke: [],
        today: [],
        // yan: [],
        // dujitangs: "",
        index: 0,
        todaytime: "",
        historical_event: [],
        isPull: false,
        scrollTop: 0,
        evt: ""
    },
    requestparmas: {
        pagenum: "1",
        pagesize: "10",
        sort: "rand",
        appkey: "d89a3e9af0d8e97c"
    },
    requestparmas2: {
        month: "",
        day: "",
        appkey: "d89a3e9af0d8e97c"
    },
    requestparmas3: {
        cn_to_unicode: "1",
        limit: "5",
        token: "92b52448b8a43d8108340635ffc90d61",
        datatype: "json",

    },
    handleTap(e) {
        // console.log('@@ tap', e)
        this.setData({
            evt: e
        })
    },
    // 点击tab事件
    handerTabItemChang(e) {
        // console.log(e)
        var that = this
        const { index } = e.detail
        this.setData({ index })
        console.log(index)
        const { tabs } = this.data
        tabs.forEach((v, i) => {
            i === index ? v.isActive = true : v.isActive = false;
            this.setData({ tabs })
        })
        if (index === 0) {
            that.getjoke()
        }
        if (index === 1) {
            // that.getyans();
            // that.getdujitangs()
        }
        if (index === 2) {
            that.gettoday()
        }
    },
    // 获取笑话
    async getjoke() {
        // this.requestparmas.appkey = "d89a3e9af0d8e97c"
        let joke = await getjoke(this.requestparmas3);
        // console.log(this.requestparmas)
        // let joke = wx.getStorageSync("joke", joke);
        joke = joke.data.Result
            // console.log(joke)
        this.setData({
            joke: [...this.data.joke, ...joke]
        });
        // wx.stopPullDownRefresh()

    },
    // 下拉获取笑话
    async getpulldownjoke() {
        if (!this.data.isPull) {
            // this.isPull = true;
            this.setData({
                isPull: true
            })
            console.log(this.data.isPull)
                // this.requestparmas.key = "b4bc7aa25f44dc4e85bcd6970cd62098"
                // let key = this.requestparmas.key
            let joke = await getjoke(this.requestparmas3);
            joke = joke.data.Result
            console.log(joke)
            this.setData({
                joke,
                isPull: false
            });
            console.log(this.data.isPull)
        }

        // wx.stopPullDownRefresh()

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
        this.getjoke();
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
    bindrefresherrefresh() {
        console.log("下拉了");
        console.log("下拉了");
        let index = this.data.index
        console.log(index)
        this.getpulldownjoke();
        wx.stopPullDownRefresh()
    },
    onPullDownRefresh: function() {

    },
    // 上拉到底
    bindscrolltolower() {
        console.log("到底了");
        let index = this.data.index
        console.log(index)
        if (index === 0) {
            this.getjoke()
        }
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