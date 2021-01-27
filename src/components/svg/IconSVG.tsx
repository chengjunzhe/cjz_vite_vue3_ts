//SVG图标组件

import { defineComponent } from 'vue'
import {
  MenuUnfoldOutlined,
  DesktopOutlined,
  FunnelPlotOutlined,
  FileOutlined,
  HeartOutlined
} from '@ant-design/icons-vue'

export default defineComponent({
  name: 'SVG',
  props: {
    svgName: {
      type: String,
      require: true
    }
  },
  setup(props: any): object {
    let svgTag = {}
    switch (props.svgName) {
      case 'MenuUnfoldOutlined':
        svgTag = <MenuUnfoldOutlined />
        break
      case 'DesktopOutlined':
        svgTag = <DesktopOutlined />
        break
      case 'HeartOutlined':
        svgTag = <HeartOutlined />
        break
      case 'FunnelPlotOutlined':
        svgTag = <FunnelPlotOutlined />
        break
      default:
        svgTag = <FileOutlined />
        break
    }
    return (): object => svgTag
  },
  components: {
    MenuUnfoldOutlined,
    DesktopOutlined,
    FileOutlined,
    HeartOutlined,
    FunnelPlotOutlined
  }
})
