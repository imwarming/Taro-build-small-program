import Taro, { Component } from '@tarojs/taro'
import { View, Text, Swiper, SwiperItem  } from '@tarojs/components'
import { AtButton,AtTabBar } from 'taro-ui'
import './index.scss'

import { connect } from '@tarojs/redux'
import { add, minus, asyncAdd } from '../../actions/counter'

@connect(({ counter }) => ({
  counter
}), (dispatch) => ({
  add () {
    dispatch(add())
  },
  dec () {
    dispatch(minus())
  },
  asyncAdd () {
    dispatch(asyncAdd())
  }
}))
export default class Index extends Component {

  config = {
    navigationBarTitleText: '首页'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  handleClick(){
    if (Taro.getEnv() == Taro.ENV_TYPE.WEB) {
      Taro.navigateTo({
        url: '../my/my',
      })
    } else {
      Taro.switchTab({
        url: '../my/my',
      })
    }
  }

  render () {
    return (
      <View className='index'>
        {/*<AtButton type='primary' size='normal' onClick={this.handleClick}>去我的页面</AtButton>*/}
        {/*<AtButton type='primary' size='small'>按钮文案</AtButton>*/}
        {/*<View className='todo'>*/}
          {/*<Button className='add_btn' onClick={this.props.add}>+</Button>*/}
          {/*<Button className='dec_btn' onClick={this.props.dec}>-</Button>*/}
          {/*<Button className='dec_btn' onClick={this.props.asyncAdd}>async</Button>*/}
          {/*<View>{this.props.counter.num}</View>*/}
        {/*</View>*/}
        <Swiper
          className='banner'
          indicatorColor='#999'
          indicatorActiveColor='#333'
          vertical={false}
          circular
          indicatorDots
          autoplay>
          <SwiperItem>
            <View className='demo-text-1'>1</View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-2'>2</View>
          </SwiperItem>
          <SwiperItem>
            <View className='demo-text-3'>3</View>
          </SwiperItem>
        </Swiper>
      </View>
    )
  }
}
