import { ref } from "vue";
import { readCommentInfo, readCommentList } from "@/api/detailAPI";

export const useCommentHeader = () => {
  const commentData = ref(null);
  const setCommentData = (id) => {
    readCommentInfo(id).then(({ data: res, status: status }) => {
      if (status === 200) {
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

        commentData.value = res.result;
      }
    });
  };

  return { commentData, setCommentData };
};

// 评价头部标记的选中效果
export const useSelectedTag = () => {
  const selectedTag = ref("全部评价");

  const setSelectedTag = (tagName) => {
    selectedTag.value = tagName;
  };

  return { selectedTag, setSelectedTag };
};

// 评论列表
export const useCommentList = () => {
  const commentList = ref(null);
  const setCommentList = (id, params) => {
    readCommentList(id, params).then(({ data: res, status: status }) => {
      if (status === 200) {
        commentList.value = res.result;
      }
    });
  };

  return { commentList, setCommentList };
};

// 筛选参数
export const useReqParams = () => {
  const reqParams = ref({
    page: 1,
    hasPicture: null,
    tag: "",
    // praiseCount 最热
    // createTime 最新
    sortField: "",
  });

  const setReqParams = (params) => {
    // 如果用户选择的是评价标签,单独处理
    if (params.tag) {
      // 如果用户选择的是有图
      if (params.tag === "有图") {
        // 将 hasPicture 设置为true
        reqParams.value.hasPicture = true;
      } else {
        // 用户选择的不是有图， 将hasPicture设置为false
        reqParams.value.hasPicture = false;
        // 如果用户选择的是全部
        if (reqParams.value.tag === "全部评价") {
          // 将tag设置为空字符串
          reqParams.value.tag = "";
        } else {
          // 其他标签，用户选什么设置什么
          reqParams.value.tag = params.tag;
        }
      }
    } else {
      // 排序选项
      reqParams.value = { ...reqParams.value, ...params };
    }

    // 当筛选条件发生变化后重置页码
    reqParams.value.page = 1;
  };

  return { reqParams, setReqParams };
};
