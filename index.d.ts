// @ts-ignore
import React, { Component } from 'react';

declare module 'antd-img-crop' {
  export interface ImgCropProps {
    width?: number;
    height?: number;
    useRatio?: boolean;
    resize?: boolean;
    resizeAndDrag?: boolean;
    modalTitle?: string;
    modalWidth?: number;
    beforeCrop?: () => boolean;
  }
  export class ImgCrop extends Component<ImgCropProps> {}
  export default ImgCrop;
}
