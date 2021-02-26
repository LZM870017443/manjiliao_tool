// pages/tool/tool.js
import {
    getRefuse_classification,
    getLunarCalendar,
    getAcrostic
} from '../../request/index.js'
Page({

    /**
     * 页面的初始数据
     */
    data: {
        classifications: "",
        LunarCalendars: [],
        acrostic: ""
    },
    requestparmas: {
        name: ""
    },
    requestparmas2: {
        msg: "",
        a: "",
        b: ""
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
    // 获取今日农历
    async getLunarCalendars() {
        let LunarCalendars = await getLunarCalendar()

        LunarCalendars = LunarCalendars.data
            // LunarCalendars = LunarCalendars.split("")
            // console.log(LunarCalendars);
        LunarCalendars.replace("\n", "<br>");
        this.setData({
            LunarCalendars
        })
    },
    // 获取垃圾输入值
    getname(e) {
        console.log(e)
        let name = e.detail.value;
        this.requestparmas.name = name;
    },
    // 点击查询垃圾
    getClassifications() {
        this.getRefuse_classifications()
    },
    // 获取藏头诗
    async getAcrostics() {
        let acrostic = await getAcrostic(this.requestparmas2);
        // console.log(res)
        acrostic = acrostic.data
            // console.log(acrostic.split("\n"));
            // console.log(acrostic);
            // acrostic = acrostic.replace("\n\n", "<br>");
        console.log(acrostic);
        this.setData({
            acrostic
        });
        this.requestparmas2.msg = "",
            this.requestparmas2.a = "",
            this.requestparmas2.b = ""


    },
    // 获取msg
    inputacrostic(e) {
        let msg = e.detail.value
        this.requestparmas2.msg = msg;

    },
    // 获取藏头尾
    cangtouwei(e) {
        // console.log(e)
        let a = e.currentTarget.dataset.nun;
        this.requestparmas2.a = a
    },
    // 获取五言七言
    wuqiyan(e) {
        // console.log(e)
        let b = e.currentTarget.dataset.num
        this.requestparmas2.b = b
    },
    // 生成藏头诗
    create() {
        let reg = /^[\u4E00-\u9FA5]+$/;
        let msg = this.requestparmas2.msg
            // console.log(reg.test(msg))
            // console.log(msg)
        if (msg && reg.test(msg)) {
            if (this.requestparmas2.a) {
                if (this.requestparmas2.b) {
                    this.getAcrostics();
                } else {
                    wx.showToast({
                        title: '请选择五言或七律',
                        icon: 'none',
                        image: '',
                        duration: 1500,
                        mask: false,
                        success: (result) => {

                        },
                        fail: () => {},
                        complete: () => {}
                    });
                }
            } else {
                wx.showToast({
                    title: '请选择藏头或藏尾',
                    icon: 'none',
                    image: '',
                    duration: 1500,
                    mask: false,
                    success: (result) => {

                    },
                    fail: () => {},
                    complete: () => {}
                });
            }
        } else {
            wx.showToast({
                title: '请输入内容且是中文',
                icon: 'none',
                image: '',
                duration: 1500,
                mask: false,
                success: (result) => {

                },
                fail: () => {},
                complete: () => {}
            });

        }




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
        this.getLunarCalendars();
        this.setData({
                acrostic: ""
            })
            // this.requestparmas2.msg = ""
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