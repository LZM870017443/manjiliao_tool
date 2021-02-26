// Component/Refresh/Refresh.js
import { getImages } from '../../request/index.js'
Component({
    /**
     * 组件的属性列表
     */
    properties: {
        indexz: {
            type: Number,
            value: 1
        }
    },
    /**
     * 组件的初始数据
     */
    data: {
        // imageurl: ""
        requestparmas: {
            msg: ""
        },
    },

    /**
     * 组件的方法列表
     */
    methods: {
        async getImage() {
            // console.log(this.data.indexz)
            this.data.requestparmas.msg = this.data.indexz;
            console.log(this.data.requestparmas.msg)
                // this.setData({
                //     msg
                // })
            let res = await getImages(this.data.requestparmas);

            res = res.data
                // console.log(res)
            let imageurl = res.substring(5, res.length - 1);
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