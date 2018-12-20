
<template>
    <div class="leftRight" :style="backgroundColor && {'background-color': backgroundColor}">
        <div class="contentView" :class="hasBottomLine && 'bottomLine'">
            <div class="imageDiv" v-if="leftIconUrl">
                <image :src="leftIconUrl" class="leftImage"/>
            </div>
            <div class="leftView">
                <div class="leftText">
                    {{leftText}}
                </div>
                <div v-if="leftSubText" class="leftText" :style="leftSubTextColor && {'color':leftSubTextColor}">
                    {{leftSubText}}
                </div>
                <!--标题右侧小图标-->
                <slot name="leftImage"></slot>
            </div>
            <switch class="switch" v-if="type == 'switch'" :checked="switchVaule" @change="switchChange"></switch>
            <!--输入框在右侧-->
            <div v-else-if="type == 'input'" class="rightView">
                <label>
                    <input :type="inputType" class="rightText"
                           style="text-align: right"
                           :placeholder="inputPlaceholder"
                           @input="inputChange"
                           v-model="inputText" @blur="inputTextFinish"/>
                </label>
                <!--右侧输入框文字-->
                <slot name="inputRightView"></slot>
                <div class="rightIcon" v-if="hasRightIcon">
                    <image src="/static/imgs/go.svg" style="width:22rpx;height: 22rpx;"/>
                </div>
            </div>
            <!--输入框在中间-->
            <div v-else-if="type=='moneyInput'" class="middleView">
                <div v-if="!noText" style="font-size: 22rpx;color: #333333;margin-top:4rpx;
                margin-right: 4rpx">¥</div>
                <label>
                    <input :type="inputType" class="middleText"
                           :placeholder="inputPlaceholder"
                           @input="inputChange"
                           v-model="inputText" @blur="inputTextFinish"/>
                </label>
            </div>
            <!--右侧单选标签-->
            <div v-else-if="type == 'label'" class="rightView">
                <div class="labelView">
                    <template v-for="(item,index) in labelData">
                        <div class="labelItem"
                             :key="index"
                             :class="index == labelSelect && 'labelItemSelect'"
                             @click="labelselectChange(index)">
                            <p class="labelText"
                               :class="index == labelSelect && 'labelTextSelect'"
                            >{{item}}</p>
                        </div>
                    </template>
                </div>
                <div class="rightIcon" v-if="hasRightIcon">
                    <image src="/static/imgs/go.svg" style="width:22rpx;height: 22rpx;"/>
                </div>
            </div>
            <div v-else class="rightView" @click="click">
                <p class="rightText"
                   :style="[rightTextColor && {'color':rightTextColor},rightTextFont && {'font-size':rightTextFont}]">
                    {{rightText}}</p>
                <!--尾部视图-->
                <slot name="footSlot"></slot>
                <div class="rightIcon" v-if="hasRightIcon">
                    <image src="/static/imgs/go.svg" style="width:22rpx;height: 22rpx;"/>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: [
            'type', // 默认文字 switch 开关 input 输入框（右侧）  label 标签（单选）moneyInput(中间输入框)
            'backgroundColor', // 背景颜色 默认白色
            'noRightIcon', // 不要右侧箭头
            'leftIconUrl', // 左侧图标
            'leftText', // 左侧文字
            'leftSubText', // 左侧文字说明
            'leftSubTextColor',// 左侧文字说明颜色
            'noBottomLine', // 底部线
            'isSwitchClose', // switch 初始化是关
            'rightTextColor', // 右侧文字颜色 别的颜色
            'rightText', // 右侧文字, 如果是输入框及输入框文字,
            'rightTextFont', // 右侧文字大小 默认13px
            'inputType', //输入框键盘类型
            'labelData', // 单选标签数据
            'inputPlaceholder', //输入框Placeholder
            'noText',// moneyInput没有¥  默认有
        ],
        data() {
            return {
                hasRightIcon: true, // 右侧箭头
                hasBottomLine: true, // 底部线
                switchVaule: true, // 开关状态
                inputText: '', // 输入框字
                labelSelect: 0, // 单选label选中的
            }
        },
        mounted() {
            this.init();
        },
        methods: {
            init() {
                if (this.noRightIcon) {
                    this.hasRightIcon = false
                }
                this.hasBottomLine = !this.noBottomLine;
                if (this.isSwitchClose) {
                    this.switchVaule = false
                }
                if (this.rightText) {
                    this.inputText = this.rightText;
                }
            },
            // 开关点击事件
            switchChange(vaule) {
                this.switchVaule = vaule.detail.value;
                console.log('开关值转换', vaule, this.switchVaule);
                this.$emit('switch-change', this.switchVaule);
            },
            // 行点击事件
            click() {
                this.$emit('click-back')
            },
            // 输入框焦点失去 输入完成 结果返回
            inputTextFinish() {
                console.log('输入框文字改变', this.inputText);
            },
            // 输入框值改变
            inputChange(){
                this.$emit('input-change', this.inputText);
            },
            // label 选择改变
            labelselectChange(index) {
                this.labelSelect = index;
                //通知给父组件
                console.log('00.', index);
                this.$emit('label-click-change', index)
            }
        },

    }
</script>
<style lang="less">
    .leftRight {
        width: 100%;
        display: flex;
        background-color: #fff;
        .contentView {
            display: flex;
            height: 100rpx;
            width: 720rpx;
            margin-left: 30rpx;
            flex-direction: row;
            align-items: center;
            .imageDiv {
                display: flex;
                align-items: center;
            }
            .leftImage {
                width: 34rpx;
                height: 34rpx;
                margin-right: 16rpx;
                background-color: #227de0;
            }
            .leftView {
                display: flex;
                flex-direction: row;
                align-items: center;
                .leftText {
                    color: #666;
                    font-size: 30rpx;
                    font-weight: 500;
                    margin-right: 10rpx;
                }
            }

            .switch {
                position: absolute;
                right: 32rpx;
                width: 100rpx;
                height: 60rpx;
            }
            .rightView {
                position: absolute;
                right: 30rpx;
                display: flex;
                flex-direction: row;
                align-items: center;
                .labelView {
                    display: flex;
                    flex-direction: row;
                    .labelItem {
                        width: auto;
                        height: 40rpx;
                        text-align: center;
                        border: 2rpx solid #eee;
                        border-radius: 20rpx;
                        margin-left: 20rpx;
                        .labelText {
                            line-height: 40rpx;
                            font-size: 24rpx;
                            color: #999999;
                            margin: 0 16rpx;
                        }
                        .labelTextSelect {
                            color: #ffffff;
                        }
                    }
                    .labelItemSelect {
                        background-color: #4E8CEE;
                    }
                }
                .rightText {
                    font-size: 26rpx;
                    color: #333333;
                }
                .rightIcon {
                    margin-left: 12rpx;
                    width: 22rpx;
                    height: 22rpx;
                    display: flex;
                    align-items: center;
                }
            }
            .middleView {
                position: absolute;
                left: 320rpx;
                display: flex;
                flex-direction: row;
                align-items: center;
                .middleText {
                    font-size: 26rpx;
                    color: #333333;
                }
            }
        }
        .bottomLine {
            border-bottom: 2rpx solid #eee;
        }
    }
</style>

