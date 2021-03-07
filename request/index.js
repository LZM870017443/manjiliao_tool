import { request } from "../request/ajax.js";
// 获取笑话
export const getjoke = (requestparmas) => request({ url: "https://api.djapi.cn/joke/get", data: requestparmas, header: { 'content-type': 'text/plain' } }).then((result) => {
    console.log(requestparmas)
    return result
}).catch((err) => {
    console.log(err)
});
// 获取加解密文本
export const getText = (requestparmas) => request({ url: "https://api.djapi.cn/encrypt/get", data: requestparmas, header: { 'content-type': 'text/plain' } }).then((result) => {
    console.log(requestparmas)
    return result
}).catch((err) => {
    console.log(err)
});
// 获取随机一言
export const getyan = () => request({ url: "https://abc.mcloc.cn/abc/api/words/" }).then((result) => {
    // console.log(result)
    return result
}).catch((err) => {
    console.log(err)
});
// 获取毒鸡汤
export const getdujitang = () => request({ url: "https://v1.alapi.cn/api/soul" }).then((result) => {
    // console.log(result)
    return result
}).catch((err) => {
    console.log(err)
});
// 获取历史上的今天
export const getdays = (requestparmas) => request({ url: 'https://api.jisuapi.com/todayhistory/query', data: requestparmas }).then((result) => {
    // console.log(result)
    return result
}).catch((err) => {
    console.log(err)
});
// 获取图片
export const getImages = (requestparmas) => request({ url: "https://api.btstu.cn/sjbz/api.php", data: requestparmas }).then((result) => {
    return result
}).catch((err) => {
    console.log(err)
});
// 获取动漫图图片
export const getImagebiyings = () => request({ url: "https://bing.ioliu.cn/v1/rand?type=json" }).then((result) => {
    // console.log(result)
    return result
}).catch((err) => {
    console.log(err)
});
// 获取垃圾分类
export const getRefuse_classification = (requestparmas) => request({ url: "https://tenapi.cn/laji/", data: requestparmas }).then((result) => {
    // console.log(goods_id)
    return result
}).catch((err) => {
    console.log(err)
});

// 获取今天农历信息
export const getLunarCalendar = (requestparmas) => request({ url: "https://api.jisuapi.com/huangli/date", data: requestparmas }).then((result) => {
    // console.log(result)
    return result
}).catch((err) => {
    console.log(err)
});
// 获取藏头诗
export const getIdiom = (requestparmas) => request({ url: "https://api.jisuapi.com/chengyu/detail", data: requestparmas }).then((result) => {
    // console.log(result)
    return result
}).catch((err) => {
    console.log(err)
});