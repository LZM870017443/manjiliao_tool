// pages/index/index.js
import { getjoke, getyan, getdays, getdujitang } from '../../request/index.js'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        tabs: [{
                id: 0,
                name: "笑话大全",
                isActive: true
            },
            {
                id: 2,
                name: "随机一言",
                isActive: false
            },
            {
                id: 3,
                name: "历史上的今天",
                isActive: false
            },

        ],
        joke: [],
        today: [],
        yan: [],
        dujitangs: "",
        index: 0,
        todaytime: "",
        historical_event: [],
        isPull: false,
        scrollTop: 0
    },
    requestparmas: {
        key: "",
        date: ""
    },
    // // 返回顶部
    // scorlltop() {
    //     wx.pageScrollTo({
    //         scrollTop: 0,
    //         duration: 300
    //     });

    // },
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
            that.getyans();
            that.getdujitangs()
        }
        if (index === 2) {
            that.gettoday()
        }
    },
    // 获取笑话
    async getjoke() {
        this.requestparmas.key = "b4bc7aa25f44dc4e85bcd6970cd62098"
        let key = this.requestparmas.key
        let joke = await getjoke(key);
        // let joke = wx.getStorageSync("joke", joke);
        joke = joke.data.result
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
            this.requestparmas.key = "b4bc7aa25f44dc4e85bcd6970cd62098"
            let key = this.requestparmas.key
            let joke = await getjoke(key);
            joke = joke.data.result
            console.log(joke)
            this.setData({
                joke,
                isPull: false
            });
            console.log(this.data.isPull)
        }

        // wx.stopPullDownRefresh()

    },
    // 获取随机一言
    async getyans() {
        let yan = await getyan();
        // console.log(today)
        yan = yan.data
        console.log(yan)
        this.setData({ yan });
    },
    // 获取毒鸡汤
    async getdujitangs() {
        let dujitangs = await getdujitang();
        dujitangs = dujitangs.data.data
        console.log(dujitangs)
        this.setData({
            dujitangs
        })
    },
    // 获取历史上的今天
    async gettoday() {
        this.requestparmas.key = "7231e35cf4d5c6f7bdf61ae6918b9495"
        var myDate = new Date();
        let todaytime = myDate.toLocaleDateString();
        let moday = myDate.getFullYear() + "/" + (myDate.getMonth() + 1) + "/" + myDate.getDate();
        moday = moday.substring(5, moday.length)
            // console.log(moday)

        this.requestparmas.date = moday

        let historical_event = await getdays(this.requestparmas);
        // let historical_event = wx.getStorageSync("historical_event", historical_event);
        historical_event = historical_event.data.result
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
        this.getjoke()

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
        // console.log("到底了");
        // let index = this.data.index
        // console.log(index)
        // if (index === 0) {
        //     this.getjoke()
        // }

    },

    /**
     * 用户点击右上角分享
     */
    onShareAppMessage: function() {

    }
})