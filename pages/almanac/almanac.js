// pages/almanac/almanac.js
import {
    getLunarCalendar
} from '../../request/index.js'
Page({
    /**
     * 页面的初始数据
     */
    data: {
        LunarCalendars: {}
    },
    requestparmas: {
        year: "",
        month: "",
        day: "",
        appkey: "d89a3e9af0d8e97c"
    },
    // 获取今日农历
    async getLunarCalendars() {

        var myDate = new Date();
        console.log(myDate.getFullYear)
        let year = myDate.getFullYear();
        let month = myDate.getMonth() + 1;
        let day = myDate.getDate()

        this.requestparmas.year = year
        this.requestparmas.month = month
        this.requestparmas.day = day
        console.log(year, month, day)
        let LunarCalendars = await getLunarCalendar(this.requestparmas)
            // console.log(LunarCalendars);
        LunarCalendars = LunarCalendars.data.result
        console.log(LunarCalendars);
        // if (LunarCalendars == {}) {
        // let LunarCalendars = {
        //         "year": "2015",
        //         "month": "10",
        //         "day": "27",
        //         "yangli": "公元2015年10月27日",
        //         "nongli": "农历二〇一五年九月十五",
        //         "star": "天蝎座",
        //         "taishen": "厨灶碓外西南",
        //         "wuxing": "涧下水",
        //         "chong": "冲（庚午）马",
        //         "sha": "煞南",
        //         "shengxiao": "羊",
        //         "jiri": "天牢（黑道）满日",
        //         "zhiri": "天牢（黑道凶日）",
        //         "xiongshen": "灾煞 天火 大煞 归忌 天牢 触水龙",
        //         "jishenyiqu": "天德 月德 时德 福德 民日 天巫 普护 鸣犬对",
        //         "caishen": "西南",
        //         "xishen": "西南",
        //         "fushen": "正东",
        //         "suici": [
        //             "乙未年",
        //             "丙戌月",
        //             "丙子日"
        //         ],
        //         "yi": [
        //             "纳采",
        //             "成服"
        //         ],
        //         "ji": [
        //             "入宅",
        //             "上梁",
        //             "谢土"
        //         ],
        //         "eweek": "TUESDAY",
        //         "emonth": "October",
        //         "week": "二"
        //     }
        // this.setData({
        //     LunarCalendars,
        //     day
        // })
        // }

        console.log(LunarCalendars);
        // let LunarCalendars = wx.getStorageSync("LunarCalendars", LunarCalendars);
        this.setData({
            LunarCalendars,
            day
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
        this.getLunarCalendars()
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