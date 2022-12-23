import Eventemitter3 from 'eventemitter3'

export const eventCenter = new Eventemitter3()

/** event事件名称 */
export const EventName = {
  /** 打印配置 */
  printOptions: 'printOptions'
}