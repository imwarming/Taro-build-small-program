import Taro, { Component } from '@tarojs/taro'
import { View, Text } from '@tarojs/components'
import { AtButton,AtTabBar } from 'taro-ui'
import './my.scss'

export default class My extends Component {

  config = {
    navigationBarTitleText: '我的'
  }

  componentWillMount () { }

  componentDidMount () { }

  componentWillUnmount () { }

  componentDidShow () { }

  componentDidHide () { }

  render () {
    return (
      <View className='my'>
        <View className='my_header'>
          <View className='set'>留空处理</View>
          <image src="http://qtyc-1256019144.picgz.myqcloud.com/image/20190530/1559203318282159.jpg"  style="width:75px;height:75px;border-radius:75px"></image>
          <View className='user_name'>美美家</View>
          <View className='user_fans'>
            <text>关注数:6</text>
            |
            <text>粉丝数:6</text>
          </View>
        </View>
        <View className="my_container">
          <View className="order_info">
            <View className="order_header">
              <Text>我的订单</Text>
              <Text className="watch_all_order">查看全部</Text>
            </View>
            <View className="order_details">
              <View>
                <image style='width:21px;height:21px;' src="http://qtyc-1256019144.picgz.myqcloud.com/image/20190530/1559203318282159.jpg"></image>
                <Text>待付款</Text>
              </View>
              <View>
                <image style='width:21px;height:21px;' src="http://qtyc-1256019144.picgz.myqcloud.com/image/20190530/1559203318282159.jpg"></image>
                <Text>待付款</Text>
              </View>
              <View>
                <image style='width:21px;height:21px;' src="http://qtyc-1256019144.picgz.myqcloud.com/image/20190530/1559203318282159.jpg"></image>
                <Text>待付款</Text>
              </View>
              <View>
                <image style='width:21px;height:21px;' src="http://qtyc-1256019144.picgz.myqcloud.com/image/20190530/1559203318282159.jpg"></image>
                <Text>待付款</Text>
              </View>
              <View>
                <image style='width:21px;height:21px;' src="http://qtyc-1256019144.picgz.myqcloud.com/image/20190530/1559203318282159.jpg"></image>
                <Text>待付款</Text>
              </View>
            </View>

          </View>
        </View>
      </View>
    )
  }
}

