import React, {Component} from 'react';
import {ScrollView, Text, View, TouchableOpacity} from 'react-native';
import {styles} from './styles';
import * as Animatable from 'react-native-animatable';
import Collapsible from 'react-native-collapsible';
import Accordion from 'react-native-collapsible/Accordion';
import {AssetImage} from '../../assets';

const CONTENTHELP =
  'Học cùng lúc 2 chương trình là học thêm chương trình đào tạo của ngành thứ 2, khi đang còn học chương trình đào tạo ngành thứ nhất để có thêm được bằng tốt nghiệp của ngành thứ hai.';
const CONTENT = [
  {
    title: 'Học cùng lúc 2 chương trình là gì?',
    content: CONTENTHELP,
  },
  {
    title: 'Học cùng lúc 2 chương trình là gì?',
    content: CONTENTHELP,
  },
  {
    title: 'Học cùng lúc 2 chương trình là gì?',
    content: CONTENTHELP,
  },
  {
    title: 'Học cùng lúc 2 chương trình là gì?',
    content: CONTENTHELP,
  },
  {
    title: 'Học cùng lúc 2 chương trình là gì?',
    content: CONTENTHELP,
  },
  {
    title: 'Học cùng lúc 2 chương trình là gì?',
    content: CONTENTHELP,
  },
  {
    title: 'Học cùng lúc 2 chương trình là gì?',
    content: CONTENTHELP,
  },
  {
    title: 'Học cùng lúc 2 chương trình là gì?',
    content: CONTENTHELP,
  },
  {
    title: 'Học cùng lúc 2 chương trình là gì?',
    content: CONTENTHELP,
  },
];

export default class Accordions extends Component {
  state = {
    multipleSelect: false,
    collapsed: true,
    activeSections: [],
  };
  toggleExpanded = () => {
    this.setState({collapsed: !this.state.collapsed});
  };
  setSections = sections => {
    this.setState({
      activeSections: sections.includes(undefined) ? [] : sections,
    });
  };
  renderHeader = (section, _, isActive) => {
    return (
      <Animatable.View
        duration={400}
        style={[styles.header, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <View style={{flex: 1}}>
          <Text style={styles.headerText}>{section.title}</Text>
        </View>
        <Animatable.Image
          style={{height: 20, width: 20}}
          source={isActive === false ? AssetImage.Plus : AssetImage.Minus}
        />
      </Animatable.View>
    );
  };
  renderContent(section, _, isActive) {
    return (
      <Animatable.View
        duration={400}
        style={[styles.content, isActive ? styles.active : styles.inactive]}
        transition="backgroundColor">
        <Animatable.Text animation={isActive ? 'bounceIn' : undefined}>
          {section.content}
        </Animatable.Text>
      </Animatable.View>
    );
  }
  render() {
    const {multipleSelect, activeSections} = this.state;
    return (
      <View style={styles.helpContainer}>
        <ScrollView>
          <Accordion
            activeSections={activeSections}
            sections={CONTENT}
            touchableComponent={TouchableOpacity}
            expandMultiple={multipleSelect}
            renderHeader={this.renderHeader}
            renderContent={this.renderContent}
            duration={400}
            onChange={this.setSections}
            renderAsFlatList={false}
          />
        </ScrollView>
      </View>
    );
  }
}
