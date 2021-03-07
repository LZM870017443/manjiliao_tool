// pages/garbage/garbage.js
import {
    getIdiom,
} from '../../request/index.js'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        Idiomjieshi: ""
    },
    requestparmas: {
        chengyu: "",
        appkey: "d89a3e9af0d8e97c"
    },
    getIdiom(e) {
        // console.log(e);
        setTimeout(() => {
            let chengyu = e.detail.value;
            this.requestparmas.chengyu = chengyu;
        }, 500);

    },
    async getIdiomjieshi() {
        let Idiomjieshi = await getIdiom(this.requestparmas);
        // console.log(Idiomjieshi);
        Idiomjieshi = Idiomjieshi.data
        console.log(Idiomjieshi.status)
        if (Idiomjieshi.status != 0) {
            // this.Idiomjieshi = Idiomjieshi.msg
            console.log("进来了一")
            this.setData({
                    Idiomjieshi
                })
                // console.log(Idiomjieshi)
        } else {
            console.log("进来了二")
                // this.Idiomjieshi = Idiomjieshi.result;
            this.setData({
                Idiomjieshi
            })
        }
        console.log(Idiomjieshi)
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