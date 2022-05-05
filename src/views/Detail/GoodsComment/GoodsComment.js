import { ref } from "vue";
import { readCommentInfo, readCommentList } from "../../../api/detailAPI";
// 获取头部信息数据
export const useCommentHeader = () => {
  // 头部数据
  const commentHeader = ref(null);
  // 获取头部数据的方法(设置头部状态数据的方法)
  const setCommentHeader = (id) => {
    readCommentInfo(id).then(({ data: res, status: status }) => {
      if (status === 200) {
        // 把数据赋值给bannerList

        res.result.tags.unshift(
          {
            title: "全部评价",
            tagCount: res.result.evaluateCount,
          },
          {
            title: "有图",
            tagCount: res.result.hasPictureCount,
          }
        );

        commentHeader.value = res.result;
      }
    });
  };
  return { commentHeader, setCommentHeader };
};

// 设置头部标记的选中效果
export const useSelectTag = () => {
  const seletedTag = ref("全部评价");
  const setSelectedTag = (tagTitle) => {
    seletedTag.value = tagTitle;
  };
  return { seletedTag, setSelectedTag };
};

// 获取评论列表
export const useCommentList = () => {
  // 评论列表
  const commentList = ref(null);
  // 改变评论列表数据的方法
  const setCommentList = (id, params) => {
    readCommentList(id, params).then(({ data: res, status: status }) => {
      if (status === 200) {
        // 把获取到的数据赋值给commentList
        commentList.value = res.result;
      }
    });
  };

  return { commentList, setCommentList };
};

export const useReqParams = () => {
  // 查询参数状态数据
  const reqParams = ref({
    page: 1,
    hasPicture: null,
    tag: "",
    // praiseCount 最热
    // createTime 最新
    sortField: "",
  });
  // 改变查询参数状态数据的方法
  const setReqParams = (params) => {
    if (params.tag) {
      // 判断是否选择了头部标记
      if (params.tag === "有图") {
        reqParams.value.hasPicture = true;
      } else {
        reqParams.value.hasPicture = false;
        // 如果没有选择有图
        if (params.tag === "全部评价") {
          reqParams.value.tag = "";
        } else {
          reqParams.value.tag = params.tag;
        }
      }
    } else {
      // 如果没有选择头部标记，那么选择的是排序
      reqParams.value = { ...reqParams.value, ...params };
    }
    reqParams.value.page = 1;
  };

  return { reqParams, setReqParams };
};
