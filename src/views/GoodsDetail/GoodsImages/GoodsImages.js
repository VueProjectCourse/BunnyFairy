import { ref } from "vue";

// 鼠标移入某张图片上图片被展示
export const useCurrent = () => {
  // 当前索引
  const current = ref(0);
  // 改变当前索引的方法
  const setCurrent = (index) => {
    current.value = index;
  };

  return { current, setCurrent };
};

// 镜片和大图的显示和隐藏
export const useToggle = () => {
  // 控制镜片和大图显示与隐藏的状态
  const isShow = ref(false);

  // 控制控制镜片和大图显示与隐藏的状态的方法
  const setIsShow = (flag) => {
    isShow.value = flag;
  };

  return { isShow, setIsShow };
};

// 镜片随着鼠标移动

export const useLayer = () => {
  const layerPosition = ref({
    left: 0,
    top: 0,
  });

  const setLayerPosition = (elementX, elementY) => {
    layerPosition.value = {
      left: elementX.value - 100,
      top: elementY.value - 100,
    };

    if (layerPosition.value.left < 0) {
      layerPosition.value.left = 0;
    } else if (layerPosition.value.left > 200) {
      layerPosition.value.left = 200;
    }

    if (layerPosition.value.top < 0) {
      layerPosition.value.top = 0;
    } else if (layerPosition.value.top > 200) {
      layerPosition.value.top = 200;
    }
  };

  return { layerPosition, setLayerPosition };
};

// 大图容器
export const useLarge = () => {
  const largePosition = ref({
    x: 0,
    y: 0,
  });

  const setLargePosition = (layerPosition) => {
    largePosition.value = {
      x: -layerPosition.value.left * 2,
      y: -layerPosition.value.top * 2,
    };
  };

  return { largePosition, setLargePosition };
};
