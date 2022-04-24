import { ref } from "vue";
import { readCommentInfo, readCommentList } from "@/api/detailAPI";

export const useCommentHeader = () => {
  const commentData = ref(null);
  const setCommentData = (id) => {
    readCommentInfo(id).then(({ data: res, status: status }) => {
      console.log(res, status);
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
  const setCommentList = (id) => {
    readCommentList(id).then(({ data: res, status: status }) => {
      console.log(res, status);
      if (status === 200) {
        commentList.value = res.result;
      }
    });
  };

  return { commentList, setCommentList };
};
