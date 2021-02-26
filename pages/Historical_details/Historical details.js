// pages/Historical_details/Historical details.js
import { gethisDeatils } from '../../request/index.js'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        hisDeatil: [],
        lz_load: 'https://img.imgdb.cn/item/603642ae5f4313ce252a6ec5.gif'
    },
    requestparmas: {
        key: "7231e35cf4d5c6f7bdf61ae6918b9495",
        e_id: ""
    },
    /**
     * 生命周期函数--监听页面加载
     */
    onLoad: function(options) {

        let e_id = options.e_id
        this.requestparmas.e_id = e_id
        console.log(e_id)
    },
    async gethisDeatil() {
        let hisDeatil = await gethisDeatils(this.requestparmas);
        // let hisDeatil = wx.getStorageSync("hisDeatil", hisDeatil);
        hisDeatil = hisDeatil.data.result[0]
            // wx.setStorageSync("hisDeatil", hisDeatil);

        console.log(hisDeatil)
        this.setData({
            hisDeatil
        })
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
        this.gethisDeatil()
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