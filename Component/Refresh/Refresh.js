// Component/Refresh/Refresh.js
import { getImages } from '../../request/index.js'
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        activeTab: {
            type: Number,
            value: 0
        }
    },
    /**
     * 组件的初始数据
     */
    data: {
        // imageurl: ""
        requestparmas: {
            method: "mobile",
            lx: "meizi",
            format: "json"
        },
    },

    /**
     * 组件的方法列表
     */
    methods: {
        async getImage() {
            // console.log(this.data.indexz)
            // this.data.requestparmas.msg = this.data.activeTab;
            let index = this.data.activeTab;
            if (index === 0) {
                this.data.requestparmas.lx = "fengjing"
            }
            if (index === 1) {
                this.data.requestparmas.lx = "dongman"
            }
            if (index === 2) {
                this.data.requestparmas.lx = "meizi"
            }
            if (index === 3) {
                this.data.requestparmas.lx = "suiji"
            }
            console.log(this.data.requestparmas.lx)
                // this.setData({
                //     msg
                // })
            let res = await getImages(this.data.requestparmas);

            // res = res.data
            res = res.data.imgurl
            let imageurl = res
                // console.log(res)
                // let imageurl = res.substring(5, res.length - 1);
                // this.setData({
                //     imageurl
                // })
            this.triggerEvent("imageurl", { imageurl })
                // console.log(imageurl)

        },
        // getImage();
        getImagess() {
            this.getImage()
        }
    }
})